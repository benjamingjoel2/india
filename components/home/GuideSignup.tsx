import { SmartImage } from "@/components/ui/SmartImage";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { getT } from "@/lib/i18n/server";

export async function GuideSignup() {
  const t = await getT();
  return (
    <Section labelledBy="guide-title">
      <Container>
        <div className="jaali-frame grid overflow-hidden text-charcoal lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-[32rem]">
            <SmartImage image="spice-bowls" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <Reveal className="flex flex-col justify-center p-8 md:p-14 lg:p-20">
            <Eyebrow className="mb-5 text-stone">{t("Free guide")}</Eyebrow>
            <Display id="guide-title" size="md">{t("The India Journey *Guide*.")}</Display>
            <p className="mt-5 max-w-md text-charcoal/80">
              {t("Forty pages of the things we tell friends: when to go where, how long you really need, what to pack for temples and tiger forests, and the festival calendar for the year ahead.")}
            </p>
            <NewsletterForm
              source="india-journey-guide"
              tone="light"
              cta={t("Send me the guide")}
              successTitle={t("It's on its way.")}
              successText={t("Check your inbox for The India Journey Guide. If it hasn't arrived in ten minutes, peek in your spam folder.")}
              className="mt-8 max-w-md"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
