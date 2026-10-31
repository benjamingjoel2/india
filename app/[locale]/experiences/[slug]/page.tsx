import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experiences } from "@/data";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { JourneyCard } from "@/components/cards/JourneyCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { Carousel } from "@/components/ui/Carousel";
import { PlanButton } from "@/components/planner/PlanButton";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => experiences.map((e) => ({ slug: e.slug }));

export async function generateMetadata({ params }: PageProps<"/[locale]/experiences/[slug]">): Promise<Metadata> {
  const e = (await getContent()).getExperience((await params).slug);
  return e ? pageMeta({ title: e.seo.title, description: e.seo.description, path: `/experiences/${e.slug}`, image: e.image }) : {};
}

export default async function ExperiencePage({ params }: PageProps<"/[locale]/experiences/[slug]">) {
  const [{ experiences, getExperience, getJourney, getRegion, monthShort }, t] = await Promise.all([getContent(), getT()]);
  const e = getExperience((await params).slug);
  if (!e) notFound();
  const journeys = e.relatedJourneys.map(getJourney).filter((j) => j !== undefined);
  const others = experiences.filter((x) => x.slug !== e.slug);
  const facts = [
    { label: t("Where"), value: e.where },
    { label: t("Time needed"), value: e.duration },
    { label: t("Best months"), value: e.bestMonths.map((m) => monthShort[m]).join(" · ") },
    { label: t("Regions"), value: e.regions.map((r) => getRegion(r)?.name).join(", ") },
  ];
  return (
    <>
      <PageHero
        title={e.headline}
        eyebrow={e.title}
        intro={e.summary}
        image={e.image}
        breadcrumbs={[
          { label: t("Experiences"), href: "/experiences" },
          { label: e.title, href: `/experiences/${e.slug}` },
        ]}
      >
        <PlanButton variant="accent" preset={{ regions: e.regions, note: t("I'd love to include: {experience}.", { experience: e.title }) }}>
          {t("Add this to my journey")}
        </PlanButton>
      </PageHero>
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="space-y-6 text-lede text-charcoal/85 lg:col-span-7">
              {e.description.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-6 border-y border-charcoal/15 py-8">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="eyebrow text-[0.62rem] text-stone">{f.label}</dt>
                    <dd className="mt-1.5 font-display text-lg">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <h2 className="mt-10 font-display text-display-xs">{t("Good to know")}</h2>
              <ul className="mt-5 space-y-3">
                {e.whatToKnow.map((w) => (
                  <li key={w} className="flex gap-3 text-[0.95rem] text-charcoal/85">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-marigold" />
                    {w}
                  </li>
                ))}
              </ul>
              {e.ethics && (
                <div className="mt-10 border-l-2 border-kerala bg-kerala/5 p-6">
                  <p className="eyebrow text-[0.62rem] text-kerala">{t("Traveling responsibly")}</p>
                  <p className="mt-2 text-[0.95rem] text-charcoal/85">{e.ethics}</p>
                </div>
              )}
            </Reveal>
          </div>
        </Container>
      </Section>
      {journeys.length > 0 && (
        <Section tone="deep" labelledBy="ej">
          <Container>
            <Display id="ej" size="md" className="mb-12">{t("Journeys that *include* it.")}</Display>
            <CardGrid cols={3}>
              {journeys.map((j) => (
                <JourneyCard key={j.slug} journey={j} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}
      <Section labelledBy="eo">
        <Container>
          <Display id="eo" size="md" className="mb-12">{t("More *experiences*.")}</Display>
          <Carousel label={t("More experiences")}>
            {others.map((x) => (
              <ExperienceCard key={x.slug} experience={x} />
            ))}
          </Carousel>
        </Container>
      </Section>
      <FinalCTA image={e.image} />
    </>
  );
}
