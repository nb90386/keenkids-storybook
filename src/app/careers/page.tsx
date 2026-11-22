import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageOpener } from "@/components/page-opener";
import { Button } from "@/components/ui/button";
import { applyMailto, roles } from "@/content/people";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "KeenKids is hiring part-time STEAM instructors, public speaking coaches and coding instructors for after-school programs in Milpitas, California.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageOpener title="Join the KeenKids team" variant="cloth">
        <p>
          We&rsquo;re looking for patient, creative people who love working with kids and making STEAM exciting.
          Part-time, after-school hours, in Milpitas.
        </p>
      </PageOpener>

      <section aria-labelledby="roles-title" className="section-y">
        <div className="shell grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="roles-title" className="sr-only">
              Open roles
            </h2>
            <ul className="border-t">
              {roles.map((r) => (
                <li key={r.title} className="grid gap-2 border-b py-7 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <h3 className="t-subheading text-ink">{r.title}</h3>
                  <p className="text-ink-soft">{r.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-serif text-ink-faint italic">Part-time · After-school hours · Milpitas, CA</p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="on-cloth cloth rounded-[6px] p-6 sm:p-8">
              <h2 className="t-heading text-paper">How to apply</h2>
              <p className="mt-3 text-paper/75">
                Send a short email with your name, the role you&rsquo;re interested in and a little about you.
              </p>
              <Button asChild variant="cloth" size="lg" className="mt-6 w-full">
                <a href={applyMailto}>
                  <Mail aria-hidden />
                  Apply by email
                </a>
              </Button>
              <p className="mt-4 text-[0.875rem] text-paper/65">Goes to {site.email}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
