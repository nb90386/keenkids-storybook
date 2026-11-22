import type { MetadataRoute } from "next";
import { schools } from "@/content/schools";
import { site } from "@/content/site";

const routes = ["", "/programs", "/schools", "/pricing", "/about", "/faq", "/contact", "/bring-to-your-school", "/careers"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}` })),
    ...schools.map((s) => ({ url: `${site.url}/schools/${s.slug}` })),
  ];
}
