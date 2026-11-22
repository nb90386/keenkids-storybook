import Image from "next/image";
import { cn } from "@/lib/utils";

type Base = { title: string; children?: React.ReactNode; className?: string };

/**
 * Chapter openings for subordinate pages, in three compositions so pages don't all start alike:
 * - "page": title and standfirst on the ivory page
 * - "cloth": an evergreen band, like a section divider in a clothbound book
 * - "photo": title above a wide photographic print that bleeds to the right edge
 */
export function PageOpener(
  props: Base &
    (
      | { variant?: "page" }
      | { variant: "cloth"; aside?: React.ReactNode }
      | { variant: "photo"; photo: { src: string; alt: string; w: number; h: number; caption: string } }
    ),
) {
  const { title, children, className } = props;

  if (props.variant === "cloth") {
    return (
      <header className={cn("on-cloth cloth back-cover", className)}>
        <div className="shell grid gap-x-12 gap-y-8 pt-[clamp(3.5rem,2rem+5vw,6.5rem)] pb-[clamp(3rem,2rem+4vw,5.5rem)] lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h1 className="t-display text-paper">{title}</h1>
            {children ? <div className="t-lede mt-6 max-w-[40ch] text-paper/80">{children}</div> : null}
          </div>
          {props.aside ? <div className="lg:col-span-5">{props.aside}</div> : null}
        </div>
      </header>
    );
  }

  if (props.variant === "photo") {
    const { photo } = props;
    return (
      <header className={cn("pt-[clamp(3.5rem,2rem+5vw,6.5rem)]", className)}>
        <div className="shell grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
          <h1 className="t-display text-ink lg:col-span-6">{title}</h1>
          {children ? <div className="t-lede max-w-[40ch] text-ink-soft lg:col-span-5 lg:col-start-8">{children}</div> : null}
        </div>
        <figure className="mt-[clamp(2.5rem,1.5rem+3vw,4rem)] pl-[var(--gutter)] lg:pl-[max(var(--gutter),calc((100vw-82rem)/2+var(--gutter)))]">
          <div className="print relative overflow-hidden rounded-l-[6px]" style={{ aspectRatio: `${photo.w} / ${photo.h}` }}>
            <Image src={photo.src} alt={photo.alt} fill preload sizes="94vw" quality={80} className="object-cover" />
          </div>
          <figcaption className="t-caption mt-3 text-ink-faint">{photo.caption}</figcaption>
        </figure>
      </header>
    );
  }

  return (
    <header className={cn("shell pt-[clamp(3.5rem,2rem+5vw,7rem)] pb-[clamp(2.5rem,1.5rem+3vw,4.5rem)]", className)}>
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12 lg:items-end">
        <h1 className="t-display text-ink lg:col-span-7">{title}</h1>
        {children ? <div className="t-lede max-w-[42ch] text-ink-soft lg:col-span-5">{children}</div> : null}
      </div>
    </header>
  );
}

/** A plain prose section heading used inside subordinate pages. */
export function SectionTitle({
  id,
  children,
  size = "title",
  className,
}: {
  id?: string;
  children: React.ReactNode;
  size?: "title" | "heading";
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(size === "title" ? "t-title" : "t-heading", "scroll-mt-[calc(var(--header-h)+1.5rem)] text-ink", className)}
    >
      {children}
    </h2>
  );
}
