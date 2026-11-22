import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PaperPlane } from "@/components/book/marks";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="shell grid min-h-[70vh] content-center py-24">
      <PaperPlane aria-hidden className="h-auto w-48 text-evergreen-soft" />
      <h1 className="t-display mt-8 max-w-[14ch] text-ink">This page flew off somewhere.</h1>
      <p className="t-lede mt-6 max-w-[40ch] text-ink-soft">
        The link may be old, or the page may have moved. These will get you back on track.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button asChild size="lg">
          <Link href="/">
            Back to the homepage
            <ArrowRight data-icon="arrow" aria-hidden />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/schools">Find your school</Link>
        </Button>
      </div>
    </section>
  );
}
