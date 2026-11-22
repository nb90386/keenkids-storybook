import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ActivityMark } from "@/components/book/marks";
import { activities, dailyIncludes } from "@/content/program";

/** What actually happens: five activities set as an annotated page, marginal drawings beside each. */
export function Afternoon({ linkToProgram = true }: { linkToProgram?: boolean }) {
  return (
    <section aria-labelledby="afternoon-title" className="section-y">
      <div className="shell grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
            <h2 id="afternoon-title" className="t-title max-w-[12ch] text-ink">
              An afternoon at KeenKids
            </h2>
            <p className="t-lede mt-6 max-w-[34ch] text-ink-soft">
              Kids build, test, change their minds and try again. Each week mixes these sessions, and the exact
              schedule varies by school.
            </p>
            <div className="mt-10 border-t pt-6">
              <p className="t-subheading text-ink">At the daily programs, there&rsquo;s also</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-ink-soft">
                {dailyIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {linkToProgram ? (
              <Link
                href="/programs"
                className="group mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-evergreen link-ink"
              >
                The full program
                <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
              </Link>
              ) : null}
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {activities.map((a) => (
            <li
              key={a.id}
              className="grid grid-cols-[3.25rem_1fr] gap-x-5 border-t py-9 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr] sm:gap-x-8 lg:py-11"
            >
              <ActivityMark
                id={a.id}
                className="mt-1 size-[3.25rem] text-evergreen-soft sm:size-[4.5rem]"
              />
              <div>
                <h3 className="t-heading text-ink">{a.lead}</h3>
                <p className="t-lede mt-3 max-w-[46ch] text-ink-soft">{a.body}</p>
                <ul className="mt-4 max-w-[52ch] space-y-0.5 font-serif text-[1rem] leading-relaxed text-ink-faint italic">
                  {a.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
