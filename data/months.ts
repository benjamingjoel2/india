/**
 * Month-by-month travel guide.
 *
 * All seasonal guidance and festival months here are indicative only. Weather
 * patterns, park openings and lunar-calendar festival dates shift each year and
 * must be verified annually before publishing or quoting to travelers.
 */
import type { MonthGuide, MonthKey } from "./types";

export const monthOrder: MonthKey[] = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

export const monthNames: Record<MonthKey, string> = {
  jan: "January",
  feb: "February",
  mar: "March",
  apr: "April",
  may: "May",
  jun: "June",
  jul: "July",
  aug: "August",
  sep: "September",
  oct: "October",
  nov: "November",
  dec: "December",
};

export const monthShort: Record<MonthKey, string> = {
  jan: "Jan",
  feb: "Feb",
  mar: "Mar",
  apr: "Apr",
  may: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  oct: "Oct",
  nov: "Nov",
  dec: "Dec",
};

export const months: MonthGuide[] = [
  {
    key: "jan",
    name: "January",
    summary:
      "Peak season across much of India, with sunny days in Rajasthan, the south and the islands. Northern mornings can be cold and foggy, so we build in flexibility around early flights and trains.",
    weather: "Dry and mild in most regions, cold at night in the north and freezing in the high Himalaya.",
    bestRegions: ["rajasthan", "north", "south", "islands", "east-northeast"],
    picks: ["Rajasthan's palaces and desert camps", "Kerala's backwaters", "Andaman beaches", "Kaziranga's rhinos"],
    festivals: [],
    otherEvents: ["Republic Day (26 January)", "Pongal", "Makar Sankranti kite flying", "Jaipur Literature Festival"],
    watchOut: "Peak-season stays in Rajasthan and Kerala book out early.",
  },
  {
    key: "feb",
    name: "February",
    summary:
      "One of the loveliest months to travel, as the winter chill lifts in the north and the south stays warm and dry. Tiger reserves are pleasant and wildlife sightings start to pick up.",
    weather: "Warm, dry days almost everywhere, with cool evenings in the north and the hills.",
    bestRegions: ["rajasthan", "north", "south", "central-india", "islands", "east-northeast"],
    picks: ["The Golden Triangle in clear light", "Tamil Nadu's temple towns", "Tiger safaris in Kanha", "Havelock's beaches"],
    festivals: ["holi"],
    otherEvents: ["Losar", "Maha Shivaratri", "Desert Festival, Jaisalmer"],
    watchOut: "Holi sometimes falls in late February; check dates if you want to join or avoid it.",
  },
  {
    key: "mar",
    name: "March",
    summary:
      "Spring color in the north, with Holi celebrated in streets and courtyards. As the forests dry out, central India's tiger reserves enter their best season for sightings.",
    weather: "Warming steadily, pleasant in the north early in the month and hot in the south by the end.",
    bestRegions: ["north", "rajasthan", "central-india", "islands", "east-northeast"],
    picks: ["Holi in Rajasthan or Mathura", "Tigers in Ranthambore and Bandhavgarh", "Andaman snorkelling", "Meghalaya's hills"],
    festivals: ["holi"],
    otherEvents: ["Navratri (spring)", "Gangaur, Rajasthan"],
  },
  {
    key: "apr",
    name: "April",
    summary:
      "Heat builds on the plains, so we shift the focus to wildlife, the hills and the coast. Darjeeling's first-flush tea season and Himachal's orchards in blossom make the mountains especially rewarding.",
    weather: "Hot on the northern and central plains, humid in the south, fresh and clear in the hills.",
    bestRegions: ["central-india", "himalaya", "islands", "east-northeast"],
    picks: ["Tiger safaris at waterholes", "Darjeeling's first flush", "Himachal hill stations", "Sikkim's rhododendrons"],
    festivals: [],
    otherEvents: ["Baisakhi", "Vishu", "Bihu (Rongali)", "Tamil New Year"],
    watchOut: "Midday heat on the plains can be intense; plan early starts and long lunches.",
  },
  {
    key: "may",
    name: "May",
    summary:
      "The hottest month on the plains, and the time to head for the mountains. Tiger sightings are often excellent as animals gather at water, for travelers happy to brave the heat.",
    weather: "Very hot across the plains and central India, with pre-monsoon showers in the south.",
    bestRegions: ["himalaya", "central-india"],
    picks: ["Himachal and Spiti", "Sikkim and Darjeeling", "Early-season Ladakh", "Tigers for the heat-hardy"],
    festivals: [],
    otherEvents: ["Buddha Purnima"],
    watchOut: "Rajasthan and the northern plains are uncomfortably hot for sightseeing.",
  },
  {
    key: "jun",
    name: "June",
    summary:
      "Ladakh's summer season gets under way as passes open, while the monsoon arrives in Kerala and sweeps north. It is a beautiful, green time for Ayurveda in the south.",
    weather: "Monsoon rains arrive in the south and move north; dry and sunny in Ladakh.",
    bestRegions: ["himalaya", "south"],
    picks: ["Ladakh's high passes", "Kerala for monsoon Ayurveda", "Leh's monastery festivals"],
    festivals: ["hemis-festival"],
    otherEvents: ["International Day of Yoga (21 June)", "Saga Dawa"],
    watchOut: "Most central Indian tiger reserves begin closing core zones as the rains arrive.",
  },
  {
    key: "jul",
    name: "July",
    summary:
      "Monsoon at its height across most of India, bringing lush landscapes and quieter monuments. Ladakh is at its best, and Kerala is at its greenest for Ayurveda retreats.",
    weather: "Heavy rain across most of India; dry and warm by day in Ladakh.",
    bestRegions: ["himalaya", "south"],
    picks: ["Ladakh and the Nubra Valley", "Kerala for monsoon Ayurveda", "Monastery treks around Leh"],
    festivals: ["hemis-festival"],
    otherEvents: ["Teej", "Rath Yatra, Puri"],
    watchOut: "Tiger reserve core zones and Kaziranga are typically closed for the monsoon.",
  },
  {
    key: "aug",
    name: "August",
    summary:
      "The rains continue across the plains, but Ladakh remains clear and Kerala comes alive with boat races and harvest celebrations. Monuments in the north are wonderfully quiet.",
    weather: "Monsoon rain across most of India, with warm, dry days in Ladakh.",
    bestRegions: ["himalaya", "south"],
    picks: ["Ladakh's lakes and valleys", "Kerala for monsoon Ayurveda", "Snake boat races in Kerala"],
    festivals: [],
    otherEvents: ["Independence Day (15 August)", "Onam (Aug/Sep)", "Janmashtami", "Raksha Bandhan", "Nehru Trophy Boat Race"],
  },
  {
    key: "sep",
    name: "September",
    summary:
      "The monsoon begins to retreat and the countryside is at its most verdant. Ladakh enjoys clear autumn light, and Kolkata starts preparing for Durga Puja.",
    weather: "Rains easing across much of India, still humid; crisp and clear in Ladakh.",
    bestRegions: ["himalaya", "south"],
    picks: ["Late-season Ladakh", "Kerala as the rains ease", "Ganesh Chaturthi in Mumbai"],
    festivals: ["durga-puja"],
    otherEvents: ["Ganesh Chaturthi", "Onam (Aug/Sep)", "Navratri"],
    watchOut: "Late monsoon showers can linger, especially in the east and northeast.",
  },
  {
    key: "oct",
    name: "October",
    summary:
      "The season opens: skies clear, temperatures soften and the festival calendar fills with Durga Puja, Navratri and often Diwali. Tiger reserves reopen their core zones.",
    weather: "Warm and mostly dry, with pleasant evenings in the north and the hills.",
    bestRegions: ["north", "rajasthan", "central-india", "east-northeast", "islands"],
    picks: ["Durga Puja in Kolkata", "Rajasthan as the season begins", "Reopened tiger reserves", "Himachal in autumn"],
    festivals: ["durga-puja", "diwali", "pushkar-camel-fair"],
    otherEvents: ["Navratri", "Dussehra", "Gandhi Jayanti (2 October)"],
    watchOut: "Festival weeks sell out quickly and some businesses close for Diwali.",
  },
  {
    key: "nov",
    name: "November",
    summary:
      "A superb month almost everywhere, with clear skies, warm days and festive energy. Pushkar's camel fair and Diwali often fall now, and the south and the islands are drying out.",
    weather: "Dry, sunny and comfortable in most regions, cooler at night in the north.",
    bestRegions: ["rajasthan", "north", "central-india", "south", "east-northeast", "islands"],
    picks: ["Pushkar Camel Fair", "Diwali in Jaipur or Varanasi", "Varanasi's Dev Deepawali", "Kaziranga's reopening"],
    festivals: ["diwali", "pushkar-camel-fair"],
    otherEvents: ["Dev Deepawali, Varanasi", "Chhath Puja", "Guru Nanak Jayanti", "Rann Utsav begins"],
    watchOut: "Peak-season stays in Rajasthan book out early, especially around the camel fair.",
  },
  {
    key: "dec",
    name: "December",
    summary:
      "Festive and busy, with excellent weather in Rajasthan, the south and the islands. Nagaland's Hornbill Festival opens the month, while Christmas brings a special glow to Goa and Kerala.",
    weather: "Dry and sunny across most of India, cold and sometimes foggy in the north.",
    bestRegions: ["rajasthan", "north", "south", "islands", "east-northeast"],
    picks: ["Hornbill Festival in Nagaland", "Christmas in Goa", "Kerala's backwaters", "Desert camps in Jaisalmer"],
    festivals: ["hornbill-festival"],
    otherEvents: ["Christmas in Goa and Kerala", "Rann Utsav", "Losar (Ladakh)"],
    watchOut: "Christmas and New Year are the busiest weeks of the year; book well ahead.",
  },
];
