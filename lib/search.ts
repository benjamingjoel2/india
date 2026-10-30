import { experiences, festivals, journeys, posts, regions, stays, allDestinations, faqs } from "@/data";
import { stripEmphasis } from "@/components/ui/Display";

export interface SearchItem {
  type: "Region" | "Destination" | "Journey" | "Experience" | "Festival" | "Stay" | "Journal" | "FAQ" | "Page";
  title: string;
  text: string;
  href: string;
  keywords: string;
}

/** Built at render time on the server and passed to the client overlay. */
export function buildSearchIndex(): SearchItem[] {
  const pages: SearchItem[] = [
    { type: "Page", title: "Plan my journey", text: "Tell us about your trip in five short steps.", href: "/plan-my-journey", keywords: "enquire quote planner" },
    { type: "Page", title: "When to go", text: "India month by month: seasons and festivals.", href: "/when-to-go", keywords: "weather season monsoon month" },
    { type: "Page", title: "Responsible travel", text: "How we travel respectfully and support local communities.", href: "/responsible-travel", keywords: "ethics sustainability wildlife" },
    { type: "Page", title: "Contact", text: "Talk to a specialist.", href: "/contact", keywords: "email contact" },
    { type: "Page", title: "About us", text: "Our story and team.", href: "/about", keywords: "team story specialist" },
  ];
  return [
    ...regions.map((r) => ({ type: "Region" as const, title: r.name, text: r.summary, href: `/where-to-go/${r.slug}`, keywords: r.destinations.map((d) => d.name).join(" ") })),
    ...allDestinations.map((d) => ({ type: "Destination" as const, title: d.name, text: d.summary, href: `/where-to-go/${d.region}#${d.slug}`, keywords: d.knownFor.join(" ") })),
    ...journeys.map((j) => ({ type: "Journey" as const, title: j.title, text: `${j.days} days · ${j.summary}`, href: `/journeys/${j.slug}`, keywords: `${j.highlights.join(" ")} ${j.styles.join(" ")}` })),
    ...experiences.map((e) => ({ type: "Experience" as const, title: e.title, text: e.summary, href: `/experiences/${e.slug}`, keywords: `${e.where} ${e.category}` })),
    ...festivals.map((f) => ({ type: "Festival" as const, title: f.name, text: f.summary, href: `/festivals/${f.slug}`, keywords: f.where })),
    ...stays.map((s) => ({ type: "Stay" as const, title: s.name, text: `${s.location} · ${s.summary}`, href: `/stays/${s.slug}`, keywords: `${s.type} ${s.location}` })),
    ...posts.map((p) => ({ type: "Journal" as const, title: p.title, text: p.excerpt, href: `/journal/${p.slug}`, keywords: p.category })),
    ...faqs.map((f) => ({ type: "FAQ" as const, title: f.question, text: f.answer[0], href: `/faq#${f.id}`, keywords: f.category })),
    ...pages,
  ].map((i) => ({ ...i, title: stripEmphasis(i.title) }));
}
