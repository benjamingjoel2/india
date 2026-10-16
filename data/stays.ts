import type { Stay } from "./types";

/**
 * Placeholder stays. Names and details describe the KIND of property we use;
 * replace with real, contracted properties before launch.
 */
export const stays: Stay[] = [
  {
    slug: "udaipur-lake-palace",
    name: "Jal Mahal Lake Palace (placeholder)",
    type: "palace",
    region: "rajasthan",
    location: "Udaipur",
    summary:
      "A white marble palace on Lake Pichola, reached only by boat, with the City Palace glowing across the water at dusk.",
    description: [
      "Picture a palace that seems to float. Courtyards of white marble open onto the lake, lotus pools ripple in the breeze, and the walls are inlaid with colored glass and mirrorwork that catches every lamp after dark. You arrive by boat, garlanded at the jetty, and the city falls quiet behind you.",
      "Rooms look out over Lake Pichola to the Aravalli hills and the long facade of the City Palace. Mornings start with breakfast on a terrace above the water; evenings end with a sunset cruise and dinner by candlelight in a pavilion where Mewar royals once escaped the summer heat.",
      "This is a placeholder for the kind of lake palace we love in Udaipur. Your specialist will recommend the right property for your dates, budget and style.",
    ],
    image: "udaipur-palace",
    priceFromUSD: 620,
    rooms: 65,
    features: [
      "Lake-view rooms and suites",
      "Private boat transfers",
      "Sunset cruise on Lake Pichola",
      "Spa with traditional treatments",
      "Courtyard dining by candlelight",
    ],
    whyWeLoveIt:
      "Nothing quite prepares you for that first boat ride across the lake at dusk. It's the stay our travelers still talk about years later.",
    seo: {
      title: "Lake Palace Stay in Udaipur, Rajasthan",
      description:
        "Stay in a marble lake palace on Udaipur's Lake Pichola, reached by boat, with lake-view rooms, sunset cruises and candlelit dining in courtyards and pavilions.",
    },
  },
  {
    slug: "jodhpur-fort-palace",
    name: "Umaid Bagh Fort Palace (placeholder)",
    type: "palace",
    region: "rajasthan",
    location: "Jodhpur",
    summary:
      "A sandstone palace in gardens on the edge of the Blue City, with views to Mehrangarh Fort on its rocky ridge.",
    description: [
      "Imagine a palace of honey-colored sandstone set in walled gardens, where peacocks strut across the lawns in the morning and the sound of the city drifts up only faintly. Inside are high ceilings, Art Deco touches and long verandas made for an afternoon with a book and a pot of tea.",
      "From the terraces you look across the blue-washed houses of the old city to Mehrangarh Fort, one of the most formidable in India. Evenings bring a drink on the lawn as the fort lights up, and dinner of Marwari dishes such as ker sangri and laal maas.",
      "This is a placeholder for the kind of palace stay we recommend in Jodhpur. We will match you with the right property for your journey.",
    ],
    image: "amber-fort",
    priceFromUSD: 480,
    rooms: 64,
    features: [
      "Fort-view terraces",
      "Walled palace gardens",
      "Indoor and outdoor pools",
      "Marwari tasting menus",
      "Heritage walks in the Blue City",
      "Spa and yoga pavilion",
    ],
    whyWeLoveIt:
      "Watching Mehrangarh light up from the lawn with a gin and tonic in hand is my favorite evening in Rajasthan.",
    seo: {
      title: "Palace Stay in Jodhpur, Rajasthan",
      description:
        "A sandstone palace in walled gardens on the edge of Jodhpur's Blue City, with terrace views of Mehrangarh Fort, Marwari cuisine, pools and an unhurried spa.",
    },
  },
  {
    slug: "jaipur-heritage-haveli",
    name: "Haveli Gulabi (placeholder)",
    type: "haveli",
    region: "rajasthan",
    location: "Jaipur",
    summary:
      "An intimate, family-run haveli with frescoed rooms and a rooftop that looks over the Pink City.",
    description: [
      "Behind a carved gateway is a quiet courtyard, a neem tree and a small pool of marigolds floating in water. A haveli like this was once a merchant family's townhouse, and the family may still live upstairs. The rooms are each different: hand-painted walls, block-printed bedspreads, jharokha windows with deep cushioned seats.",
      "The rooftop is the heart of the place, with chai at sunrise, kites in the afternoon and dinner under the stars with the floodlit Nahargarh Fort above the city. The bazaars, the Hawa Mahal and the City Palace are a short rickshaw ride away.",
      "This is a placeholder for the kind of heritage haveli we use in Jaipur. Your specialist will suggest the best match for you.",
    ],
    image: "hawa-mahal",
    priceFromUSD: 210,
    rooms: 18,
    features: [
      "Family-run heritage home",
      "Hand-painted rooms",
      "Rooftop dining",
      "Courtyard pool",
      "Home-cooked Rajasthani meals",
    ],
    whyWeLoveIt:
      "The owners treat you like house guests, not customers. Ask the grandmother about the house's history and you will be there for an hour.",
    seo: {
      title: "Heritage Haveli Stay in Jaipur",
      description:
        "A family-run heritage haveli in Jaipur with painted rooms, a peaceful courtyard and a rooftop terrace, close to the bazaars and Hawa Mahal of the old Pink City.",
    },
  },
  {
    slug: "varanasi-riverside-haveli",
    name: "Ganga Ghat Haveli (placeholder)",
    type: "haveli",
    region: "north",
    location: "Varanasi",
    summary:
      "A restored riverside haveli right on the ghats, with rooms opening onto the Ganges and boats waiting at the foot of the steps.",
    description: [
      "Old Varanasi rises straight from the river in a jumble of stone steps, temples and tall houses. A haveli like this sits right in the middle of it, its terraces facing east across the Ganges so that sunrise floods straight into the rooms.",
      "Step out of the door and you are on the ghats: bathers, priests, flower sellers, and the bells of a hundred temples. Step back in and the thick stone walls hold the quiet. Boats leave from the steps below for the dawn ride and the evening aarti.",
      "This is a placeholder for the kind of riverside haveli we choose in Varanasi. We'll recommend the right one for your journey.",
    ],
    image: "varanasi-ghats",
    priceFromUSD: 190,
    rooms: 14,
    features: [
      "Direct ghat access",
      "River-facing rooms",
      "Sunrise boat rides from the steps",
      "Rooftop vegetarian restaurant",
      "Evening aarti viewing",
    ],
    whyWeLoveIt:
      "Waking to temple bells and watching the light come up over the river from your own window is Varanasi at its most magical.",
    seo: {
      title: "Riverside Haveli Stay on the Varanasi Ghats",
      description:
        "Stay in a restored haveli on the ghats of Varanasi, with river-facing rooms, sunrise boat rides from the steps below and easy access to the evening Ganga aarti.",
    },
  },
  {
    slug: "vembanad-houseboat",
    name: "Vembanad Kettuvallam (placeholder)",
    type: "houseboat",
    region: "south",
    location: "Alleppey backwaters, Kerala",
    summary:
      "A private traditional houseboat with its own crew and cook, gliding through the quieter canals around Vembanad Lake.",
    description: [
      "Think of a kettuvallam built the old way, of jackfruit wood and coir, with a curved roof of woven palm and an open deck at the bow. It is yours alone, with a captain, a deckhand and a cook who will feed you fried karimeen, appam and coconut curries as the palms slip past.",
      "By afternoon you are drifting through narrow canals between paddy fields and villages, stopping to visit a toddy shop or a local church. At dusk the boat moors and the lamps come on, and you fall asleep to the sound of water and frogs.",
      "This is a placeholder for the kind of houseboat we book in Kerala. Your specialist will select an operator with well-maintained boats and quieter routes.",
    ],
    image: "kerala-backwater-palms",
    priceFromUSD: 340,
    rooms: 2,
    features: [
      "Private boat and crew",
      "On-board cook and Kerala meals",
      "Open-sided upper deck",
      "Air-conditioned bedrooms at night",
      "Village canoe excursion",
    ],
    whyWeLoveIt:
      "The cook on board is often the highlight. Ask to watch them make the fish curry and you'll learn more than in any class.",
    seo: {
      title: "Private Houseboat on Kerala's Backwaters",
      description:
        "A private kettuvallam houseboat on the Alleppey backwaters with your own crew and cook, Kerala meals on board and quiet routes around Vembanad Lake.",
    },
  },
  {
    slug: "kanha-tented-lodge",
    name: "Sal Forest Tented Lodge (placeholder)",
    type: "safari-lodge",
    region: "central-india",
    location: "Kanha",
    summary:
      "Spacious canvas suites in a sal forest on the edge of Kanha National Park, with naturalist-led safaris every morning and afternoon.",
    description: [
      "Imagine canvas suites raised on wooden decks among tall sal trees, each with a hammock, a deep tub and the sounds of the forest all around. Before dawn, a knock at the door brings tea and biscuits, and the jeep is waiting with blankets and a hot water bottle.",
      "Kanha's meadows and sal forests inspired Kipling's Jungle Book, and are home to tigers, leopards, sloth bears and the hard-ground barasingha. Back at camp there are bush walks, village visits and evenings by the fire with naturalists who have spent their lives in this forest.",
      "This is a placeholder for the kind of tented lodge we use in Kanha. We'll recommend the right lodge for your dates and interests.",
    ],
    image: "safari-tent",
    priceFromUSD: 520,
    rooms: 12,
    features: [
      "Resident naturalists",
      "Twice-daily jeep safaris",
      "Raised canvas suites with decks",
      "Guided nature walks",
      "Fireside dinners",
      "Community and village visits",
    ],
    whyWeLoveIt:
      "The naturalists here are extraordinary. I've seen them stop the jeep for a beetle with as much delight as for a tiger.",
    seo: {
      title: "Tented Safari Lodge Near Kanha National Park",
      description:
        "Canvas suites in a sal forest beside Kanha National Park, with resident naturalists, twice-daily jeep safaris, guided nature walks and fireside dinners.",
    },
  },
  {
    slug: "ranthambore-jungle-lodge",
    name: "Ranthambore Jungle Lodge (placeholder)",
    type: "safari-lodge",
    region: "central-india",
    location: "Ranthambore",
    summary:
      "A stone-and-timber lodge near Ranthambore National Park, with a pool for the hot afternoons between morning and evening drives.",
    description: [
      "Picture low stone cottages set in landscaped gardens of native trees, with a pool shaded by neem and a terrace where you can watch birds while you wait for your evening drive. The style is relaxed and earthy, with local stone, block-printed fabrics and old wildlife photographs on the walls.",
      "Ranthambore is one of the best places in India to see tigers, its dry forest overlooked by the ancient walls of Ranthambore Fort. Between drives, take a cooking lesson, visit a local craft cooperative, or simply lie by the pool.",
      "This is a placeholder for the kind of jungle lodge we recommend in Ranthambore. Your specialist will choose the right one for you.",
    ],
    image: "lodge-pool",
    priceFromUSD: 450,
    rooms: 30,
    features: [
      "Swimming pool and gardens",
      "Naturalist-led safaris",
      "Private cottages",
      "Cooking demonstrations",
      "Visits to local craft cooperatives",
    ],
    whyWeLoveIt:
      "It's an easy, comfortable base for one of India's most rewarding parks, and it's a great fit for families.",
    seo: {
      title: "Jungle Lodge Stay Near Ranthambore",
      description:
        "A stone-and-timber jungle lodge near Ranthambore National Park with private cottages, a shaded pool, naturalist-led safaris and visits to local craft workshops.",
    },
  },
  {
    slug: "nubra-valley-homestay",
    name: "Nubra Valley Homestay (placeholder)",
    type: "homestay",
    region: "himalaya",
    location: "Nubra Valley, Ladakh",
    summary:
      "A traditional Ladakhi family home among apricot orchards and barley fields in the high desert of the Nubra Valley.",
    description: [
      "Imagine a whitewashed mud-brick house with carved wooden windows, a kitchen lined with polished copper pots and a family who welcomes you with butter tea and fresh apricots. Rooms are simple and spotless, with thick quilts for the cold nights.",
      "Nubra lies beyond one of the high Himalayan road passes north of Leh, a valley of sand dunes, Bactrian camels and centuries-old monasteries such as Diskit. Dinner is home-cooked: thukpa, momos and vegetables from the garden.",
      "This is a placeholder for the kind of homestay we work with in Ladakh. We will match you with a family that suits your journey.",
    ],
    image: "ladakh-road",
    priceFromUSD: 120,
    rooms: 5,
    features: [
      "Family-run Ladakhi home",
      "Home-cooked meals",
      "Orchard garden",
      "Monastery visits nearby",
      "Stargazing in the high desert",
    ],
    whyWeLoveIt:
      "Sitting in a Ladakhi kitchen while your hosts make momos is the most genuine welcome in the Himalaya.",
    seo: {
      title: "Ladakhi Homestay in the Nubra Valley",
      description:
        "Stay with a Ladakhi family in the Nubra Valley among apricot orchards and barley fields, with home-cooked meals, monasteries nearby and dark high-desert skies.",
    },
  },
  {
    slug: "darjeeling-tea-bungalow",
    name: "Tea Planter's Bungalow (placeholder)",
    type: "homestay",
    region: "himalaya",
    location: "Darjeeling",
    summary:
      "A colonial-era planter's bungalow on a working tea estate, with log fires, home-cooked meals and views to Kangchenjunga.",
    description: [
      "Picture a rambling bungalow with deep verandas, polished wood floors and fireplaces in every room, set above slopes of tea that fall away into the clouds. A bearer brings morning tea grown on the estate, and on a clear day the snows of Kangchenjunga fill the window.",
      "Days are for walking the tea gardens, touring the factory with the planter and tasting the season's flush. Evenings are for a drink by the fire and a dinner of estate-grown vegetables, Nepali dishes and old Anglo-Indian recipes.",
      "This is a placeholder for the kind of tea bungalow we use in Darjeeling. Your specialist will recommend the right estate for you.",
    ],
    image: "heritage-room",
    priceFromUSD: 260,
    rooms: 8,
    features: [
      "Working tea estate",
      "Factory tours and tastings",
      "Log fires in every room",
      "Estate walks with the planter",
      "Mountain views",
    ],
    whyWeLoveIt:
      "It feels like staying with friends in the hills. The estate tea at breakfast is better than anything you'll buy at home.",
    seo: {
      title: "Tea Planter's Bungalow Stay in Darjeeling",
      description:
        "Stay in a planter's bungalow on a working Darjeeling tea estate, with log fires, home-cooked meals, factory tastings and views of Kangchenjunga on clear days.",
    },
  },
  {
    slug: "andaman-beach-retreat",
    name: "Radhanagar Beach Retreat (placeholder)",
    type: "beach",
    region: "islands",
    location: "Swaraj Dweep (Havelock), Andaman Islands",
    summary:
      "Timber villas in tropical forest steps from Radhanagar Beach, one of the loveliest stretches of sand in Asia.",
    description: [
      "Imagine wooden villas tucked into tall forest, the canopy loud with birdsong, and a sandy path leading to a long arc of white beach and clear, turquoise water. Days settle into a gentle rhythm: a swim before breakfast, a snorkel over the reef, a book in the shade.",
      "Swaraj Dweep, still widely known as Havelock, is reached by ferry from Port Blair. Its waters are excellent for snorkelling and diving, and sunsets at Radhanagar are a nightly ritual.",
      "This is a placeholder for the kind of beach retreat we recommend in the Andamans. We'll choose the right one for your journey.",
    ],
    image: "palm-pool",
    priceFromUSD: 380,
    rooms: 28,
    features: [
      "Steps from Radhanagar Beach",
      "Forest villas",
      "Snorkelling and diving trips",
      "Fresh seafood dining",
      "Spa and yoga",
    ],
    whyWeLoveIt:
      "After a few weeks on the road in India, this is the perfect place to slow right down and let it all sink in.",
    seo: {
      title: "Beach Retreat on Havelock, Andaman Islands",
      description:
        "Forest villas steps from Radhanagar Beach on Swaraj Dweep (Havelock) in the Andaman Islands, with snorkelling, diving, fresh seafood and quiet tropical days.",
    },
  },
];
