import { brand, contact } from "@/config/site";
import type { ImageKey } from "@/data/images";
import { SmartImage } from "@/components/ui/SmartImage";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PlanButton } from "@/components/planner/PlanButton";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";

export function FinalCTA({
  image = "udaipur-palace",
  title = brand.taglineDisplay,
  text = "Tell us a little about the trip you're imagining. Your specialist will reply personally, often within the hour.",
}: {
  image?: ImageKey;
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-indigo-deep text-ivory">
      <SmartImage image={image} sizes="100vw" className="opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-indigo-deep/50 to-indigo-deep/30" />
      <Reveal className="page-x relative mx-auto flex max-w-page flex-col items-center py-20 text-center md:py-28">
        <Display id="cta-title" size="xl" className="max-w-5xl">
          {title}
        </Display>
        <p className="mt-8 max-w-xl text-lede text-ivory/85">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PlanButton variant="accent" />
          <ButtonLink href={contact.whatsappHref} variant="light">
            <WhatsAppIcon className="size-4" /> Chat on WhatsApp
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
