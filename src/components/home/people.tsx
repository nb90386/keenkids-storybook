import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { founders } from "@/content/people";

/**
 * Scene 6 — who built this, and why. Portraits stay modest (Shilpa's source is 400px)
 * and overlap like two prints on a page; the story carries the scene.
 */
export function People() {
  const [anjana, shilpa] = founders;
  return (
    <section aria-labelledby="people-title" className="section-y">
      <div className="shell grid items-center gap-x-12 gap-y-14 md:grid-cols-12">
        <div className="relative mx-auto h-[22rem] w-full max-w-[26rem] md:col-span-5 md:h-[26rem]">
          <Portrait f={anjana} className="absolute top-0 left-0 w-[58%] -rotate-[2.2deg]" position="50% 22%" />
          <Portrait f={shilpa} className="absolute right-0 bottom-0 w-[52%] rotate-[1.8deg]" position="50% 30%" />
        </div>

        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
          <h2 id="people-title" className="t-chapter max-w-[16ch] text-ink">
            Started by two parents who wanted more for their kids after school.
          </h2>
          <div className="t-lede mt-7 max-w-[36rem] space-y-4 text-ink-soft">
            <p>
              Anjana Venkat and Shilpa Javli spent years working in technology in Silicon Valley. As parents, they
              kept looking for programs that went beyond traditional academics. That search became KeenKids.
            </p>
            <p>Their favorite moment is still the one where something a child built finally works.</p>
          </div>
          <Link href="/about" className="group mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-evergreen">
            <span className="link-ink">Our story</span>
            <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Portrait({
  f,
  className,
  position,
}: {
  f: (typeof founders)[number];
  className: string;
  position: string;
}) {
  return (
    <figure className={className}>
      <div className="sheet rounded-[4px] bg-paper p-2 pb-9">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-parchment-deep">
          <Image
            src={f.photo}
            alt={`Portrait of ${f.name}`}
            fill
            sizes="(min-width: 768px) 15rem, 55vw"
            quality={80}
            className="object-cover [filter:saturate(0.9)]"
            style={{ objectPosition: position }}
          />
        </div>
        <figcaption className="absolute right-2 bottom-2.5 left-2 text-center font-serif text-[0.9375rem] text-ink-soft italic">
          {f.name}
        </figcaption>
      </div>
    </figure>
  );
}
