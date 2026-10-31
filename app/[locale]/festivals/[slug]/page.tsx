import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { festivals } from "@/data";
import { getContent } from "@/lib/content";
import { getLocale, translator } from "@/lib/i18n/server";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { JourneyCard } from "@/components/cards/JourneyCard";
import { FestivalCard } from "@/components/cards/FestivalCard";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { VerifyFlag } from "@/components/ui/VerifyFlag";
import { PlanButton } from "@/components/planner/PlanButton";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => festivals.map((f) => ({ slug: f.slug }));

export async function generateMetadata({ params }: PageProps<"/[locale]/festivals/[slug]">): Promise<Metadata> {
  const f = (await getContent()).getFestival((await params).slug);
  return f ? pageMeta({ title: f.seo.title, description: f.seo.description, path: `/festivals/${f.slug}`, image: f.image }) : {};
}

export default async function FestivalPage({ params }: PageProps<"/[locale]/festivals/[slug]">) {
  const { festivals, getFestival, getJourney, monthNames } = await getContent();
  const locale = await getLocale();
  const t = translator(locale);
  const f = getFestival((await params).slug);
  if (!f) notFound();
  const journeys = f.relatedJourneys.map(getJourney).filter((j) => j !== undefined);
  const preset = { regions: f.regions, month: f.typicalMonths[0], note: t("I'd like to plan around {festival}.", { festival: f.name }) };
  return (
    <>
      <PageHero
        title={f.headline}
        eyebrow={`${f.name} · ${t("typically {months}", { months: f.typicalMonths.map((m) => monthNames[m]).join(t(" or ")) })}`}
        intro={f.summary}
        image={f.image}
        breadcrumbs={[
          { label: t("Festivals"), href: "/festivals" },
          { label: f.name, href: `/festivals/${f.slug}` },
        ]}
      >
        <PlanButton variant="accent" preset={preset}>
          {t("Plan around this festival")}
        </PlanButton>
      </PageHero>
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="space-y-6 text-lede text-charcoal/85 lg:col-span-7">
              {f.description.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="jaali-frame p-8">
                <p className="eyebrow text-[0.62rem] text-stone">{t("When")}</p>
                <p className="mt-2 font-display text-lg">{f.typicalTiming}</p>
                <VerifyFlag className="mt-4">{t("Dates vary yearly · verify before booking")}</VerifyFlag>
                <p className="eyebrow mt-8 text-[0.62rem] text-stone">{t("Where to experience it")}</p>
                <p className="mt-2 font-display text-lg">{f.where}</p>
              </div>
              <h2 className="mt-10 font-display text-display-xs">{t("Tips from our specialists")}</h2>
              <ul className="mt-5 space-y-3">
                {f.tips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-[0.95rem] text-charcoal/85">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-marigold" />
                    {tip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>
      {journeys.length > 0 && (
        <Section tone="deep" labelledBy="fj">
          <Container>
            <Display id="fj" size="md" className="mb-12">{t("Journeys to build *around* it.")}</Display>
            <CardGrid cols={3}>
              {journeys.map((j) => (
                <JourneyCard key={j.slug} journey={j} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}
      <Section labelledBy="fo">
        <Container>
          <Display id="fo" size="md" className="mb-12">{t("More *festivals*.")}</Display>
          <CardGrid cols={3}>
            {festivals.filter((x) => x.slug !== f.slug).slice(0, 3).map((x) => (
              <FestivalCard key={x.slug} festival={x} />
            ))}
          </CardGrid>
        </Container>
      </Section>
      <FinalCTA image={f.image} title={t("Be there for {festival}, *beautifully* planned.", { festival: locale === "en" ? f.name.replace(/^The /, "the ") : f.name })} />
    </>
  );
}
