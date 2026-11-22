"use client";

import { useEffect, useState } from "react";
import { curriculum } from "@/content/program";
import { cn } from "@/lib/utils";

/**
 * The year's themes as a table of contents. A silk ribbon marks this month
 * (or, in June and July, the first chapter of the coming year). The month is
 * read from the visitor's clock after hydration, so the list renders fully without it.
 */
export function CurriculumContents({ className }: { className?: string }) {
  const [marked, setMarked] = useState<{ index: number; label: string } | null>(null);

  useEffect(() => {
    const month = new Date().getMonth();
    const found = curriculum.findIndex((m) => m.index === month);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the month comes from the client clock
    setMarked(found >= 0 ? { index: found, label: "This month" } : { index: 0, label: "Coming up" });
  }, []);

  return (
    <div className={cn("paper relative overflow-hidden rounded-[4px] px-6 pt-10 pb-8 shadow-card ring-1 ring-ink/5 sm:px-10", className)}>
      <p className="text-center font-serif text-[1rem] text-ink-faint italic">Contents</p>
      <ol className="mt-6">
        {curriculum.map((m, i) => {
          const isMarked = marked?.index === i;
          return (
            <li
              key={m.month}
              className="relative flex items-baseline gap-3 border-b border-dashed border-rule py-3 last:border-b-0 sm:gap-4"
              aria-current={isMarked ? "date" : undefined}
            >
              {isMarked ? (
                <span
                  aria-hidden
                  className="ribbon ribbon-drop pointer-events-none absolute bottom-0.5 -left-4 h-[60rem] w-3.5 sm:-left-7"
                />
              ) : null}
              <span className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <span
                  className={cn(
                    "font-serif text-[1.1875rem] leading-snug sm:text-[1.3125rem]",
                    isMarked ? "font-medium text-evergreen" : "text-ink",
                  )}
                >
                  {m.theme}
                </span>
                {isMarked ? (
                  <span className="shrink-0 rounded-full bg-terracotta/15 px-2 py-0.5 text-[0.75rem] font-semibold text-terracotta-ink">
                    {marked.label}
                  </span>
                ) : null}
              </span>
              <span className="leader" aria-hidden />
              <span className="tabular shrink-0 text-[0.9375rem] text-ink-soft">{m.month}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
