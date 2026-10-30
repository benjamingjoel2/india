/**
 * Site configuration: brand, colours, currencies, contact details and navigation.
 * Brand identity is defined in /data/brand.ts and re-exported here, so the
 * company name can be swapped in one place.
 */
import { brand } from "@/data/brand";
import type { AccentKey } from "@/data/types";

export { brand };

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://musafirtravel.tourground.com";

/* ------------------------------------------------------------------ */
/* Colours                                                             */
/* Mirrored as CSS custom properties in app/globals.css (@theme).      */
/* ------------------------------------------------------------------ */
export const colors = {
  base: {
    ivory: "#F7F1E6",
    ivoryDeep: "#EEE3CF",
    indigo: "#1F2A4D",
    indigoDeep: "#141B33",
    charcoal: "#2B2926",
  },
  accents: {
    marigold: { hex: "#E39B2D", ink: "#2B2926", label: "Marigold" },
    sandstone: { hex: "#D58A7F", ink: "#2B2926", label: "Sandstone pink" },
    kerala: { hex: "#3E7B52", ink: "#F7F1E6", label: "Kerala green" },
    sky: { hex: "#7FA7CC", ink: "#1F2A4D", label: "Ladakh sky" },
    teak: { hex: "#A26A34", ink: "#F7F1E6", label: "Sal-forest teak" },
    peacock: { hex: "#1C6E73", ink: "#F7F1E6", label: "Peacock teal" },
    lagoon: { hex: "#2F8F98", ink: "#F7F1E6", label: "Andaman lagoon" },
    spice: { hex: "#B0442D", ink: "#F7F1E6", label: "Spice red" },
  } satisfies Record<AccentKey, { hex: string; ink: string; label: string }>,
} as const;

/* ------------------------------------------------------------------ */
/* Currencies                                                          */
/* All prices are stored in USD. Rates are indicative placeholders:    */
/* TODO: refresh from a rates API or update before launch.             */
/* ------------------------------------------------------------------ */
export const currencies = {
  USD: { code: "USD", label: "US dollar", symbol: "$", rate: 1, locale: "en-US", round: 10 },
  GBP: { code: "GBP", label: "British pound", symbol: "£", rate: 0.75, locale: "en-GB", round: 10 },
  EUR: { code: "EUR", label: "Euro", symbol: "€", rate: 0.86, locale: "de-DE", round: 10 },
  AUD: { code: "AUD", label: "Australian dollar", symbol: "A$", rate: 1.52, locale: "en-AU", round: 10 },
  CAD: { code: "CAD", label: "Canadian dollar", symbol: "C$", rate: 1.38, locale: "en-CA", round: 10 },
  INR: { code: "INR", label: "Indian rupee", symbol: "₹", rate: 88, locale: "en-IN", round: 500 },
} as const;

export type CurrencyCode = keyof typeof currencies;
export const defaultCurrency: CurrencyCode = "USD";

