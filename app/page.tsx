import type { Metadata } from "next";
import { brand, contact } from "@/config/site";
import { allDestinations, journeys, regions } from "@/data";
import { Hero } from "@/components/home/Hero";
import { ValueStrip } from "@/components/home/ValueStrip";
import { RegionMosaic } from "@/components/home/RegionMosaic";
import { FeaturedJourneys } from "@/components/home/FeaturedJourneys";
import { WhenToGo } from "@/components/home/WhenToGo";
import { ExperiencesCarousel } from "@/components/home/ExperiencesCarousel";
import { FestivalsFeature } from "@/components/home/FestivalsFeature";
import { StaysFeature } from "@/components/home/StaysFeature";
import { SpecialistFeature } from "@/components/home/SpecialistFeature";
import { Testimonials } from "@/components/home/Testimonials";
import { GuideSignup } from "@/components/home/GuideSignup";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} · Tailor-made India journeys` },
  description: `${brand.promise} Tailor-made journeys across Rajasthan, Kerala, the Himalaya and India's tiger forests, with one dedicated specialist.`,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        stats={[
          `${regions.length} regions`,
          `${allDestinations.length} destinations`,
          `${journeys.length} journeys to start from`,
          "One specialist, start to finish",
          "Guides who grew up where you're going",
          contact.replyPromise,
          "24/7 WhatsApp while you travel",
        ]}
      />
      <ValueStrip />
      <RegionMosaic />
      <FeaturedJourneys />
      <WhenToGo />
      <ExperiencesCarousel />
      <FestivalsFeature />
      <StaysFeature />
      <SpecialistFeature />
      <Testimonials />
      <GuideSignup />
      <FinalCTA />
    </>
  );
}
