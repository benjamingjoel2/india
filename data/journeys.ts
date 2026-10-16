/**
 * Signature journeys. Each is a starting point that a specialist tailors:
 * dates, pace, hotels and guides all change to suit the traveler.
 *
 * Property names marked "(placeholder)" stand in for real hotels; prices are
 * indicative per person, sharing a double room, in USD.
 */
import type { Journey } from "./types";

/** Inclusions common to every journey; each journey adds its own specifics. */
const coreInclusions = [
  "Accommodation as listed, with daily breakfast",
  "Private air-conditioned car and driver throughout",
  "Airport arrival and departure transfers",
  "English-speaking local guides for all sightseeing in the itinerary",
  "Entry fees to monuments and parks in the itinerary",
  "24/7 WhatsApp support from your specialist before and during your trip",
];

/** Exclusions common to every journey; each journey adds its own specifics. */
const coreExclusions = [
  "International flights to and from India",
  "India e-Visa fees",
  "Travel insurance (required for all travelers)",
  "Lunches and dinners unless stated",
  "Tips for guides and drivers",
  "Camera and video fees where charged",
  "Personal expenses such as laundry, drinks and shopping",
];

const sharingNote = "Price is per person sharing a double room, based on two traveling together.";
const peakNote = "Single travelers and peak dates (Christmas, New Year, Diwali) cost more.";

