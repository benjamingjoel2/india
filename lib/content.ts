/**
 * Localized content for Server Components. Every data file in /data is English; this wraps
 * the same accessors as /data/index.ts and returns copies translated into the page's locale
 * (English-keyed dictionaries in /i18n). Swap these for CMS calls later.
 */
import * as data from "@/data";
import { legalDocs, legalUpdated } from "@/data/legal";
import { images } from "@/data/images";
import { brand, contact, navigation } from "@/config/site";
import type { MonthKey, RegionSlug } from "@/data/types";
import type { Locale } from "@/lib/i18n/config";
import { getLocale, localize } from "@/lib/i18n/server";

function build(locale: Locale) {
  const L = <T,>(v: T) => localize(v, locale);
  const regions = L(data.regions);
  const journeys = L(data.journeys);
  const experiences = L(data.experiences);
  const stays = L(data.stays);
  const festivals = L(data.festivals);
  const faqs = L(data.faqs);
  const posts = L(data.posts);
  const months = L(data.months);
  const allDestinations = regions.flatMap((r) => r.destinations);
  const featured = journeys.filter((j) => j.featured);
  return {
    locale,
    regions,
    journeys,
    experiences,
    stays,
    festivals,
    faqs,
    faqCategories: faqs.reduce<string[]>((acc, f) => (acc.includes(f.category) ? acc : [...acc, f.category]), []),
    posts,
    months,
    monthOrder: data.monthOrder,
    monthNames: L(data.monthNames),
    monthShort: L(data.monthShort),
    styleLabels: L(data.styleLabels),
    stayTypeLabels: L(data.stayTypeLabels),
    stayTypePlurals: L(data.stayTypePlurals),
    legalDocs: L(legalDocs),
    legalUpdated: L(legalUpdated),
    images: L(images),
    brand: L(brand),
    contact: L(contact),
    navigation: L(navigation),
    allDestinations,
    getRegion: (slug: string) => regions.find((r) => r.slug === slug),
    getJourney: (slug: string) => journeys.find((j) => j.slug === slug),
    getExperience: (slug: string) => experiences.find((e) => e.slug === slug),
    getStay: (slug: string) => stays.find((s) => s.slug === slug),
    getFestival: (slug: string) => festivals.find((f) => f.slug === slug),
    getPost: (slug: string) => posts.find((p) => p.slug === slug),
    getMonth: (key: MonthKey) => months.find((m) => m.key === key)!,
    getDestination: (slug: string) => allDestinations.find((d) => d.slug === slug),
    getLegalDoc: (slug: string) => L(legalDocs).find((d) => d.slug === slug),
    journeysInRegion: (slug: RegionSlug) => journeys.filter((j) => j.regions.includes(slug)),
    staysInRegion: (slug: RegionSlug) => stays.filter((s) => s.region === slug),
    experiencesInRegion: (slug: RegionSlug) => experiences.filter((e) => e.regions.includes(slug)),
    festivalsInRegion: (slug: RegionSlug) => festivals.filter((f) => f.regions.includes(slug)),
    featuredJourneys: () => (featured.length >= 4 ? featured : journeys).slice(0, 4),
  };
}

export type Content = ReturnType<typeof build>;

const cache = new Map<Locale, Content>();

export function contentFor(locale: Locale): Content {
  let c = cache.get(locale);
  if (!c) cache.set(locale, (c = build(locale)));
  return c;
}

/** Content in the current page's language. */
export async function getContent(): Promise<Content> {
  return contentFor(await getLocale());
}
