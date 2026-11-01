/**
 * Legal pages: Privacy Policy, Booking Terms and Cookie Policy for an enquiry-led,
 * tailor-made travel service. Complete text; have a lawyer review before launch.
 */
export interface LegalDoc {
  slug: "privacy" | "booking-conditions" | "cookies";
  title: string;
  display: string;
  description: string;
  sections: { h: string; p: string[]; table?: { head: string[]; rows: string[][] } }[];
}

export const legalUpdated = "1 November 2026";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    display: "Privacy *policy*.",
    description: "What Musafir Travel collects when you enquire or travel with us, why, and what you can ask us to do with it.",
    sections: [
      { h: "Who we are", p: [
        "Musafir Travel (\"we\", \"us\", \"our\") plans and arranges private, tailor-made journeys in India. Our business address is WeWork Enam Sambhav, C-20, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051, India. You can reach us at musafirtravel@tourground.com.",
        "We are the controller of the personal information described in this notice. For any privacy question or request, email musafirtravel@tourground.com.",
      ] },
      { h: "What we collect", p: [
        "Information you give us when you send an enquiry or plan a journey with us: your name, email address, phone number if you choose to give it, where you live, how you would like us to contact you, your travel dates, the number and ages of travellers, your interests, budget range and any notes you add.",
        "Information needed to arrange a journey once you decide to go ahead: names as they appear on passports, dates of birth, passport details where a supplier or authority requires them, flight details, dietary needs, mobility or medical information that affects your arrangements, and emergency contact details. We only ask for health information when it is needed to look after you, and we use it only for that purpose.",
        "Limited technical information when you use this website, such as your browser type, device, pages visited and the date and time of your visit, recorded in our hosting provider's server logs for security and to keep the site working.",
      ] },
      { h: "How we use it and why", p: [
        "To answer your enquiry and prepare proposals for you, because you have asked us to (steps taken at your request before a contract).",
        "To book, arrange and look after your journey, including passing details to the suppliers who deliver it, because this is necessary to perform our contract with you.",
        "To keep records for accounting, tax and legal purposes, because the law requires it.",
        "To keep this website secure, prevent misuse of our forms and improve our service, because we have a legitimate interest in doing so.",
        "To send you occasional news about journeys, only if you have asked us to. You can unsubscribe at any time using the link in every message or by emailing us.",
        "We do not sell your personal information and we do not use it for automated decision-making.",
      ] },
      { h: "Who we share it with", p: [
        "The suppliers needed to deliver your journey, such as guides, drivers, transport operators, hotels, lodges and activity providers, and only the details each one needs.",
        "Service providers who process information on our behalf under contract, such as our website host (Vercel) and our email provider. They may only use it to provide their service to us.",
        "Enquiries and trip plans sent through the forms on this website are received by a server function run by our hosting provider, Vercel, and passed to our planning team. They are not added to any marketing or mailing list unless you ask us to send you news.",
        "Public authorities, insurers or professional advisers where the law requires it, or where it is needed to protect your safety or vital interests, or to establish or defend legal claims.",
      ] },
      { h: "International transfers", p: [
        "Because we arrange travel, some of your information has to be shared with suppliers in the country you are visiting, and some of our service providers store data in other countries. Where information leaves the country it was collected in, we take reasonable steps to make sure it is protected, for example by using providers that offer recognised contractual safeguards.",
        "Where data protection law requires it, we rely on recognised safeguards for these transfers, such as the European Commission's standard contractual clauses (with the UK addendum), adequacy decisions, or the fact that the transfer is necessary to perform the contract you asked us to arrange. You can ask us for details.",
      ] },
      { h: "How long we keep it", p: [
        "Enquiries that do not lead to a booking are kept for up to two years, so that we can pick up the conversation if you come back to us, and then deleted. Booking records are kept for as long as accounting, tax and limitation rules require, normally up to seven years after your journey. Server logs are kept for a short period by our hosting provider.",
      ] },
      { h: "How we protect it", p: [
        "Information sent through this website travels over an encrypted connection. Access to your information is limited to the people who need it to plan and look after your journey, and our service providers are chosen for their security standards.",
      ] },
      { h: "Your rights", p: [
        "Depending on where you live, you may have the right to ask for a copy of the personal information we hold about you, to have it corrected or deleted, to restrict or object to how we use it, to receive it in a portable format, and to withdraw any consent you have given at any time.",
        "To make a request, email musafirtravel@tourground.com. We will reply within one month. If you are unhappy with how we have handled your information, please tell us first so we can try to put it right; you also have the right to complain to the data protection authority in the country where you live or work.",
      ] },
      { h: "Cookies", p: [
        "This website sets no advertising or tracking cookies. What it stores on your device is explained in our Cookie Policy.",
      ] },
      { h: "Children", p: [
        "We plan journeys for families, but we only accept enquiries from adults. Information about children travelling is provided by, and used on behalf of, their parent or guardian.",
      ] },
      { h: "Changes to this notice", p: [
        "We may update this notice from time to time. The date at the top of the page shows when it last changed.",
      ] },
      { h: "Contact", p: [
        "Musafir Travel, WeWork Enam Sambhav, C-20, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051, India. Email: musafirtravel@tourground.com.",
      ] },
    ],
  },
  {
    slug: "booking-conditions",
    title: "Booking Terms",
    display: "Booking *terms*.",
    description: "How enquiries, quotes, deposits, changes and cancellations work when you travel in India with Musafir Travel.",
    sections: [
      { h: "About these terms", p: [
        "Musafir Travel (\"we\", \"us\", \"our\") plans and arranges private, tailor-made journeys in India. Our business address is WeWork Enam Sambhav, C-20, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051, India. You can reach us at musafirtravel@tourground.com.",
        "These terms apply to every journey we arrange. Please read them before you confirm a booking; by confirming, you accept them on behalf of everyone travelling with you. If anything is unclear, email musafirtravel@tourground.com before you book.",
      ] },
      { h: "How we work", p: [
        "We are an enquiry-led, tailor-made travel service. Nothing on this website is a booking engine or a binding offer. You tell us what you would like, we prepare a proposal, and we refine it with you until it is right.",
      ] },
      { h: "Enquiries and quotes", p: [
        "A quote sets out the itinerary, the services included and excluded, the price and the payment schedule. Quotes are based on availability and supplier prices on the date they are issued and are valid for the period stated on them. Services are not held for you until your booking is confirmed.",
        "Prices shown on this website are \"From\" prices: a guide to the starting cost of a journey of that style, per person, before it is tailored to you. They are not an offer. The price of your journey is the one set out in your written quote.",
        "Prices are set in US dollars. Amounts shown in other currencies are approximate conversions for guidance only; your quote states the currency you pay in.",
      ] },
      { h: "What is included", p: [
        "Your quote and booking confirmation list exactly what is included: typically accommodation, the meals stated, private transfers and transport, the guiding, activities and entrance or park fees listed, and our support before and during your trip. Unless your quote says otherwise, the price does not include international flights, visas, travel insurance, vaccinations and medical costs, tips, drinks and meals not listed, optional activities and personal expenses.",
      ] },
      { h: "Confirming your booking", p: [
        "Your booking is confirmed, and a contract between you and us comes into existence, when you have accepted your quote in writing, we have received your deposit, and we have sent you a written booking confirmation. The person who makes the booking must be at least 18 and is responsible for making payments and for passing on all information about the journey to the other travellers.",
      ] },
      { h: "Deposits and the balance", p: [
        "A deposit is payable to confirm your booking. The amount, and the date the balance is due, are shown on your quote and booking confirmation; some suppliers, such as internal flights, small lodges, boats or permits, require full payment at the time of booking, and we will tell you when this applies. If the balance is not paid by its due date, we may treat the booking as cancelled by you and apply the cancellation charges below.",
        "Unless your quote states otherwise, the deposit is 30% of the total price and the balance is due 60 days before departure; if you book within 60 days of departure, the full price is due when you book.",
      ] },
      { h: "Changes you ask for", p: [
        "We will always try to help if you want to change your arrangements after booking. Changes depend on availability and may involve an administration charge and any costs our suppliers pass on to us, which we will confirm before making the change. Changing names on flight tickets or permits may not be possible.",
      ] },
      { h: "If you cancel", p: [
        "You may cancel at any time by writing to us; the cancellation takes effect on the day we receive it. Because we commit money to suppliers on your behalf, unless your quote states otherwise the following charges apply, as a percentage of the total price: more than 60 days before departure, loss of the deposit (30%); 60 to 31 days, 50%; 30 to 15 days, 75%; 14 days or fewer, or if you do not travel, 100%.",
        "Where a supplier's own terms are stricter, for example non-refundable flights, permits or peak-season stays, your quote will say so and those charges apply instead. Your travel insurance may cover cancellation charges.",
      ] },
      { h: "If we change or cancel your journey", p: [
        "Travel in India is shaped by weather, seasons and local conditions. Monsoon rains, fog in the north in winter, landslides and snow on Himalayan roads, train and domestic flight timetables, national park zone allocations and festival dates set by local calendars can all change plans at short notice. Minor changes, such as a different vehicle, a revised route or a change of guide, are part of travelling well and do not give rise to compensation.",
        "If we have to make a significant change before departure, such as a major change of itinerary, date or accommodation standard, we will tell you as soon as possible and offer you the choice of accepting the change, taking an alternative journey, or cancelling with a full refund of the money you have paid us.",
        "We may need to cancel your journey if it becomes unsafe or impossible to operate, for example because of official travel advice, natural events, civil unrest or other circumstances beyond our control. In that case we will refund all money you have paid us, or offer you an alternative if you prefer. We are not responsible for costs you incur that are not part of your booking with us, such as flights or visas you have arranged yourself.",
      ] },
      { h: "Travel insurance", p: [
        "Comprehensive travel insurance is a condition of travelling with us. It must cover cancellation, medical treatment, emergency evacuation and repatriation, and any activities in your itinerary, such as hiking, riding, boat trips, flights or adventure activities. Please send us your policy details before you travel.",
      ] },
      { h: "Passports, visas and health", p: [
        "It is your responsibility to hold a passport valid for the whole journey (many countries require at least six months' validity beyond your return date), any visas, entry authorisations or permits needed, and to meet the health and vaccination requirements of every country on your itinerary. We are happy to share general information, but requirements change and depend on your nationality, so please check official government sources and take advice from your doctor or a travel health clinic in good time. We are not liable if you are unable to travel, or incur costs, because you do not have the right documents.",
        "Please tell us before booking about any medical condition, disability or reduced mobility that may affect your journey, so that we can check the arrangements are suitable for you.",
      ] },
      { h: "Your responsibilities while travelling", p: [
        "Please follow the reasonable instructions of guides, drivers and suppliers, particularly on safety, and respect local laws, customs and the places you visit. We, or a supplier, may end your arrangements without refund if your behaviour puts others at risk or causes serious disruption or damage.",
      ] },
      { h: "Our responsibility to you", p: [
        "We take care to choose reliable suppliers and to arrange your journey with reasonable skill and care. Where we are responsible for a failure in the services we have agreed to provide, we will offer appropriate help and, where due, compensation.",
        "We are not liable where a problem is caused by you or anyone travelling with you, by a third party not connected with the services we provide, or by unusual and unforeseeable circumstances beyond our control. Where international conventions limit the compensation a transport or accommodation provider must pay, our liability is limited in the same way. Except for death or personal injury caused by our negligence, or where the law does not allow it, our total liability to you is limited to the price of your journey. Nothing in these terms limits rights you have under the laws that protect consumers in your country of residence.",
      ] },
      { h: "Force majeure", p: [
        "We are not liable for changes, delays or cancellations caused by unusual and unforeseeable circumstances beyond our control whose consequences could not have been avoided even with all due care, such as war or the threat of war, civil unrest, terrorism, natural disasters, extreme weather, epidemics, fire, the closure of airports or ports, industrial action, and government action or official advice against travel. If force majeure prevents your trip, we will refund everything we are able to recover from suppliers and help you rearrange.",
      ] },
      { h: "If something goes wrong", p: [
        "If you have a problem during your journey, please tell your guide, the supplier concerned and us straight away, so that we can try to put it right on the spot. If you are still unhappy, write to us at musafirtravel@tourground.com within 28 days of your return, and we will reply as quickly as we can, normally within 28 days.",
      ] },
      { h: "Law and disputes", p: [
        "These terms, and any dispute arising from them, are governed by the laws of India, and the courts of India have jurisdiction. If you live elsewhere, this does not take away any mandatory rights you have under the consumer law of your country of residence, and you may also bring proceedings there. We will always try to resolve a complaint by agreement first.",
      ] },
      { h: "Data protection", p: [
        "We use your personal information only as described in our Privacy Policy.",
      ] },
      { h: "Contact", p: [
        "Musafir Travel, WeWork Enam Sambhav, C-20, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051, India. Email: musafirtravel@tourground.com.",
      ] },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    display: "Cookie *policy*.",
    description: "What the Musafir Travel website stores on your device, and how to control it.",
    sections: [
      { h: "About this policy", p: [
        "This policy explains the small amount of information this website stores on your device, and how you can control it. For questions, email musafirtravel@tourground.com.",
      ] },
      { h: "What we use", p: [
        "This website does not use advertising, tracking or social media cookies, and does not run analytics.",
        "It uses only the following, which are needed for features you ask for. Nothing in this table is sent to us.",
      ], table: {
        head: ["Name", "Purpose", "Duration", "Type"],
        rows: [
          ["musafir:currency", "Remembers the display currency you choose for prices.", "Until you clear your browser storage", "Local storage, set by this site"],
          ["musafir:planner:v1", "Keeps your answers in the trip planner if you leave and come back.", "Until you send your plan, start again or clear your browser storage", "Local storage, set by this site"],
        ],
      } },
      { h: "Consent", p: [
        "Because these items are strictly necessary for features you choose to use, or keep only your own preferences on your own device, they do not need consent and no cookie banner is shown. Nothing is shared with us or anyone else. If we ever add analytics or other non-essential cookies, we will ask for your consent first and update this page.",
      ] },
      { h: "How to control or withdraw", p: [
        "You can delete these items at any time by clearing your browser's site data (cookies and local storage) for this website, or block them in your browser settings. The website will still work; you will simply lose the saved preference or progress.",
        "If we later ask for your consent to optional cookies, you will be able to withdraw it at any time from the same place, and it will be as easy as giving it.",
        "You can see and delete cookies and site storage at any time in your browser settings (usually under Privacy or Site data), and you can block them altogether. If you clear this site's storage, it simply forgets the choices listed above.",
      ] },
      { h: "Third-party content", p: [
        "Our typefaces are served from this website. Photographs come from our image delivery provider and are resized by our hosting provider before they reach you, so your browser does not contact the image provider directly. Our hosting provider (Vercel) may record standard technical information in its server logs for security.",
      ] },
      { h: "Changes", p: [
        "We will update this page if the way the website stores information changes. The date at the top shows when it last changed.",
      ] },
      { h: "Contact", p: [
        "Musafir Travel, WeWork Enam Sambhav, C-20, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051, India. Email: musafirtravel@tourground.com.",
      ] },
    ],
  },
];

export const getLegalDoc = (slug: string) => legalDocs.find((d) => d.slug === slug);
