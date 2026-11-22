import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans, pricingNotes } from "@/content/pricing";

/**
 * Scene 8 — what it costs, at a glance. The three published monthly plans apply to the
 * daily programs at Mattos and Sinnott only; everything else lives on /pricing and school pages.
 * Payment buttons stay on /pricing, behind the preview guard.
 */
export function TuitionGlance() {
  return (
    <section aria-labelledby="tuition-title" className="section-y">
      <div className="shell grid gap-x-10 gap-y-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-4">
          <h2 id="tuition-title" className="t-chapter text-ink">
            What it costs
          </h2>
          <p className="mt-5 max-w-[32ch] text-ink-soft">
            Monthly tuition for the daily after-school programs at Mattos and Sinnott. Rose and Curtner run shorter
            programs with their own prices.
          </p>
        </div>

        <dl className="grid grid-cols-3 border-y border-rule-strong/80 lg:col-span-8">
          {plans.map((p, i) => (
            <div key={p.id} className={i > 0 ? "border-l border-rule-strong/80 py-7 pl-4 sm:pl-8" : "py-7 pr-4 sm:pr-8"}>
              <dt className="text-[0.9375rem] text-ink-soft">{p.label}</dt>
              <dd className="tabular mt-1 font-serif text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-none font-medium text-ink">
                ${p.price}
                <span className="ml-1 font-sans text-[0.875rem] font-normal text-ink-faint">/mo</span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-[0.9375rem] text-ink-soft lg:col-span-8 lg:col-start-5">
          Plus a {pricingNotes.materialsFee.replace(" at registration", "")} at registration, as listed on the school forms.
          Two weeks&rsquo; notice to stop; monthly fees aren&rsquo;t refundable once billed.
        </p>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 lg:col-span-8 lg:col-start-5">
          <Button asChild size="lg">
            <a href="#find-your-school">
              Find your school
              <ArrowRight data-icon="arrow" aria-hidden />
            </a>
          </Button>
          <Link href="/pricing" className="group inline-flex min-h-11 items-center gap-2 font-medium text-evergreen">
            <span className="link-ink">Pricing, discounts and policies</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
