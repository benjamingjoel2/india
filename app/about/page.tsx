import { brand } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { JaaliDivider } from "@/components/ui/Jaali";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our story",
  description: `${brand.meaning} Learn how ${brand.name} plans every journey personally.`,
  path: "/about",
  image: "taj-arch",
});

const principles = [
  ["One specialist", "The person you first speak to plans every detail, answers every question and stays in touch while you travel."],
  ["Known personally", "We only recommend places we've stayed, eaten and walked ourselves, and guides we've traveled with for years."],
  ["Honest advice", "Sometimes that means fewer places, a different month or a quieter town than the one you'd planned. We'll always tell you."],
  ["Fair to everyone", "Clear pricing for you, fair pay for the people who make India welcoming."],
];

export default function AboutPage() {
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
        <Container>
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
          <JaaliDivider className="my-12 text-charcoal" />
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

      <FinalCTA image="udaipur-palace" />
    </>
  );
}
