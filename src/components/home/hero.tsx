import Link from "next/link";
import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { ArrowRight } from "lucide-react";
import { DustMotes } from "@/components/home/dust-motes";
import { Button } from "@/components/ui/button";
import { photo } from "@/lib/photos";

/**
 * Scene 1 — the cover. Evergreen bookcloth with an arched window die-cut into it;
 * the courtyard photograph sits behind the window like an endpaper seen through the board.
 * Art-directed: a tall crop on phones, the wide crop from tablet up.
 */
export function Hero() {
  const alt =
    "Eight KeenKids students in school uniforms line up in a sunny school courtyard, each holding a paper hoop glider overhead.";
  const common = { alt, quality: 80, preload: true } as const;
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: photo("hero-wide"), width: 1200, height: 790, sizes: "(min-width: 1024px) 40vw, 92vw" });
  const {
    props: { srcSet: tall, ...rest },
  } = getImageProps({ ...common, src: photo("hero-tall"), width: 600, height: 735, sizes: "92vw" });

  // Art-directed <picture> gets no automatic preload; hint each crop for its own breakpoint.
  preload(rest.src, { as: "image", imageSrcSet: tall, imageSizes: "92vw", fetchPriority: "high", media: "(max-width: 767px)" });
  preload(rest.src, { as: "image", imageSrcSet: wide, imageSizes: "(min-width: 1024px) 40vw, 92vw", fetchPriority: "high", media: "(min-width: 768px)" });

  return (
    <section aria-labelledby="hero-title" className="on-cloth cloth relative overflow-hidden">
      <div className="shell grid items-center gap-x-12 gap-y-10 pt-10 pb-24 md:pt-14 lg:grid-cols-12 lg:pt-16 lg:pb-32">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="t-display max-w-[12ch] text-paper md:max-w-none md:whitespace-nowrap lg:text-[clamp(3.5rem,4.9vw,5.25rem)]">
            <span className="enter block" style={{ "--i": 0 } as React.CSSProperties}>
              A little more wonder
            </span>
            <span className="enter block font-normal text-gold-soft" style={{ "--i": 1 } as React.CSSProperties}>
              after the bell.
            </span>
          </h1>
          <p className="enter t-lede mt-7 max-w-[36ch] text-paper/85" style={{ "--i": 2 } as React.CSSProperties}>
            Hands-on STEAM after school for grades 1–5, right on campus in Milpitas.
          </p>
          <div className="enter mt-9 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ "--i": 3 } as React.CSSProperties}>
            <Button asChild variant="cloth" size="lg">
              <a href="#find-your-school" data-track="hero_find_school">
                Find your school
                <ArrowRight data-icon="arrow" aria-hidden />
              </a>
            </Button>
            <Link
              href="#making"
              className="group inline-flex min-h-11 items-center gap-2 font-semibold text-paper/90 transition-colors hover:text-paper"
            >
              <span className="underline decoration-paper/30 underline-offset-[0.3em] transition-[text-decoration-color] duration-200 group-hover:decoration-paper">
                See what they make
              </span>
            </Link>
          </div>
        </div>

        <figure className="relative lg:col-span-5">
          <div className="window-reveal cover-window relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden md:aspect-[6/5] lg:aspect-[11/12] lg:max-w-none">
            <picture>
              <source media="(min-width: 768px)" srcSet={wide} sizes="(min-width: 1024px) 40vw, 92vw" />
              {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is in rest */}
              <img
                {...rest}
                srcSet={tall}
                fetchPriority="high"
                loading="eager"
                className="window-photo absolute inset-0 size-full object-cover object-[50%_62%] md:object-[50%_58%]"
              />
            </picture>
            {/* warm afternoon light from the upper left, with a few motes in it */}
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_12%_0%,rgb(255_236_200/0.22),transparent_55%)]" />
            <DustMotes />
          </div>
          <figcaption className="t-caption mx-auto mt-4 max-w-[34rem] text-paper/70 lg:max-w-none">
            Hoop gliders, held high at Mabel Mattos Elementary.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
