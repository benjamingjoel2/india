import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { experiences, festivals, journeys, posts, regions, stays } from "@/data";
import { locales, localizeHref } from "@/lib/i18n/config";

/** Every page in every language, each entry listing its hreflang alternates (x-default = English). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = ["/", "/where-to-go", "/journeys", "/experiences", "/festivals", "/stays", "/when-to-go", "/responsible-travel", "/about", "/faq", "/contact", "/journal", "/plan-my-journey"];
  const pages: { path: string; priority: number; lastModified?: Date }[] = [
    ...statics.map((p) => ({ path: p, priority: p === "/" ? 1 : 0.8 })),
    ...regions.map((r) => ({ path: `/where-to-go/${r.slug}`, priority: 0.8 })),
    ...journeys.map((j) => ({ path: `/journeys/${j.slug}`, priority: 0.8 })),
    ...experiences.map((e) => ({ path: `/experiences/${e.slug}`, priority: 0.7 })),
    ...festivals.map((f) => ({ path: `/festivals/${f.slug}`, priority: 0.7 })),
    ...stays.map((s) => ({ path: `/stays/${s.slug}`, priority: 0.6 })),
    ...posts.map((p) => ({ path: `/journal/${p.slug}`, priority: 0.6, lastModified: new Date(p.date) })),
  ];
  const url = (path: string, l: (typeof locales)[number]) => `${siteUrl}${localizeHref(path, l) === "/" ? "" : localizeHref(path, l)}`;
  return pages.flatMap(({ path, priority, lastModified }) => {
    const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, url(path, l)]));
    languages["x-default"] = url(path, "en");
    return locales.map((l) => ({
      url: url(path, l),
      lastModified: lastModified ?? now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
