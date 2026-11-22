import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

/**
 * Scene 3 — the joy of making things. An asymmetric photo essay of real projects,
 * cropped to hands and builds rather than faces, with one line each.
 */
export function Making() {
  return (
    <section id="making" aria-labelledby="making-title" className="scroll-mt-[calc(var(--header-h)+1rem)] pt-[var(--section-y)]">
      <div className="shell grid gap-x-8 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-5 md:col-start-1 lg:col-span-4 lg:pt-6">
          <h2 id="making-title" className="t-chapter text-ink">
            They make real things.
          </h2>
          <p className="t-lede mt-6 max-w-[30ch] text-ink-soft">
            They build something, test it, and figure out why it didn&rsquo;t quite work. Then they try again.
          </p>
        </div>

        <Photo
          src="boats-strip"
          w={1080}
          h={360}
          alt="Three students hold out the boats they shaped from aluminum foil, each with a foil sail."
          caption="Foil boats, folded and shaped by hand."
          className="md:col-span-7 lg:col-span-8"
          sizes="(min-width: 1024px) 60vw, (min-width: 768px) 55vw, 92vw"
        />

        <Photo
          src="glider-hands"
          w={700}
          h={385}
          alt="A student's hands hold a hoop glider made from two paper loops and a pink straw."
          caption="Hoop gliders: two paper loops and a straw."
          className="md:col-span-6 lg:col-span-5 lg:col-start-2"
          sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 92vw"
        />

        <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-5 lg:col-start-8">
          <Photo
            src="boat-hands"
            w={400}
            h={280}
            alt="A student holds a foil boat with a tall foil sail on an open palm."
            caption="Every child builds their own."
            className="max-w-[24rem]"
            sizes="(min-width: 768px) 24rem, 80vw"
          />
          <div className="border-t pt-6">
            <p className="font-serif text-[1.3125rem] leading-snug text-ink">
              Each week mixes building, science lab, coding in Scratch, public speaking and free exploration.
            </p>
            <Link
              href="/programs"
              data-track="program_viewed"
              className="group mt-4 inline-flex min-h-11 items-center gap-2 font-medium text-evergreen"
            >
              <span className="link-ink">How a week works</span>
              <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Photo({
  src,
  w,
  h,
  alt,
  caption,
  className,
  sizes,
}: {
  src: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
  className?: string;
  sizes: string;
}) {
  return (
    <figure className={cn("reveal-mask", className)}>
      <div className="print relative overflow-hidden rounded-[4px]" style={{ aspectRatio: `${w} / ${h}` }}>
        <Image src={photo(src)} alt={alt} fill sizes={sizes} quality={80} className="object-cover" />
      </div>
      <figcaption className="t-caption mt-3 text-ink-faint">{caption}</figcaption>
    </figure>
  );
}
