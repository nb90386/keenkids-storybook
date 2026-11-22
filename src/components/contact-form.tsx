"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, Copy, Mail } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mailto, site } from "@/content/site";
import { cn } from "@/lib/utils";

export const topics = [
  "Mabel Mattos after-school program",
  "John Sinnott after-school program",
  "Rose coding lab",
  "Curtner STEAM program",
  "Bring KeenKids to my school",
  "Pricing or payments",
  "Something else",
] as const;

const base = z.object({
  name: z.string().trim().min(1, "Please tell us your name."),
  topic: z.enum(topics, { error: "Choose what your message is about." }),
  message: z.string().trim().min(10, "A sentence or two helps us answer properly."),
});

const hosting = base.extend({
  role: z.string().trim().min(1, "Let us know how you're connected to the school."),
  school: z.string().trim().min(2, "Which school are you thinking of?"),
});

type Errors = Partial<Record<"name" | "topic" | "message" | "role" | "school", string>>;

/**
 * Composes an email in the visitor's own mail app. Nothing is sent or stored by
 * this site, so the confirmation says exactly that. See docs/CONVERSION_AUDIT.md
 * for wiring a server-side form before launch.
 */
export function ContactForm({ variant = "general" }: { variant?: "general" | "hosting" }) {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [composed, setComposed] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const isHosting = variant === "hosting";

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const schema = isHosting ? hosting : base;
    const parsed = schema.safeParse(isHosting ? { ...data, topic: "Bring KeenKids to my school" } : data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    setErrors({});
    const v = parsed.data as z.infer<typeof hosting>;
    const subject = isHosting ? `Bringing KeenKids to ${v.school}` : `${v.topic} (from ${v.name})`;
    const lines = [
      `Hi KeenKids team,`,
      ``,
      v.message,
      ``,
      ...(isHosting ? [`School: ${v.school}`, `My role: ${v.role}`] : [`About: ${v.topic}`]),
      ``,
      `Thanks,`,
      v.name,
    ];
    const body = lines.join("\n");
    setComposed({ subject, body });
    window.location.href = mailto(subject, body);
  };

  const copy = async () => {
    if (!composed) return;
    try {
      await navigator.clipboard.writeText(`To: ${site.email}\nSubject: ${composed.subject}\n\n${composed.body}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const field = (name: keyof Errors) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  return (
    <div>
      <form noValidate onSubmit={onSubmit} className="space-y-6">
        <Field label="Your name" htmlFor={`${id}-name`} error={errors.name} errorId={`${id}-name-error`}>
          <Input {...field("name")} autoComplete="name" />
        </Field>

        {isHosting ? (
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="School" htmlFor={`${id}-school`} error={errors.school} errorId={`${id}-school-error`}>
              <Input {...field("school")} autoComplete="organization" />
            </Field>
            <Field
              label="You are a…"
              htmlFor={`${id}-role`}
              error={errors.role}
              errorId={`${id}-role-error`}
              hint="Parent, teacher, PTA member, principal…"
            >
              <Input {...field("role")} />
            </Field>
          </div>
        ) : (
          <Field label="What's it about?" htmlFor={`${id}-topic`} error={errors.topic} errorId={`${id}-topic-error`}>
            <div className="relative">
              <select
                {...field("topic")}
                defaultValue=""
                className="h-12 w-full appearance-none rounded-[6px] border border-input bg-paper px-3.5 pr-10 text-[1rem] text-ink transition-[border-color,box-shadow] outline-none hover:border-ink/40 focus-visible:border-evergreen focus-visible:ring-3 focus-visible:ring-evergreen/15 aria-invalid:border-destructive"
              >
                <option value="" disabled>
                  Choose one
                </option>
                {topics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <svg aria-hidden viewBox="0 0 16 16" className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink-soft">
                <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Field>
        )}

        <Field
          label={isHosting ? "Tell us a little about it" : "Your message"}
          htmlFor={`${id}-message`}
          error={errors.message}
          errorId={`${id}-message-error`}
          hint="Please don't include your child's full name or anything private."
        >
          <Textarea {...field("message")} rows={6} />
        </Field>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
          <Button type="submit" size="lg">
            <Mail aria-hidden />
            Write the email
            <ArrowRight data-icon="arrow" aria-hidden />
          </Button>
          <p className="t-small max-w-[34ch] text-ink-soft">
            Opens your email app with the message ready. You press send.
          </p>
        </div>
      </form>

      <div aria-live="polite">
        {composed ? (
          <div className="mt-8 rounded-[6px] border border-sage-deep bg-sage/50 p-5">
            <p className="font-semibold text-evergreen-deep">Your email app should have opened with your message.</p>
            <p className="mt-1.5 text-ink-soft">
              It isn&rsquo;t sent until you press send there. If nothing opened, copy the message and email{" "}
              <a className="link-ink text-evergreen" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              yourself.
            </p>
            <Button type="button" variant="outline" size="sm" className="mt-4" onClick={copy}>
              {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
              {copied ? "Copied" : "Copy the message"}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  errorId,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  errorId: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="mb-2 block text-[0.9375rem] font-semibold text-ink">
        {label}
      </Label>
      {children}
      {error ? (
        <p id={errorId} className={cn("mt-2 text-[0.9375rem] font-medium text-destructive")}>
          {error}
        </p>
      ) : hint ? (
        <p className="mt-2 text-[0.875rem] text-ink-faint">{hint}</p>
      ) : null}
    </div>
  );
}
