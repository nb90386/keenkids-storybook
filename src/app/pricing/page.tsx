import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { PageOpener, SectionTitle } from "@/components/page-opener";
import { TuitionLedger } from "@/components/tuition-ledger";
import { Button } from "@/components/ui/button";
import { faqs } from "@/content/faqs";
import { pricingNotes } from "@/content/pricing";
import { getSchool } from "@/content/schools";
import { paymentsLive } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "KeenKids tuition: $220 a month for one day a week, $450 for three, $699 for five, plus a $100 materials fee. Short programs at Rose and Curtner, and the full cancellation policy.",
  alternates: { canonical: "/pricing" },
};

const policyIds = ["cancellation", "missed", "calendar", "sibling"];

export default function PricingPage() {
  const rose = getSchool("rose")!;
  const curtner = getSchool("curtner")!;
  const policies = policyIds.map((id) => faqs.find((f) => f.id === id)!).filter(Boolean);

  return (
    <>
      <PageOpener title="Pricing">
        <p>
          Simple monthly plans for the daily after-school programs, and a flat price for the shorter programs.
          The policies are all here too, in plain words.
        </p>
      </PageOpener>

      <section aria-labelledby="monthly-title" className="pb-[var(--section-y)]">
        <div className="shell">
          <SectionTitle id="monthly-title" size="heading">
            Monthly tuition at Mattos and Sinnott
          </SectionTitle>
          <p className="mt-3 max-w-[60ch] text-ink-soft">
            Choose how many afternoons a week. Check your school&rsquo;s days and times before you sign up.
          </p>
          <div className="mt-8">
            <TuitionLedger />
          </div>
          <ul className="mt-8 grid max-w-[68rem] gap-x-10 gap-y-3 text-ink-soft sm:grid-cols-2">
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-[0.65em] size-1 shrink-0 rounded-full bg-evergreen-soft/70" />
              <span>
                <strong className="font-semibold text-ink">{pricingNotes.materialsFee}</strong>, as{" "}
                {pricingNotes.materialsFeeSource}.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-[0.65em] size-1 shrink-0 rounded-full bg-evergreen-soft/70" />
              <span>{pricingNotes.fourDay}</span>
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-[0.65em] size-1 shrink-0 rounded-full bg-evergreen-soft/70" />
              <span>Per-session figures are approximate, as published on the current KeenKids site.</span>
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-[0.65em] size-1 shrink-0 rounded-full bg-evergreen-soft/70" />
              <span>
                {pricingNotes.sibling}{" "}
                <Link href="/contact" className="link-ink text-evergreen">
                  Ask for current details
                </Link>
              </span>
            </li>
          </ul>
          {!paymentsLive ? (
            <p className="mt-8 max-w-[62ch] rounded-[6px] border border-dashed border-rule-strong px-4 py-3 text-[0.9375rem] text-ink-soft">
              In this design preview, the &ldquo;Pay online&rdquo; buttons explain where they lead instead of opening
              Stripe checkout.
            </p>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="short-title" className="paper section-y">
        <div className="shell">
          <SectionTitle id="short-title" size="heading">
            Shorter programs
          </SectionTitle>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {[rose, curtner].map((s) => (
              <div key={s.slug} className="border-t pt-6">
                <h3 className="t-subheading text-ink">{s.name}</h3>
                <p className="mt-1 font-serif text-evergreen-soft italic">{s.program}</p>
                <ul className="tabular mt-4 space-y-1.5 text-ink">
                  {s.pricing.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span aria-hidden className="mt-[0.65em] size-1 shrink-0 rounded-full bg-evergreen-soft/70" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/schools/${s.slug}`}
                  className="group mt-5 inline-flex min-h-11 items-center gap-2 font-medium text-evergreen link-ink"
                >
                  Days, times and the form
                  <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="policies" className="section-y">
        <div className="shell grid gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle id="policies">Policies</SectionTitle>
            <p className="mt-5 max-w-[32ch] text-ink-soft">
              Cancellation, missed days and the school calendar, word for word from KeenKids.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="mb-8 rounded-[6px] bg-paper p-6 shadow-card ring-1 ring-ink/5">
              <h3 className="t-subheading text-ink">Stopping or cancelling</h3>
              <p className="mt-3 max-w-[68ch] text-ink-soft">
                If you wish to discontinue enrollment, we kindly request a minimum of{" "}
                <strong className="font-semibold text-ink">two weeks&rsquo; notice</strong> prior to your
                child&rsquo;s last day. Since tuition reserves your child&rsquo;s spot and program materials are
                planned in advance,{" "}
                <strong className="font-semibold text-ink">monthly fees are non-refundable once billed.</strong>{" "}
                Families may choose to discontinue enrollment at the end of the current paid month.
              </p>
            </div>
            <FaqList items={policies.filter((p) => p.id !== "cancellation")} />
            <Button asChild className="mt-10">
              <Link href="/schools">
                Find your school
                <ArrowRight data-icon="arrow" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