export const journeys: Journey[] = [
  // 1. The Golden Triangle
  {
    slug: "golden-triangle",
    title: "The Golden Triangle",
    headline: "Mughal marble, pink *Jaipur* and the old lanes of Delhi.",
    summary:
      "India's classic first journey, told properly: Old Delhi's spice lanes, the Taj Mahal at first light and Jaipur's forts and bazaars, with time to breathe between them.",
    overview: [
      "Delhi, Agra and Jaipur sit a few hours apart, which is why the Golden Triangle is so often rushed. We slow it down. You'll walk Old Delhi with someone who grew up in its lanes, reach the Taj Mahal as the gates open and the marble turns from gray to rose, and give Jaipur three full days rather than an afternoon.",
      "Between the headline monuments come the moments that make the trip yours: a breakfast of nihari near Jama Masjid, the vast stepped geometry of Chand Baori at Abhaneri, a morning with block printers in Sanganer, and an evening on a haveli rooftop as the city's temples ring out below.",
      "It works beautifully as a first taste of India or as the opening chapter of a longer journey. Ask your specialist about adding two nights in Ranthambore for tiger safaris, or continuing on to Udaipur and the lakes.",
    ],
    days: 8,
    regions: ["north", "rajasthan"],
    route: ["delhi", "agra", "jaipur"],
    styles: ["classic", "palaces-heritage"],
    priceFromUSD: 2450,
    bestMonths: ["oct", "nov", "dec", "jan", "feb", "mar"],
    image: "taj-arch",
    highlights: [
      "The Taj Mahal at sunrise, before the crowds",
      "Old Delhi's lanes with a Delhi-born historian",
      "Amber Fort and Jaipur's bazaars over three days",
      "The Chand Baori stepwell at Abhaneri",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you in arrivals and takes you to a quiet hotel in leafy central Delhi. If you land early, an evening stroll through Lodhi Garden, among fifteenth-century tombs and joggers, is the gentlest possible introduction. Your specialist checks in by WhatsApp to make sure all is well.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Old and New Delhi",
        location: "Delhi",
        description:
          "Morning in Old Delhi with your historian guide: Jama Masjid, the spice market of Khari Baoli, and a cycle rickshaw through Chandni Chowk with stops for jalebi and parathas. After lunch, your car takes you to Humayun's Tomb, the garden mausoleum that inspired the Taj, and past the grand boulevards of Lutyens' New Delhi. On a Thursday, stay for qawwali at the Nizamuddin shrine.",
        overnight: "Delhi",
        meals: "Breakfast",
      },
      {
        day: "3",
        title: "Fast train to Agra",
        location: "Agra",
        description:
          "The morning Gatimaan Express covers the journey to Agra in about 100 minutes, with breakfast served at your seat. Your guide meets you for Agra Fort, where Shah Jahan spent his final years looking across the river at the Taj, and the delicate inlay of Itimad-ud-Daulah, the 'Baby Taj'. Finish at Mehtab Bagh for sunset over the Yamuna. The Taj is closed on Fridays, so we plan your dates around it.",
        overnight: "Agra",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "The Taj at dawn, then on to Jaipur",
        location: "Agra to Jaipur",
        description:
          "Be at the gate as it opens to see the Taj Mahal emerge in the soft morning light, then return for a late breakfast. Your private car heads west to Jaipur (about five hours), stopping at the abandoned Mughal capital of Fatehpur Sikri and the extraordinary Chand Baori stepwell at Abhaneri. Arrive at your haveli in time for a rooftop dinner.",
        overnight: "Jaipur",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "Amber Fort and the Pink City",
        location: "Jaipur",
        description:
          "An early start beats the heat and the crowds at Amber Fort, its mirrored halls glittering above Maota Lake; we drive or walk up, never by elephant. Stop at the Panna Meena ka Kund stepwell, then spend the afternoon at the City Palace and the giant astronomical instruments of Jantar Mantar. Evening is yours for Johari Bazaar or a lassi on MI Road.",
        overnight: "Jaipur",
        meals: "Breakfast",
      },
      {
        day: "6",
        title: "Craft villages and a slower Jaipur",
        location: "Jaipur",
        description:
          "Drive out to Sanganer to watch hand block printers at work and try a wooden block yourself, then visit a family workshop of blue potters. Return for a free afternoon by the pool, and at sunset see the Hawa Mahal's honeycomb facade glow from a café terrace opposite. Your specialist can add a home cooking class here if you'd like.",
        overnight: "Jaipur",
        meals: "Breakfast",
      },
      {
        day: "7",
        title: "Return to Delhi",
        location: "Jaipur to Delhi",
        description:
          "A relaxed morning, then your car returns you to Delhi on the expressway (about five hours), checking in near the airport so the night flight home is easy. A farewell dinner in one of Delhi's excellent modern Indian restaurants is a fine way to end.",
        overnight: "Delhi",
        meals: "Breakfast",
      },
      {
        day: "8",
        title: "Depart",
        location: "Delhi",
        description:
          "Your driver takes you to Indira Gandhi International Airport in good time for your flight. If you are continuing your travels in India, your specialist can easily extend from here.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Nights 1–2", location: "Delhi", name: "Lodhi Garden House (placeholder)" },
      { nights: "Night 3", location: "Agra", name: "Mehtab Garden Hotel (placeholder)" },
      {
        nights: "Nights 4–6",
        location: "Jaipur",
        name: "Haveli Gulabi (placeholder)",
        staySlug: "jaipur-heritage-haveli",
      },
      { nights: "Night 7", location: "Delhi", name: "Aerocity Garden Hotel (placeholder)" },
    ],
    guides:
      "A Delhi-born historian leads you through Old and New Delhi, a Mughal-architecture specialist guides you at the Taj and Agra Fort, and a Jaipur guide from a family of craftspeople opens doors to the city's workshops.",
    inclusions: [
      ...coreInclusions,
      "Gatimaan Express train from Delhi to Agra (AC executive class)",
      "Sunrise entry to the Taj Mahal with your guide",
      "Block-printing visit in Sanganer",
    ],
    exclusions: [...coreExclusions, "Optional cooking class and Ranthambore extension"],
    pricingNotes: [
      sharingNote,
      peakNote,
      "Indicative price; your specialist confirms an exact quote, including optional extras such as two nights of tiger safaris in Ranthambore.",
    ],
    featured: true,
    seo: {
      title: "Golden Triangle Tour: Delhi, Agra & Jaipur",
      description:
        "An unhurried 8-day Golden Triangle journey: Old Delhi with a local historian, the Taj Mahal at sunrise and three full days in Jaipur, tailor-made for you.",
    },
  },

  // 2. Rajasthan Palaces
  {
    slug: "rajasthan-palaces",
    title: "Rajasthan Palaces",
    headline: "Forts, lakes and *desert* nights.",
    summary:
      "Two weeks through Rajasthan's great cities, from Jaisalmer's golden fort and a night under desert stars to Jodhpur's blue lanes, Udaipur's lakes, holy Pushkar and Jaipur.",
    overview: [
      "Rajasthan rewards time. This journey traces a loop through the state's most storied cities, each with its own color: the honey-gold sandstone of Jaisalmer, the indigo houses below Mehrangarh in Jodhpur, the white palaces reflected in Udaipur's lakes and the dusky pink of Jaipur.",
      "We fly you straight into the Thar Desert to begin, then travel by private car on roads that pass Bishnoi villages, mustard fields and roadside chai stalls. Stops are chosen for character as much as comfort: a fort palace, a lakeside palace, a heritage haveli and a quiet camp in the dunes where the only sound after dark is camel bells.",
      "Along the way you'll meet the people who make Rajasthan what it is, from the Jain priests of Ranakpur to the miniature painters of Udaipur and the musicians of the Manganiyar tradition, whose songs carry across the sand at night.",
    ],
    days: 14,
    regions: ["rajasthan"],
    route: ["delhi", "jaisalmer", "jodhpur", "udaipur", "pushkar", "jaipur"],
    styles: ["palaces-heritage", "classic"],
    priceFromUSD: 4950,
    bestMonths: ["oct", "nov", "dec", "jan", "feb", "mar"],
    image: "udaipur-palace",
    highlights: [
      "A night in a dune camp with Manganiyar musicians",
      "Mehrangarh Fort and Jodhpur's blue lanes",
      "Three nights by the lakes of Udaipur",
      "Sunrise over Pushkar's sacred lake",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you at the airport and takes you to a calm garden hotel in central Delhi. Rest, or take a gentle evening walk around Humayun's Tomb as the sandstone warms in the last light.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Fly into the Thar Desert",
        location: "Jaisalmer",
        description:
          "A morning domestic flight carries you west to Jaisalmer (direct in the winter season, otherwise via Jodhpur). Settle into a haveli hotel with a view of the fort, then watch the sun set over Gadisar Lake, its carved chhatris reflected in the still water.",
        overnight: "Jaisalmer",
        meals: "Breakfast",
      },
      {
        day: "3",
        title: "The living fort",
        location: "Jaisalmer",
        description:
          "Jaisalmer Fort is one of the few in the world where people still live, and your guide grew up just below its walls. Explore the Jain temples carved like lace, the lanes of family homes, and the merchant havelis of Patwon ki Haveli outside the gates. Afternoon free in the old town's textile shops.",
        overnight: "Jaisalmer",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "A night in the dunes",
        location: "Thar Desert",
        description:
          "Drive west past the abandoned village of Kuldhara to the quieter dunes near Khuri (about an hour). Walk or ride a camel out to watch sunset from the sand, then dine by firelight as Manganiyar musicians play. The stars out here are something else.",
        overnight: "Desert camp",
        meals: "Breakfast, dinner",
      },
      {
        day: "5",
        title: "On to Jodhpur",
        location: "Jodhpur",
        description:
          "Your private car crosses the desert to Jodhpur (about five hours), with chai stops in small market towns. Check in to your fort palace and spend the evening in the bustle around the Clock Tower and Sardar Market.",
        overnight: "Jodhpur",
        meals: "Breakfast",
      },
      {
        day: "6",
        title: "Mehrangarh and the blue city",
        location: "Jodhpur",
        description:
          "Mehrangarh Fort rises straight out of the rock, and its museum holds some of Rajasthan's finest palanquins, paintings and armor. Walk down through the blue-washed lanes of Brahmpuri with your guide, then visit a Bishnoi village in the afternoon, home to a community that has protected blackbuck and khejri trees for five centuries.",
        overnight: "Jodhpur",
        meals: "Breakfast",
      },
      {
        day: "7",
        title: "Ranakpur's marble temple, then Udaipur",
        location: "Jodhpur to Udaipur",
        description:
          "Drive south through the Aravalli hills (about six to seven hours with stops) to the fifteenth-century Jain temple at Ranakpur, where no two of its 1,444 carved marble pillars are alike. It opens to visitors from midday, so lunch nearby first. Arrive in Udaipur by early evening.",
        overnight: "Udaipur",
        meals: "Breakfast",
      },
      {
        day: "8",
        title: "City Palace and Lake Pichola",
        location: "Udaipur",
        description:
          "Spend the morning in the City Palace, a cascade of courtyards and mirrored rooms above Lake Pichola. In the afternoon, meet a miniature painter whose family has worked in the Mewar style for generations, then take a boat out on the lake as the palaces turn gold.",
        overnight: "Udaipur",
        meals: "Breakfast",
      },
      {
        day: "9",
        title: "A slower day by the lakes",
        location: "Udaipur",
        description:
          "Free time, which in Udaipur is a gift. Wander the lanes around Jagdish Temple, cycle out to nearby villages, or rest by your hotel pool. At dusk, drive up to the Monsoon Palace at Sajjangarh for the view across the lakes and hills.",
        overnight: "Udaipur",
        meals: "Breakfast",
      },
      {
        day: "10",
        title: "To holy Pushkar",
        location: "Pushkar",
        description:
          "Drive north to Pushkar (about five hours), a small pilgrim town wrapped around a sacred lake and its fifty-two ghats. In the evening, join the aarti at the water's edge as bells and chanting fill the air. Pushkar is vegetarian and alcohol-free, which only adds to its gentle mood.",
        overnight: "Pushkar",
        meals: "Breakfast",
      },
      {
        day: "11",
        title: "Sunrise in Pushkar, on to Jaipur",
        location: "Pushkar to Jaipur",
        description:
          "Climb early to the hilltop Savitri temple for sunrise over the lake and desert, then visit the rare Brahma temple. Your car takes you on to Jaipur (about three hours), arriving at your haveli in time to unpack and settle in.",
        overnight: "Jaipur",
        meals: "Breakfast",
      },
      {
        day: "12",
        title: "Amber Fort and the Pink City",
        location: "Jaipur",
        description:
          "Morning at Amber Fort, reached on foot or by car rather than by elephant, followed by the City Palace and the instruments of Jantar Mantar. Late afternoon in the bazaars of the Pink City, with a guide who knows exactly which family shops are worth your time.",
        overnight: "Jaipur",
        meals: "Breakfast",
      },
      {
        day: "13",
        title: "Craft and a farewell dinner",
        location: "Jaipur",
        description:
          "Visit the block printers of Bagru or Sanganer, or spend the morning with a gem cutter in the old city. The afternoon is free. Your specialist arranges a farewell dinner in a courtyard lit with lanterns.",
        overnight: "Jaipur",
        meals: "Breakfast, dinner",
      },
      {
        day: "14",
        title: "Depart",
        location: "Jaipur",
        description:
          "Your driver takes you to Jaipur airport for a connecting flight, or back to Delhi's international airport by road (about five hours) for your flight home.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Night 1", location: "Delhi", name: "Lodhi Garden House (placeholder)" },
      { nights: "Nights 2–3", location: "Jaisalmer", name: "Sonar Haveli (placeholder)" },
      { nights: "Night 4", location: "Thar Desert", name: "Khuri Dunes Camp (placeholder)" },
      {
        nights: "Nights 5–6",
        location: "Jodhpur",
        name: "Umaid Bagh Fort Palace (placeholder)",
        staySlug: "jodhpur-fort-palace",
      },
      {
        nights: "Nights 7–9",
        location: "Udaipur",
        name: "Jal Mahal Lake Palace (placeholder)",
        staySlug: "udaipur-lake-palace",
      },
      { nights: "Night 10", location: "Pushkar", name: "Pushkar Rose Garden Retreat (placeholder)" },
      {
        nights: "Nights 11–13",
        location: "Jaipur",
        name: "Haveli Gulabi (placeholder)",
        staySlug: "jaipur-heritage-haveli",
      },
    ],
    guides:
      "A Jaisalmer guide raised beneath the fort walls, a Jodhpur historian with family ties to the Bishnoi villages, an Udaipur art specialist who introduces you to miniature painters, and a Jaipur guide who knows the old city's craft families by name.",
    inclusions: [
      ...coreInclusions,
      "Domestic flight from Delhi to Jaisalmer (economy)",
      "Desert camp night with dinner, camel walk and Manganiyar music",
      "Boat ride on Lake Pichola",
      "Farewell dinner in Jaipur",
    ],
    exclusions: [...coreExclusions, "Optional activities such as hot-air ballooning in Jaipur"],
    pricingNotes: [
      sharingNote,
      peakNote,
      "Indicative price; dates during the Pushkar Camel Fair (October or November) are priced separately. Your specialist confirms an exact quote.",
    ],
    featured: true,
    seo: {
      title: "Rajasthan Palaces Tour: Forts, Lakes & Desert",
      description:
        "A 14-day Rajasthan journey through Jaisalmer, a desert camp, Jodhpur, Udaipur, Pushkar and Jaipur, staying in palaces and havelis with expert local guides.",
    },
  },

  // 3. Kerala Backwaters & Spice Hills
  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters & Spice Hills",
    headline: "Tea hills, spice gardens and slow *water*.",
    summary:
      "From Fort Kochi's old spice port to the tea estates of Munnar, Periyar's forests, a night aboard a houseboat on Vembanad Lake and three easy days by the sea at Marari.",
    overview: [
      "Kerala moves at its own pace, and this journey follows it. Begin in Fort Kochi, where Chinese fishing nets still dip into the harbor and the warehouses of Jew Town smell of pepper and ginger. Then climb into the Western Ghats, where tea bushes cover the hills around Munnar like green velvet.",
      "In Thekkady, walk the forests of Periyar Tiger Reserve with trackers who once poached here and now protect it, and wander cardamom and pepper gardens with the families who farm them. Then descend to the backwaters for a night aboard a private kettuvallam, drifting past paddy fields, toddy shops and village churches.",
      "The journey ends barefoot. Marari's long, quiet beach is lined with fishing villages rather than bars, and it's the perfect place to rest, try an Ayurvedic massage, and eat fish caught that morning.",
    ],
    days: 11,
    regions: ["south"],
    route: ["kerala"],
    styles: ["classic", "wellness", "beaches"],
    priceFromUSD: 3150,
    bestMonths: ["oct", "nov", "dec", "jan", "feb", "mar"],
    image: "kerala-houseboat",
    highlights: [
      "A private houseboat night on Vembanad Lake",
      "Tea estates and misty hills around Munnar",
      "A forest walk in Periyar Tiger Reserve",
      "Three slow days on Marari beach",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Kochi",
        location: "Fort Kochi",
        description:
          "Your driver meets you at Kochi airport for the hour-long drive to Fort Kochi, a peninsula of colonial bungalows, rain trees and old churches. Settle into your heritage hotel and watch the fishing nets at dusk.",
        overnight: "Fort Kochi",
        meals: "None",
      },
      {
        day: "2",
        title: "Spice port and Kathakali",
        location: "Fort Kochi",
        description:
          "Walk the old town with a local historian: St Francis Church, where Vasco da Gama was first buried, the murals of Mattancherry Palace, the Paradesi Synagogue (closed Fridays and Saturdays) and the spice warehouses of Jew Town. In the evening, watch Kathakali performers apply their elaborate makeup before a performance.",
        overnight: "Fort Kochi",
        meals: "Breakfast",
      },
      {
        day: "3",
        title: "Up into the tea hills",
        location: "Munnar",
        description:
          "Your private car climbs into the Western Ghats to Munnar (about four hours), passing rubber plantations, waterfalls and roadside stalls selling jackfruit chips. The air cools as you rise to around 1,600 meters. Arrive at a hillside bungalow in time for afternoon tea.",
        overnight: "Munnar",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "Estates and Nilgiri tahr",
        location: "Munnar",
        description:
          "Walk through the tea estates with a planter's family, learning how leaf becomes tea at a working factory. Visit Eravikulam National Park, home of the endangered Nilgiri tahr (the park closes for calving in February and March, when we take you to a high-altitude tea estate instead).",
        overnight: "Munnar",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "To the spice hills of Thekkady",
        location: "Thekkady",
        description:
          "A scenic drive south (about three hours) brings you to Thekkady, on the edge of Periyar Tiger Reserve. In the afternoon, a farmer shows you around his spice garden: cardamom, pepper vines, nutmeg, cinnamon and cloves, all growing together under the shade trees.",
        overnight: "Thekkady",
        meals: "Breakfast",
      },
      {
        day: "6",
        title: "Periyar forest",
        location: "Thekkady",
        description:
          "Set out at dawn on a guided nature walk in Periyar with a forest tracker, looking for gaur, Malabar giant squirrels, hornbills and, with luck, wild elephants at the water's edge. The afternoon is free; a Kalaripayattu martial arts display is a lively option in the evening.",
        overnight: "Thekkady",
        meals: "Breakfast",
      },
      {
        day: "7",
        title: "Aboard your houseboat",
        location: "Vembanad Lake",
        description:
          "Drive down from the hills to the backwaters (about four hours) and board your private kettuvallam around midday. Your crew cooks Kerala dishes on board, including karimeen fish, as you drift along canals past paddy fields and village life. Houseboats moor for the night by early evening, so sunset is spent quietly on deck.",
        overnight: "Houseboat",
        meals: "All meals",
      },
      {
        day: "8",
        title: "To the beach at Marari",
        location: "Marari",
        description:
          "After breakfast on board, disembark and drive half an hour to Marari, a long golden beach backed by coconut palms and fishing hamlets. Spend the afternoon doing absolutely nothing.",
        overnight: "Marari",
        meals: "Breakfast",
      },
      {
        day: "9–10",
        title: "Beach days and Ayurveda",
        location: "Marari",
        description:
          "Two free days to swim, read and walk the shore at sunrise as fishermen bring in their catch. Your specialist can arrange an Ayurvedic treatment, a village cycle ride or a cooking lesson in a local home.",
        overnight: "Marari",
        meals: "Breakfast",
      },
      {
        day: "11",
        title: "Depart",
        location: "Kochi",
        description:
          "Your driver takes you to Kochi airport (about 90 minutes) for your onward flight.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Nights 1–2", location: "Fort Kochi", name: "Spice Port Heritage Hotel (placeholder)" },
      { nights: "Nights 3–4", location: "Munnar", name: "Tea Hills Bungalow (placeholder)" },
      { nights: "Nights 5–6", location: "Thekkady", name: "Cardamom Forest Lodge (placeholder)" },
      {
        nights: "Night 7",
        location: "Vembanad Lake",
        name: "Vembanad Kettuvallam (placeholder)",
        staySlug: "vembanad-houseboat",
      },
      { nights: "Nights 8–10", location: "Marari", name: "Marari Palm Beach Villas (placeholder)" },
    ],
    guides:
      "A Kochi historian guides you through the old spice port, a tea planter's family hosts you in Munnar, and a forest tracker from Periyar's community ecotourism program leads your walk in the reserve.",
    inclusions: [
      ...coreInclusions,
      "Private houseboat for one night with all meals cooked on board by your crew",
      "Kathakali performance in Fort Kochi",
      "Guided nature walk in Periyar Tiger Reserve and spice garden visit",
    ],
    exclusions: [...coreExclusions, "Ayurvedic treatments and optional activities"],
    pricingNotes: [
      sharingNote,
      peakNote,
      "Indicative price; your specialist confirms an exact quote.",
    ],
    featured: true,
    seo: {
      title: "Kerala Backwaters & Spice Hills Tour",
      description:
        "An 11-day Kerala journey: Fort Kochi, Munnar's tea estates, Periyar's spice hills, a private houseboat night on Vembanad Lake and three days on Marari beach.",
    },
  },

  // 4. Tigers & Temples
  {
    slug: "tigers-and-temples",
    title: "Tigers & Temples",
    headline: "Sal forests, sacred rivers and the *tiger*.",
    summary:
      "Varanasi's ghats and Khajuraho's carved temples, then deep into the sal forests of Bandhavgarh and Kanha in search of the Bengal tiger, with naturalists who know every track.",
    overview: [
      "This is a journey through the heart of India, where ancient faith and wild forest sit side by side. Begin on the Ganges at Varanasi, among the oldest living cities on earth, then travel to Khajuraho, whose thousand-year-old Chandela temples are carved with some of the finest sculpture in India.",
      "From there, the forests of Madhya Pradesh take over. Bandhavgarh has one of the highest densities of tigers in India, set around a ruined hilltop fort and a tenth-century reclining Vishnu. Kanha is vaster and wilder, with sal forests and open meadows where herds of barasingha, the rare hard-ground swamp deer, graze at dawn.",
      "You'll take around eight jeep safaris with expert naturalists who read the forest by alarm calls and pugmarks. Tigers are never guaranteed, but your odds here are as good as anywhere in the world, and the leopards, sloth bears, wild dogs and birdlife are rewards of their own.",
    ],
    days: 12,
    regions: ["north", "central-india"],
    route: ["delhi", "varanasi", "bandhavgarh", "kanha"],
    styles: ["wildlife", "spiritual"],
    priceFromUSD: 4600,
    bestMonths: ["nov", "dec", "jan", "feb", "mar", "apr", "may"],
    image: "tiger",
    highlights: [
      "Around eight jeep safaris in Bandhavgarh and Kanha",
      "A dawn boat on the Ganges at Varanasi",
      "The carved Chandela temples of Khajuraho",
      "Barasingha herds on Kanha's meadows",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you at the airport and takes you to your hotel near the airport, ready for an early flight the next day. Rest, or enjoy dinner at one of Delhi's celebrated restaurants.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Fly to Varanasi",
        location: "Varanasi",
        description:
          "A morning flight takes you to Varanasi (about 90 minutes). Settle into your riverside haveli, then walk the ghats with your guide in the late afternoon before watching the Ganga aarti at Dashashwamedh Ghat from a boat, lamps and conch shells against the dusk.",
        overnight: "Varanasi",
        meals: "Breakfast",
      },
      {
        day: "3",
        title: "Dawn on the Ganges and Sarnath",
        location: "Varanasi",
        description:
          "Before sunrise, take a rowing boat along the ghats as pilgrims bathe and the city wakes. Walk the old city's lanes after breakfast, then drive to Sarnath, where the Buddha gave his first sermon. Your guide is careful and respectful at the cremation ghats, where photography isn't appropriate.",
        overnight: "Varanasi",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "South to Khajuraho",
        location: "Khajuraho",
        description:
          "A long but rewarding day by private car to Khajuraho (about eight hours, broken with lunch), crossing the farmland and small towns of Uttar Pradesh and Bundelkhand. In the evening, see the temples lit up from outside, or simply rest.",
        overnight: "Khajuraho",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "The temples of Khajuraho",
        location: "Khajuraho to Bandhavgarh",
        description:
          "Explore the Western Group of temples with an art historian in the soft morning light, including the soaring Kandariya Mahadeva. After lunch, drive to Bandhavgarh (about five hours) through teak and sal country, arriving at your jungle lodge by evening.",
        overnight: "Bandhavgarh",
        meals: "Breakfast, dinner",
      },
      {
        day: "6–7",
        title: "Safaris in Bandhavgarh",
        location: "Bandhavgarh",
        description:
          "Morning and afternoon jeep safaris with your naturalist across the park's zones, where tigers patrol beneath the old fort. Between drives, rest at the lodge, walk in nearby Gond villages, or visit a village school supported by the lodge. Parks close for a half day each week, which we plan around.",
        overnight: "Bandhavgarh",
        meals: "All meals",
      },
      {
        day: "8",
        title: "Across to Kanha",
        location: "Kanha",
        description:
          "Take a final morning safari, then drive to Kanha (about five to six hours) through Madhya Pradesh's tribal heartland. Arrive at your tented lodge on the edge of the sal forest in time for sundowners.",
        overnight: "Kanha",
        meals: "All meals",
      },
      {
        day: "9–10",
        title: "Safaris in Kanha",
        location: "Kanha",
        description:
          "Two full days of jeep safaris in one of India's best-run reserves, home to tigers, leopards, wild dogs and the rescued barasingha. Your naturalist may also take you on a guided walk in the buffer zone or to a Baiga village, where traditional knowledge of the forest runs deep.",
        overnight: "Kanha",
        meals: "All meals",
      },
      {
        day: "11",
        title: "Fly back to Delhi",
        location: "Kanha to Delhi",
        description:
          "After a final morning in the forest, drive to Jabalpur (about four hours) for a short flight back to Delhi. Your last evening is yours to enjoy.",
        overnight: "Delhi",
        meals: "Breakfast",
      },
      {
        day: "12",
        title: "Depart",
        location: "Delhi",
        description:
          "Your driver takes you to the airport for your flight home.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Night 1", location: "Delhi", name: "Aerocity Garden Hotel (placeholder)" },
      {
        nights: "Nights 2–3",
        location: "Varanasi",
        name: "Ganga Ghat Haveli (placeholder)",
        staySlug: "varanasi-riverside-haveli",
      },
      { nights: "Night 4", location: "Khajuraho", name: "Chandela Garden Hotel (placeholder)" },
      { nights: "Nights 5–7", location: "Bandhavgarh", name: "Bandhavgarh Fort View Lodge (placeholder)" },
      {
        nights: "Nights 8–10",
        location: "Kanha",
        name: "Sal Forest Tented Lodge (placeholder)",
        staySlug: "kanha-tented-lodge",
      },
      { nights: "Night 11", location: "Delhi", name: "Aerocity Garden Hotel (placeholder)" },
    ],
    guides:
      "A Varanasi-born scholar of the city's rituals guides you on the ghats, an art historian leads you through Khajuraho, and resident naturalists, many raised in villages on the forest edge, accompany every safari in Bandhavgarh and Kanha.",
    inclusions: [
      ...coreInclusions,
      "Domestic flights Delhi to Varanasi and Jabalpur to Delhi (economy)",
      "Around eight shared-zone jeep safaris with a resident naturalist, including park permits",
      "All meals at the Bandhavgarh and Kanha lodges",
      "Sunrise and evening boat rides on the Ganges",
    ],
    exclusions: [...coreExclusions, "Additional or private full-day safaris"],
    pricingNotes: [
      sharingNote,
      "Safari permits are released months in advance and sell out quickly, so we recommend booking early. Peak dates cost more.",
      "Core zones close from July to September for the monsoon. Indicative price; your specialist confirms an exact quote.",
    ],
    featured: true,
    seo: {
      title: "Tiger Safari & Temples: Kanha, Bandhavgarh",
      description:
        "A 12-day journey from Varanasi's ghats and Khajuraho's temples to tiger safaris in Bandhavgarh and Kanha, with expert naturalists and comfortable jungle lodges.",
    },
  },

  // 5. Himalayan Adventures
  {
    slug: "himalayan-adventures",
    title: "Himalayan Adventures",
    headline: "High passes, prayer flags and *open* sky.",
    summary:
      "Twelve days in Ladakh's high desert: Leh's monasteries, the dunes of the Nubra Valley, the shifting blues of Pangong Tso, with gentle acclimatization built in from the start.",
    overview: [
      "Ladakh feels like the roof of the world, because it nearly is. Leh sits at around 3,500 meters, ringed by snow peaks and barley fields, and the journey begins with the most important thing at altitude: rest. Three easy days in Leh let your body adjust while you explore the old town, the palace and the great monasteries of the Indus Valley.",
      "Then the road climbs over the Khardung La, one of the highest motorable passes in the world, and drops into the Nubra Valley, where Bactrian camels wander sand dunes beneath glaciers. From Nubra, follow the Shyok River to Pangong Tso, a long lake that changes from turquoise to deep cobalt as clouds pass overhead.",
      "Nights are spent in warm, family-run places: a Ladakhi homestay in Nubra, a comfortable camp by the lake, and a quiet hotel in Leh. Days are full of butter tea, monastery chants, apricot orchards and the sort of silence that stays with you long after.",
    ],
    days: 12,
    regions: ["north", "himalaya"],
    route: ["delhi", "ladakh"],
    styles: ["adventure", "spiritual"],
    priceFromUSD: 3800,
    bestMonths: ["jun", "jul", "aug", "sep"],
    image: "ladakh-road",
    highlights: [
      "Dawn prayers at Thiksey Monastery",
      "Crossing the Khardung La into the Nubra Valley",
      "A night beside Pangong Tso",
      "Three unhurried days to acclimatize in Leh",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you at the airport and takes you to a hotel nearby, ready for the early flight to Leh. Have a light dinner and an early night.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Fly over the Himalaya to Leh",
        location: "Leh",
        description:
          "The morning flight to Leh (about 90 minutes) is one of the most spectacular in the world, crossing ridge after snowy ridge. Your driver meets you and takes you to your hotel, where the rest of the day is for resting, drinking water and letting your body adjust to the altitude.",
        overnight: "Leh",
        meals: "Breakfast, dinner",
      },
      {
        day: "3",
        title: "Old Leh, gently",
        location: "Leh",
        description:
          "A slow morning, then a gentle walk through Leh's old town with your Ladakhi guide, past mud-brick houses and prayer wheels to the nine-story Leh Palace. In the late afternoon, drive up to Shanti Stupa for sunset over the valley.",
        overnight: "Leh",
        meals: "Breakfast, dinner",
      },
      {
        day: "4",
        title: "Monasteries of the Indus Valley",
        location: "Leh",
        description:
          "Rise early to join morning prayers at Thiksey Monastery, as monks chant and horns sound from the rooftops. Continue to Hemis, Ladakh's largest monastery, and the old royal palace at Shey. Return to Leh for a relaxed afternoon.",
        overnight: "Leh",
        meals: "Breakfast, dinner",
      },
      {
        day: "5",
        title: "Over the Khardung La to Nubra",
        location: "Nubra Valley",
        description:
          "Your private car climbs the hairpins of the Khardung La (about 5,360 meters) before descending into the Nubra Valley (about five hours in total). Stop briefly at the top, then continue to your family homestay among apricot and walnut orchards, where dinner is cooked in the kitchen you'll gather in.",
        overnight: "Nubra Valley",
        meals: "Breakfast, dinner",
      },
      {
        day: "6",
        title: "Diskit and the Hunder dunes",
        location: "Nubra Valley",
        description:
          "Visit Diskit Monastery and its towering Maitreya Buddha, then spend the afternoon at the sand dunes of Hunder, where double-humped Bactrian camels graze. For a longer day, your specialist can arrange a trip to the Balti village of Turtuk, close to the Line of Control.",
        overnight: "Nubra Valley",
        meals: "Breakfast, dinner",
      },
      {
        day: "7",
        title: "Along the Shyok River to Pangong Tso",
        location: "Pangong Tso",
        description:
          "A remote and beautiful drive along the Shyok River road (about six to seven hours) brings you to Pangong Tso at around 4,250 meters. Watch the lake change color as the light moves across it, and wrap up warm for a night of extraordinary stars.",
        overnight: "Pangong Tso",
        meals: "Breakfast, dinner",
      },
      {
        day: "8",
        title: "Back to Leh via the Chang La",
        location: "Leh",
        description:
          "After sunrise over the lake, drive back to Leh over the Chang La pass (about five to six hours), stopping for chai at a roadside dhaba. A hot shower and a quiet evening await.",
        overnight: "Leh",
        meals: "Breakfast, dinner",
      },
      {
        day: "9",
        title: "Alchi and the Sham Valley",
        location: "Leh",
        description:
          "Drive west along the Indus to the confluence with the Zanskar River, then to Likir Monastery and the tiny eleventh-century temples of Alchi, whose painted walls are among the oldest Buddhist art in the Himalaya. Lunch in an apricot orchard before returning to Leh.",
        overnight: "Leh",
        meals: "Breakfast, dinner",
      },
      {
        day: "10",
        title: "A Ladakhi kitchen and a free afternoon",
        location: "Leh",
        description:
          "Spend the morning with a Ladakhi family, learning to make thukpa and skyu and drinking butter tea. The afternoon is free for the bazaar, a bike ride downhill from a monastery, or rafting on the Indus in season.",
        overnight: "Leh",
        meals: "Breakfast, lunch, dinner",
      },
      {
        day: "11",
        title: "Fly back to Delhi",
        location: "Delhi",
        description:
          "Take the morning flight back to Delhi, then enjoy a quiet afternoon, or explore Humayun's Tomb with your Delhi guide if you have the energy.",
        overnight: "Delhi",
        meals: "Breakfast",
      },
      {
        day: "12",
        title: "Depart",
        location: "Delhi",
        description:
          "Your driver takes you to the airport for your flight home.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Night 1", location: "Delhi", name: "Aerocity Garden Hotel (placeholder)" },
      { nights: "Nights 2–4", location: "Leh", name: "Stok View Hotel (placeholder)" },
      {
        nights: "Nights 5–6",
        location: "Nubra Valley",
        name: "Nubra Valley Homestay (placeholder)",
        staySlug: "nubra-valley-homestay",
      },
      { nights: "Night 7", location: "Pangong Tso", name: "Pangong Lakeside Camp (placeholder)" },
      { nights: "Nights 8–10", location: "Leh", name: "Stok View Hotel (placeholder)" },
      { nights: "Night 11", location: "Delhi", name: "Aerocity Garden Hotel (placeholder)" },
    ],
    guides:
      "A Ladakhi guide born in Leh travels with you throughout the high country, explaining monastery life and mountain culture, while your driver is an experienced local who has driven these passes for many years.",
    inclusions: [
      ...coreInclusions,
      "Domestic flights Delhi to Leh and back (economy)",
      "Dinner every night in Ladakh",
      "Protected Area Permits for the Nubra Valley and Pangong Tso",
      "Bottled oxygen and a first-aid kit carried in your vehicle",
    ],
    exclusions: [...coreExclusions, "Rafting and other optional activities"],
    pricingNotes: [
      sharingNote,
      "Single travelers and peak summer dates, including the Hemis Festival, cost more.",
      "Mountain roads can close for weather or landslides; your specialist adapts the route if needed. Indicative price; your specialist confirms an exact quote.",
    ],
    seo: {
      title: "Ladakh Tour: Leh, Nubra Valley & Pangong Tso",
      description:
        "A 12-day Himalayan journey through Ladakh with gentle acclimatization in Leh, monasteries, the Nubra Valley's dunes and a night beside Pangong Tso.",
    },
  },

  // 6. Spiritual India
  {
    slug: "spiritual-india",
    title: "Spiritual India",
    headline: "Rivers, prayers and the art of *stillness*.",
    summary:
      "A journey through India's living faiths: dawn on the Ganges at Varanasi, yoga beside the river in Rishikesh, and the Golden Temple in Amritsar, where all are welcome.",
    overview: [
      "Faith in India isn't something you visit; it's something you walk into. This journey follows the sacred river from its mountain doorway at Rishikesh to the ancient ghats of Varanasi, and ends at the Golden Temple in Amritsar, where a community kitchen serves free meals to tens of thousands of people each day.",
      "In Varanasi, you'll see the city's rituals from a rowing boat at dawn and dusk, walk its lanes with a scholar who has spent a lifetime here, and visit Sarnath, where the Buddha first taught. In Rishikesh, there's time to slow right down: yoga and meditation sessions by the Ganges, quiet walks in the foothills and evening aarti at Parmarth Niketan.",
      "We arrange each experience with care, from respectful behavior at the burning ghats to the right way to cover your head at a gurdwara. Ask your specialist about adding two nights in Bodh Gaya, where the Buddha attained enlightenment, an easy drive from Varanasi.",
    ],
    days: 13,
    regions: ["north"],
    route: ["delhi", "varanasi", "rishikesh", "amritsar"],
    styles: ["spiritual", "wellness"],
    priceFromUSD: 3600,
    bestMonths: ["oct", "nov", "feb", "mar"],
    image: "varanasi-ghats",
    highlights: [
      "Dawn and dusk boat rides on the Ganges",
      "Daily yoga beside the river in Rishikesh",
      "The Golden Temple by night and at dawn",
      "Volunteering in the Golden Temple's kitchen",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you and takes you to your hotel. In the late afternoon, if you're up to it, visit Gurudwara Bangla Sahib, where the sacred pool and communal kitchen are a beautiful first glimpse of Sikh hospitality.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Fly to Varanasi",
        location: "Varanasi",
        description:
          "A morning flight takes you to Varanasi (about 90 minutes). After settling into your riverside haveli, take a boat at dusk to watch the Ganga aarti at Dashashwamedh Ghat, as priests circle fire lamps to the sound of bells.",
        overnight: "Varanasi",
        meals: "Breakfast",
      },
      {
        day: "3",
        title: "Dawn on the Ganges",
        location: "Varanasi",
        description:
          "Rise before sunrise for a rowing boat ride along the ghats as pilgrims bathe, pray and greet the day. After breakfast, explore the lanes of the old city with your guide, visiting a family of silk weavers. In the evening, a private classical music performance in an old haveli.",
        overnight: "Varanasi",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "Sarnath",
        location: "Varanasi",
        description:
          "Drive to Sarnath (about 30 minutes), where the Buddha gave his first sermon and the great Dhamek Stupa still stands. Meditate in the gardens with a Buddhist teacher, then return to Varanasi for a free afternoon.",
        overnight: "Varanasi",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "To the foothills of Rishikesh",
        location: "Rishikesh",
        description:
          "Fly from Varanasi to Dehradun, where your driver meets you for the hour's drive to Rishikesh. Your riverside retreat sits among forested hills, the Ganges running clear and green below. Rishikesh is vegetarian and alcohol-free, and its calm sets in quickly.",
        overnight: "Rishikesh",
        meals: "Breakfast, dinner",
      },
      {
        day: "6–8",
        title: "Yoga, walks and river aarti",
        location: "Rishikesh",
        description:
          "Start each day with yoga and meditation by the river, then explore at your own pace: the suspension bridges and ashrams around Ram Jhula, the overgrown Beatles Ashram, the cave of Vashishtha upriver and sunrise at the hilltop Kunjapuri temple. In the evening, join the aarti at Parmarth Niketan as hundreds of lamps float down the river.",
        overnight: "Rishikesh",
        meals: "Breakfast, dinner",
      },
      {
        day: "9",
        title: "Haridwar and back to Delhi",
        location: "Haridwar to Delhi",
        description:
          "Drive to Haridwar (about 45 minutes) to see morning prayers at Har ki Pauri, one of Hinduism's holiest ghats. Your car then takes you back to Delhi (about five to six hours) for an overnight stay.",
        overnight: "Delhi",
        meals: "Breakfast",
      },
      {
        day: "10",
        title: "Train to Amritsar",
        location: "Amritsar",
        description:
          "The morning Shatabdi Express reaches Amritsar in about six hours, crossing the farmlands of Punjab. In the evening, visit the Golden Temple for the first time, its gilded sanctum shining across the sacred pool to the sound of continuous hymns.",
        overnight: "Amritsar",
        meals: "Breakfast",
      },
      {
        day: "11",
        title: "Langar, history and the border",
        location: "Amritsar",
        description:
          "Return to the Golden Temple in the morning to volunteer in the langar, the community kitchen, helping prepare chapatis alongside local families. Visit Jallianwala Bagh and the Partition Museum, then drive to the Attari-Wagah border (about 45 minutes) for the flag-lowering ceremony at sunset.",
        overnight: "Amritsar",
        meals: "Breakfast",
      },
      {
        day: "12",
        title: "Fly back to Delhi",
        location: "Delhi",
        description:
          "If you wish, rise early to see the Guru Granth Sahib carried into the sanctum at dawn. Then fly back to Delhi (about an hour) for a final free afternoon.",
        overnight: "Delhi",
        meals: "Breakfast",
      },
      {
        day: "13",
        title: "Depart",
        location: "Delhi",
        description:
          "Your driver takes you to the airport for your flight home.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Night 1", location: "Delhi", name: "Lodhi Garden House (placeholder)" },
      {
        nights: "Nights 2–4",
        location: "Varanasi",
        name: "Ganga Ghat Haveli (placeholder)",
        staySlug: "varanasi-riverside-haveli",
      },
      { nights: "Nights 5–8", location: "Rishikesh", name: "Ganges Valley Retreat (placeholder)" },
      { nights: "Night 9", location: "Delhi", name: "Lodhi Garden House (placeholder)" },
      { nights: "Nights 10–11", location: "Amritsar", name: "Punjab Heritage Haveli (placeholder)" },
      { nights: "Night 12", location: "Delhi", name: "Aerocity Garden Hotel (placeholder)" },
    ],
    guides:
      "A Varanasi-born scholar of the city's rituals, a Buddhist teacher at Sarnath, an experienced yoga teacher in Rishikesh, and a Sikh guide in Amritsar who has volunteered in the Golden Temple's kitchen since childhood.",
    inclusions: [
      ...coreInclusions,
      "Domestic flights Delhi to Varanasi, Varanasi to Dehradun and Amritsar to Delhi (economy)",
      "Shatabdi Express train from Delhi to Amritsar (AC chair class)",
      "Daily yoga and meditation sessions in Rishikesh",
      "Dinners in Rishikesh, and dawn and dusk boat rides in Varanasi",
    ],
    exclusions: [...coreExclusions, "Donations at temples and gurdwaras", "Optional Bodh Gaya extension"],
    pricingNotes: [
      sharingNote,
      peakNote,
      "Indicative price; your specialist confirms an exact quote, including optional extras such as two nights in Bodh Gaya.",
    ],
    seo: {
      title: "Spiritual India Tour: Varanasi, Rishikesh",
      description:
        "A 13-day spiritual journey: dawn on the Ganges at Varanasi, Sarnath, yoga and river aarti in Rishikesh, and the Golden Temple in Amritsar, with expert guides.",
    },
  },

  // 7. Food & Markets
  {
    slug: "food-and-markets",
    title: "Food & Markets",
    headline: "Kebabs, chai and the *spice* routes of India.",
    summary:
      "A journey for curious eaters, from Old Delhi's breakfast lanes and Amritsar's langar to Lucknow's slow-cooked kebabs, Kolkata's sweet shops and the mansion kitchens of Chettinad.",
    overview: [
      "India has many cuisines, not one, and the best way to understand them is to eat your way across the country with people who grew up at its tables. This journey travels from north to east to south, each stop a different chapter: Mughal, Punjabi, Awadhi, Bengali and Chettinad.",
      "In Delhi, you'll eat parathas and nihari in the lanes behind Jama Masjid. In Amritsar, you'll help roll chapatis in the world's largest free kitchen, then hunt down buttery kulchas. Lucknow brings the melt-in-the-mouth galouti kebab, invented for a toothless nawab; Kolkata, phuchka on the street, Chinese breakfast in Tiretta Bazaar and mishti doi.",
      "The journey ends in Chettinad in Tamil Nadu, where merchant families built grand mansions with Burmese teak and Italian marble, and where a fiery, fragrant cuisine of black stone flower, star anise and dried chillies is served on banana leaves. Along the way: markets at dawn, home kitchens and cooking classes.",
    ],
    days: 12,
    regions: ["north", "east-northeast", "south"],
    route: ["delhi", "amritsar", "kolkata", "tamil-nadu"],
    styles: ["food", "classic"],
    priceFromUSD: 3900,
    bestMonths: ["dec", "jan", "feb", "mar"],
    image: "spice-bowls",
    highlights: [
      "Old Delhi's food lanes with a local food writer",
      "Galouti kebabs in old Lucknow",
      "Kolkata's dawn flower market and sweet shops",
      "A banana-leaf feast in a Chettinad mansion",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you at the airport and takes you to your hotel. For dinner, your specialist books a table at a modern Indian restaurant that's reinventing classic recipes.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Old Delhi's breakfast lanes",
        location: "Delhi",
        description:
          "Walk Old Delhi with a food writer, starting with nihari near Jama Masjid, then deep-fried parathas, jalebi and lassi in the lanes of Chandni Chowk. Wander the spice market of Khari Baoli, where the air makes you sneeze. In the afternoon, cook with a family at their home in south Delhi.",
        overnight: "Delhi",
        meals: "Breakfast, lunch",
      },
      {
        day: "3",
        title: "Train to Amritsar",
        location: "Amritsar",
        description:
          "Take the morning Shatabdi Express to Amritsar (about six hours), with breakfast served on board. In the evening, see the Golden Temple glowing over its sacred pool, then eat Amritsari fish and tandoori chicken at a famous dhaba.",
        overnight: "Amritsar",
        meals: "Breakfast, dinner",
      },
      {
        day: "4",
        title: "Langar and kulcha",
        location: "Amritsar",
        description:
          "Volunteer in the Golden Temple's langar, where vast cauldrons of dal feed tens of thousands each day, and share a meal with pilgrims on the floor. Then explore the old city for stuffed kulchas, lassi in steel tumblers and pinni sweets. Drive to the Attari-Wagah border for the evening ceremony.",
        overnight: "Amritsar",
        meals: "Breakfast, lunch",
      },
      {
        day: "5",
        title: "Fly to Lucknow",
        location: "Lucknow",
        description:
          "Fly to Lucknow (direct or via Delhi), the city of the nawabs and of Awadhi cuisine. In the evening, walk the old Chowk with your guide for galouti and kakori kebabs, sheermal bread and a glass of kulfi.",
        overnight: "Lucknow",
        meals: "Breakfast, dinner",
      },
      {
        day: "6",
        title: "Nawabi Lucknow",
        location: "Lucknow",
        description:
          "Explore the Bara Imambara and its labyrinth, then visit a chikankari embroidery workshop. Lunch is a dum pukht biryani cooked slowly under a sealed lid. In winter, try makhan malai, a cloud of saffron-scented milk foam sold only in the early morning.",
        overnight: "Lucknow",
        meals: "Breakfast, lunch",
      },
      {
        day: "7",
        title: "Fly to Kolkata",
        location: "Kolkata",
        description:
          "A short flight takes you east to Kolkata (just under two hours). In the evening, join your guide on Park Street and New Market for kathi rolls, said to have been invented here, and phuchka from a street stall.",
        overnight: "Kolkata",
        meals: "Breakfast, dinner",
      },
      {
        day: "8",
        title: "Flowers, sweets and a Bengali lunch",
        location: "Kolkata",
        description:
          "At dawn, visit the Mullick Ghat flower market below the Howrah Bridge, then have a Chinese breakfast of dumplings in Tiretta Bazaar. After the book stalls of College Street and a coffee at the Indian Coffee House, enjoy a Bengali lunch in a family home: mustard fish, kosha mangsho and mishti doi. Finish with a rosogolla tasting at a century-old sweet shop.",
        overnight: "Kolkata",
        meals: "Breakfast, lunch",
      },
      {
        day: "9",
        title: "Fly to Chennai",
        location: "Chennai",
        description:
          "Fly to Chennai (about two and a half hours). In the late afternoon, walk around the Kapaleeshwarar temple in Mylapore and the market streets around it, then end with dosas and a filter coffee at a classic tiffin house.",
        overnight: "Chennai",
        meals: "Breakfast",
      },
      {
        day: "10",
        title: "Into Chettinad",
        location: "Chettinad",
        description:
          "Fly to Tiruchirappalli (about an hour) and drive on to Karaikudi (about two hours), the heart of Chettinad. Check into a restored mansion and visit the Athangudi tile makers, then sit down to a Chettinad dinner served on banana leaves.",
        overnight: "Chettinad",
        meals: "Breakfast, dinner",
      },
      {
        day: "11",
        title: "Mansions and a Chettinad kitchen",
        location: "Chettinad",
        description:
          "Visit the great mansions of Kanadukathan with your guide, then spend the afternoon in a mansion kitchen learning to roast and grind the spices for Chettinad chicken and pepper rasam. A farewell feast follows.",
        overnight: "Chettinad",
        meals: "Breakfast, lunch, dinner",
      },
      {
        day: "12",
        title: "Depart",
        location: "Chettinad",
        description:
          "Your driver takes you to Madurai or Tiruchirappalli airport (about two hours) for your connecting flight home.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Nights 1–2", location: "Delhi", name: "Lodhi Garden House (placeholder)" },
      { nights: "Nights 3–4", location: "Amritsar", name: "Punjab Heritage Haveli (placeholder)" },
      { nights: "Nights 5–6", location: "Lucknow", name: "Nawabi Kothi Hotel (placeholder)" },
      { nights: "Nights 7–8", location: "Kolkata", name: "Park Street Heritage Hotel (placeholder)" },
      { nights: "Night 9", location: "Chennai", name: "Mylapore Garden Hotel (placeholder)" },
      { nights: "Nights 10–11", location: "Chettinad", name: "Chettinad Mansion Hotel (placeholder)" },
    ],
    guides:
      "A Delhi food writer leads you through the old city, a Sikh guide hosts you in Amritsar, a Lucknowi storyteller introduces Awadhi cuisine, a Kolkata food historian guides you through the markets, and a Chettiar family welcomes you into their kitchen.",
    inclusions: [
      ...coreInclusions,
      "Domestic flights Amritsar to Lucknow, Lucknow to Kolkata, Kolkata to Chennai and Chennai to Tiruchirappalli (economy)",
      "Shatabdi Express train from Delhi to Amritsar (AC chair class)",
      "Guided food walks, home-cooked meals and cooking classes as listed",
      "All tastings on guided food walks",
    ],
    exclusions: [...coreExclusions, "Alcoholic drinks"],
    pricingNotes: [
      sharingNote,
      peakNote,
      "Indicative price; your specialist confirms an exact quote, and can tailor for vegetarian, vegan or other dietary needs.",
    ],
    seo: {
      title: "India Food Tour: Delhi, Lucknow, Kolkata",
      description:
        "A 12-day food journey through Delhi, Amritsar, Lucknow, Kolkata and Chettinad, with street-food walks, market visits, home kitchens and cooking classes.",
    },
  },

  // 8. Luxury Train Journeys
  {
    slug: "luxury-train-journeys",
    title: "Luxury Train Journeys",
    headline: "Rajasthan by *palace* train.",
    summary:
      "Five nights aboard a luxury palace train across Agra, Ranthambore, Jaipur and Jodhpur, with time in Delhi before you board and on Udaipur's lakes after you step off.",
    overview: [
      "There's something wonderful about waking each morning in a different city, with breakfast served as the fields of Rajasthan roll past. India's luxury palace trains revive the style of royal travel, with wood-paneled cabins, attentive butlers, dining cars set with silver and polished brass, and off-train excursions arranged at every stop.",
      "This journey wraps a five-night rail circuit with the best of the land. Begin with two nights in Delhi to recover from your flight and explore the city. On board, see the Taj Mahal at sunrise, look for tigers in Ranthambore, and explore the forts and palaces of Jaipur and Jodhpur, returning each evening to your cabin.",
      "Step off in Udaipur for two nights at a lake palace, a perfect slow ending. Train routes and dates vary by season and operator, and cabins sell out well ahead, so your specialist will help you choose the right train and secure your cabin early.",
    ],
    days: 10,
    regions: ["north", "rajasthan"],
    route: ["delhi", "agra", "ranthambore", "jaipur", "jodhpur", "udaipur"],
    styles: ["rail", "palaces-heritage"],
    priceFromUSD: 9800,
    bestMonths: ["oct", "nov", "dec", "jan", "feb", "mar"],
    image: "amber-fort",
    highlights: [
      "Five nights aboard a luxury palace train",
      "The Taj Mahal at sunrise",
      "A tiger safari in Ranthambore",
      "Two nights at a lake palace in Udaipur",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you at the airport and takes you to a grand hotel in New Delhi. Relax and recover from your flight.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Delhi, old and new",
        location: "Delhi",
        description:
          "Explore Old Delhi with your historian guide, including Jama Masjid and a rickshaw ride through Chandni Chowk, then see Humayun's Tomb and the Qutub Minar in the afternoon. A private dinner is arranged in the evening.",
        overnight: "Delhi",
        meals: "Breakfast, dinner",
      },
      {
        day: "3",
        title: "All aboard",
        location: "Delhi",
        description:
          "After a leisurely morning, your driver takes you to Safdarjung station, where you're welcomed aboard with garlands and music. Settle into your cabin, meet your butler and enjoy your first dinner on board as the train leaves Delhi.",
        overnight: "On board",
        meals: "Breakfast, lunch, dinner",
      },
      {
        day: "4",
        title: "Agra and the Taj Mahal",
        location: "Agra",
        description:
          "Wake in Agra to see the Taj Mahal at sunrise, then visit Agra Fort with the train's guide. Return to the train for lunch as it continues west.",
        overnight: "On board",
        meals: "All meals",
      },
      {
        day: "5",
        title: "Tigers in Ranthambore",
        location: "Ranthambore",
        description:
          "An early morning jeep safari in Ranthambore National Park, home to tigers and the dramatic ruins of a thousand-year-old fort. Return to the train for brunch as it rolls on to Jaipur.",
        overnight: "On board",
        meals: "All meals",
      },
      {
        day: "6",
        title: "Jaipur, the Pink City",
        location: "Jaipur",
        description:
          "Explore Amber Fort and the City Palace, with time to visit the bazaars. In the evening, the train hosts a special dinner, often in a palace or fort.",
        overnight: "On board",
        meals: "All meals",
      },
      {
        day: "7",
        title: "Jodhpur's blue city",
        location: "Jodhpur",
        description:
          "Visit Mehrangarh Fort, high on its rocky outcrop above the blue houses of the old city, and the marble memorial of Jaswant Thada. Return to the train for your final night on board.",
        overnight: "On board",
        meals: "All meals",
      },
      {
        day: "8",
        title: "Arrive in Udaipur",
        location: "Udaipur",
        description:
          "After breakfast on board, step off in Udaipur and transfer to your lake palace hotel. In the late afternoon, take a private boat on Lake Pichola as the sun sets over the Aravalli hills.",
        overnight: "Udaipur",
        meals: "Breakfast",
      },
      {
        day: "9",
        title: "Udaipur at leisure",
        location: "Udaipur",
        description:
          "Visit the City Palace with your guide in the morning, then spend the afternoon at leisure: a spa treatment, a miniature painting lesson, or simply time by the water. A farewell dinner is arranged on a lakeside terrace.",
        overnight: "Udaipur",
        meals: "Breakfast, dinner",
      },
      {
        day: "10",
        title: "Depart",
        location: "Udaipur",
        description:
          "Your driver takes you to Udaipur airport for a short flight to Delhi or Mumbai to connect with your international flight.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Nights 1–2", location: "Delhi", name: "Lutyens Grand Hotel (placeholder)" },
      { nights: "Nights 3–7", location: "Rajasthan", name: "Luxury palace train, deluxe cabin (placeholder)" },
      {
        nights: "Nights 8–9",
        location: "Udaipur",
        name: "Jal Mahal Lake Palace (placeholder)",
        staySlug: "udaipur-lake-palace",
      },
    ],
    guides:
      "A Delhi-born historian guides you in the capital, the train's own guides lead each excursion, with naturalists for the Ranthambore safari, and an Udaipur specialist introduces you to the City Palace and its artists.",
    inclusions: [
      ...coreInclusions,
      "Five nights aboard a luxury palace train in a deluxe cabin, with all meals, excursions and entry fees on the train's program",
      "Domestic flight from Udaipur to Delhi or Mumbai (economy)",
      "Private dinner in Delhi and a farewell dinner in Udaipur",
      "Private boat ride on Lake Pichola",
    ],
    exclusions: [...coreExclusions, "Premium drinks, spa treatments and optional excursions aboard the train"],
    pricingNotes: [
      "Price is per person sharing a deluxe cabin and double room, based on two traveling together; suites cost more.",
      "Luxury trains run from October to April, with set departure dates. Single travelers and peak dates cost more.",
      "Indicative price; your specialist confirms an exact quote once your train and departure are chosen.",
    ],
    seo: {
      title: "Luxury Train Journey Through Rajasthan",
      description:
        "A 10-day journey aboard a luxury palace train across Agra, Ranthambore, Jaipur and Jodhpur, with nights in Delhi and at a lake palace in Udaipur.",
    },
  },

  // 9. An Indian Honeymoon
  {
    slug: "honeymoon-india",
    title: "An Indian Honeymoon",
    headline: "Lakes, backwaters and a *barefoot* island.",
    summary:
      "Udaipur's lake palaces, a private houseboat on Kerala's backwaters, and five slow days on a white-sand beach in the Andaman Islands: a honeymoon with romance and real adventure.",
    overview: [
      "This journey is built around three of the most romantic settings in India, each completely different. Begin in Udaipur, the city of lakes, where palaces seem to float on the water and evenings are spent on candlelit rooftops. Then fly south to Kerala for a night aboard your own private houseboat, followed by a lakeside retreat in Kumarakom with an Ayurvedic massage for two.",
      "Finally, cross the Bay of Bengal to the Andaman Islands, where Havelock's Radhanagar Beach is often named among the most beautiful in Asia. Spend five days swimming, snorkeling over coral, diving with a licensed center, or simply doing nothing at all in a beach villa.",
      "Your specialist takes care of every detail, from rose petals and private dinners to the right ferry times, leaving you free to enjoy each other.",
    ],
    days: 14,
    regions: ["rajasthan", "south", "islands"],
    route: ["udaipur", "kerala", "andaman-islands", "havelock"],
    styles: ["honeymoon", "beaches", "palaces-heritage"],
    priceFromUSD: 5600,
    bestMonths: ["nov", "dec", "jan", "feb", "mar"],
    image: "kerala-canoe",
    highlights: [
      "Three nights at a lake palace in Udaipur",
      "A private houseboat night on Vembanad Lake",
      "Five days on Havelock's white-sand beaches",
      "Private dinners and a couple's Ayurvedic massage",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Udaipur",
        location: "Udaipur",
        description:
          "Connect through Delhi or Mumbai to Udaipur, where your driver meets you and takes you to your lake palace hotel. Watch the sunset from your terrace and enjoy a quiet dinner.",
        overnight: "Udaipur",
        meals: "None",
      },
      {
        day: "2",
        title: "City Palace and a sunset boat",
        location: "Udaipur",
        description:
          "Explore the City Palace with your guide, then wander the lanes around Jagdish Temple. In the late afternoon, take a private boat on Lake Pichola, followed by a candlelit rooftop dinner.",
        overnight: "Udaipur",
        meals: "Breakfast, dinner",
      },
      {
        day: "3",
        title: "Udaipur at your own pace",
        location: "Udaipur",
        description:
          "A free day for spa treatments, a miniature painting lesson for two or a ride into the Aravalli hills. At sunset, drive up to the Monsoon Palace for the view across the lakes.",
        overnight: "Udaipur",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "Fly to Kochi",
        location: "Fort Kochi",
        description:
          "Fly south to Kochi (connecting via Mumbai or Bengaluru), where your driver takes you to a heritage hotel in Fort Kochi. Walk to the Chinese fishing nets for sunset.",
        overnight: "Fort Kochi",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "Your private houseboat",
        location: "Vembanad Lake",
        description:
          "After a morning walk through the old town, drive to the backwaters (about 90 minutes) and board your private kettuvallam. Drift past paddy fields and villages as your crew prepares Kerala dishes on board, then spend the evening moored in quiet water.",
        overnight: "Houseboat",
        meals: "All meals",
      },
      {
        day: "6",
        title: "Kumarakom by the lake",
        location: "Kumarakom",
        description:
          "Disembark after breakfast and transfer to a lakeside retreat in Kumarakom. In the afternoon, enjoy a couple's Ayurvedic massage, then watch the sunset over Vembanad Lake from a canoe.",
        overnight: "Kumarakom",
        meals: "Breakfast",
      },
      {
        day: "7",
        title: "Fly to the Andaman Islands",
        location: "Port Blair",
        description:
          "Drive to Kochi airport (about 90 minutes) and fly to Port Blair via Chennai or Bengaluru. In the evening, see the moving sound and light show at the historic Cellular Jail.",
        overnight: "Port Blair",
        meals: "Breakfast",
      },
      {
        day: "8",
        title: "Ferry to Havelock",
        location: "Havelock",
        description:
          "Take a fast ferry to Havelock (Swaraj Dweep), about two hours across turquoise water. Check into your beach retreat close to Radhanagar Beach and watch your first island sunset.",
        overnight: "Havelock",
        meals: "Breakfast",
      },
      {
        day: "9–12",
        title: "Island days",
        location: "Havelock",
        description:
          "Four days to enjoy the island at your own pace. Snorkel at Elephant Beach, try a discovery dive with a licensed center, kayak through mangroves, or walk Radhanagar Beach at sunset. Your specialist arranges a private dinner on the beach one evening.",
        overnight: "Havelock",
        meals: "Breakfast",
      },
      {
        day: "13",
        title: "Back to the mainland",
        location: "Chennai",
        description:
          "Ferry back to Port Blair and fly to Chennai (about two hours), where you overnight at a hotel ready for your flight home.",
        overnight: "Chennai",
        meals: "Breakfast",
      },
      {
        day: "14",
        title: "Depart",
        location: "Chennai",
        description:
          "Your driver takes you to Chennai airport for your flight home.",
        meals: "Breakfast",
      },
    ],
    stays: [
      {
        nights: "Nights 1–3",
        location: "Udaipur",
        name: "Jal Mahal Lake Palace (placeholder)",
        staySlug: "udaipur-lake-palace",
      },
      { nights: "Night 4", location: "Fort Kochi", name: "Spice Port Heritage Hotel (placeholder)" },
      {
        nights: "Night 5",
        location: "Vembanad Lake",
        name: "Vembanad Kettuvallam (placeholder)",
        staySlug: "vembanad-houseboat",
      },
      { nights: "Night 6", location: "Kumarakom", name: "Kumarakom Lake Retreat (placeholder)" },
      { nights: "Night 7", location: "Port Blair", name: "Port Blair Bay Hotel (placeholder)" },
      {
        nights: "Nights 8–12",
        location: "Havelock",
        name: "Radhanagar Beach Retreat (placeholder)",
        staySlug: "andaman-beach-retreat",
      },
      { nights: "Night 13", location: "Chennai", name: "Chennai Airport Hotel (placeholder)" },
    ],
    guides:
      "An Udaipur guide who knows the city's quiet corners, a Kochi historian for Fort Kochi, and in the Andamans, local hosts and licensed dive instructors who know the reefs well.",
    inclusions: [
      ...coreInclusions,
      "Domestic flights Udaipur to Kochi, Kochi to Port Blair and Port Blair to Chennai (economy)",
      "Fast ferry tickets between Port Blair and Havelock",
      "Private houseboat for one night with all meals",
      "Couple's Ayurvedic massage in Kumarakom",
      "Private boat on Lake Pichola, rooftop dinner in Udaipur and a beach dinner on Havelock",
    ],
    exclusions: [...coreExclusions, "Diving, snorkeling and other water activities"],
    pricingNotes: [
      sharingNote,
      peakNote,
      "Ferries to Havelock can change with the weather. Indicative price; your specialist confirms an exact quote.",
    ],
    seo: {
      title: "India Honeymoon: Udaipur, Kerala & Andamans",
      description:
        "A 14-day Indian honeymoon with a lake palace in Udaipur, a private houseboat on Kerala's backwaters and five slow days on Havelock's beaches in the Andamans.",
    },
  },

  // 10. India for Families
  {
    slug: "family-india",
    title: "India for Families",
    headline: "Trains, tigers and *kites* over Jaipur.",
    summary:
      "An easy-paced family journey through Delhi, the Taj Mahal, the tiger forests of Ranthambore, Jaipur and Udaipur, with hands-on activities for kids and plenty of pool time.",
    overview: [
      "India is a wonderful place to travel with children: bright, friendly and full of stories. This journey is paced for families, with shorter travel days, hotels with pools and gardens, and activities kids will remember long after the trip.",
      "Ride the fast train to Agra, look for tigers on safari in Ranthambore, fly kites from a Jaipur rooftop and learn to make chapatis with a local family. Guides are chosen for their warmth with children and know how to bring history to life for younger travelers.",
      "We take ethics seriously. You won't ride elephants at Amber Fort or visit attractions that keep wild animals in captivity; instead, you'll see wildlife where it belongs, in the forest, with expert naturalists.",
    ],
    days: 12,
    regions: ["north", "rajasthan"],
    route: ["delhi", "agra", "ranthambore", "jaipur", "udaipur"],
    styles: ["family", "wildlife", "classic"],
    priceFromUSD: 3400,
    bestMonths: ["oct", "nov", "dec", "jan", "feb", "mar"],
    image: "hawa-mahal",
    highlights: [
      "The fast train to Agra and the Taj at sunrise",
      "Jeep safaris looking for tigers in Ranthambore",
      "A family cooking class in Jaipur",
      "Boats and bikes around Udaipur's lakes",
    ],
    itinerary: [
      {
        day: "1",
        title: "Arrive in Delhi",
        location: "Delhi",
        description:
          "Your driver meets you at the airport and takes you to a family-friendly hotel with a pool. Rest and recover from the flight.",
        overnight: "Delhi",
        meals: "None",
      },
      {
        day: "2",
        title: "Delhi for families",
        location: "Delhi",
        description:
          "Ride a cycle rickshaw through Chandni Chowk with your guide, try jalebi from a street stall, and visit the vast courtyard of Jama Masjid. After lunch and a rest, explore the gardens of Humayun's Tomb, perfect for running around.",
        overnight: "Delhi",
        meals: "Breakfast",
      },
      {
        day: "3",
        title: "The fast train to Agra",
        location: "Agra",
        description:
          "Take the morning Gatimaan Express to Agra (about 100 minutes). Explore Agra Fort with your guide, then visit a marble inlay workshop where artisans use the same techniques as the Taj builders. Watch the sunset over the Taj from Mehtab Bagh across the river.",
        overnight: "Agra",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "Taj at sunrise and on to Ranthambore",
        location: "Ranthambore",
        description:
          "See the Taj Mahal at sunrise, then drive to Ranthambore (about five hours, with stops). Arrive at your jungle lodge in time for a swim and dinner under the stars.",
        overnight: "Ranthambore",
        meals: "Breakfast, dinner",
      },
      {
        day: "5",
        title: "Tiger safaris",
        location: "Ranthambore",
        description:
          "Morning and afternoon jeep safaris in Ranthambore National Park with a naturalist who's great with children, looking for tigers, leopards, sloth bears and crocodiles. Between safaris, relax at the lodge or visit a village school.",
        overnight: "Ranthambore",
        meals: "All meals",
      },
      {
        day: "6",
        title: "Drive to Jaipur",
        location: "Jaipur",
        description:
          "Take a final morning safari or sleep in, then drive to Jaipur (about three and a half hours). Check into your haveli and enjoy an evening at leisure.",
        overnight: "Jaipur",
        meals: "Breakfast",
      },
      {
        day: "7",
        title: "Forts and stargazing",
        location: "Jaipur",
        description:
          "Walk up to Amber Fort (or go by jeep), where kids can explore secret passages and mirrored halls. In the afternoon, visit Jantar Mantar, the giant observatory, which is fascinating for budding scientists.",
        overnight: "Jaipur",
        meals: "Breakfast",
      },
      {
        day: "8",
        title: "Cooking and kites",
        location: "Jaipur",
        description:
          "Spend the morning in a family kitchen, learning to make chapatis, dal and a simple curry, then share lunch together. In the afternoon, fly kites from a rooftop with a local kite maker, or try block printing in Sanganer.",
        overnight: "Jaipur",
        meals: "Breakfast, lunch",
      },
      {
        day: "9",
        title: "Fly to Udaipur",
        location: "Udaipur",
        description:
          "Take the short flight to Udaipur (about an hour). In the afternoon, take a boat ride on Lake Pichola, then watch a puppet show in the old city.",
        overnight: "Udaipur",
        meals: "Breakfast",
      },
      {
        day: "10",
        title: "City Palace and village bikes",
        location: "Udaipur",
        description:
          "Visit the City Palace with your guide, then take an easy guided bike ride through the villages outside the city, stopping to meet potters and farmers.",
        overnight: "Udaipur",
        meals: "Breakfast",
      },
      {
        day: "11",
        title: "A free day",
        location: "Udaipur",
        description:
          "A day to relax by the pool, explore the lanes and shops of the old city, or visit the vintage car collection. Your specialist arranges a farewell dinner.",
        overnight: "Udaipur",
        meals: "Breakfast, dinner",
      },
      {
        day: "12",
        title: "Depart",
        location: "Udaipur",
        description:
          "Your driver takes you to Udaipur airport for your connecting flight home.",
        meals: "Breakfast",
      },
    ],
    stays: [
      { nights: "Nights 1–2", location: "Delhi", name: "Lodhi Garden House (placeholder)" },
      { nights: "Night 3", location: "Agra", name: "Mehtab Garden Hotel (placeholder)" },
      {
        nights: "Nights 4–5",
        location: "Ranthambore",
        name: "Ranthambore Jungle Lodge (placeholder)",
        staySlug: "ranthambore-jungle-lodge",
      },
      {
        nights: "Nights 6–8",
        location: "Jaipur",
        name: "Haveli Gulabi (placeholder)",
        staySlug: "jaipur-heritage-haveli",
      },
      { nights: "Nights 9–11", location: "Udaipur", name: "Pichola Garden Hotel (placeholder)" },
    ],
    guides:
      "Guides chosen for their warmth with children: a Delhi storyteller, a Taj specialist who brings Mughal history to life, a Ranthambore naturalist who has guided many young wildlife lovers, and family-friendly guides in Jaipur and Udaipur.",
    inclusions: [
      ...coreInclusions,
      "Gatimaan Express train from Delhi to Agra (AC chair class)",
      "Domestic flight from Jaipur to Udaipur (economy)",
      "Three jeep safaris in Ranthambore with a naturalist, and all meals at the lodge",
      "Family cooking class, kite flying and village bike ride",
    ],
    exclusions: [...coreExclusions, "Optional activities not listed"],
    pricingNotes: [
      "Price is per person based on two adults and two children sharing family rooms; child discounts may apply.",
      "School holidays (Christmas, New Year, Easter) and Diwali cost more.",
      "Indicative price; your specialist confirms an exact quote for your family.",
    ],
    seo: {
      title: "India Family Trip: Taj, Tigers & Rajasthan",
      description:
        "A 12-day family trip to Delhi, the Taj Mahal, Ranthambore's tigers, Jaipur and Udaipur, with a fast train, safaris, cooking classes and family-friendly stays.",
    },
  },
];
