"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Car, Cog, Code, FlaskConical, Leaf, Lightbulb, Plane, Rocket, Snowflake, Trophy } from "lucide-react";
import { curriculum } from "@/content/program";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

const icons = [Car, Plane, FlaskConical, Cog, Snowflake, Rocket, Lightbulb, Leaf, Code, Trophy];

/**
 * Scene 5 — the year in chapters. A minimal index (a WAI-ARIA tablist) and one featured theme.
 * Defaults to the visitor's current month, labelled as the month's theme only —
 * it never implies a particular school is running right now.
 */
export function Chapters() {
  const [selected, setSelected] = useState(0);
  const [current, setCurrent] = useState<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  useEffect(() => {
    const i = curriculum.findIndex((m) => m.index === new Date().getMonth());
    if (i >= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- the month comes from the client clock
      setCurrent(i);
      setSelected(i);
    }
  }, []);

  const pick = (i: number, focus = false) => {
    const next = (i + curriculum.length) % curriculum.length;
    setSelected(next);
    track("chapter_selected", { month: curriculum[next].month });
    if (focus) tabs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const map: Record<string, number> = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: curriculum.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      pick(map[e.key], true);
    }
  };

  const m = curriculum[selected];
  const Icon = icons[selected];

  return (
    <section aria-labelledby={`${id}-title`} className="section-y">
      <div className="shell grid gap-x-10 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id={`${id}-title`} className="t-title max-w-[12ch] text-ink">
            Every month, a new chapter
          </h2>
          <p className="mt-5 max-w-[32ch] text-ink-soft">
            Each month of the school year has a theme, and the builds follow it. Themes guide the daily programs;
            shorter programs have their own projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[13rem_1fr] lg:col-span-8">
          <div
            role="tablist"
            aria-label="Months"
            aria-orientation="vertical"
            className="chapter-index -mx-1 flex snap-x gap-1 overflow-x-auto px-1 pb-2 md:mx-0 md:flex-col md:overflow-visible md:px-0 md:pb-0"
          >
            {curriculum.map((mo, i) => {
              const on = i === selected;
              return (
                <button
                  key={mo.month}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`${id}-tab-${i}`}
                  aria-selected={on}
                  aria-controls={`${id}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => pick(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "group relative flex min-h-10 shrink-0 snap-start items-center gap-3 rounded-[6px] px-3 text-left transition-colors duration-200 md:min-h-9",
                    on ? "text-evergreen-deep" : "text-ink-faint hover:text-ink",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "hidden h-px bg-current transition-[width] duration-300 ease-[var(--ease-smooth-out)] md:block",
                      on ? "w-6" : "w-2.5 group-hover:w-4",
                    )}
                  />
                  <span className={cn("font-serif text-[1.0625rem]", on && "font-semibold")}>{mo.month}</span>
                  {i === current ? (
                    <span className="ml-auto hidden text-[0.75rem] font-semibold text-terracotta-ink md:inline">Now</span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${selected}`}
            className="sheet relative overflow-hidden rounded-[10px] bg-paper p-7 sm:p-10"
          >
            <div key={m.month} className="panel-swap grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div>
                <p className="font-serif text-[1.0625rem] text-ink-faint italic">
                  {selected === current ? "This month's theme" : `${m.month}'s theme`}
                </p>
                <p className="t-title mt-2 text-ink">{m.theme}</p>
                <p className="t-lede mt-4 max-w-[30ch] text-ink-soft">{m.blurb}</p>
              </div>
              <div
                aria-hidden
                className="grid size-32 place-items-center justify-self-start rounded-full border border-rule-strong bg-parchment text-evergreen sm:size-36 sm:justify-self-end"
              >
                <Icon strokeWidth={0.9} className="size-16 sm:size-20" />
              </div>
            </div>
            <Link
              href="/programs#curriculum"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-evergreen"
            >
              <span className="link-ink">The whole year</span>
              <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
