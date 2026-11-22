import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CurriculumContents } from "@/components/curriculum-contents";
import { Afternoon } from "@/components/home/afternoon";
import { PageOpener, SectionTitle } from "@/components/page-opener";
import { Button } from "@/components/ui/button";
import { principles, weeklySessions } from "@/content/program";
import { photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "What kids do at KeenKids: hands-on building, science lab, Scratch coding, public speaking and free exploration, with a new build theme every month. Grades 1–5 in Milpitas.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageOpener
        title="The program"
        variant="photo"
        photo={{
          src: photo("boats-strip"),
          alt: "Three students hold out the boats they shaped from aluminum foil, each with a foil sail.",
          w: 1080,
          h: 360,
          caption: "Foil boat engineering: folded, shaped and tested by hand.",
        }}
      >
        <p>
          Every program mixes building, science, coding, public speaking and free exploration, so kids see how it
          all connects. Here&rsquo;s what that looks like in a week, and across a year.
        </p>
      </PageOpener>

      <Afternoon linkToProgram={false} />

      <section aria-labelledby="sessions-title" className="paper section-y">
        <div className="shell grid gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle id="sessions-title">The weekly sessions</SectionTitle>
            <p className="mt-5 max-w-[34ch] text-ink-soft">
              Each week covers a mix of these sessions. The schedule varies by school, so ask yours which falls on
              which day.
            </p>
          </div>
          <dl className="lg:col-span-7 lg:col-start-6">
            {weeklySessions.map((s) => (
              <div key={s.name} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b py-4 first:border-t">
                <dt className="font-serif text-[1.3125rem] text-ink">{s.name}</dt>
                <span aria-hidden className="leader hidden sm:block" />
                <dd className="text-ink-soft">{s.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="curriculum" className="section-y">
        <div className="shell grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle id="curriculum">A new theme every month</SectionTitle>
            <div className="mt-6 max-w-[40ch] space-y-4 text-ink-soft">
              <p>
                From August to May, each month has its own theme. The monthly build projects follow it, so a
                child who joins in September spends the month on air and flight.
              </p>
              <p>
                At the daily programs, parents can follow the weekly curriculum and their child&rsquo;s progress in
                the KeenKids Parent Portal.
              </p>
            </div>
          </div>
          <CurriculumContents className="lg:col-span-6 lg:col-start-7" />
        </div>
      </section>

      <section aria-labelledby="why-title" className="on-cloth cloth section-y">
        <div className="shell">
          <h2 id="why-title" className="t-title max-w-[18ch] text-paper">
            Why families choose KeenKids
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-paper/20 pt-5">
                <h3 className="t-subheading text-paper">{p.title}</h3>
                <p className="mt-3 text-paper/75">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild variant="cloth" size="lg">
              <Link href="/schools">
                Find your school
                <ArrowRight data-icon="arrow" aria-hidden />
              </Link>
            </Button>
            <Link href="/pricing" className="link-ink inline-flex min-h-11 items-center font-semibold text-paper">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
