import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhotoCorners, Plate } from "@/components/book/plate";
import { PageOpener, SectionTitle } from "@/components/page-opener";
import { Button } from "@/components/ui/button";
import { founderTags, founders, foundersBio } from "@/content/people";
import { principles } from "@/content/program";

export const metadata: Metadata = {
  title: "About",
  description:
    "KeenKids was founded by Anjana Venkat and Shilpa Javli, two Silicon Valley technology professionals and parents who wanted more thoughtful after-school programs for Milpitas kids.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageOpener title="Our story" variant="cloth">
        <p>
          Two Silicon Valley technology professionals and parents wanted something more thoughtful for their
          kids after school. So they built it.
        </p>
      </PageOpener>

      <section aria-labelledby="founders-title" className="section-y">
        <div className="shell grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              {founders.map((f, i) => (
                <figure key={f.name} className={i === 1 ? "mt-12" : undefined}>
                  <div className="relative bg-paper p-2 shadow-plate">
                    <div className="relative aspect-[4/5] overflow-hidden bg-parchment-deep">
                      <Image
                        src={f.photo}
                        alt={`Portrait of ${f.name}`}
                        fill
                        preload={i === 0}
                        sizes="(min-width: 1024px) 230px, 45vw"
                        quality={80}
                        className="object-cover [filter:saturate(0.85)_sepia(0.05)]"
                        style={{ objectPosition: i === 1 ? "50% 30%" : "50% 22%" }}
                      />
                    </div>
                    <PhotoCorners />
                  </div>
                  <figcaption className="mt-3">
                    <span className="block font-serif text-[1.125rem] text-ink">{f.name}</span>
                    <span className="text-[0.875rem] text-ink-faint">Co-founder</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionTitle id="founders-title">Anjana Venkat &amp; Shilpa Javli</SectionTitle>
            <p className="mt-2 font-serif text-[1.25rem] text-evergreen-soft italic">Co-founders, KeenKids Enrichment</p>
            <div className="t-lede mt-8 space-y-5 text-ink-soft">
              {foundersBio.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mt-1 first-letter:mr-2 first-letter:font-serif first-letter:text-[3.6em] first-letter:leading-[0.8] first-letter:text-evergreen"
                      : undefined
                  }
                >
                  {para}
                </p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-1 font-serif text-ink-faint italic">
              {founderTags.map((t, i) => (
                <li key={t}>
                  {t}
                  {i < founderTags.length - 1 ? <span aria-hidden className="pl-2 not-italic">·</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="believe-title" className="paper section-y">
        <div className="shell grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle id="believe-title">What we care about</SectionTitle>
            <Plate
              src="/images/gliders-classroom.jpg"
              alt="Two girls at a classroom table each hold up a hoop glider made from paper loops and a pink straw."
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 420px, 92vw"
              reveal
              className="mt-10"
              caption="The Hoop Glider Challenge."
            />
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {principles.map((p) => (
              <li key={p.title} className="border-b py-7 first:border-t">
                <h3 className="t-heading text-ink">{p.title}</h3>
                <p className="mt-3 max-w-[48ch] text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="t-heading max-w-[24ch] text-ink">Come and see what your child would make.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/schools">
                Find your school
                <ArrowRight data-icon="arrow" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Ask us a question</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
