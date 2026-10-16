/**
 * Image library. Content references images by key so photos can be swapped
 * (or moved to a CMS/DAM) without touching any page or data file.
 *
 * Current photos are from Unsplash (free to use under the Unsplash License).
 * Replace with the company's own photography before launch.
 * Keys without a photo of the exact subject reuse the closest match and are
 * marked "stand-in" so they're easy to find.
 */
export interface ImageAsset {
  src: string;
  alt: string;
}

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const images = {
  // North
  "taj-arch": { src: u("1548013146-72479768bada"), alt: "The Taj Mahal framed by a carved sandstone archway at first light" },
  "taj-gardens": { src: u("1524492412937-b28074a5d7da"), alt: "The Taj Mahal reflected in the long water channel of its gardens" },
  "taj-reflection": { src: u("1532664189809-02133fee698d"), alt: "The Taj Mahal mirrored in still water" },
  "taj-dusk": { src: u("1585506942812-e72b29cef752"), alt: "The Taj Mahal at dusk under a soft orange sky" },
  "taj-trees": { src: u("1585135497273-1a86b09fe70e"), alt: "The Taj Mahal glimpsed through trees from the gardens" },
  "varanasi-ghats": { src: u("1571536802807-30451e3955d8"), alt: "Wooden boats moored below the ghats of Varanasi at dusk" },
  "golden-temple-dusk": { src: u("1514222134-b57cbb8ce073"), alt: "The Golden Temple in Amritsar glowing at dusk across the sacred pool" },
  "golden-temple-day": { src: u("1609947017136-9daf32a5eb16"), alt: "The gilded Harmandir Sahib in Amritsar on a clear morning" },
  "humayun-tomb": { src: u("1515091943-9d5c0ad475af"), alt: "Humayun's Tomb in Delhi framed by palms in hazy golden light" },
  "india-gate": { src: u("1587474260584-136574528ed5"), alt: "India Gate in New Delhi under a violet evening sky" },
  "delhi-avenue": { src: u("1592639296346-560c37a0f711"), alt: "Auto-rickshaws on a broad avenue in New Delhi" },
  "himalaya-river": { src: u("1609920658906-8223bd289001"), alt: "A clear mountain river tumbling through pine forest in the foothills" },

  // Rajasthan
  "hawa-mahal": { src: u("1477587458883-47145ed94245"), alt: "The pink sandstone facade of the Hawa Mahal in Jaipur" },
  "amber-fort": { src: u("1599661046289-e31897846e41"), alt: "Amber Fort above Maota Lake in warm golden-hour light" },
  "udaipur-palace": { src: u("1615836245337-f5b9b2303f10"), alt: "Udaipur's City Palace rising above Lake Pichola with a boat in the foreground" },

  // South
  "kerala-houseboat": { src: u("1593693397690-362cb9666fc2"), alt: "A traditional kettuvallam houseboat on the Kerala backwaters" },
  "kerala-backwater-palms": { src: u("1602216056096-3b40cc0c9944"), alt: "A houseboat passing coconut palms on a Kerala canal" },
  "kerala-canoe": { src: u("1590050752117-238cb0fb12b1"), alt: "The bow of a canoe gliding down a palm-lined canal at sunrise" },
  "kerala-village-boat": { src: u("1506461883276-594a12b11cf3"), alt: "A boatman poling past a houseboat in a quiet Kerala village" },
  "mysore-palace": { src: u("1590766940554-634a7ed41450"), alt: "Mysore Palace with its domes and arches at dusk" },
  "karnataka-heritage": { src: u("1588416936097-41850ab3d86d"), alt: "A domed heritage building in Karnataka across green lawns" },
  "tropical-pool": { src: u("1563911302283-d2bc129e7570"), alt: "A palm-fringed pool and thatched pavilions at a beach retreat (stand-in)" },

  // Himalaya
  "ladakh-road": { src: u("1581793745862-99fde7fa73d2"), alt: "A motorcycle on an empty road through Ladakh's high desert valleys" },
  "himalaya-stupa": { src: u("1544735716-392fe2489ffa"), alt: "A whitewashed stupa below snow peaks in the eastern Himalaya" },
  "himachal-meadow": { src: u("1598091383021-15ddea10925d"), alt: "A horse grazing in an alpine meadow below snowy Himalayan ridges" },
  "himachal-ridge": { src: u("1605649487212-47bdab064df7"), alt: "Forested Himalayan ridgelines fading into mist" },
  "shimla-town": { src: u("1597074866923-dc0589150358"), alt: "A hill town spilling down a forested slope in Himachal Pradesh" },
  "snow-trek": { src: u("1626621341517-bbf3d9990a23"), alt: "Trekkers climbing a snowy Himalayan ridge above a sea of clouds" },
  "trek-trail": { src: u("1551632811-561732d1e306"), alt: "Two trekkers with packs on a mountain trail (stand-in)" },
  "valley-clouds": { src: u("1580193769210-b8d1c049a7d9"), alt: "Clouds pouring through green hill valleys at sunrise (stand-in)" },

  // Central India & wildlife
  "tiger": { src: u("1561731216-c3a4d99437d5"), alt: "A Bengal tiger walking toward the camera" },
  "elephant-forest": { src: u("1549366021-9f761d450615"), alt: "An elephant emerging from dense green forest" },

  // East
  "victoria-memorial": { src: u("1558431382-27e303142255"), alt: "The white marble Victoria Memorial in Kolkata under a bright sky" },

  // West / Mumbai (used for gateways and stand-ins)
  "gateway-of-india": { src: u("1570168007204-dfb528c6958f"), alt: "The Gateway of India in Mumbai under a pink sunset sky" },

  // Islands & beaches
  "andaman-beach": { src: u("1512343879784-a960bf40e7f2"), alt: "Turquoise water and a palm-lined beach (stand-in for the Andaman Islands)" },

  // Stays
  "lodge-pool": { src: u("1566073771259-6a8506099945"), alt: "A timber lodge with a pool deck at golden hour (stand-in)" },
  "heritage-room": { src: u("1582719478250-c89cae4dc85b"), alt: "A calm hotel room with dark wood and white linen (stand-in)" },
  "infinity-pool": { src: u("1571003123894-1f0594d2b5d9"), alt: "A curtained poolside pavilion at a luxury hotel (stand-in)" },
  "palm-pool": { src: u("1600011689032-8b628b8a8747"), alt: "A pool reflecting palm trees at sunset (stand-in)" },
  "night-pool": { src: u("1542314831-068cd1dbfeeb"), alt: "A pool lit at night in front of a grand hotel (stand-in)" },
  "safari-tent": { src: u("1504280390367-361c6d9f38f4"), alt: "The view from inside a tent toward a forest (stand-in)" },

  // Food, craft, wellness
  "spice-bowls": { src: u("1532336414038-cf19250c5757"), alt: "Bowls of whole spices on a market table" },
  "spices-flatlay": { src: u("1596040033229-a9821ebd058d"), alt: "Whole spices, chillies and garlic laid out on white wood" },
  "curry-thali": { src: u("1585937421612-70a008356fbe"), alt: "Bowls of curry and rice served together" },
  "samosa": { src: u("1601050690597-df0568f70950"), alt: "Samosas with green chutney on a wooden board" },
  "biryani": { src: u("1631515243349-e0cb75fb8d3a"), alt: "A bowl of biryani with raita and salan" },
  "yoga-dawn": { src: u("1506126613408-eca07ce68773"), alt: "A person meditating on a wooden deck at sunrise" },
  "yoga-silhouette": { src: u("1544367567-0f2fcb009e0b"), alt: "A yoga pose silhouetted against a pastel sunset" },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

export function getImage(key: ImageKey): ImageAsset {
  return images[key];
}
