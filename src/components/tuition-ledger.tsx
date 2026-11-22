import { PaymentButton } from "@/components/payment-button";
import { plans } from "@/content/pricing";

/**
 * The three published monthly plans as one ledger, so they compare at a glance.
 * No plan is promoted; the business hasn't confirmed a "most popular" choice.
 */
export function TuitionLedger() {
  return (
    <div className="paper overflow-hidden rounded-[6px] shadow-card ring-1 ring-ink/5">
      <div className="hidden grid-cols-12 gap-6 border-b bg-parchment/60 px-8 py-3 md:grid">
        <p className="t-label col-span-3 text-ink-faint">Days each week</p>
        <p className="t-label col-span-3 text-ink-faint">Monthly tuition</p>
        <p className="t-label col-span-6 text-ink-faint">What it looks like</p>
      </div>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id} className="grid gap-x-6 gap-y-4 border-b px-6 py-7 last:border-b-0 md:grid-cols-12 md:items-center md:px-8">
            <div className="flex items-baseline justify-between gap-4 md:col-span-3 md:block">
              <h3 className="flex items-baseline gap-2.5 font-serif text-ink">
                <span className="tabular text-[2.75rem] leading-none font-medium">{plan.days}</span>
                <span className="text-[1.0625rem]">{plan.days === 1 ? "day a week" : "days a week"}</span>
              </h3>
              <p className="tabular text-right md:hidden">
                <span className="font-serif text-[1.625rem] font-medium text-ink">${plan.price}</span>
                <span className="text-ink-soft">/month</span>
              </p>
            </div>
            <div className="hidden md:col-span-3 md:block">
              <p className="tabular">
                <span className="font-serif text-[1.875rem] leading-none font-medium text-ink">${plan.price}</span>
                <span className="text-ink-soft"> /month</span>
              </p>
              <p className="tabular mt-1 text-[0.875rem] text-ink-faint">{plan.perSession}</p>
            </div>
            <div className="md:col-span-6 md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <p className="max-w-[40ch] text-ink-soft">{plan.fit}</p>
                <p className="tabular mt-1 text-[0.875rem] text-ink-faint md:hidden">{plan.perSession}</p>
              </div>
              <PaymentButton
                url={plan.stripeUrl}
                label="Pay online"
                planLabel={plan.label}
                className="mt-4 shrink-0 md:mt-0"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
