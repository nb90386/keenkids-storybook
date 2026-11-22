import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Preview deployments are never indexed. Production sets NEXT_PUBLIC_SITE_INDEXABLE=true. */
export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
