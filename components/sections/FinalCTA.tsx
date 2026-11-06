import Link from "@/components/ui/Link";
import { contact } from "@/config/site";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import type { ImageKey } from "@/data/images";
import { SmartImage } from "@/components/ui/SmartImage";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { PlanButton } from "@/components/planner/PlanButton";

/**
 * The enquiry panel that opens the footer: one coloured panel, left-aligned,
 * with the page's photo beside it. Sits on the footer's ground so the two read as one block.
 */
export async function FinalCTA({
  image = "udaipur-palace",
  title,
  text,
}: {
  image?: ImageKey;
  title?: string;
  text?: string;
}) {
  const [{ brand }, t] = await Promise.all([getContent(), getT()]);
  return (
    <section aria-labelledby="cta-title" className="bg-indigo-deep pt-16 md:pt-20">
      <Reveal className="page-x mx-auto max-w-page">
        <div className="grid overflow-hidden rounded-sm bg-marigold text-charcoal md:grid-cols-12">
          <div className="p-8 sm:p-10 md:col-span-7 md:p-14">
            <Display id="cta-title" size="md" className="max-w-xl">
              {title ?? brand.taglineDisplay}
            </Display>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-charcoal/85">
              {text ?? t("Tell us a little about the trip you're imagining. Your specialist will reply personally, often within the hour.")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PlanButton variant="primary" />
              <Link href={contact.emailHref} className="link-underline text-[0.95rem] font-medium">
                {t("Email us")}
              </Link>
            </div>
          </div>
          <div className="relative min-h-56 md:col-span-5 md:min-h-0">
            <SmartImage image={image} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
