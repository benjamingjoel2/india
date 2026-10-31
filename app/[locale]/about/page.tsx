import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { JaaliDivider } from "@/components/ui/Jaali";
import { pageMeta } from "@/lib/seo";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { msg } from "@/lib/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const [{ brand }, t] = await Promise.all([getContent(), getT()]);
  return pageMeta({
    title: t("Our story"),
    description: `${brand.meaning} ${t("Learn how {brand} plans every journey personally.", { brand: brand.name })}`,
    path: "/about",
    image: "taj-arch",
  });
}

const principles = [
  [msg("One specialist"), msg("The person you first speak to plans every detail, answers every question and stays in touch while you travel.")],
  [msg("Known personally"), msg("We only recommend places we've stayed, eaten and walked ourselves, and guides we've traveled with for years.")],
  [msg("Honest advice"), msg("Sometimes that means fewer places, a different month or a quieter town than the one you'd planned. We'll always tell you.")],
  [msg("Fair to everyone"), msg("Clear pricing for you, fair pay for the people who make India welcoming.")],
];

export default async function AboutPage() {
  const [{ brand }, t] = await Promise.all([getContent(), getT()]);
  return (
    <>
      <PageHero
        title={brand.taglineDisplay}
        eyebrow={t("Our story")}
        intro={brand.meaning}
        image="taj-arch"
        breadcrumbs={[{ label: t("About"), href: "/about" }]}
        size="tall"
      />
      <Section>
        <Container>
          <Reveal>
            <Display size="lg">{t("India, beautifully planned, by people who know it *personally*.")}</Display>
            <div className="mt-10 space-y-6 text-lede text-charcoal/85">
              <p>
                {t("{brand} began with a simple frustration: friends kept asking us how to see India, and the honest answer never fitted a brochure. The best of this country lives in the detail. Which side of the fort catches the evening light. Which cook in Old Delhi still makes nihari the slow way. Which week the cranes return to the lake.", { brand: brand.name })}
              </p>
              <p>
                {t("So we built a company around that detail. Every journey is planned from scratch by one specialist who knows India first-hand, with local guides we’ve traveled with for years and stays we’ve slept in ourselves. No call centers, no set departures, no shopping stops.")}
              </p>
              <p>
                {t("We have kept the company small on purpose. It means the specialist who plans your journey is the same person who answers when you write from the road, and it lets us turn down anything we would not book for our own families.")}
              </p>
            </div>
          </Reveal>
          <JaaliDivider className="my-12 text-charcoal" />
          <dl className="grid gap-10 sm:grid-cols-2">
            {principles.map(([title, text], i) => (
              <Reveal key={title} delay={(i % 2) * 0.08}>
                <dt className="font-display text-display-xs">{t(title)}</dt>
                <dd className="mt-2 leading-relaxed text-charcoal/80">{t(text)}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      <FinalCTA image="udaipur-palace" />
    </>
  );
}
