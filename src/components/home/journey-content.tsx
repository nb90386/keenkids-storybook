import Image from "next/image";
import { photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

export type Step = {
  word: string;
  line: string;
  sheet: React.ReactNode;
  note: string;
};

/** A graph-paper sheet with a pencil-line drawing. Clearly an illustration, not class work. */
function Drawing({ children }: { children: React.ReactNode }) {
  return (
    <div className="graph-paper relative aspect-[4/3] w-full">
      <svg viewBox="0 0 400 300" className="absolute inset-0 size-full text-evergreen" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

function Shot({ src, w, h, alt, position }: { src: string; w: number; h: number; alt: string; position?: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-parchment-deep">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 34vw, 86vw"
        quality={80}
        className="object-cover [filter:saturate(0.9)]"
        style={{ objectPosition: position }}
        data-w={w}
        data-h={h}
      />
    </div>
  );
}

const pencil = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const note = "font-serif italic";

export const steps: Step[] = [
  {
    word: "Imagine",
    line: "It starts as an idea, and sometimes a sketch.",
    note: "Illustration",
    sheet: (
      <Drawing>
        <g {...pencil}>
          <path d="M70 182 L338 128" strokeWidth={3} />
          <ellipse cx="108" cy="174" rx="20" ry="42" transform="rotate(-11 108 174)" />
          <ellipse cx="290" cy="138" rx="34" ry="74" transform="rotate(-11 290 138)" />
          <path d="M150 230 q24 -14 46 -8" strokeDasharray="3 6" />
          <path d="M300 236 q-8 -16 -6 -30" strokeDasharray="3 6" />
          <path d="M120 70 q18 6 22 40" strokeDasharray="3 6" />
        </g>
        <g className={note} fill="currentColor" fontSize="15">
          <text x="150" y="252">one straw</text>
          <text x="262" y="262">big loop at the back</text>
          <text x="62" y="62">small loop up front</text>
        </g>
      </Drawing>
    ),
  },
  {
    word: "Build",
    line: "Then it becomes something they can hold.",
    note: "Hoop glider",
    sheet: (
      <Shot
        src={photo("glider-hands")}
        w={700}
        h={385}
        alt="A student's hands hold a hoop glider made from two paper loops and a pink straw."
        position="45% 40%"
      />
    ),
  },
  {
    word: "Test",
    line: "Does it glide? There's one way to find out.",
    note: "Hoop gliders, ready to fly",
    sheet: (
      <Shot
        src={photo("hero-wide")}
        w={1200}
        h={790}
        alt="Students in a school courtyard hold their hoop gliders up, ready to throw."
        position="50% 72%"
      />
    ),
  },
  {
    word: "Try again",
    line: "When it doesn't, they change one thing and go again.",
    note: "Illustration",
    sheet: (
      <Drawing>
        <g {...pencil}>
          <path d="M60 200 L330 150" strokeWidth={3} opacity={0.35} />
          <ellipse cx="98" cy="193" rx="20" ry="42" transform="rotate(-11 98 193)" opacity={0.35} />
          <path d="M70 176 L340 126" strokeWidth={3} />
          <ellipse cx="132" cy="166" rx="18" ry="36" transform="rotate(-11 132 166)" />
          <ellipse cx="296" cy="134" rx="36" ry="78" transform="rotate(-11 296 134)" />
          <path d="M96 236 C 108 250, 124 250, 132 236" />
          <path d="M126 232 l7 5 l3 -8" />
        </g>
        <g className={note} fill="currentColor" fontSize="15">
          <text x="52" y="270">small loop moved forward</text>
          <text x="232" y="250">try, watch, adjust</text>
        </g>
      </Drawing>
    ),
  },
  {
    word: "Share",
    line: "And then they show everyone what they made.",
    note: "Build Day at Mabel Mattos",
    sheet: (
      <Shot
        src="/images/build-day-stairs.jpg"
        w={1152}
        h={864}
        alt="About thirty students and four instructors sit on an outdoor school staircase holding up paper and straw builds."
        position="50% 55%"
      />
    ),
  },
];

/** The paper sheet that carries each step's image. */
export function Sheet({ step, className }: { step: Step; className?: string }) {
  return (
    <figure className={cn("sheet rounded-[6px] bg-paper p-3 pb-2 sm:p-4 sm:pb-3", className)}>
      <div className="overflow-hidden rounded-[3px]">{step.sheet}</div>
      <figcaption className="mt-2.5 text-center font-serif text-[0.875rem] text-ink-faint italic">{step.note}</figcaption>
    </figure>
  );
}

export function JourneyIntro({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 id="journey-title" className="t-chapter max-w-[11ch] text-ink">
        How an idea grows
      </h2>
      <p className="t-lede mt-5 max-w-[30ch] text-ink-soft">
        They design it, build it, test it, fix it and make it better. Then they show it off.
      </p>
    </div>
  );
}
