/**
 * Regions and destinations. Region slugs and destination slugs are referenced
 * by navigation (/where-to-go/<region>#<destination>) and by journeys, so keep
 * them stable. Seasonal calendars are indicative; verify each year.
 */
import type { Region } from "./types";

export const regions: Region[] = [
  {
    slug: "north",
    name: "North India",
    navLabel: "North",
    headline: "Rivers, ruins and *marble* at dawn.",
    summary:
      "The India of the great rivers and the great empires: Mughal Delhi and Agra, the ghats of Varanasi, the Ganges at Rishikesh and the Golden Temple at Amritsar.",
    overview: [
      "North India is where many first journeys begin, and for good reason. Delhi holds seven historic cities inside one modern capital, from the red sandstone of Humayun's Tomb to the lanes of Old Delhi, where a cycle rickshaw can carry you past spice wholesalers, silversmiths and a seventeenth-century mosque in the space of ten minutes.",
      "Follow the plains east and the story deepens. In Agra, the Taj Mahal changes color with the hour, pale gray before sunrise, warm white at noon, rose at dusk. In Varanasi, the oldest living city on the Ganges, pilgrims bathe at first light and evening aarti fills the river with lamps, bells and the smell of camphor and marigold.",
      "Further north the land rises. Rishikesh sits where the Ganges leaves the Himalayan foothills, a town of ashrams, suspension bridges and clear green water. Amritsar, in the Punjab, is home to the Golden Temple, whose community kitchen serves free meals to tens of thousands of people every day, cooked and served by volunteers. We plan the pace so each place has room to breathe.",
    ],
    accent: "marigold",
    image: "taj-arch",
    gallery: ["taj-arch", "varanasi-ghats", "golden-temple-day", "humayun-tomb"],
    highlights: [
      {
        title: "The Taj Mahal at first light",
        text: "We time your visit for opening, when the crowds are thin and the marble turns from gray to gold over the Yamuna.",
      },
      {
        title: "Evening aarti in Varanasi",
        text: "Watch the ceremony from a wooden rowing boat on the Ganges, with a guide who grew up on the ghats explaining each ritual.",
      },
      {
        title: "Old Delhi on foot",
        text: "Spice markets, stepped lanes and street food stops chosen by a local walker who knows which stall makes the best jalebi.",
      },
      {
        title: "The langar at the Golden Temple",
        text: "Sit on the floor with pilgrims for a simple meal from one of the world's largest community kitchens, or help with the chapatis.",
      },
      {
        title: "Yoga by the Ganges",
        text: "Morning practice in Rishikesh with a teacher we know personally, followed by a walk along the river's quieter banks.",
      },
    ],
    bestTime: {
      summary:
        "October to March brings clear skies and comfortable days, with chilly, sometimes foggy mornings in December and January. Seasons shift year to year, so we confirm conditions when we plan.",
      calendar: {
        jan: "good",
        feb: "peak",
        mar: "peak",
        apr: "shoulder",
        may: "avoid",
        jun: "avoid",
        jul: "shoulder",
        aug: "shoulder",
        sep: "shoulder",
        oct: "peak",
        nov: "peak",
        dec: "good",
      },
    },
    destinations: [
      {
        slug: "delhi",
        name: "Delhi",
        region: "north",
        summary:
          "A capital built in layers, where Mughal tombs and Lutyens' avenues sit a short drive from the crowded, fragrant lanes of Old Delhi.",
        knownFor: ["Humayun's Tomb", "Old Delhi food walks", "Qutub Minar", "Craft and design shopping"],
        image: "humayun-tomb",
      },
      {
        slug: "agra",
        name: "Agra",
        region: "north",
        summary:
          "Home of the Taj Mahal and the great red fort of the Mughals, with Fatehpur Sikri's abandoned royal city an hour away.",
        knownFor: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Marble inlay workshops"],
        image: "taj-arch",
      },
      {
        slug: "varanasi",
        name: "Varanasi",
        region: "north",
        summary:
          "One of the world's oldest continuously inhabited cities, where life and ritual unfold along the ghats of the Ganges.",
        knownFor: ["Dawn boat rides", "Ganga aarti", "Silk weaving", "Sarnath"],
        image: "varanasi-ghats",
      },
      {
        slug: "rishikesh",
        name: "Rishikesh",
        region: "north",
        summary:
          "A riverside town in the Himalayan foothills, known for its ashrams, yoga schools and the clear, fast-flowing Ganges.",
        knownFor: ["Yoga and meditation", "Riverside ashrams", "White-water rafting", "Foothill walks"],
        image: "himalaya-river",
      },
      {
        slug: "amritsar",
        name: "Amritsar",
        region: "north",
        summary:
          "The spiritual heart of Sikhism, home to the Golden Temple and some of the most generous food in India.",
        knownFor: ["Golden Temple", "Community langar", "Punjabi cooking", "Wagah border ceremony"],
        image: "golden-temple-day",
      },
    ],
    faqs: [
      {
        question: "Is the Taj Mahal open every day?",
        answer:
          "The Taj Mahal is closed to general visitors on Fridays, when it is reserved for prayers. It opens around sunrise on other days, and we build your Agra stay around the best light. Opening rules occasionally change, so we confirm them when we book.",
      },
      {
        question: "How much time should we spend in Varanasi?",
        answer:
          "Two nights is the minimum we recommend, which gives you an evening aarti, a dawn boat ride and time in the old city. Three nights lets you add Sarnath, where the Buddha gave his first sermon, and a slower look at the weaving workshops.",
      },
      {
        question: "What is the fog like in winter?",
        answer:
          "In December and January, dense morning fog can settle over the northern plains and delay flights and trains. We build in buffer time, favor later departures and use road transfers where it makes sense. Days usually clear into crisp sunshine.",
      },
    ],
    seo: {
      title: "North India travel: Delhi, Agra, Varanasi & more",
      description:
        "Tailor-made North India journeys: the Taj Mahal at dawn, Varanasi's ghats, Old Delhi's lanes, Rishikesh and the Golden Temple, planned by people who know them.",
    },
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    navLabel: "Rajasthan",
    headline: "Palaces, forts and *desert* light.",
    summary:
      "The land of the Rajput kingdoms: hilltop forts, lake palaces and blue and golden cities strung across the Thar Desert.",
    overview: [
      "Rajasthan was once a patchwork of princely states, each with its own ruling family, its own fort and its own fierce pride. That history is still close to the surface. Many palaces are now hotels run by descendants of the families who built them, and a conversation over tea on a haveli rooftop can easily turn into three centuries of family stories.",
      "Each city has its own color and character. Jaipur is pink and busy, a planned city of bazaars and the honeycombed Hawa Mahal. Udaipur is white and serene, its palaces reflected in Lake Pichola. Jodhpur sprawls in indigo beneath Mehrangarh, one of the most imposing forts in India, and Jaisalmer rises from the sand in honey-colored stone.",
      "Between the cities is a quieter Rajasthan we love just as much: village markets, stepwells, block-printing workshops and dunes where you can watch the sun go down with nothing but the sound of camel bells. Pushkar, with its holy lake and ghats, is a gentle pause on the way. We balance the grand set pieces with these slower, more personal moments.",
    ],
    accent: "sandstone",
    image: "hawa-mahal",
    gallery: ["hawa-mahal", "amber-fort", "udaipur-palace"],
    highlights: [
      {
        title: "Sleep in a palace",
        text: "From lakeside heritage hotels to small family-run havelis, we choose stays with real history and the warmth to match.",
      },
      {
        title: "Mehrangarh at golden hour",
        text: "Walk Jodhpur's great fort late in the afternoon, then look down over the blue houses of the old city as the light softens.",
      },
      {
        title: "A night in the Thar",
        text: "Dinner under the stars at a desert camp outside Jaisalmer, with folk musicians whose families have played for generations.",
      },
      {
        title: "Block printing in Bagru",
        text: "Spend a morning with artisan families near Jaipur, carving, mixing natural dyes and printing your own length of cotton.",
      },
      {
        title: "Lake Pichola by boat",
        text: "Glide past Udaipur's ghats and island palaces at sunset, when the city glows white and gold against the Aravalli hills.",
      },
    ],
    bestTime: {
      summary:
        "October to March is the season, with warm days and cool desert nights; April turns hot and May to June is fierce. Seasons shift year to year, so we confirm conditions when we plan.",
      calendar: {
        jan: "peak",
        feb: "peak",
        mar: "good",
        apr: "shoulder",
        may: "avoid",
        jun: "avoid",
        jul: "shoulder",
        aug: "shoulder",
        sep: "shoulder",
        oct: "good",
        nov: "peak",
        dec: "peak",
      },
    },
    destinations: [
      {
        slug: "jaipur",
        name: "Jaipur",
        region: "rajasthan",
        summary:
          "Rajasthan's lively capital, a planned eighteenth-century city of pink facades, busy bazaars and the great Amber Fort on the hill.",
        knownFor: ["Amber Fort", "Hawa Mahal", "Gem and textile bazaars", "Jantar Mantar"],
        image: "hawa-mahal",
      },
      {
        slug: "udaipur",
        name: "Udaipur",
        region: "rajasthan",
        summary:
          "A city of lakes and white palaces in the Aravalli hills, long celebrated as one of the most romantic places in India.",
        knownFor: ["Lake Pichola", "City Palace", "Miniature painting", "Sunset boat rides"],
        image: "udaipur-palace",
      },
      {
        slug: "jodhpur",
        name: "Jodhpur",
        region: "rajasthan",
        summary:
          "The Blue City, crowned by the vast Mehrangarh Fort, with a clock-tower market and some of Rajasthan's best street food.",
        knownFor: ["Mehrangarh Fort", "Blue old city", "Sardar Market", "Bishnoi villages"],
      },
      {
        slug: "jaisalmer",
        name: "Jaisalmer",
        region: "rajasthan",
        summary:
          "A golden sandstone fort city deep in the Thar Desert, where people still live and trade inside the medieval walls.",
        knownFor: ["Living fort", "Carved havelis", "Desert camps", "Sam and Khuri dunes"],
      },
      {
        slug: "pushkar",
        name: "Pushkar",
        region: "rajasthan",
        summary:
          "A small pilgrimage town around a sacred lake, with rare Brahma temple traditions and the famous autumn camel fair.",
        knownFor: ["Sacred lake and ghats", "Brahma Temple", "Camel fair", "Rose gardens"],
        image: "amber-fort",
      },
    ],
    faqs: [
      {
        question: "How many days do we need in Rajasthan?",
        answer:
          "Ten to twelve days lets you see Jaipur, Jodhpur, Udaipur and either Jaisalmer or Pushkar without rushing. With a week, we would focus on two or three cities and add a rural stay rather than racing between forts.",
      },
      {
        question: "Can we really stay in palaces?",
        answer:
          "Yes. Rajasthan has many heritage hotels in former palaces, forts and havelis, from grand lakeside properties to intimate family homes. We know the owners and managers personally and match the stay to your taste and budget.",
      },
      {
        question: "Is it too hot to visit in April?",
        answer:
          "April is warm, often well into the high thirties Celsius by afternoon. It can work with early starts, long lunches and a pool, and prices are softer. From May the heat becomes oppressive for sightseeing, so we usually suggest the hills instead.",
      },
    ],
    seo: {
      title: "Rajasthan tours: palaces, forts and desert cities",
      description:
        "Tailor-made Rajasthan journeys through Jaipur, Udaipur, Jodhpur, Jaisalmer and Pushkar, with palace stays, desert nights and craft villages chosen by experts.",
    },
  },
  {
    slug: "south",
    name: "South India",
    navLabel: "South",
    headline: "Backwaters, temples and *spice* air.",
    summary:
      "A greener, slower India of palm-lined backwaters, towering temple gateways, tea and spice hills and the beaches of Goa.",
    overview: [
      "South India runs on a different rhythm. In Kerala, life follows the water: rice barges converted into houseboats drift along the backwaters, past village churches, toddy shops and women washing brass pots at the water's edge. Up in the Western Ghats, the air smells of cardamom and wet earth, and tea estates roll across the hills around Munnar.",
      "Tamil Nadu is the great temple country. At Madurai, the gopurams of the Meenakshi Temple are crowded with thousands of painted figures, and evening ceremonies carry on much as they have for centuries. Along the coast, the French quarter of Pondicherry offers mustard-yellow villas and bakeries, and Chettinad's mansions serve one of India's great regional cuisines.",
      "Karnataka holds the royal splendor of Mysore and the boulder-strewn ruins of Hampi, once the capital of the Vijayanagara empire. And Goa, with its Portuguese churches, spice farms and long beaches, is the place to slow right down at the end of a journey. We stitch these together by road, rail and short flights so the south feels unhurried.",
    ],
    accent: "kerala",
    image: "kerala-houseboat",
    gallery: ["kerala-houseboat", "kerala-backwater-palms", "mysore-palace", "kerala-canoe"],
    highlights: [
      {
        title: "A night on the backwaters",
        text: "A private houseboat with your own crew and cook, gliding through quiet canals away from the busiest routes.",
      },
      {
        title: "Ayurveda done properly",
        text: "Retreats with qualified doctors, personalized treatment plans and simple, nourishing food, not a spa menu with a new name.",
      },
      {
        title: "Temple evenings in Madurai",
        text: "Join the night ceremony at Meenakshi Temple with a guide who can explain the music, the processions and the deities.",
      },
      {
        title: "Hampi by bicycle",
        text: "Ride between ruined bazaars, riverside temples and giant granite boulders in one of India's most remarkable landscapes.",
      },
      {
        title: "Cooking in a Chettinad mansion",
        text: "Learn the region's peppery, aromatic dishes in the courtyard kitchen of a restored merchant home.",
      },
    ],
    bestTime: {
      summary:
        "December to February is warm and dry, while the monsoon from June to August brings lush landscapes and the traditional season for Ayurveda. Seasons shift year to year, so we confirm conditions when we plan.",
      calendar: {
        jan: "peak",
        feb: "peak",
        mar: "good",
        apr: "shoulder",
        may: "avoid",
        jun: "shoulder",
        jul: "shoulder",
        aug: "shoulder",
        sep: "good",
        oct: "good",
        nov: "good",
        dec: "peak",
      },
    },
    destinations: [
      {
        slug: "kerala",
        name: "Kerala",
        region: "south",
        summary:
          "A narrow green state between the Arabian Sea and the Western Ghats, known for backwaters, tea hills and Ayurveda.",
        knownFor: ["Backwater houseboats", "Munnar tea estates", "Ayurveda", "Fort Kochi"],
        image: "kerala-backwater-palms",
      },
      {
        slug: "tamil-nadu",
        name: "Tamil Nadu",
        region: "south",
        summary:
          "Temple towns, classical dance and some of India's richest food, from Madurai and Thanjavur to French-flavoured Pondicherry.",
        knownFor: ["Meenakshi Temple", "Chettinad cuisine", "Mahabalipuram shore temples", "Pondicherry"],
        image: "kerala-village-boat",
      },
      {
        slug: "karnataka",
        name: "Karnataka",
        region: "south",
        summary:
          "Royal Mysore, the ruins of Hampi and the coffee hills of Coorg, with wildlife in the forests of Kabini.",
        knownFor: ["Mysore Palace", "Hampi", "Coorg coffee estates", "Kabini forests"],
        image: "mysore-palace",
      },
      {
        slug: "goa",
        name: "Goa",
        region: "south",
        summary:
          "India's smallest state, with Portuguese-era churches and villas, spice farms and beaches made for doing very little.",
        knownFor: ["Old Goa churches", "Fontainhas Latin quarter", "Quiet southern beaches", "Goan seafood"],
        image: "tropical-pool",
      },
    ],
    faqs: [
      {
        question: "Is the monsoon a bad time to visit Kerala?",
        answer:
          "Not at all, if you choose it for the right reasons. From June to August the landscape is at its greenest, prices are lower and Ayurvedic practitioners consider it the ideal season for treatment. Expect heavy downpours with bright spells, and fewer beach days.",
      },
      {
        question: "Should we book a shared or private houseboat?",
        answer:
          "We almost always recommend a private houseboat with your own crew. We choose operators who keep their boats well maintained, cook fresh local food and are willing to take quieter routes away from the busiest stretches near Alleppey.",
      },
      {
        question: "Can we combine Kerala with Tamil Nadu?",
        answer:
          "Yes, and it makes a wonderful journey. A common route crosses the Western Ghats from Kerala's tea hills to Madurai, then continues to Chettinad and the coast. Two weeks gives you time for both without long days on the road.",
      },
    ],
    seo: {
      title: "South India travel: Kerala, Tamil Nadu & Goa",
      description:
        "Tailor-made South India journeys: Kerala's backwaters and Ayurveda, Tamil Nadu's temples, Hampi, Mysore and Goa, planned by specialists who know the south well.",
    },
  },
  {
    slug: "himalaya",
    name: "The Himalaya",
    navLabel: "Himalaya",
    headline: "High passes and *prayer* flags.",
    summary:
      "India's mountain north: the high desert of Ladakh, the valleys of Himachal Pradesh and the tea gardens and monasteries of Darjeeling and Sikkim.",
    overview: [
      "The Indian Himalaya is not one place but many. Ladakh is a high-altitude desert of ochre mountains, turquoise rivers and whitewashed monasteries clinging to rock. Life here has a Tibetan Buddhist rhythm: butter lamps, prayer wheels, apricot orchards in summer and a hospitality that feels completely unforced. Summer days are bright and dry, nights are cool, and the light is so clear that distant peaks look close enough to touch.",
      "Himachal Pradesh is greener and gentler. Old colonial hill stations such as Shimla give way to deodar forests, apple orchards and Kangra Valley villages, while Dharamshala and McLeod Ganj are home to the Tibetan community in exile. Further up, the Spiti Valley offers some of the most dramatic road journeys in the country, past cliff-top gompas and villages of mud-brick houses stacked against the slopes.",
      "In the east, Darjeeling looks across its tea estates to Kangchenjunga, the world's third-highest mountain, and the toy train still puffs up from the plains. Neighbouring Sikkim is small, green and devoutly Buddhist, with monasteries, rhododendron forests and walks through villages where every house seems to have a garden. Whatever you choose, we plan carefully for altitude and access.",
    ],
    accent: "sky",
    image: "ladakh-road",
    gallery: ["ladakh-road", "himalaya-stupa", "himachal-meadow", "valley-clouds"],
    highlights: [
      {
        title: "Monastery mornings in Ladakh",
        text: "Arrive at Thiksey or Hemis for early prayers, when the monks chant and the valley below is still in shadow.",
      },
      {
        title: "Walking village to village",
        text: "Gentle guided treks between Ladakhi homestays, with packed lunches, apricot orchards and long views of the Indus.",
      },
      {
        title: "Kangchenjunga at sunrise",
        text: "Watch the first light hit the snow peaks from Tiger Hill or your own tea-estate verandah in Darjeeling.",
      },
      {
        title: "Tea from bush to cup",
        text: "Walk Darjeeling's estates with a planter, learn how first and second flush differ, and taste straight from the factory.",
      },
      {
        title: "Spiti by road",
        text: "A slow overland journey through high villages, ancient monasteries and some of the most spectacular roads in India.",
      },
    ],
    bestTime: {
      summary:
        "Ladakh opens up from roughly June to September, while Himachal, Darjeeling and Sikkim are loveliest in spring and autumn, with heavy monsoon rain in between. Seasons shift year to year, so we confirm conditions when we plan.",
      calendar: {
        jan: "avoid",
        feb: "avoid",
        mar: "shoulder",
        apr: "good",
        may: "good",
        jun: "peak",
        jul: "peak",
        aug: "peak",
        sep: "peak",
        oct: "good",
        nov: "shoulder",
        dec: "avoid",
      },
    },
    destinations: [
      {
        slug: "ladakh",
        name: "Ladakh",
        region: "himalaya",
        summary:
          "A high-altitude desert of Buddhist monasteries, mountain lakes and some of the highest motorable passes in the world.",
        knownFor: ["Leh and its monasteries", "Pangong Tso", "Nubra Valley", "Village homestays"],
        image: "ladakh-road",
      },
      {
        slug: "himachal",
        name: "Himachal Pradesh",
        region: "himalaya",
        summary:
          "Hill stations, deodar forests and Tibetan culture, from Shimla and the Kangra Valley to Dharamshala and remote Spiti.",
        knownFor: ["Shimla", "Dharamshala and McLeod Ganj", "Spiti Valley", "Orchard walks"],
        image: "himachal-meadow",
      },
      {
        slug: "darjeeling",
        name: "Darjeeling",
        region: "himalaya",
        summary:
          "A hill town of tea estates and Himalayan views, reached by a UNESCO-listed toy train from the plains.",
        knownFor: ["Tea estates", "Kangchenjunga views", "Darjeeling Himalayan Railway", "Colonial architecture"],
        image: "valley-clouds",
      },
      {
        slug: "sikkim",
        name: "Sikkim",
        region: "himalaya",
        summary:
          "A small Himalayan state of Buddhist monasteries, rhododendron forests and mountain villages, with permits needed for some areas.",
        knownFor: ["Rumtek and Pemayangtse monasteries", "Rhododendron forests", "Kangchenjunga views", "Organic farming"],
        image: "himalaya-stupa",
      },
    ],
    faqs: [
      {
        question: "Will altitude be a problem in Ladakh?",
        answer:
          "Leh sits at around 3,500 meters, so acclimatization matters. We plan two or three gentle days on arrival before any higher excursions and choose routes that climb gradually. If you have any medical concerns, speak to your doctor before traveling.",
      },
      {
        question: "Do we need permits for the Himalaya?",
        answer:
          "Some areas, including parts of Ladakh and Sikkim near international borders, require permits for visitors, and rules differ for Indian and foreign nationals. We arrange these for you, and we check the current requirements each season because they do change.",
      },
      {
        question: "Can we visit the mountains in winter?",
        answer:
          "Ladakh in winter is very cold and many roads and passes are closed, though it suits specialist trips such as snow leopard tracking. Lower hill stations like Shimla and Darjeeling can be crisp and clear in winter, but some high-altitude areas will be out of reach.",
      },
    ],
    seo: {
      title: "Himalaya travel: Ladakh, Himachal, Darjeeling",
      description:
        "Tailor-made Himalayan journeys to Ladakh's monasteries, Himachal's valleys, Darjeeling's tea estates and Sikkim, planned for altitude, permits and pace.",
    },
  },
  {
    slug: "central-india",
    name: "Central India",
    navLabel: "Central India",
    headline: "Tiger country, quietly *wild*.",
    summary:
      "The forested heart of India and its great tiger reserves: Ranthambore, Bandhavgarh, Kanha and Tadoba.",
    overview: [
      "Central India is the country of The Jungle Book, a landscape of sal and teak forest, bamboo thickets, grassy meadows and rocky outcrops. It is also one of the best places in the world to see a wild tiger. Early mornings begin with a jeep, a naturalist and a thermos of chai, listening for the alarm calls of spotted deer and langur monkeys.",
      "Each reserve has its own character. Ranthambore has ruined pavilions and a thousand-year-old fort inside the park. Bandhavgarh is known for a high density of tigers. Kanha's meadows are home to the hard-ground barasingha, a deer brought back from the edge of extinction. Tadoba, in Maharashtra, has become one of the most reliable parks for sightings in recent years.",
      "Wildlife is never guaranteed, and we never pretend it is. What we can promise is the right lodges, experienced naturalists and safari permits secured early. We favor lodges that employ local people, support conservation and take the forest seriously, and we combine the parks with temples such as Khajuraho for a fuller picture of the region.",
    ],
    accent: "teak",
    image: "tiger",
    gallery: ["tiger", "elephant-forest", "safari-tent"],
    highlights: [
      {
        title: "Dawn game drives",
        text: "Open jeep safaris with expert naturalists, timed for the cool early hours when the forest is most alive.",
      },
      {
        title: "Lodges that give back",
        text: "We work with camps that employ local communities, fund conservation and keep their footprint light.",
      },
      {
        title: "More than tigers",
        text: "Leopards, sloth bears, gaur, wild dogs and over 250 bird species make every drive worth it.",
      },
      {
        title: "Village and forest walks",
        text: "Guided walks in the buffer zones, meeting Gond and Baiga communities whose lives are bound up with the forest.",
      },
    ],
    bestTime: {
      summary:
        "The parks are lovely from October to February, while the hot months of March to May offer the best sightings as animals gather at water. Seasons shift year to year, so we confirm conditions when we plan.",
      calendar: {
        jan: "good",
        feb: "good",
        mar: "peak",
        apr: "peak",
        may: "peak",
        jun: "shoulder",
        jul: "avoid",
        aug: "avoid",
        sep: "avoid",
        oct: "shoulder",
        nov: "good",
        dec: "good",
      },
    },
    destinations: [
      {
        slug: "ranthambore",
        name: "Ranthambore",
        region: "central-india",
        summary:
          "A dry deciduous forest in eastern Rajasthan where tigers roam among lakes, ruined pavilions and a medieval hilltop fort.",
        knownFor: ["Tigers among ruins", "Ranthambore Fort", "Easy reach from Jaipur", "Lakeside landscapes"],
        image: "tiger",
      },
      {
        slug: "bandhavgarh",
        name: "Bandhavgarh",
        region: "central-india",
        summary:
          "A compact reserve in Madhya Pradesh with rocky hills, an ancient fort and one of India's highest densities of tigers.",
        knownFor: ["High tiger density", "Bandhavgarh Fort", "Sal forests", "Leopards"],
        image: "tiger",
      },
      {
        slug: "kanha",
        name: "Kanha",
        region: "central-india",
        summary:
          "Vast meadows and sal forest that inspired Kipling's jungle stories, and a conservation success story for the barasingha.",
        knownFor: ["Barasingha deer", "Open meadows", "Excellent naturalists", "Birdlife"],
        image: "elephant-forest",
      },
      {
        slug: "tadoba",
        name: "Tadoba",
        region: "central-india",
        summary:
          "Maharashtra's oldest tiger reserve, a teak and bamboo forest around a central lake with consistently good sightings.",
        knownFor: ["Reliable tiger sightings", "Tadoba Lake", "Sloth bears", "Wild dogs"],
        image: "elephant-forest",
      },
    ],
    faqs: [
      {
        question: "Will we definitely see a tiger?",
        answer:
          "No one can guarantee a wild tiger, and we would be wary of anyone who does. With three or four nights and six to eight drives in a good reserve, many of our travelers do see one. We build in enough drives to give you a fair chance and plenty more to enjoy.",
      },
      {
        question: "When are the parks closed?",
        answer:
          "Core zones of most central Indian reserves close during the monsoon, typically from around July to September, and many parks have a weekly closure for some drives. Buffer zones may stay open. Dates are set by the forest departments and change, so we check each season.",
      },
      {
        question: "How far in advance do we need safari permits?",
        answer:
          "Permits for popular zones can sell out months ahead, especially from October to May. Booking early lets us secure the best zones and timings, and our lodges help us plan drives around current sightings.",
      },
    ],
    seo: {
      title: "Tiger safaris in Central India: Kanha & Ranthambore",
      description:
        "Tailor-made tiger safaris in Ranthambore, Bandhavgarh, Kanha and Tadoba, with expert naturalists, early permits and conservation-minded lodges we know well.",
    },
  },
  {
    slug: "east-northeast",
    name: "East & Northeast",
    navLabel: "East & Northeast",
    headline: "Where India's *frontier* begins.",
    summary:
      "The literary, food-loving city of Kolkata and the green hills, rivers and tribal cultures of Meghalaya, Assam and Nagaland.",
    overview: [
      "Kolkata is a city of ideas and appetites. Grand colonial buildings such as the Victoria Memorial stand beside crumbling mansions, flower markets under the Howrah Bridge and coffee houses where poets and students have argued for a century. Bengali food alone, with its mustard-oil fish curries and sweets made from fresh cheese, is reason enough to come.",
      "Beyond lies the Northeast, a region of seven states that many travelers never reach. Meghalaya, the abode of clouds, has living root bridges grown by Khasi villagers from the roots of rubber fig trees. Assam is a land of tea gardens and the Brahmaputra, where Kaziranga National Park shelters the majority of the world's greater one-horned rhinos.",
      "Nagaland, in the far east, is home to many distinct Naga tribes with their own languages, crafts and festivals, best known to visitors through the Hornbill Festival each December. Travel here is slower and simpler than in the rest of India, which is exactly the appeal. We work with small local operators and homestays who open doors that would otherwise stay closed.",
    ],
    accent: "peacock",
    image: "victoria-memorial",
    gallery: ["victoria-memorial", "valley-clouds", "elephant-forest"],
    highlights: [
      {
        title: "Kolkata through its food",
        text: "Morning markets, sweet shops and a home-cooked Bengali lunch with a family who love to talk about their city.",
      },
      {
        title: "Living root bridges",
        text: "Walk through Khasi villages and forest to bridges grown over generations, some strong enough to carry dozens of people.",
      },
      {
        title: "Rhinos at Kaziranga",
        text: "Jeep safaris across tall grasslands and wetlands, with wild elephants, water buffalo and remarkable birdlife.",
      },
      {
        title: "A tea-garden bungalow",
        text: "Stay on a working Assam estate in a planter's bungalow, and learn how the region's malty black tea is made.",
      },
      {
        title: "Naga villages and crafts",
        text: "Meet weavers and woodcarvers in villages near Kohima with guides from the communities themselves.",
      },
    ],
    bestTime: {
      summary:
        "November to April is the best time for most of the region, with clear, mild days; the monsoon is long and very wet, especially in Meghalaya. Seasons shift year to year, so we confirm conditions when we plan.",
      calendar: {
        jan: "peak",
        feb: "peak",
        mar: "good",
        apr: "good",
        may: "shoulder",
        jun: "avoid",
        jul: "avoid",
        aug: "avoid",
        sep: "shoulder",
        oct: "good",
        nov: "peak",
        dec: "peak",
      },
    },
    destinations: [
      {
        slug: "kolkata",
        name: "Kolkata",
        region: "east-northeast",
        summary:
          "India's cultural capital, with colonial grandeur, a famous food culture and the country's liveliest Durga Puja celebrations.",
        knownFor: ["Victoria Memorial", "Bengali food", "Durga Puja", "Kumartuli idol-makers"],
        image: "victoria-memorial",
      },
      {
        slug: "meghalaya",
        name: "Meghalaya",
        region: "east-northeast",
        summary:
          "Rolling hills, waterfalls and some of the wettest places on Earth, home to the Khasi and Garo peoples.",
        knownFor: ["Living root bridges", "Cherrapunji waterfalls", "Shillong", "Clear river villages"],
        image: "valley-clouds",
      },
      {
        slug: "assam",
        name: "Assam",
        region: "east-northeast",
        summary:
          "Tea gardens along the Brahmaputra and the grasslands of Kaziranga, a stronghold of the greater one-horned rhino.",
        knownFor: ["Kaziranga National Park", "Tea estates", "Majuli river island", "Brahmaputra cruises"],
        image: "elephant-forest",
      },
      {
        slug: "nagaland",
        name: "Nagaland",
        region: "east-northeast",
        summary:
          "A hill state of distinct Naga tribes, rich craft traditions and the vibrant Hornbill Festival near Kohima.",
        knownFor: ["Hornbill Festival", "Naga villages", "Weaving and woodcarving", "Kohima War Cemetery"],
      },
    ],
    faqs: [
      {
        question: "Do we need special permits for the Northeast?",
        answer:
          "Some northeastern states have had permit requirements for visitors, and the rules for Indian and foreign nationals differ and have changed in recent years. We check current requirements for every state on your route and handle any paperwork for you.",
      },
      {
        question: "Is the Northeast suitable for a first trip to India?",
        answer:
          "It can be, especially combined with Kolkata or Darjeeling, but expect longer drives, simpler accommodation in places and fewer luxury hotels. For travelers who value authenticity over polish, it is one of the most rewarding regions in India.",
      },
      {
        question: "When is Kaziranga open?",
        answer:
          "Kaziranga usually opens to visitors from around November to April and closes during the monsoon, when much of the park floods. Exact dates are set each year by the park authorities, so we confirm them before booking.",
      },
    ],
    seo: {
      title: "Northeast India & Kolkata travel: tailor-made trips",
      description:
        "Tailor-made journeys to Kolkata, Meghalaya's root bridges, Assam's tea gardens and Kaziranga, and Nagaland's villages, planned with trusted local partners.",
    },
  },
  {
    slug: "islands",
    name: "Andaman Islands",
    navLabel: "Islands",
    headline: "Clear water, slow *island* days.",
    summary:
      "A remote archipelago in the Bay of Bengal with white-sand beaches, coral reefs and rainforest, made for unwinding at the end of a journey.",
    overview: [
      "The Andaman Islands lie far out in the Bay of Bengal, closer to Myanmar than to mainland India. Only a handful of the islands are open to visitors, and that is part of their charm: rainforest runs down to the sand, the water is a startling turquoise and the pace of life is governed by ferry timetables and the tides.",
      "Port Blair, the capital, is the gateway, home to the Cellular Jail, a sobering memorial to India's freedom struggle. From there, ferries cross to Swaraj Dweep, still widely known as Havelock, with its long, quiet beaches, and to smaller Shaheed Dweep (Neil Island), where cycling between villages and coconut groves is the main event.",
      "Beneath the surface are coral reefs, turtles and shoals of reef fish, with good snorkelling and diving for beginners and the experienced alike. We pair the islands with the mainland as a restful finale, choosing small beach resorts with care, and advise on responsible snorkelling and the protected status of the islands' indigenous communities.",
    ],
    accent: "lagoon",
    image: "andaman-beach",
    gallery: ["andaman-beach", "tropical-pool", "palm-pool"],
    highlights: [
      {
        title: "Radhanagar Beach at sunset",
        text: "A long curve of fine white sand backed by tall forest on Havelock, regularly counted among Asia's loveliest beaches.",
      },
      {
        title: "Snorkelling and diving",
        text: "Coral gardens, turtles and reef fish with dive centers we trust, including gentle first dives for beginners.",
      },
      {
        title: "Island-hopping by ferry",
        text: "We book the ferries and transfers between Port Blair, Havelock and Neil so you simply turn up and enjoy the crossing.",
      },
      {
        title: "Cycling Neil Island",
        text: "Pedal through villages, paddy fields and coconut groves to natural rock formations and empty coves.",
      },
    ],
    bestTime: {
      summary:
        "October to April brings calm seas and sunshine, while the monsoon from roughly May to September brings rough water and ferry disruptions. Seasons shift year to year, so we confirm conditions when we plan.",
      calendar: {
        jan: "peak",
        feb: "peak",
        mar: "peak",
        apr: "good",
        may: "shoulder",
        jun: "avoid",
        jul: "avoid",
        aug: "avoid",
        sep: "avoid",
        oct: "shoulder",
        nov: "good",
        dec: "peak",
      },
    },
    destinations: [
      {
        slug: "andaman-islands",
        name: "Andaman Islands",
        region: "islands",
        summary:
          "An archipelago of rainforest and reef in the Bay of Bengal, reached by flights to Port Blair and onward ferries.",
        knownFor: ["Coral reefs", "Cellular Jail", "Neil Island", "Island ferries"],
        image: "andaman-beach",
      },
      {
        slug: "havelock",
        name: "Swaraj Dweep (Havelock)",
        region: "islands",
        summary:
          "The best-known of the Andaman Islands, with Radhanagar Beach, gentle diving and small, relaxed beach resorts.",
        knownFor: ["Radhanagar Beach", "Beginner-friendly diving", "Elephant Beach snorkelling", "Barefoot resorts"],
        image: "tropical-pool",
      },
    ],
    faqs: [
      {
        question: "How do we get to the Andaman Islands?",
        answer:
          "Flights connect Port Blair with major mainland cities including Chennai, Kolkata and Delhi. From Port Blair, government and private ferries cross to Havelock and Neil. We book everything in sequence so connections are realistic.",
      },
      {
        question: "Are the Andamans good for diving beginners?",
        answer:
          "Yes. Havelock in particular has well-run dive centers offering introductory dives and courses in calm, clear water. We recommend operators with strong safety records who respect the reefs and keep group sizes small.",
      },
      {
        question: "How many nights should we spend in the islands?",
        answer:
          "Four to six nights works well, usually split between Havelock and either Neil Island or a night in Port Blair. Because ferries and weather can occasionally disrupt plans, we avoid tight connections on your final day.",
      },
    ],
    seo: {
      title: "Andaman Islands holidays: Havelock and Neil",
      description:
        "Tailor-made Andaman Islands stays on Havelock and Neil, with white-sand beaches, coral reefs, trusted dive centers and smooth ferry connections planned for you.",
    },
  },
];
