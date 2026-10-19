/**
 * Brand identity: the single place to rename the company.
 * Everything that prints the brand name, meaning, tagline or logo text reads from here
 * (via /config/site.ts), so swapping the name is a one-file change.
 */
export const brand = {
  name: "Musafir Travel",
  shortName: "Musafir",
  /** Logo lockup: primary word set in the serif, secondary word in tracked small caps. */
  logo: {
    primary: "Musafir",
    secondary: "Travel",
  },
  meaning:
    "Musafir means traveler in Hindi and Urdu: someone on a long, curious journey, open to whatever the road brings.",
  /** The name in its source scripts and a pronunciation guide, shown in the name-meaning statement. */
  scripts: { devanagari: "मुसाफ़िर", urdu: "مسافر", pronunciation: "mu·saa·fir" },
  tagline: "Every journey needs a traveler.",
  /** Same tagline with the emphasised word marked for the display heading component. */
  taglineDisplay: "Every journey needs a *traveler*.",
  promise: "India, beautifully planned, by people who know it personally.",
  description:
    "Tailor-made journeys across India, from Rajasthan's palaces to Kerala's backwaters, the Himalaya to the tiger forests of central India, planned by one dedicated specialist and guided by people who call these places home.",
  /** Placeholder: replace with the founding year. */
  established: "[YEAR]",
} as const;

export type Brand = typeof brand;
