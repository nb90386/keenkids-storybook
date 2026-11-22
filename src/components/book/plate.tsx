import Image from "next/image";
import { cn } from "@/lib/utils";

type PlateProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: React.ReactNode;
  /** CSS aspect ratio for the crop, e.g. "4 / 3". Defaults to the image's own. */
  aspect?: string;
  /** CSS object-position for the crop. */
  focus?: string;
  sizes: string;
  preload?: boolean;
  corners?: boolean;
  reveal?: boolean;
  tone?: "paper" | "cloth";
  className?: string;
  imageClassName?: string;
};

/**
 * A photograph presented like a tipped-in plate in a printed book:
 * a paper mount, a hairline inner rule, optional photo corners and a plate caption.
 */
export function Plate({
  src,
  alt,
  width,
  height,
  caption,
  aspect,
  focus,
  sizes,
  preload,
  corners = false,
  reveal = false,
  tone = "paper",
  className,
  imageClassName,
}: PlateProps) {
  return (
    <figure className={cn("relative", reveal && "reveal-plate", className)}>
      <div
        className={cn(
          "relative bg-paper p-[clamp(0.5rem,1.4vw,0.875rem)] shadow-plate",
          tone === "cloth" && "shadow-[0_2px_2px_rgb(0_0_0/0.12),0_30px_50px_-28px_rgb(0_0_0/0.65)]",
        )}
      >
        <div
          className="relative overflow-hidden bg-parchment-deep outline outline-1 -outline-offset-1 outline-ink/10"
          style={{ aspectRatio: aspect ?? `${width} / ${height}` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            preload={preload}
            quality={80}
            className={cn("object-cover [filter:saturate(0.88)_contrast(1.02)_sepia(0.06)]", imageClassName)}
            style={focus ? { objectPosition: focus } : undefined}
          />
          {/* the faint sheen of printed stock */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgb(255_252_245/0.08),transparent_40%,rgb(40_44_38/0.06))]" />
        </div>
        {corners ? <PhotoCorners /> : null}
      </div>
      {caption ? (
        <figcaption
          className={cn(
            "t-caption mt-3 max-w-[40ch]",
            tone === "cloth" ? "text-paper/80" : "text-ink-faint",
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Four paper photo corners, as in an album. */
export function PhotoCorners() {
  // Sits over the photograph's own corners, inside the paper mount.
  const corner =
    "absolute size-[clamp(1rem,2vw,1.375rem)] bg-[#e9e1cf] [clip-path:polygon(0_0,100%_0,0_100%)] drop-shadow-[0_1px_0.5px_rgb(40_44_38/0.35)]";
  const inset = "clamp(0.25rem,0.9vw,0.5rem)";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0" style={{ padding: inset }}>
      <div className="relative size-full">
        <span className={cn(corner, "top-0 left-0")} />
        <span className={cn(corner, "top-0 right-0 rotate-90")} />
        <span className={cn(corner, "right-0 bottom-0 rotate-180")} />
        <span className={cn(corner, "bottom-0 left-0 -rotate-90")} />
      </div>
    </div>
  );
}
