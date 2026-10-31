import { Reveal } from "@/components/ui/Reveal";
import { Manifesto } from "./Manifesto";
import { getT } from "@/lib/i18n/server";
import { msg } from "@/lib/i18n/config";

const values = [
  { title: msg("One specialist"), text: msg("The same person plans with you from first idea to flight home."), icon: "M12 3a4 4 0 110 8 4 4 0 010-8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" },
  { title: msg("Trusted local guides"), text: msg("Historians, naturalists and cooks we've traveled with for years."), icon: "M3 20l6-14 4 8 3-5 5 11z" },
  { title: msg("Hand-picked stays"), text: msg("Palaces, havelis and lodges we've slept in ourselves."), icon: "M4 21V10l8-6 8 6v11M9 21v-6h6v6" },
  { title: msg("Fair pricing"), text: msg("Clear quotes, no hidden extras, and fair pay for everyone on the ground."), icon: "M12 3v18M7 7h7a3 3 0 010 6H9a3 3 0 000 6h8" },
  { title: msg("Support while you travel"), text: msg("A real person to reach for as long as you're traveling."), icon: "M4 20l1.4-4A8 8 0 1112 20a8 8 0 01-4-1z" },
  { title: msg("Every corner of India"), text: msg("From the Andamans to Nagaland, and the quiet places between."), icon: "M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" },
];

export async function ValueStrip() {
  const t = await getT();
  return (
    <section aria-labelledby="values-title" className="border-b border-charcoal/10 bg-ivory">
      <h2 id="values-title" className="sr-only">{t("Why travel with us")}</h2>
      <Manifesto />
      <ul className="page-x mx-auto grid max-w-page grid-cols-2 gap-x-6 gap-y-10 py-10 md:grid-cols-3 lg:grid-cols-6 lg:py-14">
        {values.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 0.06} className="lg:border-l lg:border-charcoal/10 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
            <svg aria-hidden viewBox="0 0 24 24" className="size-6 text-marigold" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
              <path d={v.icon} />
            </svg>
            <h3 className="mt-4 font-display text-[1.2rem]">{t(v.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{t(v.text)}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
