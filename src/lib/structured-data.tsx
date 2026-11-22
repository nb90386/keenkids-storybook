import { faqs } from "@/content/faqs";
import { site } from "@/content/site";

/**
 * Structured data uses only verified facts: no street address, hours, phone,
 * ratings or reviews are published by KeenKids, so none appear here.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    sameAs: [site.instagram.url],
    areaServed: { "@type": "City", name: "Milpitas", containedInPlace: { "@type": "State", name: "California" } },
    founder: [
      { "@type": "Person", name: "Anjana Venkat" },
      { "@type": "Person", name: "Shilpa Javli" },
    ],
    audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Grades 1–5 (ages 6–11)" },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replaceAll("{contact}", "contact us") },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped cannot break out of the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
