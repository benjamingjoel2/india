/**
 * Data access layer. Pages import from here rather than the raw files, so moving
 * to a CMS later means re-implementing these functions, not touching pages.
 */
import { regions } from "./regions";
import { journeys } from "./journeys";
import { experiences } from "./experiences";
import { stays } from "./stays";
import { festivals } from "./festivals";
import { faqs, faqCategories } from "./faqs";
import { posts } from "./posts";
import { months, monthOrder, monthNames, monthShort } from "./months";
import type { MonthKey, RegionSlug } from "./types";

export { regions, journeys, experiences, stays, festivals, faqs, faqCategories, posts, months, monthOrder, monthNames, monthShort };

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug);
export const getJourney = (slug: string) => journeys.find((j) => j.slug === slug);
export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
export const getStay = (slug: string) => stays.find((s) => s.slug === slug);
export const getFestival = (slug: string) => festivals.find((f) => f.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getMonth = (key: MonthKey) => months.find((m) => m.key === key)!;

export const allDestinations = regions.flatMap((r) => r.destinations);
export const getDestination = (slug: string) => allDestinations.find((d) => d.slug === slug);

export const journeysInRegion = (slug: RegionSlug) => journeys.filter((j) => j.regions.includes(slug));
export const staysInRegion = (slug: RegionSlug) => stays.filter((s) => s.region === slug);
export const experiencesInRegion = (slug: RegionSlug) => experiences.filter((e) => e.regions.includes(slug));
export const festivalsInRegion = (slug: RegionSlug) => festivals.filter((f) => f.regions.includes(slug));

export const featuredJourneys = () => {
  const f = journeys.filter((j) => j.featured);
  return (f.length >= 4 ? f : journeys).slice(0, 4);
};

export const styleLabels: Record<string, string> = {
  classic: "Classic",
  "palaces-heritage": "Palaces & heritage",
  wildlife: "Wildlife",
  wellness: "Wellness",
  spiritual: "Spiritual",
  food: "Food & markets",
  adventure: "Adventure",
  rail: "Rail",
  honeymoon: "Honeymoon",
  family: "Family",
  beaches: "Beaches",
};

/** Plural forms of the stay types, used on tabs ("Palace hotels"). */
export const stayTypePlurals: Record<string, string> = {
  palace: "Palace hotels",
  haveli: "Heritage havelis",
  "safari-lodge": "Tented safari lodges",
  houseboat: "Houseboats",
  homestay: "Himalayan homestays",
  boutique: "Boutique hotels",
  beach: "Beach retreats",
};

export const stayTypeLabels: Record<string, string> = {
  palace: "Palace hotel",
  haveli: "Heritage haveli",
  "safari-lodge": "Tented safari lodge",
  houseboat: "Houseboat",
  homestay: "Himalayan homestay",
  boutique: "Boutique hotel",
  beach: "Beach retreat",
};
