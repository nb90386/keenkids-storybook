import type { SVGProps } from "react";
import type { Activity } from "@/content/program";

type MarkProps = SVGProps<SVGSVGElement> & { title?: string };

function Svg({ title, children, ...props }: MarkProps) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/** The KeenKids hoop glider: two paper loops on a straw. The brand device. */
export function GliderMark(props: MarkProps) {
  return (
    <Svg viewBox="0 0 48 32" strokeWidth={1.6} {...props}>
      <path d="M5 19.5 43 13" />
      <ellipse cx="11" cy="18.6" rx="3.4" ry="7.2" transform="rotate(-9 11 18.6)" />
      <ellipse cx="36" cy="14.4" rx="5.2" ry="11.2" transform="rotate(-9 36 14.4)" />
    </Svg>
  );
}

/** A folded paper airplane with its looping flight path. */
export function PaperPlane(props: MarkProps) {
  return (
    <Svg viewBox="0 0 120 56" strokeWidth={1.4} {...props}>
      <path d="M2 50c10-2 18-8 20-15 2-8-6-11-9-5-3 7 8 11 18 7 7-3 12-8 16-12" strokeDasharray="1 4.5" />
      <path d="M116 4 60 22l18 5 8 13 30-36Z" />
      <path d="m78 27 38-23" />
      <path d="m86 40-3-10" />
    </Svg>
  );
}

/** A small chapter ornament: rule, glider, rule. */
export function Ornament({ className, ...props }: MarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`} aria-hidden>
      <span className="h-px w-10 bg-current opacity-40" />
      <GliderMark className="h-4 w-6" {...props} />
      <span className="h-px w-10 bg-current opacity-40" />
    </span>
  );
}

function Flask(props: MarkProps) {
  return (
    <Svg viewBox="0 0 48 48" strokeWidth={1.5} {...props}>
      <path d="M18.5 5.5h11M20.5 5.5v13L9.6 37.8A3 3 0 0 0 12.2 42h23.6a3 3 0 0 0 2.6-4.2L27.5 18.5v-13" />
      <path d="M14 30.5c3.5-1.6 6.5 1.6 10 0s6.5-1.6 10 0" />
      <circle cx="21" cy="36" r="1.4" />
      <circle cx="27.5" cy="35" r="0.9" />
      <circle cx="25" cy="24.5" r="1.1" />
    </Svg>
  );
}

function Conversation(props: MarkProps) {
  return (
    <Svg viewBox="0 0 48 48" strokeWidth={1.5} {...props}>
      <path d="M9 8h20a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H17l-6 5.5V25H9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z" />
      <path d="M37 18.5h2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-1.5V40l-6-5.5H25a4 4 0 0 1-4-4V29" />
      <path d="M11 14.5h14M11 19h9" />
    </Svg>
  );
}

function CodeBlocks(props: MarkProps) {
  return (
    <Svg viewBox="0 0 48 48" strokeWidth={1.5} {...props}>
      <path d="M6 7h7l2 2.5h5L22 7h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H22l-2 2.5h-5L13 16H8a2 2 0 0 1-2-2V7Z" />
      <path d="M13 19.5h7l2 2.5h5l2-2.5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H29l-2 2.5h-5l-2-2.5h-5a2 2 0 0 1-2-2v-7Z" />
      <path d="M6 32h7l2 2.5h5L22 32h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7Z" />
    </Svg>
  );
}

function Bulb(props: MarkProps) {
  return (
    <Svg viewBox="0 0 48 48" strokeWidth={1.5} {...props}>
      <path d="M24 5a12.5 12.5 0 0 0-7 22.9V32h14v-4.1A12.5 12.5 0 0 0 24 5Z" />
      <path d="M18 36.5h12M20 41h8" />
      <path d="m20.5 26 3.5-7 3.5 7" />
      <path d="M41 9.5 44 7M7 9.5 4 7M43 22h3M2 22h3" />
    </Svg>
  );
}

function Glider(props: MarkProps) {
  return (
    <Svg viewBox="0 0 48 48" strokeWidth={1.5} {...props}>
      <path d="M4 27 44 20.5" />
      <ellipse cx="11" cy="26" rx="4" ry="8.4" transform="rotate(-9 11 26)" />
      <ellipse cx="36" cy="21.8" rx="6" ry="13" transform="rotate(-9 36 21.8)" />
    </Svg>
  );
}

const activityMarks: Record<Activity["id"], (p: MarkProps) => React.JSX.Element> = {
  build: Glider,
  experiment: Flask,
  voice: Conversation,
  code: CodeBlocks,
  explore: Bulb,
};

export function ActivityMark({ id, ...props }: MarkProps & { id: Activity["id"] }) {
  const Mark = activityMarks[id];
  return <Mark {...props} />;
}
