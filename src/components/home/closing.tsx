import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Mark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

/**
 * Scene 9 — the back cover. The page edge meets the cloth with a fine highlight;
 * a large debossed mark sits in the board behind the invitation.
 */
export function Closing() {
  return (
    <section aria-labelledby="closing-title" className="on-cloth cloth back-cover relative overflow-hidden">
      <Mark tone="paper" className="deboss pointer-events-none absolute top-1/2 -right-20 size-[26rem] -translate-y-1/2 opacity-[0.07] md:right-[5%]" />
      <div className="shell relative py-[clamp(5rem,4rem+6vw,9rem)]">
        <h2 id="closing-title" className="t-display max-w-[13ch] text-paper">
          Let&rsquo;s see what they make next.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button asChild variant="cloth" size="lg">
            <Link href="/schools">
              Find your school
              <ArrowRight data-icon="arrow" aria-hidden />
            </Link>
          </Button>
          <Link href="/contact" className="group inline-flex min-h-11 items-center gap-2 font-semibold text-paper/90 hover:text-paper">
            <span className="underline decoration-paper/30 underline-offset-[0.3em] transition-[text-decoration-color] duration-200 group-hover:decoration-paper">
              Or ask us a question
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
