import { people } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Portrait";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our guides",
  description: "Meet the historians, naturalists, cooks and mountain guides who bring India to life on our journeys, each one someone we have traveled with for years.",
  path: "/our-guides",
  image: "amber-fort",
});

const tones = ["sandstone", "peacock", "indigo", "teak"] as const;

export default function GuidesPage() {
  const guides = people.filter((p) => p.kind === "guide");
  return (
    <>
      <PageHero
        title="The people who know it *best*."
        eyebrow="Our guides"
        intro="A great guide changes everything: the story behind a carved doorway, the alarm call that means a tiger is near, the stall that makes the best kachori. These are some of ours."
        image="amber-fort"
        breadcrumbs={[{ label: "Our guides", href: "/our-guides" }]}
      />
      <Section>
        <Container>
          <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g, i) => (
              <Reveal as="li" key={g.id} delay={(i % 4) * 0.08}>
                <Portrait person={g} tone={tones[i % 4]} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="aspect-[4/5] w-full" />
                <h2 className="mt-6 font-display text-display-xs">{g.name}</h2>
                <p className="mt-1 text-sm text-stone">
                  {g.role} · {g.base}
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal/85">{g.bio[0]}</p>
                <blockquote className="mt-4 font-display italic text-indigo">“{g.quote}”</blockquote>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.specialties.map((s) => (
                    <li key={s} className="rounded-full border border-charcoal/15 px-3 py-1 text-xs text-charcoal/75">{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
          <p className="mt-16 text-xs text-stone">Guide names, stories and photos are placeholders (stand-in stock portraits). Replace with your real guides and their own photos, with their permission.</p>
        </Container>
      </Section>
      <FinalCTA image="kerala-village-boat" />
    </>
  );
}
