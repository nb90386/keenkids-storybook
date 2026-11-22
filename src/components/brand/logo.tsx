import { cn } from "@/lib/utils";

/**
 * The KeenKids mark: a K whose arm is a folded paper dart, with the fold's underside
 * in gold. Built on a 64-unit grid; legible from 16px. See docs/v2/BRAND.md.
 */
export function Mark({
  className,
  tone = "evergreen",
  title,
}: {
  className?: string;
  /** "evergreen" for cream grounds, "paper" for cloth grounds. */
  tone?: "evergreen" | "paper" | "ink";
  title?: string;
}) {
  const ink = tone === "paper" ? "var(--color-paper)" : tone === "ink" ? "var(--color-ink)" : "var(--color-evergreen)";
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <rect x="9" y="7" width="12" height="50" rx="2.5" fill={ink} />
      <path d="M23.5 33.5 L56 7.5 L42.5 37 Z" fill={ink} />
      <path d="M23.5 33.5 L42.5 37 L31 44 Z" fill="var(--color-gold)" />
      <path d="M33.5 41.5 L44.5 36.5 L58 57 L45.5 57 Z" fill={ink} />
    </svg>
  );
}

/** Mark + wordmark lockup. The wordmark is Brygada 1918 Semibold, tightened. */
export function Logo({
  className,
  tone = "evergreen",
  size = "md",
}: {
  className?: string;
  tone?: "evergreen" | "paper";
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: { mark: "size-6", text: "text-[1.25rem]" },
    md: { mark: "size-7", text: "text-[1.5rem]" },
    lg: { mark: "size-10", text: "text-[2.125rem]" },
  }[size];
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Mark tone={tone} className={dims.mark} />
      <span
        className={cn(
          "font-serif leading-none font-semibold tracking-[-0.025em]",
          dims.text,
          tone === "paper" ? "text-paper" : "text-evergreen-deep",
        )}
      >
        KeenKids
      </span>
    </span>
  );
}
