import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { PageOpener } from "@/components/page-opener";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { faqJsonLd, JsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the questions parents ask about KeenKids: pickup and drop-off, grades, schedules, what to bring, missed days, group sizes, sibling discounts and the cancellation policy.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageOpener title="Questions parents ask">
        <p>
          Everything families usually want to know before the first day. Still wondering about something?{" "}
          <Link href="/contact" className="link-ink text-evergreen">
            Send us a message
          </Link>
          .
        </p>
      </PageOpener>
      <section aria-label="All questions" className="pb-[var(--section-y)]">
        <div className="shell grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <nav aria-label="Questions on this page" className="hidden lg:col-span-4 lg:block">
            <ol className="sticky top-[calc(var(--header-h)+2rem)] space-y-1 border-l border-rule-strong/70 pl-5">
              {faqs.map((f) => (
                <li key={f.id}>
                  <a href={`#${f.id}`} className="block py-1 text-[0.9375rem] leading-snug text-ink-soft transition-colors hover:text-evergreen">
                    {f.question}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="lg:col-span-8">
            <FaqList items={faqs} headingLevel="h2" />
            <p className="mt-10 text-ink-soft">
              Didn&rsquo;t find it? Email{" "}
              <a className="link-ink text-evergreen" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              and we&rsquo;re happy to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
