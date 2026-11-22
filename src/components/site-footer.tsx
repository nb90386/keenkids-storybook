import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { ArrowUpRight } from "lucide-react";
import { mainNav, site } from "@/content/site";

const columns = [
  { title: "The program", links: [...mainNav, { href: "/pricing", label: "Pricing" }] },
  {
    title: "Get in touch",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "/bring-to-your-school", label: "Bring KeenKids to your school" },
      { href: "/careers", label: "Careers" },
    ],
    external: { href: site.parentPortal, label: "Parent portal" },
  },
];

/** The back cover: colophon, every lower-priority destination, and the preview notice. */
export function SiteFooter() {
  return (
    <footer className="on-cloth cloth cloth-flat">
      <div className="shell grid gap-12 pt-16 pb-10 md:grid-cols-12 md:gap-8 md:pt-20">
        <div className="md:col-span-5">
          <Link href="/" aria-label={`${site.name}, home`} className="inline-block rounded-[4px]">
            <Wordmark />
          </Link>
          <p className="mt-5 max-w-[30ch] text-paper/75">
            Hands-on STEAM after-school programs for {site.grades.toLowerCase()} in {site.location}.
          </p>
          <p className="mt-6 space-y-1 text-paper/90">
            <a className="link-ink block w-fit" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="link-ink block w-fit" href={site.instagram.url}>
              {site.instagram.handle} on Instagram
            </a>
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="md:col-span-3 md:col-start-auto">
            <h2 className="font-sans text-[0.875rem] font-semibold text-gold-soft">{col.title}</h2>
            <ul className="mt-4 space-y-1">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-10 items-center text-paper/80 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {"external" in col && col.external ? (
                <li>
                  <a
                    href={col.external.href}
                    className="inline-flex min-h-10 items-center gap-1 text-paper/80 transition-colors hover:text-paper"
                  >
                    {col.external.label}
                    <ArrowUpRight aria-hidden className="size-4 text-gold" />
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        ))}

      </div>

      <div className="shell">
        <div className="flex flex-col gap-3 border-t border-paper/15 py-6 text-[0.875rem] text-paper/65 md:flex-row md:items-baseline md:justify-between">
          <p>© 2026 {site.name}</p>
          <p className="font-serif italic">
            Set in Literata and Figtree. Children&rsquo;s faces in these photographs are softened for their
            privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
