"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { schools, type School } from "@/content/schools";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "home" | "page";
  headingLevel?: "h1" | "h2";
};

/**
 * Scene 2 — Find your school. A compact four-way choice (WAI-ARIA radiogroup: arrows,
 * Home, End); choosing opens a fixed-height detail card with only the essentials and
 * the school's own form. Deep links: #school-<slug>.
 */
export function SchoolFinder({ variant = "home", headingLevel: Heading = "h2" }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const radios = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  useEffect(() => {
    const fromHash = () => {
      const slug = window.location.hash.replace("#school-", "");
      if (schools.some((s) => s.slug === slug)) setActive(slug);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const choose = useCallback((index: number, focus = false) => {
    const i = (index + schools.length) % schools.length;
    setActive(schools[i].slug);
    track("school_selected", { school: schools[i].slug });
    if (focus) radios.current[i]?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const map: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: schools.length - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      choose(map[e.key], true);
    }
  };

  const index = schools.findIndex((s) => s.slug === active);
  const school = index >= 0 ? schools[index] : null;
  const focusable = index >= 0 ? index : 0;

  return (
    <section
      id="find-your-school"
      aria-labelledby={`${baseId}-title`}
      className={cn("relative z-10 scroll-mt-[calc(var(--header-h)+1rem)]", variant === "home" && "-mt-16 md:-mt-20")}
    >
      <div className="shell">
        <div className="sheet rounded-[10px] bg-paper p-5 sm:p-7 lg:p-9">
          <div className={cn("grid gap-x-10 gap-y-6", variant === "home" && "lg:grid-cols-12 lg:items-center")}>
            <div className={cn(variant === "home" && "lg:col-span-4")}>
              <Heading id={`${baseId}-title`} className={variant === "page" ? "t-chapter text-ink" : "t-heading text-ink"}>
                Where does your child go to school?
              </Heading>
              <p className="mt-2 text-[0.9375rem] text-ink-soft">Choose one to see days, times and the right form.</p>
            </div>

            <div
              role="radiogroup"
              aria-labelledby={`${baseId}-title`}
              className={cn("picker relative grid grid-cols-2 gap-1 rounded-[8px] bg-parchment-deep/70 p-1 md:grid-cols-4", variant === "home" && "lg:col-span-8")}
              style={{ "--i": Math.max(index, 0) } as React.CSSProperties}
              data-chosen={school ? "" : undefined}
            >
              <span aria-hidden className="picker-thumb" />
              {schools.map((s, i) => {
                const checked = s.slug === active;
                return (
                  <button
                    key={s.slug}
                    ref={(el) => {
                      radios.current[i] = el;
                    }}
                    id={`school-${s.slug}`}
                    type="button"
                    role="radio"
                    aria-checked={checked}
                    tabIndex={i === focusable ? 0 : -1}
                    onClick={() => choose(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={cn(
                      "relative z-10 flex min-h-[4.25rem] flex-col items-start justify-center rounded-[6px] px-4 py-2.5 text-left transition-colors duration-200",
                      "scroll-mt-[calc(var(--header-h)+8rem)]",
                      checked ? "text-paper" : "text-ink hover:bg-paper/70",
                    )}
                  >
                    <span className="font-serif text-[1.1875rem] leading-tight font-semibold">{s.shortName}</span>
                    <span className={cn("mt-0.5 text-[0.8125rem] leading-snug", checked ? "text-paper/80" : "text-ink-faint")}>
                      {s.status}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Opens once; afterwards its height stays put while schools swap inside it. */}
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-smooth-out)] motion-reduce:transition-none",
              school ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="min-h-0 overflow-hidden">
              <div aria-live="polite" className="mt-6 min-h-[26.5rem] border-t pt-6 sm:min-h-[19.5rem] lg:min-h-[15rem] xl:min-h-[10.5rem]">
                {school ? (
                  <div key={school.slug} className="panel-swap">
                    <SchoolDetail school={school} headingLevel={Heading === "h1" ? "h2" : "h3"} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[0.9375rem] text-ink-soft">
          Your school isn&rsquo;t listed?{" "}
          <Link href="/bring-to-your-school" className="link-ink font-medium text-evergreen">
            Ask about bringing KeenKids there
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function SchoolDetail({ school, headingLevel: H }: { school: School; headingLevel: "h2" | "h3" }) {
  const facts = [
    { label: "When", value: school.glance.when },
    { label: "Where", value: school.glance.where },
    { label: "Starts", value: school.glance.start },
  ];
  return (
    <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-4">
        <H className="t-heading text-ink">{school.name}</H>
        <p className="mt-1 font-serif text-[1.0625rem] text-evergreen-soft italic">{school.program}</p>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-3 lg:col-span-5">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="t-label text-ink-faint">{f.label}</dt>
            <dd className="mt-1 leading-snug text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col items-start gap-2 lg:col-span-3 lg:items-stretch">
        <Button asChild size="lg" className="h-auto min-h-13 w-full py-3 text-center whitespace-normal sm:w-auto lg:w-full">
          <a
            href={school.form.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("form_opened", { school: school.slug, kind: school.form.kind })}
          >
            {school.form.cta}
            <ArrowUpRight data-icon="arrow" aria-hidden />
            <span className="sr-only">(opens Google Forms in a new tab)</span>
          </a>
        </Button>
        <Link
          href={`/schools/${school.slug}`}
          className="group inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-evergreen lg:justify-center"
        >
          <span className="link-ink">Prices and full details</span>
          <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
        </Link>
      </div>
    </div>
  );
}
