import { contentFor } from "@/lib/content";
import { translator } from "@/lib/i18n/server";
import type { Locale } from "@/lib/i18n/config";
import { stripEmphasis } from "@/components/ui/Display";

export interface SearchItem {
  /** Translated label of the result type ("Journey", "Voyage"…). */
  type: string;
  title: string;
  text: string;
  href: string;
  keywords: string;
}

/** Built at build time per locale and fetched by the client overlay from /[locale]/search-index.json. */
export function buildSearchIndex(locale: Locale): SearchItem[] {
  const t = translator(locale);
  const { regions, allDestinations, journeys, experiences, festivals, stays, posts, faqs } = contentFor(locale);
  const pages: SearchItem[] = [
    { type: t("Page"), title: t("Plan my journey"), text: t("Tell us about your trip in five short steps."), href: "/plan-my-journey", keywords: t("enquire quote planner") },
    { type: t("Page"), title: t("When to go"), text: t("India month by month: seasons and festivals."), href: "/when-to-go", keywords: t("weather season monsoon month") },
    { type: t("Page"), title: t("Responsible travel"), text: t("How we travel respectfully and support local communities."), href: "/responsible-travel", keywords: t("ethics sustainability wildlife") },
    { type: t("Page"), title: t("Contact"), text: t("Talk to a specialist."), href: "/contact", keywords: t("email contact") },
    { type: t("Page"), title: t("About us"), text: t("Our story and how we work."), href: "/about", keywords: t("story specialist") },
  ];
  return [
    ...regions.map((r) => ({ type: t("Region"), title: r.name, text: r.summary, href: `/where-to-go/${r.slug}`, keywords: r.destinations.map((d) => d.name).join(" ") })),
    ...allDestinations.map((d) => ({ type: t("Destination"), title: d.name, text: d.summary, href: `/where-to-go/${d.region}#${d.slug}`, keywords: d.knownFor.join(" ") })),
    ...journeys.map((j) => ({ type: t("Journey"), title: j.title, text: `${t("{n} days", { n: j.days })} · ${j.summary}`, href: `/journeys/${j.slug}`, keywords: `${j.highlights.join(" ")} ${j.styles.join(" ")}` })),
    ...experiences.map((e) => ({ type: t("Experience"), title: e.title, text: e.summary, href: `/experiences/${e.slug}`, keywords: `${e.where} ${e.category}` })),
    ...festivals.map((f) => ({ type: t("Festival"), title: f.name, text: f.summary, href: `/festivals/${f.slug}`, keywords: f.where })),
    ...stays.map((s) => ({ type: t("Stay"), title: s.name, text: `${s.location} · ${s.summary}`, href: `/stays/${s.slug}`, keywords: `${s.type} ${s.location}` })),
    ...posts.map((p) => ({ type: t("Journal"), title: p.title, text: p.excerpt, href: `/journal/${p.slug}`, keywords: p.category })),
    ...faqs.map((f) => ({ type: t("FAQ"), title: f.question, text: f.answer[0], href: `/faq#${f.id}`, keywords: f.category })),
    ...pages,
  ].map((i) => ({ ...i, title: stripEmphasis(i.title) }));
}
