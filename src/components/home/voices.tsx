import { ChevronDown } from "lucide-react";
import { featuredTestimonials, testimonials } from "@/content/testimonials";

/** Scene 7 — a literary quote spread: one lead quotation, two short ones, more on request. */
export function Voices() {
  const [lead, ...pair] = featuredTestimonials;
  const more = testimonials.slice(featuredTestimonials.length);
  return (
    <section aria-labelledby="voices-title" className="paper section-y">
      <div className="shell">
        <h2 id="voices-title" className="sr-only">
          What parents say
        </h2>
        <figure className="mx-auto max-w-[52rem] text-center">
          <span aria-hidden className="block font-serif text-[5rem] leading-[0.6] text-gold">
            &ldquo;
          </span>
          <blockquote className="mt-4">
            <p className="font-serif text-[clamp(1.5rem,1.1rem+1.6vw,2.375rem)] leading-[1.28] tracking-[-0.012em] text-balance text-ink">
              {lead.quote}
            </p>
          </blockquote>
          <figcaption className="mt-6 text-ink-soft">
            <span className="font-semibold text-ink">{lead.name}</span>, {lead.context}
          </figcaption>
        </figure>

        <div className="mx-auto mt-16 grid max-w-[60rem] gap-x-14 gap-y-10 border-t pt-12 md:grid-cols-2">
          {pair.map((t) => (
            <figure key={t.name}>
              <blockquote>
                <p className="font-serif text-[1.25rem] leading-[1.5] text-ink">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-3 text-[0.9375rem] text-ink-soft">
                <span className="font-semibold text-ink">{t.name}</span>, {t.context}
              </figcaption>
            </figure>
          ))}
        </div>

        <details className="group/more mx-auto mt-12 max-w-[60rem]">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center gap-2 font-medium text-evergreen marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="link-ink">More from parents</span>
            <ChevronDown aria-hidden className="size-4 transition-transform duration-200 group-open/more:rotate-180" />
          </summary>
          <ul className="mt-8 columns-1 gap-12 md:columns-2">
            {more.map((t) => (
              <li key={t.name} className="mb-7 break-inside-avoid">
                <p className="text-ink">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-1.5 text-[0.875rem] text-ink-faint">
                  <span className="font-semibold text-ink-soft">{t.name}</span>, {t.context}
                </p>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
