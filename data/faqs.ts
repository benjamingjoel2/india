import type { Faq, FaqCategory } from "./types";

export const faqs: Faq[] = [
  {
    id: "visa-and-entry",
    question: "Do I need a visa to visit India?",
    category: "Before you go",
    answer: [
      "Most visitors need a visa. Citizens of many countries, including the UK, US, Canada, Australia and much of Europe, can apply online for an e-Visa, which is usually the simplest option for tourism. Apply only through the official Indian government website, and allow plenty of time before you travel.",
      "Your passport should normally be valid for at least six months from your arrival date, with at least two blank pages. Some e-Visa types allow single or multiple entries and have different lengths of stay, so check which suits your plans.",
      "Your specialist will remind you when to apply and can talk you through the process, but the application must be made by you, and the final decision rests with the Indian authorities.",
    ],
    verifyNote:
      "Verify against official Indian government sources (indianvisaonline.gov.in) before travel; rules change.",
  },
  {
    id: "best-time-to-visit",
    question: "When is the best time to visit India?",
    category: "When to travel",
    answer: [
      "India is so large that there is always somewhere wonderful to go. For most of the country, including Rajasthan, the Golden Triangle and Kerala, the classic season runs from October to March, when days are warm, dry and sunny.",
      "The Himalaya works the other way round: Ladakh is best from June to September, and Sikkim and Darjeeling shine in spring and autumn. Central India's tiger reserves are open from October to June, with the best sightings often from February to May as the forest thins and animals come to water.",
      "April to June can be very hot across the northern plains, so we lean toward the mountains, the hills or shorter, early-start days in that period.",
    ],
  },
  {
    id: "monsoon-travel",
    question: "Is it worth traveling during the monsoon?",
    category: "When to travel",
    answer: [
      "Yes, with the right plan. The southwest monsoon generally reaches Kerala in early June and spreads north through July, bringing a landscape of vivid green, fewer visitors and often lower prices. Rain often comes in heavy bursts rather than all day.",
      "The monsoon is a traditional season for Ayurveda in Kerala, and Udaipur's lakes are at their most beautiful afterwards. Ladakh and Spiti lie in the Himalayan rain shadow and are at their best during these months.",
      "Most tiger reserves' core zones close from July to September, and some roads, beaches and hill areas can be affected by flooding or landslides. We plan around this and build in flexibility.",
    ],
  },
  {
    id: "health-and-vaccinations",
    question: "What vaccinations and health precautions do I need?",
    category: "Health and safety",
    answer: [
      "See your doctor or a travel clinic six to eight weeks before you travel. Commonly recommended vaccinations for India include hepatitis A and typhoid, with others such as hepatitis B, rabies or Japanese encephalitis depending on your plans. Make sure routine vaccinations are up to date.",
      "Malaria and dengue are present in parts of India. Ask your doctor whether you need antimalarial medication for your route, and use insect repellent, especially at dawn and dusk.",
      "Pack any prescription medication in its original packaging, with a copy of your prescription, and bring a small kit for stomach upsets. Good hospitals are found in all major cities.",
    ],
    verifyNote:
      "Check with your doctor or a travel clinic and your government's travel health guidance.",
  },
  {
    id: "food-and-water-safety",
    question: "Is the food and water safe?",
    category: "Food",
    answer: [
      "Indian food is one of the great joys of a trip, and with sensible care most travelers eat brilliantly without problems. Drink bottled or filtered water, and avoid ice unless you know it is made from purified water.",
      "Choose food that is freshly cooked and served hot. Our guides know which restaurants and street food stalls are reliable, and the hotels we use maintain high standards.",
      "Many of our hotels and lodges provide filtered water for refilling bottles, which reduces plastic waste. Bring a reusable bottle.",
    ],
  },
  {
    id: "vegetarian-and-dietary-needs",
    question: "Can you cater for vegetarian or other dietary needs?",
    category: "Food",
    answer: [
      "India is one of the easiest places in the world to be vegetarian, and much of the country's finest cooking is vegetarian. Vegan dishes are widely available too, though ghee, dairy and paneer are common, so it helps to ask.",
      "Gluten-free, nut-free and other needs can be accommodated with notice. Tell us when you book, and we will brief your hotels, guides and cooking class hosts in advance.",
      "We can also give you a short card in Hindi or the local language explaining any allergies, which is helpful at restaurants and street food stalls.",
    ],
  },
  {
    id: "temple-dress-codes",
    question: "What should I wear at temples and religious sites?",
    category: "Culture",
    answer: [
      "Dress modestly with shoulders and knees covered. Loose, light cotton clothing is comfortable and respectful, and a scarf or shawl is useful for covering your head or shoulders when needed.",
      "You'll remove your shoes before entering temples, gurdwaras, mosques and some homes, so slip-on shoes are handy. At gurdwaras such as the Golden Temple, everyone covers their head; scarves are usually provided.",
      "Some temples restrict entry to people of the faith or ban leather items, cameras or phones. Your guide will explain the customs at each site before you go in.",
    ],
  },
  {
    id: "private-car-and-driver",
    question: "Will I have a private car and driver?",
    category: "Getting around",
    answer: [
      "Yes, on most journeys you'll travel by private, air-conditioned car with a professional driver who knows the roads. Many of our travelers say their driver became one of the highlights of the trip.",
      "Drivers are chosen for their safety record, experience and courtesy, and they speak enough English to make the journey easy. Your guide joins you for sightseeing in each place.",
      "We avoid long night drives and plan realistic driving times, with stops for chai, lunch and views along the way.",
    ],
  },
  {
    id: "trains-and-domestic-flights",
    question: "Do you use trains and domestic flights?",
    category: "Getting around",
    answer: [
      "Yes. India's rail network is one of the largest in the world, and trains are often the most enjoyable way to travel between cities. We book comfortable classes and fast services, such as the Vande Bharat or Shatabdi Express, where available.",
      "For longer distances, domestic flights save time, for example between Rajasthan and Kerala or into Ladakh. We plan connections with sensible margins.",
      "If you'd like something special, we can also include a luxury train such as the Maharajas' Express or the Palace on Wheels.",
    ],
  },
  {
    id: "safari-permits",
    question: "Do I need to book safari permits in advance?",
    category: "Wildlife",
    answer: [
      "Yes, and as early as possible. Safari permits for India's tiger reserves are limited and released through official booking portals, often several months in advance. Popular zones and dates, especially in winter and around Indian holidays, sell out quickly.",
      "We book permits for you as soon as your dates are confirmed, using your passport details. Each permit is linked to a specific zone, vehicle and time slot.",
      "Most parks close their core zones during the monsoon, usually from around 1 July to 30 September, and some close one day a week.",
    ],
    verifyNote:
      "Permits are issued only through official park booking portals, and park closure dates vary by reserve and year; we confirm current dates at booking.",
  },
  {
    id: "money-cards-and-tipping",
    question: "What about money, cards and tipping?",
    category: "Money",
    answer: [
      "The currency is the Indian rupee. Cards are accepted in most hotels and larger shops, and ATMs are widespread in cities. Carry some cash for markets, tips and smaller towns; UPI mobile payments are everywhere, but generally require an Indian bank account.",
      "Tipping is customary for guides, drivers, and hotel and restaurant staff. Your specialist will give you clear guidelines before you travel, so you never need to guess.",
      "Let your bank know you are traveling to India to avoid your card being blocked.",
    ],
  },
  {
    id: "connectivity-sim-esim-wifi",
    question: "Will I be able to stay connected?",
    category: "Before you go",
    answer: [
      "Wi-Fi is available at most hotels, although it can be slow in remote areas. Mobile data coverage is good in cities and along major roads.",
      "A local SIM card is inexpensive and can be bought at airports with your passport and visa. Travel eSIMs are an easy alternative if your phone supports them.",
      "In Ladakh and some remote parts of the Himalaya and the Northeast, coverage can be limited, and prepaid SIMs from outside the region may not work. We'll let you know before you go.",
    ],
  },
  {
    id: "women-traveling-solo",
    question: "Is India safe for women traveling solo?",
    category: "Health and safety",
    answer: [
      "Many women travel solo in India and have wonderful experiences. Traveling with a private driver and guide, staying in hotels we know well and having your specialist on call all add an extra layer of support.",
      "Dressing modestly helps you feel comfortable and avoids unwanted attention, particularly in rural areas and at religious sites. We recommend avoiding walking alone late at night in unfamiliar places.",
      "We're happy to arrange female guides where available, and to connect you with women in our team who have traveled the same routes.",
    ],
  },
  {
    id: "how-planning-works-and-cost",
    question: "How does planning work, and how much does a tailor-made journey cost?",
    category: "Booking",
    answer: [
      "You'll be matched with one dedicated specialist who will talk with you about your interests, pace and budget, then design a journey around you. You can refine it together until it's exactly right, and they'll stay with you until you're home.",
      "Costs depend on the length of your trip, the season, your choice of hotels and how you travel. Each of our sample journeys shows a starting price per person, and your specialist will give you a clear, fully itemised quote.",
      "There's no charge for the planning conversation, and no obligation to book.",
    ],
  },
  {
    id: "travel-insurance",
    question: "Do I need travel insurance?",
    category: "Booking",
    answer: [
      "Yes. Comprehensive travel insurance is essential and should cover medical treatment, emergency evacuation, cancellation and personal belongings.",
      "If you plan to trek at high altitude, dive or take part in other adventure activities, check that your policy covers them specifically.",
      "We recommend buying insurance when you book, so that you are covered if you need to cancel before you travel.",
    ],
  },
  {
    id: "cancellations",
    question: "What happens if I need to cancel?",
    category: "Booking",
    answer: [
      "You can cancel at any time by writing to us. Because we commit money to hotels, guides and trains on your behalf, cancellation charges apply and increase as your departure date gets closer; the charges for your journey are set out in your quote and booking confirmation.",
      "If you would like to change a confirmed booking, we will always try to help. Changes depend on availability and may involve an amendment fee and any charges our suppliers pass on, which we confirm before making the change. Our booking terms set out the details.",
    ],
  },
];

export const faqCategories: FaqCategory[] = faqs.reduce<FaqCategory[]>(
  (acc, f) => (acc.includes(f.category) ? acc : [...acc, f.category]),
  [],
);
