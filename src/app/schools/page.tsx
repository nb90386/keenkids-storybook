import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SchoolFinder } from "@/components/school-finder";
import { schools, VERIFIED_ON } from "@/content/schools";

export const metadata: Metadata = {
  title: "Schools",
  description:
    "KeenKids runs after-school STEAM programs on campus at Mabel Mattos, John Sinnott, Rose and Curtner elementary schools in Milpitas. Find yours and open the right form.",
  alternates: { canonical: "/schools" },
};

export default function SchoolsPage() {
  return (
    <>
      <div className="pt-[clamp(3rem,2rem+4vw,6rem)]">
        <SchoolFinder variant="page" headingLevel="h1" />
      </div>

      <section aria-labelledby="glance-title" className="section-y">
        <div className="shell">
          <h2 id="glance-title" className="t-heading text-ink">
            All four at a glance
          </h2>
          <p className="t-small mt-2 text-ink-soft">
            Details come from each school&rsquo;s own form, checked {VERIFIED_ON}.
          </p>
          <ul className="mt-8 space-y-3 md:hidden">
            {schools.map((s) => (
              <li key={s.slug} className="rounded-[6px] bg-paper p-5 shadow-card ring-1 ring-ink/5">
                <Link href={`/schools/${s.slug}`} className="link-ink font-serif text-[1.25rem] font-medium text-ink">
                  {s.name}
                </Link>
                <p className="mt-1 text-ink-soft">
                  {s.program} · {s.status}
                </p>
                <a
                  href={s.form.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-ink mt-2 inline-flex min-h-11 items-center gap-1 font-medium text-evergreen"
                >
                  {s.form.kind === "enrollment" ? "Enrollment form" : "Interest form"}
                  <ArrowUpRight aria-hidden className="size-4" />
                  <span className="sr-only">for {s.name} (opens Google Forms in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="relative mt-8 hidden overflow-x-auto rounded-[6px] bg-paper shadow-card ring-1 ring-ink/5 md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b bg-parchment/60">
                  <th scope="col" className="t-label px-5 py-3 text-ink-faint">School</th>
                  <th scope="col" className="t-label px-5 py-3 text-ink-faint">Program</th>
                  <th scope="col" className="t-label px-5 py-3 text-ink-faint">Status</th>
                  <th scope="col" className="t-label px-5 py-3 text-ink-faint">
                    <span className="sr-only">Links</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {schools.map((s) => (
                  <tr key={s.slug} className="border-b last:border-b-0">
                    <th scope="row" className="px-5 py-4 align-top font-serif text-[1.125rem] font-medium text-ink">
                      <Link href={`/schools/${s.slug}`} className="link-ink">
                        {s.name}
                      </Link>
                    </th>
                    <td className="px-5 py-4 align-top text-ink-soft">{s.program}</td>
                    <td className="px-5 py-4 align-top text-ink-soft">{s.status}</td>
                    <td className="px-5 py-4 text-right align-top whitespace-nowrap">
                      <a
                        href={s.form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-ink inline-flex min-h-11 items-center gap-1 font-medium text-evergreen"
                      >
                        {s.form.kind === "enrollment" ? "Enrollment form" : "Interest form"}
                        <ArrowUpRight aria-hidden className="size-4" />
                        <span className="sr-only">for {s.name} (opens Google Forms in a new tab)</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 max-w-[60ch] text-ink-soft">
            KeenKids runs on these campuses after school. If you&rsquo;d like a program at another school,{" "}
            <Link href="/bring-to-your-school" className="link-ink inline-flex items-center gap-1 font-medium text-evergreen">
              tell us about it
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
