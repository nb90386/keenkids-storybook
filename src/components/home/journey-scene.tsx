"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { JourneyIntro, Sheet, steps, type Step } from "@/components/home/journey-content";
import { cn } from "@/lib/utils";

const n = steps.length;
// Each step owns an equal slice of the scroll; the sheet is laid down in the first 40% of it.
const slice = (i: number) => [i / n, (i + 0.4) / n] as const;
// Sheets settle at small, alternating angles, like prints dropped on a desk.
const rest = [-2.2, 1.6, -1.1, 2.4, -0.6];

/** The pinned stage. Transform, opacity and clip-path only; nothing measures layout per frame. */
export default function JourneyScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 170, damping: 30, mass: 0.4 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(n - 1, Math.floor(v * n * 0.999 + 0.12))));

  return (
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-svh items-center">
        <div className="shell grid w-full grid-cols-12 items-center gap-x-10">
          <div className="col-span-5">
            <JourneyIntro />
            <ol className="relative mt-10 space-y-1">
              <Thread progress={progress} />
              {steps.map((s, i) => (
                <li
                  key={s.word}
                  aria-current={i === active ? "step" : undefined}
                  className={cn(
                    "relative grid grid-cols-[2.25rem_1fr] items-baseline py-2 transition-[opacity,transform] duration-300 ease-[var(--ease-smooth-out)]",
                    i === active ? "text-ink" : "[&_.step-word]:text-ink-faint",
                    i === active && "translate-x-1",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "relative z-10 grid size-5 place-items-center rounded-full border transition-colors duration-300",
                      i <= active ? "border-evergreen bg-evergreen" : "border-rule-strong bg-parchment",
                    )}
                  >
                    <span className={cn("size-1.5 rounded-full", i <= active ? "bg-gold" : "bg-transparent")} />
                  </span>
                  <span>
                    <span className="step-word font-serif text-[1.5rem] leading-tight text-ink transition-colors duration-300">{s.word}</span>
                    <span
                      className={cn(
                        "block overflow-hidden text-ink-soft transition-[max-height,opacity] duration-300",
                        i === active ? "max-h-16 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      {s.line}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative col-span-6 col-start-7 aspect-[5/4]">
            {steps.map((s, i) => (
              <LaidSheet key={s.word} step={s} index={i} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** The fine line that runs down the step markers and fills as the visitor scrolls. */
function Thread({ progress }: { progress: MotionValue<number> }) {
  const scaleY = useTransform(progress, [0, 1], [0, 1]);
  return (
    <span aria-hidden className="absolute top-4 bottom-4 left-[0.59rem] w-px bg-rule-strong">
      <motion.span style={{ scaleY }} className="absolute inset-0 origin-top bg-evergreen" />
    </span>
  );
}

function LaidSheet({ step, index, progress }: { step: Step; index: number; progress: MotionValue<number> }) {
  const [a, b] = slice(index);
  const first = index === 0;
  // Arrives: unmasks from the bottom while dropping a few pixels and rotating into its rest angle.
  const clip = useTransform(progress, first ? [0, 1] : [a, b], first ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"] : ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const y = useTransform(progress, first ? [0, 1] : [a, b], first ? [0, 0] : [34, 0]);
  const rotate = useTransform(progress, first ? [0, 1] : [a, b], first ? [rest[0], rest[0]] : [rest[index] + 3, rest[index]]);
  // Once the next sheet lands, this one slides a little up and back into the stack.
  const [na, nb] = slice(index + 1);
  const shift = useTransform(progress, [na, nb], [0, index === steps.length - 1 ? 0 : -1]);
  const x = useTransform(shift, (v) => `${v * 22}px`);
  const ty = useTransform([y, shift] as MotionValue<number>[], (v: number[]) => `${v[0] + v[1] * 26}px`);
  const scale = useTransform(shift, [-1, 0], [0.94, 1]);
  const dim = useTransform(shift, [-1, 0], [0.35, 0]);

  return (
    <motion.div
      style={{ clipPath: clip, x, y: ty, rotate, scale, zIndex: index + 1 }}
      className="absolute inset-[4%] will-change-transform"
    >
      <Sheet step={step} className="h-full" />
      <motion.div style={{ opacity: dim }} aria-hidden className="pointer-events-none absolute inset-0 rounded-[6px] bg-parchment-deep" />
    </motion.div>
  );
}
