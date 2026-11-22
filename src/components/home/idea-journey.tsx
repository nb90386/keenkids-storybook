"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { JourneyIntro, Sheet, steps } from "@/components/home/journey-content";
import { cn } from "@/lib/utils";

// Motion and the pinned scene load only on wide screens with motion allowed.
const JourneyScene = lazy(() => import("@/components/home/journey-scene"));

/**
 * Scene 4 — the signature. "How an idea grows": Imagine → Build → Test → Try again → Share.
 * Desktop with motion: a short pinned stage where paper sheets are laid down one by one.
 * Phones and reduced motion: a quiet vertical sequence with the same content.
 */
export function IdeaJourney() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px) and (min-height: 680px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimated(wide.matches && !calm.matches);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  return (
    <section aria-labelledby="journey-title" className="relative mt-[var(--section-y)] bg-parchment-deep/60">
      {animated ? (
        <Suspense fallback={<JourneyStatic />}>
          <JourneyScene />
        </Suspense>
      ) : (
        <JourneyStatic />
      )}
    </section>
  );
}

function JourneyStatic() {
  return (
    <div className="shell section-y">
      <JourneyIntro />
      <ol className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {steps.map((step, i) => (
          <li key={step.word} className={cn(i % 2 === 1 && "md:mt-24")}>
            <p className="flex items-baseline gap-3">
              <span className="font-serif text-[0.9375rem] text-evergreen-soft tabular">{i + 1}</span>
              <span className="t-heading text-ink">{step.word}</span>
            </p>
            <p className="mt-2 max-w-[34ch] text-ink-soft">{step.line}</p>
            <Sheet step={step} className={cn("reveal-mask mt-5", i % 2 ? "rotate-[0.8deg]" : "-rotate-[0.6deg]")} />
          </li>
        ))}
      </ol>
    </div>
  );
}
