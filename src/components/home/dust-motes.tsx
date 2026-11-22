"use client";

import { useEffect, useRef } from "react";

// Twelve fixed motes (deterministic, so server and client agree). Each drifts on its
// own slow loop. Pure CSS transforms; paused offscreen and hidden for reduced motion.
const motes = [
  [8, 14, 2.2, 0], [17, 32, 1.6, 2.4], [26, 9, 1.4, 5.1], [31, 46, 2, 1.2],
  [39, 22, 1.2, 3.6], [12, 58, 1.5, 6.2], [47, 12, 1.8, 4.4], [22, 70, 1.1, 7.3],
  [55, 30, 1.3, 2], [6, 38, 1.7, 8.1], [35, 62, 1.2, 0.8], [44, 50, 1.5, 5.8],
] as const;

export function DustMotes() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => el.toggleAttribute("data-paused", !e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className="motes pointer-events-none absolute inset-0">
      {motes.map(([x, y, size, delay], i) => (
        <span
          key={i}
          className="mote"
          style={
            {
              left: `${x}%`,
              top: `${y}%`,
              width: `${size * 2}px`,
              height: `${size * 2}px`,
              animationDelay: `-${delay}s`,
              "--drift": `${i % 2 ? 14 : -10}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
