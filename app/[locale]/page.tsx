import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { alternates } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { ValueStrip } from "@/components/home/ValueStrip";
import { RegionMosaic } from "@/components/home/RegionMosaic";
import { FeaturedJourneys } from "@/components/home/FeaturedJourneys";
import { WhenToGo } from "@/components/home/WhenToGo";
import { ExperiencesCarousel } from "@/components/home/ExperiencesCarousel";
import { FestivalsFeature } from "@/components/home/FestivalsFeature";
import { StaysFeature } from "@/components/home/StaysFeature";
import { GuideSignup } from "@/components/home/GuideSignup";
import { FinalCTA } from "@/components/sections/FinalCTA";

export async function generateMetadata(): Promise<Metadata> {
  const [{ brand, locale }, t] = await Promise.all([getContent(), getT()]);
  return {
    title: { absolute: `${brand.name} · ${t("Tailor-made India journeys")}` },
    description: `${brand.promise} ${t("Tailor-made journeys across Rajasthan, Kerala, the Himalaya and India's tiger forests, with one dedicated specialist.")}`,
    alternates: alternates("/", locale),
  };
}

export default async function HomePage() {
  const [{ allDestinations, contact, journeys, regions }, t] = await Promise.all([getContent(), getT()]);
  return (
    <>
      <Hero
        stats={[
          t("{n} regions", { n: regions.length }),
          t("{n} destinations", { n: allDestinations.length }),
          t("{n} journeys to start from", { n: journeys.length }),
          t("One specialist, start to finish"),
          t("Guides who grew up where you're going"),
          contact.replyPromise,
        ]}
      />
      <ValueStrip />
      <RegionMosaic />
      <FeaturedJourneys />
      <WhenToGo />
      <ExperiencesCarousel />
      <FestivalsFeature />
      <StaysFeature />
      <GuideSignup />
      <FinalCTA />
    </>
  );
}
