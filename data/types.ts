/**
 * Content model. Every page is generated from data typed here, so the same
 * shapes can later be mapped 1:1 onto CMS collections.
 *
 * Display strings that support emphasis use `*word*` to mark the ONE italic word
 * (e.g. "Where to *wander*."), rendered by <Display />.
 */
import type { ImageKey } from "./images";

export type MonthKey =
  | "jan" | "feb" | "mar" | "apr" | "may" | "jun"
  | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";

export type RegionSlug =
  | "north"
  | "rajasthan"
  | "south"
  | "himalaya"
  | "central-india"
  | "east-northeast"
  | "islands";

/** Accent palette keys; hex values live in /config/site.ts. */
export type AccentKey =
  | "marigold"
  | "sandstone"
  | "kerala"
  | "sky"
  | "teak"
  | "peacock"
  | "lagoon"
  | "spice";

/** How good a month is for a place. */
export type Season = "peak" | "good" | "shoulder" | "avoid";

export type SeasonCalendar = Record<MonthKey, Season>;

export interface Seo {
  title: string;
  description: string;
}

export interface Highlight {
  title: string;
  text: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: RegionSlug;
  summary: string;
  knownFor: string[];
  image?: ImageKey;
}

export interface Region {
  slug: RegionSlug;
  name: string;
  /** Short label used in navigation, e.g. "Central India". */
  navLabel: string;
  /** Display heading with one *italic* word. */
  headline: string;
  summary: string;
  overview: string[];
  accent: AccentKey;
  image: ImageKey;
  gallery: ImageKey[];
  highlights: Highlight[];
  bestTime: {
    summary: string;
    calendar: SeasonCalendar;
  };
  destinations: Destination[];
  /** Region-specific FAQs shown on the region page. */
  faqs: { question: string; answer: string }[];
  seo: Seo;
}

export type JourneyStyle =
  | "classic"
  | "palaces-heritage"
  | "wildlife"
  | "wellness"
  | "spiritual"
  | "food"
  | "adventure"
  | "rail"
  | "honeymoon"
  | "family"
  | "beaches";

export interface ItineraryDay {
  /** "1" or a range such as "4–5". */
  day: string;
  title: string;
  location: string;
  description: string;
  overnight?: string;
  /** e.g. "Breakfast", "Breakfast, dinner" */
  meals?: string;
}

export interface JourneyStayNight {
  nights: string; // "Nights 1–2"
  location: string;
  name: string;
  /** Link to a /stays entry when we have one. */
  staySlug?: string;
}

export interface Journey {
  slug: string;
  title: string;
  /** Display heading with one *italic* word. */
  headline: string;
  summary: string;
  overview: string[];
  days: number;
  regions: RegionSlug[];
  /** Destination slugs from regions.ts, in travel order. */
  route: string[];
  styles: JourneyStyle[];
  /** Base price per person in USD, sharing a double room. */
  priceFromUSD: number;
  bestMonths: MonthKey[];
  image: ImageKey;
  highlights: string[]; // 3–4
  itinerary: ItineraryDay[];
  stays: JourneyStayNight[];
  guides: string;
  inclusions: string[];
  exclusions: string[];
  pricingNotes: string[];
  featured?: boolean;
  seo: Seo;
}

export type ExperienceCategory =
  | "wildlife"
  | "heritage"
  | "water"
  | "wellness"
  | "food"
  | "craft"
  | "spiritual"
  | "adventure"
  | "culture";

export interface Experience {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  description: string[];
  category: ExperienceCategory;
  regions: RegionSlug[];
  /** Human-readable places, e.g. "Ranthambore, Kanha". */
  where: string;
  duration: string;
  bestMonths: MonthKey[];
  image: ImageKey;
  whatToKnow: string[];
  /** Responsible-travel note specific to this experience. */
  ethics?: string;
  relatedJourneys: string[];
  seo: Seo;
}

export type StayType =
  | "palace"
  | "haveli"
  | "safari-lodge"
  | "houseboat"
  | "homestay"
  | "boutique"
  | "beach";

export interface Stay {
  slug: string;
  /** Placeholder name; replace with the real property. */
  name: string;
  type: StayType;
  region: RegionSlug;
  location: string;
  summary: string;
  description: string[];
  image: ImageKey;
  /** Base price per room per night in USD. */
  priceFromUSD: number;
  rooms: number;
  features: string[];
  whyWeLoveIt: string;
  seo: Seo;
}

export interface Festival {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  description: string[];
  /** Months the festival typically falls in. Dates vary yearly. */
  typicalMonths: MonthKey[];
  typicalTiming: string;
  where: string;
  regions: RegionSlug[];
  image: ImageKey;
  tips: string[];
  relatedJourneys: string[];
  seo: Seo;
}

export type PersonKind = "founder" | "specialist" | "guide";

export interface Person {
  id: string;
  /** Placeholder name; replace with the real person. */
  name: string;
  role: string;
  kind: PersonKind;
  base: string;
  languages: string[];
  bio: string[];
  quote: string;
  specialties: string[];
  /** Optional photo; a designed placeholder portrait is shown when absent. */
  image?: ImageKey;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  from: string;
  journey: string; // journey slug
  traveled: string; // "March 2026"
  /** Always true for seed content: these are not real reviews. */
  placeholder: true;
}

export type FaqCategory =
  | "Before you go"
  | "When to travel"
  | "Health and safety"
  | "Food"
  | "Culture"
  | "Getting around"
  | "Wildlife"
  | "Money"
  | "Booking";

export interface Faq {
  id: string;
  question: string;
  answer: string[];
  category: FaqCategory;
  /** Shown as a "verify" flag when the answer depends on rules that change. */
  verifyNote?: string;
}

export interface MonthGuide {
  key: MonthKey;
  name: string;
  summary: string;
  weather: string;
  bestRegions: RegionSlug[];
  /** Place names to call out, e.g. "Ladakh", "Kerala for Ayurveda". */
  picks: string[];
  /** Festival slugs that typically fall in this month. */
  festivals: string[];
  /** Other notable events (names only), dates vary yearly. */
  otherEvents: string[];
  watchOut?: string;
}

export interface Post {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  date: string; // ISO
  author: string; // person id
  readingMinutes: number;
  image: ImageKey;
  category: string;
  seo: Seo;
}
