import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageOpener, SectionTitle } from "@/components/page-opener";
import { activities } from "@/content/program";
import { schools } from "@/content/schools";

export const metadata: Metadata = {
  title: "Bring KeenKids to your school",
  description:
    "Principals, PTAs, teachers and parents: tell KeenKids about your school. Hands-on STEAM after-school programs run right on campus, for grades 1–5.",
  alternates: { canonical: "/bring-to-your-school" },
};

export default function BringToYourSchoolPage() {
  return (
    <>
      <PageOpener title="Bring KeenKids to your school">
        <p>
          Principals, PTA members, teachers and parents: if you&rsquo;d like KeenKids on your campus, we&rsquo;d love
          to hear about your school.
        </p>
      </PageOpener>

      <section aria-labelledby="how-title" className="pb-[var(--section-y)]">
        <div className="shell grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle id="how-title" size="heading">
              What a program looks like
            </SectionTitle>
            <div className="mt-5 space-y-4 text-ink-soft">
              <p>
                KeenKids runs on campus, right after the school day, for grades 1–5. Programs range from a daily
                after-school program to shorter series, like a four-session build program or a four-week coding lab.
              </p>
              <p>Every program draws on the same five strands:</p>
            </div>
            <ul className="mt-5 border-t">
              {activities.map((a) => (
                <li key={a.id} className="border-b py-3 font-serif text-[1.1875rem] text-ink">
                  {a.lead}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-soft">
              See how it runs today at{" "}
              {schools.map((s, i) => (
                <span key={s.slug}>
                  <Link href={`/schools/${s.slug}`} className="link-ink text-evergreen">
                    {s.shortName}
                  </Link>
                  {i < schools.length - 2 ? ", " : i === schools.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
          </div>

          <div className="paper rounded-[6px] p-6 shadow-card ring-1 ring-ink/5 sm:p-10 lg:col-span-7">
            <h2 className="t-heading text-ink">Tell us about your school</h2>
            <p className="mt-2 mb-8 text-ink-soft">
              A few lines is plenty: the school, your connection to it, and what you have in mind.
            </p>
            <ContactForm variant="hosting" />
          </div>
        </div>
      </section>
    </>
  );
}
