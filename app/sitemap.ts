import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { experiences, festivals, journeys, posts, regions, stays } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = ["", "/where-to-go", "/journeys", "/experiences", "/festivals", "/stays", "/when-to-go", "/responsible-travel", "/about", "/our-guides", "/testimonials", "/faq", "/contact", "/journal", "/plan-my-journey"];
  const entry = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: "monthly", priority });
  return [
    ...statics.map((p) => entry(p, p === "" ? 1 : 0.8)),
    ...regions.map((r) => entry(`/where-to-go/${r.slug}`, 0.8)),
    ...journeys.map((j) => entry(`/journeys/${j.slug}`, 0.8)),
    ...experiences.map((e) => entry(`/experiences/${e.slug}`)),
    ...festivals.map((f) => entry(`/festivals/${f.slug}`)),
    ...stays.map((s) => entry(`/stays/${s.slug}`, 0.6)),
    ...posts.map((p) => ({ ...entry(`/journal/${p.slug}`, 0.6), lastModified: new Date(p.date) })),
  ];
}