/* ------------------------------------------------------------------ */
/* Contact & company                                                   */
/* One inbox for guests, trade and press. The site shows no phone,     */
/* WhatsApp, social links or licence/registration numbers.             */
/* ------------------------------------------------------------------ */
export const contact = {
  email: "musafirtravel@tourground.com",
  emailHref: "mailto:musafirtravel@tourground.com",
  replyPromise: "Replies in as little as 15 minutes",
  /** Business address: WeWork Enam Sambhav, the flagship coworking address in Mumbai's Bandra Kurla Complex. */
  address: "WeWork Enam Sambhav, C-20, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051, India",
  postalAddress: {
    streetAddress: "WeWork Enam Sambhav, C-20, G Block, Bandra Kurla Complex, Bandra East",
    addressLocality: "Mumbai",
    postalCode: "400051",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
} as const;

export const company = {
  legalName: brand.name,
} as const;

/* ------------------------------------------------------------------ */
/* Media                                                               */
/* ------------------------------------------------------------------ */
export const media = {
  /**
   * Hero film. Drop optimised files in /public/films and set the paths
   * (H.264 MP4 + WebM, ~8–12 s loop, 1920px, no audio, < 4 MB).
   * While empty, the hero plays a slow cross-faded still sequence instead.
   */
  heroFilm: {
    mp4: "",
    webm: "",
    poster: "varanasi-ghats",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  links: NavLink[];
}

export interface MegaMenu {
  label: string;
  href: string;
  intro: string;
  groups?: NavGroup[];
  links?: NavLink[];
  feature?: { title: string; text: string; href: string; image: string };
}

const region = (slug: string, dests: [string, string][]) =>
  dests.map(([label, d]) => ({ label, href: `/where-to-go/${slug}#${d}` }));

export const navigation: { main: MegaMenu[]; footer: Record<string, NavLink[]>; legal: NavLink[] } = {
  main: [
    {
      label: "Where to go",
      href: "/where-to-go",
      intro: "Seven regions, each with its own light, food and rhythm.",
      groups: [
        { label: "North", href: "/where-to-go/north", links: region("north", [["Delhi", "delhi"], ["Agra", "agra"], ["Varanasi", "varanasi"], ["Rishikesh", "rishikesh"], ["Amritsar", "amritsar"]]) },
        { label: "Rajasthan", href: "/where-to-go/rajasthan", links: region("rajasthan", [["Jaipur", "jaipur"], ["Udaipur", "udaipur"], ["Jodhpur", "jodhpur"], ["Jaisalmer", "jaisalmer"], ["Pushkar", "pushkar"]]) },
        { label: "South", href: "/where-to-go/south", links: region("south", [["Kerala", "kerala"], ["Tamil Nadu", "tamil-nadu"], ["Karnataka", "karnataka"], ["Goa", "goa"]]) },
        { label: "Himalaya", href: "/where-to-go/himalaya", links: region("himalaya", [["Ladakh", "ladakh"], ["Himachal", "himachal"], ["Darjeeling", "darjeeling"], ["Sikkim", "sikkim"]]) },
        { label: "Central India", href: "/where-to-go/central-india", links: region("central-india", [["Ranthambore", "ranthambore"], ["Bandhavgarh", "bandhavgarh"], ["Kanha", "kanha"], ["Tadoba", "tadoba"]]) },
        { label: "East & Northeast", href: "/where-to-go/east-northeast", links: region("east-northeast", [["Kolkata", "kolkata"], ["Meghalaya", "meghalaya"], ["Assam", "assam"], ["Nagaland", "nagaland"]]) },
        { label: "Islands", href: "/where-to-go/islands", links: region("islands", [["Andaman Islands", "andaman-islands"]]) },
      ],
      feature: { title: "When to go", text: "A month-by-month guide to India's seasons and festivals.", href: "/when-to-go", image: "himachal-meadow" },
    },
    {
      label: "Journeys",
      href: "/journeys",
      intro: "Starting points, never set menus. Every journey is shaped around you.",
      links: [
        { label: "Golden Triangle", href: "/journeys/golden-triangle" },
        { label: "Rajasthan palaces", href: "/journeys/rajasthan-palaces" },
        { label: "Kerala backwaters", href: "/journeys/kerala-backwaters" },
        { label: "Tigers & temples", href: "/journeys/tigers-and-temples" },
        { label: "Himalayan adventures", href: "/journeys/himalayan-adventures" },
        { label: "Spiritual India", href: "/journeys/spiritual-india" },
        { label: "Food & markets", href: "/journeys/food-and-markets" },
        { label: "Luxury train journeys", href: "/journeys/luxury-train-journeys" },
        { label: "Honeymoons", href: "/journeys/honeymoon-india" },
        { label: "Family journeys", href: "/journeys/family-india" },
      ],
      feature: { title: "All journeys", text: "Filter by region, length, style, budget and month.", href: "/journeys", image: "udaipur-palace" },
    },
    {
      label: "Experiences",
      href: "/experiences",
      intro: "The moments people remember long after the flight home.",
      links: [
        { label: "Tiger safaris", href: "/experiences/tiger-safaris" },
        { label: "Palace stays", href: "/experiences/palace-stays" },
        { label: "Houseboats", href: "/experiences/kerala-houseboats" },
        { label: "Ayurveda and yoga", href: "/experiences/ayurveda-and-yoga" },
        { label: "Cooking classes", href: "/experiences/cooking-classes" },
        { label: "Block printing and textiles", href: "/experiences/block-printing-and-textiles" },
        { label: "Ganges evening aarti", href: "/experiences/ganges-evening-aarti" },
        { label: "Street food walks", href: "/experiences/street-food-walks" },
        { label: "Himalayan treks", href: "/experiences/himalayan-treks" },
        { label: "Festivals", href: "/festivals" },
      ],
      feature: { title: "Where to stay", text: "Palaces, havelis, safari lodges and houseboats we know well.", href: "/stays", image: "lodge-pool" },
    },
    {
      label: "About",
      href: "/about",
      intro: "A small team of specialists and the guides we've travelled with for years.",
      links: [
        { label: "Our story", href: "/about" },
        { label: "Responsible travel", href: "/responsible-travel" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
        { label: "Journal", href: "/journal" },
      ],
    },
  ],
  footer: {
    Journeys: [
      { label: "Golden Triangle", href: "/journeys/golden-triangle" },
      { label: "Rajasthan palaces", href: "/journeys/rajasthan-palaces" },
      { label: "Kerala backwaters", href: "/journeys/kerala-backwaters" },
      { label: "Tigers & temples", href: "/journeys/tigers-and-temples" },
      { label: "Honeymoons", href: "/journeys/honeymoon-india" },
      { label: "All journeys", href: "/journeys" },
    ],
    "Where to go": [
      { label: "North India", href: "/where-to-go/north" },
      { label: "Rajasthan", href: "/where-to-go/rajasthan" },
      { label: "South India", href: "/where-to-go/south" },
      { label: "Himalaya", href: "/where-to-go/himalaya" },
      { label: "Central India", href: "/where-to-go/central-india" },
      { label: "East & Northeast", href: "/where-to-go/east-northeast" },
      { label: "Andaman Islands", href: "/where-to-go/islands" },
    ],
    About: [
      { label: "Our story", href: "/about" },
      { label: "Responsible travel", href: "/responsible-travel" },
      { label: "Contact", href: "/contact" },
    ],
    Resources: [
      { label: "When to go", href: "/when-to-go" },
      { label: "Festivals", href: "/festivals" },
      { label: "Where to stay", href: "/stays" },
      { label: "Experiences", href: "/experiences" },
      { label: "FAQ", href: "/faq" },
      { label: "Journal", href: "/journal" },
    ],
  },
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Booking Terms", href: "/legal/booking-conditions" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export const accentHex = (key: AccentKey) => colors.accents[key].hex;
