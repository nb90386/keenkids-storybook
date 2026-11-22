import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Brygada_1918, Figtree } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

// Brygada 1918: a contemporary revival of a 1918 book face — literary, warm, with a real italic.
const brygada = Brygada_1918({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KeenKids Enrichment · Hands-on STEAM after school in Milpitas",
    template: "%s · KeenKids Enrichment",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: "KeenKids Enrichment · A little more wonder after the bell",
    description: site.description,
  },
  robots: site.indexable
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#23453a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${brygada.variable} ${figtree.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="fixed top-2 left-2 z-50 -translate-y-24 rounded-[6px] bg-paper px-4 py-3 font-semibold text-evergreen shadow-lift transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <PreviewNotice />
        <SiteHeader />
        <main id="main" className="flex-1">
          {/* Route changes crossfade with a short rise; unsupported browsers simply swap. */}
          <ViewTransition default="page">{children}</ViewTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

/** Tells client reviewers which actions are real in this preview. */
function PreviewNotice() {
  return (
    <div className="bg-evergreen-deep text-paper/80">
      <p className="shell py-2 text-center text-[0.8125rem] leading-snug">
        <span className="font-semibold text-gold">Design preview.</span> Enrollment buttons open the real
        school forms. Payment buttons are switched off.
      </p>
    </div>
  );
}
