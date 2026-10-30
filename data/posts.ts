import type { Post } from "./types";

/** Journal posts, newest first. Bodies live in /content/journal/<slug>.mdx. */
export const posts: Post[] = [
  {
    slug: "best-of-india-first-trip",
    title: "The best of India for a first trip",
    headline: "The best of India for a *first* trip.",
    excerpt:
      "Where to begin in a country this big? How to give a first journey a clear shape, from Delhi, Agra and Rajasthan to the gentler rhythms of Kerala.",
    date: "2026-09-18",
    readingMinutes: 6,
    image: "taj-arch",
    category: "First-timers",
    seo: {
      title: "The Best of India for a First Trip",
      description:
        "Planning your first trip to India? How to choose a route, set a pace and when to go, from the Taj Mahal and Rajasthan to Kerala's backwaters and beyond.",
    },
  },
  {
    slug: "rajasthan-vs-kerala",
    title: "Rajasthan or Kerala? How to choose",
    headline: "Rajasthan or Kerala? How to *choose*.",
    excerpt:
      "Desert forts and palaces, or backwaters and tea hills? An honest comparison of pace, seasons, food and style, and why the answer might be both.",
    date: "2026-08-27",
    readingMinutes: 5,
    image: "kerala-houseboat",
    category: "Where to go",
    seo: {
      title: "Rajasthan or Kerala? How to Choose",
      description:
        "Rajasthan or Kerala for your India trip? We compare pace, seasons, food, stays and travel time to help you choose, or combine both in one journey.",
    },
  },
  {
    slug: "how-to-see-tigers-in-the-wild",
    title: "How to see tigers in the wild",
    headline: "How to see tigers in the *wild*.",
    excerpt:
      "The best parks, the best months and why five or six safaris beat one or two. Our practical guide to seeing a wild tiger in India, and watching well.",
    date: "2026-07-30",
    readingMinutes: 6,
    image: "tiger",
    category: "Wildlife",
    seo: {
      title: "How to See Tigers in the Wild in India",
      description:
        "Where and when to see wild tigers in India: Ranthambore, Bandhavgarh, Kanha and Tadoba, plus permits, jeep safaris, ethics and how many drives to plan.",
    },
  },
  {
    slug: "guide-to-indias-festivals",
    title: "A traveler's guide to India's festivals",
    headline: "A traveler's guide to India's *festivals*.",
    excerpt:
      "Diwali, Holi, Durga Puja, the Pushkar Camel Fair and more: when they typically fall, how to take part respectfully and why booking early matters.",
    date: "2026-06-12",
    readingMinutes: 6,
    image: "golden-temple-dusk",
    category: "Festivals",
    seo: {
      title: "A Traveler's Guide to India's Festivals",
      description:
        "Plan a trip around Diwali, Holi, Durga Puja, Pushkar, Hornbill or Hemis: typical months, how to celebrate respectfully and why you should verify dates.",
    },
  },
];
