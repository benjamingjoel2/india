import { brand } from "@/config/site";
import { people } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JaaliDivider } from "@/components/ui/Jaali";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our story",
  description: `${brand.meaning} Meet the small team of India specialists behind ${brand.name} and learn how we plan every journey personally.`,
  path: "/about",
  image: "taj-arch",
});

const principles = [
  ["One specialist", "The person you first speak to plans every detail, answers every question and is on WhatsApp while you travel."],
  ["Known personally", "We only recommend places we've stayed, eaten and walked ourselves, and guides we've traveled with for years."],
  ["Honest advice", "Sometimes that means fewer places, a different month or a quieter town than the one you'd planned. We'll always tell you."],
  ["Fair to everyone", "Clear pricing for you, fair pay for the people who make India welcoming."],
];

export default function AboutPage() {
  const team = people.filter((p) => p.kind !== "guide");
  return (
    <>
      <PageHero
        title={brand.taglineDisplay}
        eyebrow="Our story"
        intro={brand.meaning}
        image="taj-arch"
        breadcrumbs={[{ label: "About", href: "/about" }]}
        size="tall"
      />
      <Section>
        <Container className="max-w-4xl">
          <Reveal>
            <Display size="lg">{brand.promise.replace("personally", "*personally*")}</Display>
            <div className="mt-10 space-y-6 text-lede text-charcoal/85">
              <p>
                {brand.name} began with a simple frustration: friends kept asking us how to see India, and the honest answer never fitted a brochure. The
                best of this country lives in the detail. Which side of the fort catches the evening light. Which cook in Old Delhi still makes nihari the
                slow way. Which week the cranes return to the lake.
              </p>
              <p>
                So we built a company around that detail. Every journey is planned from scratch by one specialist who knows India first-hand, with local
                guides we&rsquo;ve traveled with for years and stays we&rsquo;ve slept in ourselves. No call centers, no set departures, no shopping
                stops.
              </p>
              <p>[Placeholder] Add the founding story, year and milestones here.</p>
            </div>
          </Reveal>
          <JaaliDivider className="my-20 text-charcoal" />
          <dl className="grid gap-10 sm:grid-cols-2">
            {principles.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 0.08}>
                <dt className="font-display text-display-xs">{t}</dt>
                <dd className="mt-2 leading-relaxed text-charcoal/80">{d}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="team" tone="deep" labelledBy="team-title" className="scroll-mt-20">
        <Container>
          <Eyebrow className="mb-5 text-stone">Meet the team</Eyebrow>
          <Display id="team-title" size="lg" className="mb-16">The people who&rsquo;ll *plan* it.</Display>
          <ul className="grid gap-16 lg:grid-cols-2">
            {team.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 0.1} className="grid gap-8 sm:grid-cols-[14rem_1fr]">
                <PortraitPlaceholder name={p.name} tone={i % 2 ? "peacock" : "sandstone"} className="aspect-[4/5] w-full" />
                <div>
                  <h3 className="font-display text-display-sm">{p.name}</h3>
                  <p className="mt-1 text-sm text-stone">
                    {p.role} · {p.base}
                  </p>
                  <div className="mt-5 space-y-4 text-charcoal/85">
                    {p.bio.slice(0, 2).map((b) => (
                      <p key={b.slice(0, 20)}>{b}</p>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-stone">Speaks {p.languages.join(", ")} · Loves {p.specialties.join(", ").toLowerCase()}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-12 text-xs text-stone">Team profiles are placeholders. Replace with real names, photographs and stories.</p>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/our-guides" variant="secondary">Meet our guides</ButtonLink>
            <ButtonLink href="/responsible-travel" variant="secondary">How we travel</ButtonLink>
          </div>
        </Container>
      </Section>
      <FinalCTA image="udaipur-palace" />
    </>
  );
}
