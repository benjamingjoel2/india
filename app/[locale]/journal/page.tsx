import Link from "@/components/ui/Link";
import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";

import { PlainHero } from "@/components/sections/PageHero";
import { CardGrid } from "@/components/sections/CardGrid";
import { PostCard } from "@/components/cards/PostCard";
import { Container, Section } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return pageMeta({
    title: t("Journal"),
    description: t("Stories and practical advice from our India specialists: first trips, Rajasthan or Kerala, how to see tigers in the wild, and a guide to India's festivals."),
    path: "/journal",
  });
}

export default async function JournalPage() {
  const [{ posts }, t] = await Promise.all([getContent(), getT()]);
  const [lead, ...rest] = posts;
  return (
    <>
      <PlainHero title={t("Letters from *India*.")} eyebrow={t("Journal")} intro={t("Stories, seasons and practical advice from the people who plan our journeys.")} breadcrumbs={[{ label: t("Journal"), href: "/journal" }]} />
      <Section>
        <Container>
          <Reveal className="group relative grid gap-10 lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
              <SmartImage image={lead.image} sizes="(min-width:1024px) 58vw, 100vw" zoom priority />
            </div>
            <div className="flex flex-col justify-center lg:col-span-5">
              <p className="eyebrow text-[0.65rem] text-stone">
                {lead.category} · {t("{n} min read", { n: lead.readingMinutes })}
              </p>
              <Display size="md" className="mt-4">
                {lead.headline}
              </Display>
              <p className="mt-4 text-lede text-charcoal/80">{lead.excerpt}</p>
              <Link href={`/journal/${lead.slug}`} className="mt-6 font-medium after:absolute after:inset-0">
                {t("Read the story")} →
              </Link>
            </div>
          </Reveal>
          <div className="mt-14">
            <CardGrid cols={3}>
              {rest.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </CardGrid>
          </div>
        </Container>
      </Section>
    </>
  );
}
