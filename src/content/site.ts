// Verified business facts. Source: docs/CONTENT_INVENTORY.md (audited 2026-11-10).

export const site = {
  name: "KeenKids Enrichment",
  shortName: "KeenKids",
  description:
    "Hands-on STEAM after-school programs for grades 1–5 in Milpitas, California. Building, science, coding with Scratch, public speaking and free exploration, right on campus.",
  location: "Milpitas, California",
  grades: "Grades 1–5",
  ages: "Ages 6–11",
  email: "keenkidsinfo@gmail.com",
  instagram: {
    handle: "@keenkids.enrichment",
    url: "https://www.instagram.com/keenkids.enrichment/",
  },
  parentPortal: "https://keenkids-enrichment.vercel.app/auth/login",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://keenkids-storybook-preview.vercel.app",
  /** Preview builds are never indexed. Set to "true" only on the production domain. */
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true",
} as const;

/**
 * In the design preview, payment buttons explain where they lead instead of
 * opening live Stripe checkout. Set NEXT_PUBLIC_PAYMENTS_LIVE=true at launch.
 */
export const paymentsLive = process.env.NEXT_PUBLIC_PAYMENTS_LIVE === "true";

export const mainNav = [
  { href: "/programs", label: "Programs" },
  { href: "/schools", label: "Schools" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQs" },
] as const;

export const secondaryNav = [
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/bring-to-your-school", label: "Bring KeenKids to your school" },
  { href: "/careers", label: "Careers" },
] as const;

export const mailto = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
};
