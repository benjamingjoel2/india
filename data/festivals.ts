/**
 * Festivals. Most follow lunar or regional calendars, so typicalMonths are
 * indicative only. Verify exact dates every year before quoting them.
 */
import type { Festival } from "./types";

export const festivals: Festival[] = [
  {
    slug: "diwali",
    name: "Diwali",
    headline: "The festival of *lights*.",
    summary:
      "India's best-loved festival, when homes, temples and whole cities glow with oil lamps, and families gather for sweets, prayers and fireworks.",
    description: [
      "Diwali celebrates the victory of light over darkness. For many Hindus it marks the return of Lord Rama to Ayodhya, and it is also an important festival for Sikhs, Jains and many Buddhists. In the days before, homes are cleaned and decorated, rangoli patterns appear on doorsteps in colored powder and petals, and markets fill with lamps, lanterns and boxes of sweets.",
      "On the main night, families light rows of small clay diyas, perform puja to Lakshmi, the goddess of prosperity, and visit friends and neighbors. In Jaipur the bazaars are strung with lights, in Udaipur the lakes reflect glowing palaces, and in Amritsar the Golden Temple shimmers with lamps on the same night as Bandi Chhor Divas, the Sikh celebration of freedom.",
      "Celebrating Diwali as a traveler is a joyful, generous experience, but it helps to plan. Many Indians travel home for the festival, some shops and businesses close, and fireworks can make cities noisy and smoky. We often suggest spending the night itself in a heritage hotel or with a family who will welcome you into their celebrations.",
    ],
    typicalMonths: ["oct", "nov"],
    typicalTiming: "October or November, set by the lunar calendar. Dates vary each year; verify before booking.",
    where: "Jaipur, Udaipur, Varanasi, Amritsar and across India",
    regions: ["north", "rajasthan"],
    image: "festival-diwali",
    tips: [
      "Book hotels, trains and flights early, as Diwali is one of India's busiest travel periods.",
      "Expect some shops, markets and offices to close for a day or two around the main night.",
      "If you are sensitive to smoke or noise, choose a stay outside the busiest city centers.",
      "A box of sweets is a welcome gift if you are invited into someone's home.",
      "Dress in your best; many people wear new clothes, and joining in is appreciated.",
    ],
    relatedJourneys: ["golden-triangle", "rajasthan-palaces", "spiritual-india", "family-india"],
    seo: {
      title: "Diwali in India: when and where to celebrate",
      description:
        "Experience Diwali in India: lamp-lit cities, family celebrations and temple nights in Jaipur, Udaipur, Varanasi and Amritsar, with practical planning tips.",
    },
  },
  {
    slug: "holi",
    name: "Holi",
    headline: "Spring, in every *color*.",
    summary:
      "The joyful spring festival when people take to the streets to throw colored powder and water, sing, dance and share festive food.",
    description: [
      "Holi marks the end of winter and the arrival of spring, and celebrates the triumph of good over evil in the story of Prahlad and Holika. On the evening before, bonfires are lit in neighborhoods across north India. The next morning, the streets fill with people of every age smearing each other with gulal, bright colored powder, and drenching friends and strangers alike with water.",
      "The celebrations are especially famous around Mathura and Vrindavan, linked to the legends of Krishna, where festivities stretch over days and include the Lathmar Holi of Barsana. In Rajasthan, palaces and havelis host their own celebrations, and in Jaipur and Udaipur you can join in at a gentler pace in a hotel courtyard or a private home.",
      "By early afternoon the color throwing usually winds down, people wash, rest and visit friends with sweets such as gujiya. Holi is exuberant and can be boisterous in crowded public spaces, so we help you choose how to experience it, whether that is out on the streets with a trusted local host or in a calmer setting.",
    ],
    typicalMonths: ["feb", "mar"],
    typicalTiming: "Usually March, occasionally late February, on the full moon of the Hindu month of Phalguna. Dates vary each year; verify before booking.",
    where: "Mathura, Vrindavan, Jaipur, Udaipur, Varanasi and across north India",
    regions: ["north", "rajasthan"],
    image: "festival-holi",
    tips: [
      "Wear old clothes you are happy to lose, as some colors stain permanently.",
      "Rub coconut oil into your hair and skin beforehand to help the color wash off.",
      "Protect phones and cameras in waterproof pouches and keep sunglasses on.",
      "Celebrate with a local host or at your hotel if you prefer a calmer experience.",
      "Women travelers may feel more comfortable joining organized or private celebrations rather than crowded streets.",
    ],
    relatedJourneys: ["golden-triangle", "rajasthan-palaces", "spiritual-india", "family-india"],
    seo: {
      title: "Holi in India: celebrate the festival of colors",
      description:
        "Celebrate Holi in India, from Mathura and Vrindavan to Rajasthan's palace courtyards, with tips on timing, what to wear and how to join in comfortably.",
    },
  },
  {
    slug: "pushkar-camel-fair",
    name: "Pushkar Camel Fair",
    headline: "Camels, color and *devotion*.",
    summary:
      "A great desert gathering where livestock traders, pilgrims and musicians converge on the holy town of Pushkar in Rajasthan.",
    description: [
      "Each autumn the dunes around Pushkar fill with camels, horses and cattle, brought in from across Rajasthan by traders and herders. For days the fairground is a whirl of bargaining, decorated animals, turbaned herders and cooking fires, with camel races, folk music and competitions adding to the spectacle.",
      "The fair coincides with Kartik Purnima, the full moon of the Hindu month of Kartik, when thousands of pilgrims come to bathe in Pushkar's sacred lake and pray at its temples. Evenings on the ghats are lit by lamps and filled with prayer, a reminder that this is as much a religious occasion as a market.",
      "In recent years the livestock trading has become smaller and the event busier with visitors, but early mornings among the herders' camps remain magical. We base travelers in comfortable tented camps or nearby heritage hotels and time visits for the trading days, before the busiest final days around the full moon.",
    ],
    typicalMonths: ["oct", "nov"],
    typicalTiming: "October or November, around the Kartik Purnima full moon. Dates vary each year; verify before booking.",
    where: "Pushkar, near Ajmer, Rajasthan",
    regions: ["rajasthan"],
    image: "festival-pushkar",
    tips: [
      "Arrive in the early days of the fair for the most livestock trading and fewer crowds.",
      "Book camps or hotels many months ahead; rooms are limited and in high demand.",
      "Pushkar is a holy town: alcohol and meat are not served, and modest dress is appreciated.",
      "Always ask before photographing people, and be wary of unsolicited blessings at the lake.",
      "Go out at dawn, when the light is soft and the herders' camps are at their most atmospheric.",
    ],
    relatedJourneys: ["rajasthan-palaces", "spiritual-india", "food-and-markets"],
    seo: {
      title: "Pushkar Camel Fair: dates, tips and where to stay",
      description:
        "Plan a visit to the Pushkar Camel Fair in Rajasthan, with advice on timing, desert camps, heritage hotels, photo etiquette and the holy lake at full moon.",
    },
  },
  {
    slug: "durga-puja",
    name: "Durga Puja",
    headline: "Kolkata's grandest *celebration*.",
    summary:
      "Bengal's biggest festival, when Kolkata becomes a city-wide art installation of themed pandals honoring the goddess Durga.",
    description: [
      "Durga Puja celebrates the goddess Durga's victory over the buffalo demon Mahishasura. In Kolkata, preparations begin months ahead in Kumartuli, the potters' quarter, where artisans shape clay idols over straw frames, paint their faces and dress them in silk and jewelry. The festival has been recognized by UNESCO as part of humanity's intangible cultural heritage.",
      "During the main days, hundreds of neighborhood pandals, temporary pavilions built by local committees, open across the city. Some recreate famous buildings, others are ambitious works of contemporary art. Families stroll from one to the next late into the night, stopping for street food, music and dhak drumming.",
      "The festival ends with Bijoya Dashami, when married women smear each other with vermilion in the sindoor khela ritual and the idols are carried to the river for immersion. It is crowded, emotional and unforgettable. We arrange guided pandal-hopping with a Bengali host who can steer you to the best and explain the stories behind them.",
    ],
    typicalMonths: ["sep", "oct"],
    typicalTiming: "September or October, during the lunar month of Ashvin. Dates vary each year; verify before booking.",
    where: "Kolkata and across West Bengal",
    regions: ["east-northeast"],
    image: "festival-durga-puja",
    tips: [
      "Visit Kumartuli in the weeks before to see the idols being made.",
      "Go pandal-hopping in the afternoon or very late at night to avoid the heaviest crowds.",
      "Wear comfortable shoes and expect to walk; traffic slows to a crawl during the festival.",
      "Remove shoes where asked and be respectful near the altar during prayers.",
      "Try the festival street food, from kathi rolls to fish fries and sweets.",
    ],
    relatedJourneys: ["food-and-markets", "spiritual-india"],
    seo: {
      title: "Durga Puja in Kolkata: a traveler's guide",
      description:
        "Experience Durga Puja in Kolkata, from Kumartuli's idol-makers to artistic pandals and river immersions, with guided pandal-hopping and festival food tips.",
    },
  },
  {
    slug: "hornbill-festival",
    name: "Hornbill Festival",
    headline: "Nagaland's festival of *festivals*.",
    summary:
      "A ten-day celebration of Naga culture near Kohima, bringing together the tribes of Nagaland in dance, music, crafts and food.",
    description: [
      "Named after the hornbill, a bird revered in Naga folklore, the Hornbill Festival was created by the state government to showcase and preserve the traditions of Nagaland's many tribes. It is held at Kisama Heritage Village, a short drive from Kohima, where each tribe has its own traditional morung, or communal house.",
      "Through the days, groups in traditional dress perform war dances, harvest songs and folk games, while artisans sell weaving, beadwork, woodcarving and bamboo crafts. Food stalls serve smoked pork, bamboo-shoot dishes and the fiery king chilli, and evenings bring music, from traditional chants to rock bands, for which Nagaland is quietly famous.",
      "The festival offers a vivid introduction, but we like to pair it with time in the villages themselves. Staying in a homestay near Kohima or Khonoma, walking terraced fields with a local guide and sharing a meal by a family hearth adds depth and context to what you see on stage.",
    ],
    typicalMonths: ["dec"],
    typicalTiming: "Usually 1 to 10 December each year. Dates and programs can change; verify before booking.",
    where: "Kisama Heritage Village, near Kohima, Nagaland",
    regions: ["east-northeast"],
    image: "festival-hornbill",
    tips: [
      "Book accommodation in Kohima early, as rooms are limited during the festival.",
      "Check current permit requirements for Nagaland well before you travel.",
      "Bring warm layers; December evenings in the hills are cold.",
      "Ask before photographing performers and villagers, and respect any refusals.",
      "Add a few days in the villages for a fuller picture of Naga life.",
    ],
    relatedJourneys: ["himalayan-adventures", "food-and-markets"],
    seo: {
      title: "Hornbill Festival, Nagaland: a traveler's guide",
      description:
        "Plan a trip to Nagaland's Hornbill Festival near Kohima: tribal dance, crafts and food, village homestays, permits and practical advice for this December event.",
    },
  },
  {
    slug: "hemis-festival",
    name: "Hemis Festival",
    headline: "Masked dances in *Ladakh*.",
    summary:
      "A colorful monastery festival in Ladakh, honoring Guru Padmasambhava with masked dances in the courtyard of Hemis Monastery.",
    description: [
      "Hemis is one of Ladakh's largest and wealthiest monasteries, tucked into a side valley above the Indus about forty kilometers from Leh. Each summer it hosts a two-day festival marking the birth of Guru Padmasambhava, the teacher credited with bringing Tantric Buddhism to the Himalaya.",
      "The highlight is the cham, a sacred masked dance performed by monks in brocade robes and vividly painted masks, to the sound of long horns, cymbals and drums. The dances depict the triumph of good over evil and the deeds of the Guru. Every few years a huge thangka, a painted silk scroll, is unveiled to the crowd.",
      "Ladakhis come in their finest clothes, with turquoise-studded perak headdresses and long woollen robes, turning the festival into a joyful social occasion. Because Leh sits at around 3,500 meters, we plan several days of acclimatization before the festival and combine it with other monasteries, village walks and the high valleys.",
    ],
    typicalMonths: ["jun", "jul"],
    typicalTiming: "June or July, on the tenth day of the Tibetan lunar month. Dates vary each year; verify before booking.",
    where: "Hemis Monastery, near Leh, Ladakh",
    regions: ["himalaya"],
    image: "festival-cham",
    tips: [
      "Allow at least two or three days in Leh to acclimatize before the festival.",
      "Arrive early to find a good spot in the courtyard; it fills quickly.",
      "Dress modestly, remove hats inside prayer halls and follow monks' guidance.",
      "Bring sun protection; the high-altitude sun is strong even when the air is cool.",
      "Do not use flash photography during the dances.",
    ],
    relatedJourneys: ["himalayan-adventures", "spiritual-india"],
    seo: {
      title: "Hemis Festival, Ladakh: masked dances and tips",
      description:
        "Plan a visit to the Hemis Festival in Ladakh, with sacred masked cham dances, monastery etiquette, altitude advice and ways to explore the region around Leh.",
    },
  },
];
