import { Reveal } from "@/components/ui/Reveal";

const values = [
  { title: "One specialist", text: "The same person plans with you from first idea to flight home.", icon: "M12 3a4 4 0 110 8 4 4 0 010-8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" },
  { title: "Trusted local guides", text: "Historians, naturalists and cooks we've travelled with for years.", icon: "M3 20l6-14 4 8 3-5 5 11z" },
  { title: "Hand-picked stays", text: "Palaces, havelis and lodges we've slept in ourselves.", icon: "M4 21V10l8-6 8 6v11M9 21v-6h6v6" },
  { title: "Fair pricing", text: "Clear quotes, no hidden extras, and fair pay for everyone on the ground.", icon: "M12 3v18M7 7h7a3 3 0 010 6H9a3 3 0 000 6h8" },
  { title: "24/7 WhatsApp support", text: "A real person, any hour, for as long as you're travelling.", icon: "M4 20l1.4-4A8 8 0 1112 20a8 8 0 01-4-1z" },
  { title: "Every corner of India", text: "From the Andamans to Nagaland, and the quiet places between.", icon: "M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" },
];

export function ValueStrip() {
  return (
    <section aria-label="Why travel with us" className="border-b border-charcoal/10 bg-ivory">
      <ul className="page-x mx-auto grid max-w-page grid-cols-1 gap-x-8 gap-y-10 py-16 sm:grid-cols-2 lg:grid-cols-6 lg:py-20">
        {values.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 0.06} className="lg:border-l lg:border-charcoal/10 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
            <svg aria-hidden viewBox="0 0 24 24" className="size-6 text-marigold" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
              <path d={v.icon} />
            </svg>
            <h3 className="mt-4 font-display text-[1.2rem]">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{v.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
