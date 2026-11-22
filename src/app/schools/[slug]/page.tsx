import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSchool, schools, VERIFIED_ON } from "@/content/schools";
import { site } from "@/content/site";

// Every real school is prerendered by generateStaticParams, so navigations to them
// are static. Unknown slugs render on request and call notFound(), which keeps a
// genuine 404 status; that one blocking case is accepted on purpose.
export const instant = false;

export function generateStaticParams() {
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/schools/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) return {};
  return {
    title: `${school.name}`,
    description: `KeenKids at ${school.name}, Milpitas: ${school.program.toLowerCase()}. ${school.summary}`,
    alternates: { canonical: `/schools/${school.slug}` },
  };
}

export default async function SchoolPage({ params }: PageProps<"/schools/[slug]">) {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) notFound();
  const others = schools.filter((s) => s.slug !== school.slug);

  return (
    <article>
      <header className="shell pt-[clamp(3rem,2rem+4vw,6rem)] pb-12">
        <Link href="/schools" className="link-ink inline-flex min-h-11 items-center gap-2 text-ink-soft">
          <ArrowLeft aria-hidden className="size-4" />
          All schools
        </Link>
        <h1 className="t-display mt-6 max-w-[14ch] text-ink">{school.name}</h1>
        <p className="mt-4 font-serif text-[1.375rem] text-evergreen-soft italic">
          {school.program} · {school.status}
        </p>
        <p className="t-lede mt-6 max-w-[48ch] text-ink-soft">{school.summary}</p>
      </header>

      <div className="shell pb-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="paper rounded-[6px] p-6 shadow-card ring-1 ring-ink/5 sm:p-10 lg:col-span-8">
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {school.facts.map((f) => (
                <div key={f.label} className="border-t pt-4">
                  <dt className="t-label text-ink-faint">{f.label}</dt>
                  <dd className="mt-1.5 text-[1.0625rem] leading-snug text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="t-subheading mt-12 text-ink">Cost</h2>
            <ul className="tabular mt-3 space-y-2 text-ink">
              {school.pricing.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.65em] size-1 shrink-0 rounded-full bg-evergreen-soft/70" />
                  {p}
                </li>
              ))}
            </ul>

            <h2 className="t-subheading mt-10 text-ink">Good to know</h2>
            <ul className="mt-3 max-w-[60ch] space-y-3 text-ink-soft">
              {school.notes.map((n) => (
                <li key={n} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.65em] size-1 shrink-0 rounded-full bg-evergreen-soft/70" />
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <div className="on-cloth cloth rounded-[6px] p-6 sm:p-8 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <h2 className="t-heading text-paper">
                {school.form.kind === "enrollment" ? "Ready to enroll?" : "Interested?"}
              </h2>
              <p className="mt-3 text-paper/75">
                {school.form.kind === "enrollment"
                  ? "Enrollment happens through the school's Google Form."
                  : "Start with the school's Google Form. KeenKids follows up with next steps."}
              </p>
              <Button asChild variant="cloth" size="lg" className="mt-6 h-auto min-h-14 w-full py-3 whitespace-normal">
                <a href={school.form.url} target="_blank" rel="noopener noreferrer">
                  {school.form.cta}
                  <ArrowUpRight data-icon="arrow" aria-hidden />
                  <span className="sr-only">(opens Google Forms in a new tab)</span>
                </a>
              </Button>
              <p className="mt-4 text-[0.8125rem] text-paper/60">
                Form: &ldquo;{school.form.title}&rdquo;. Details checked {VERIFIED_ON}.
              </p>
              <div className="mt-6 border-t border-paper/15 pt-5 text-[0.9375rem] text-paper/80">
                Questions first?{" "}
                <Link href="/contact" className="link-ink text-paper">
                  Ask us
                </Link>{" "}
                or write to{" "}
                <a href={`mailto:${site.email}`} className="link-ink text-paper">
                  {site.email}
                </a>
                .
              </div>
            </div>
          </aside>
        </div>

        <nav aria-label="Other schools" className="mt-16 border-t pt-8">
          <h2 className="t-label text-ink-faint">Other schools</h2>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/schools/${s.slug}`}
                  className="group inline-flex min-h-11 items-center gap-2 font-serif text-[1.25rem] text-ink transition-colors hover:text-evergreen"
                >
                  {s.name}
                  <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
