"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Wordmark } from "@/components/wordmark";
import { mainNav, secondaryNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

const isCurrent = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

/**
 * The pathname is request data under Cache Components, so it is read inside a
 * Suspense boundary. The static shell renders the same header without the
 * current-page marker, and the marker streams in.
 */
export function SiteHeader() {
  return (
    <Suspense fallback={<HeaderBar pathname="" />}>
      <HeaderWithPath />
    </Suspense>
  );
}

function HeaderWithPath() {
  return <HeaderBar pathname={usePathname()} />;
}

function HeaderBar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [raised, setRaised] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Hide on a deliberate scroll down, return on any scroll up.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - last;
        const focusInside = headerRef.current?.contains(document.activeElement);
        setRaised(y > 8);
        if (y < 320 || delta < -4 || focusInside) setHidden(false);
        else if (delta > 6) setHidden(true);
        last = y;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      onFocusCapture={() => setHidden(false)}
      className={cn(
        "on-cloth cloth sticky top-0 z-40 transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-quart)] motion-reduce:transition-none",
        hidden && !open && "-translate-y-full",
        raised && "shadow-[0_1px_0_rgb(0_0_0/0.25),0_10px_24px_-16px_rgb(0_0_0/0.6)]",
      )}
    >
      <div className="shell flex h-[var(--header-h)] items-center gap-3 sm:gap-6">
        <Link
          href="/"
          className="-mx-1 rounded-[4px] px-1 py-1"
          aria-label={`${site.name}, home`}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "relative inline-flex h-10 items-center rounded-[5px] px-3.5 text-[0.9688rem] font-medium text-paper/80 transition-colors duration-200 hover:text-paper",
                      "after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100",
                      current && "text-paper after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={site.parentPortal}
            className="hidden h-10 items-center rounded-[5px] px-3 text-[0.9375rem] text-paper/70 transition-colors hover:text-paper xl:inline-flex"
          >
            Parent portal
          </a>
          <Button asChild variant="cloth" size="sm" className="max-sm:px-3 max-sm:[&_svg]:hidden max-[339px]:hidden">
            <Link href="/schools">
              Find your school
              <ArrowRight data-icon="arrow" aria-hidden />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetPrimitive.Trigger asChild>
              <Button
                variant="outline-cloth"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu aria-hidden />
              </Button>
            </SheetPrimitive.Trigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="paper w-[min(24rem,100vw)] max-w-none gap-0 border-l-0 p-0 text-ink data-[side=right]:w-[min(24rem,100vw)] data-[side=right]:sm:max-w-none"
            >
              <div className="flex h-[var(--header-h)] items-center justify-between border-b px-6">
                <SheetTitle className="t-caption text-[1.0625rem] text-ink-soft not-italic">
                  Contents
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu" className="-mr-2">
                    <X aria-hidden />
                  </Button>
                </SheetClose>
              </div>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
                <ul>
                  {[{ href: "/", label: "Home" }, ...mainNav, ...secondaryNav.slice(0, 2)].map((item) => (
                    <li key={item.href} className="border-b">
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className="flex items-baseline gap-3 py-3.5 font-serif text-[1.5rem] leading-tight text-ink transition-colors hover:text-evergreen aria-[current=page]:text-evergreen"
                        >
                          {item.label}
                          <span className="leader" aria-hidden />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-1">
                  {secondaryNav.slice(2).map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link href={item.href} className="inline-flex min-h-11 items-center text-ink-soft link-ink">
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                  <li>
                    <a href={site.parentPortal} className="inline-flex min-h-11 items-center text-ink-soft link-ink">
                      Parent portal
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="border-t px-6 py-5">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link href="/schools">
                      Find your school
                      <ArrowRight data-icon="arrow" aria-hidden />
                    </Link>
                  </Button>
                </SheetClose>
                <p className="t-small mt-3 text-center text-ink-soft">
                  Or write to{" "}
                  <a className="link-ink text-evergreen" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
