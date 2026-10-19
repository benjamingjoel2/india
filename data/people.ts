/**
 * PLACEHOLDER profiles. These people are illustrative and not real team
 * members. Replace names, bios, quotes and details with real people (and add
 * photos via `image`) before launch.
 */
import type { Person } from "./types";

export const people: Person[] = [
  {
    id: "meera",
    name: "Meera Kapoor",
    role: "Founder & lead India specialist",
    kind: "founder",
    base: "[CITY]",
    languages: ["English", "Hindi", "Punjabi"],
    bio: [
      "Some of my earliest memories are of trains. Every school holiday my parents would pack tiffin boxes and bedrolls and take us somewhere new: to my grandmother's house in Amritsar, to the hill stations, to a cousin's wedding in Jaipur that lasted five days. I learned India through the window of a second-class carriage, and through the people who shared their food with us along the way.",
      "As an adult I kept traveling, from the backwaters of Kerala to the monasteries of Ladakh, and kept meeting friends from abroad who wanted to see the India I knew but didn't know where to start. Too often they came home having seen the monuments but missed the warmth, the conversation and the small, unplanned moments that make this country unforgettable.",
      "I founded Musafir to change that. Musafir means 'traveler' in Hindi and Urdu, and every journey we plan is built the way I'd plan one for a close friend: by one specialist who knows you, with guides we know personally, at a pace that gives you room to actually feel where you are.",
    ],
    quote:
      "I want every traveler to leave India feeling they've been welcomed into it, not just shown around it.",
    specialties: ["Rajasthan and the Golden Triangle", "Rail journeys", "Punjab and Amritsar", "First-time visitors"],
  },
  {
    id: "sana",
    name: "Sana Iyer",
    role: "India specialist",
    kind: "specialist",
    base: "[CITY]",
    languages: ["English", "Tamil", "Hindi", "Malayalam"],
    bio: [
      "Sana grew up between Chennai and her grandparents' village in Kerala, where summers meant mango trees, temple festivals and long afternoons on the backwaters. After studying anthropology, she spent several years working with community tourism projects across southern India and the Northeast.",
      "Sana plans journeys that mix the well-known with the quietly personal: a morning with a Kathakali artist in Kochi, a night in a Chettinad mansion, a walk to Meghalaya's living root bridges. She's especially good at slower, wellness-led trips and families traveling with children.",
    ],
    quote: "The best moments in India usually happen when you slow down enough to let them.",
    specialties: ["Kerala and Tamil Nadu", "Ayurveda and wellness", "Northeast India", "Family journeys"],
  },
  {
    id: "rohit",
    name: "Rohit Shekhawat",
    role: "Rajasthan heritage guide",
    kind: "guide",
    base: "Jaipur",
    languages: ["English", "Hindi", "Rajasthani", "French"],
    bio: [
      "Rohit was born in a village outside Jaipur, into a family that has lived in Rajasthan for generations. He studied history at the University of Rajasthan and has been guiding for more than fifteen years, specialising in the forts, palaces and havelis of the Pink City and the Shekhawati region.",
      "He is as comfortable explaining the astronomy of the Jantar Mantar as he is leading you to the best kachori in the old city. Travelers often say the highlight of their day was simply listening to his stories.",
    ],
    quote: "Every stone in Jaipur has a story, and most of them involve someone's grandmother.",
    specialties: ["Amber Fort and the City Palace", "Shekhawati painted havelis", "Old Jaipur bazaars", "Block-printing villages"],
  },
  {
    id: "lakshmi",
    name: "Lakshmi Menon",
    role: "Kerala culture & food guide",
    kind: "guide",
    base: "Kochi",
    languages: ["English", "Malayalam", "Hindi", "Tamil"],
    bio: [
      "Lakshmi grew up in Fort Kochi, a few streets from the Chinese fishing nets, in a household where cooking was the family language. She trained as a teacher before turning to guiding, and now leads walks through Kochi's spice warehouses, Jewish quarter and old Portuguese and Dutch streets.",
      "She runs cooking sessions in her own kitchen, where she'll teach you to temper mustard seeds and curry leaves, steam puttu and balance a fish curry with kudampuli. She also knows the backwaters intimately and loves introducing travelers to village life beyond the houseboat routes.",
    ],
    quote: "In Kerala, if someone feeds you, you're family. So come hungry.",
    specialties: ["Fort Kochi heritage walks", "Kerala home cooking", "Spice markets", "Backwater villages"],
  },
  {
    id: "tenzin",
    name: "Tenzin Namgyal",
    role: "Ladakh mountain guide",
    kind: "guide",
    base: "Leh",
    languages: ["English", "Ladakhi", "Hindi", "Tibetan"],
    bio: [
      "Tenzin was raised in a village in the Indus Valley and spent his childhood herding goats on slopes above 3,500 meters. He has been guiding treks across Ladakh, Zanskar and the Markha Valley for more than a decade, and is trained in wilderness first aid.",
      "He knows the monasteries of Ladakh intimately, from Hemis to Thiksey to Lamayuru, and the families who run homestays along the trails. His calm, careful approach to acclimatization has seen countless travelers safely over high passes.",
    ],
    quote: "In the mountains, there's no hurry. The pass will still be there tomorrow.",
    specialties: ["Markha Valley and Zanskar treks", "Buddhist monasteries", "Village homestays", "High-altitude safety"],
  },
  {
    id: "anil",
    name: "Anil Dhurve",
    role: "Naturalist",
    kind: "guide",
    base: "Kanha and Bandhavgarh",
    languages: ["English", "Hindi", "Gondi"],
    bio: [
      "Anil grew up in a Gond village on the edge of Kanha National Park, where his grandfather taught him to read tracks in the dust and recognize birds by their calls. He trained as a naturalist with a lodge-run program and has spent more than twenty years in the forests of central India.",
      "He has a gift for spotting what others miss: an owlet in a hollow, the scrape of a leopard, the tension in a herd of chital. He's a patient teacher, and never lets you forget that the forest is about far more than tigers.",
    ],
    quote: "The tiger is the headline, but the forest is the whole story.",
    specialties: ["Tiger and leopard tracking", "Birding", "Central Indian forests", "Gond culture and villages"],
  },
];

export const getPerson = (id: string) => people.find((p) => p.id === id);
