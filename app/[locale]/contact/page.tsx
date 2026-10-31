import type { Metadata } from "next";
import { company } from "@/config/site";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PlanButton } from "@/components/planner/PlanButton";
import { ContactForm } from "@/components/sections/ContactForm";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return pageMeta({
    title: t("Contact a specialist"),
    description: t("Talk to an India specialist by email or through the form. We reply in as little as 15 minutes."),
    path: "/contact",
    image: "kerala-canoe",
  });
}

export default async function ContactPage() {
  const [{ contact }, t] = await Promise.all([getContent(), getT()]);
  const ways = [
    { label: t("Email"), value: contact.email, href: contact.emailHref, note: t("For questions, plans and documents.") },
  ];
  return (
    <>
      <PageHero
        title={t("Let's *talk* India.")}
        eyebrow={t("Contact")}
        intro={`${contact.replyPromise}. ${t("Real people, who have been where you're going.")}`}
        image="kerala-canoe"
        breadcrumbs={[{ label: t("Contact"), href: "/contact" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <ul className="divide-y divide-charcoal/15 border-y border-charcoal/15">
                {ways.map((w) => (
                  <li key={w.label} className="py-6">
                    <p className="eyebrow text-[0.62rem] text-stone">{w.label}</p>
                    <a href={w.href} className="mt-1 inline-flex items-center gap-2 font-display text-display-xs underline decoration-marigold underline-offset-4">
                      {w.value}
                    </a>
                    <p className="mt-1 text-sm text-stone">{w.note}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-sm text-charcoal/75">
                <p className="eyebrow mb-2 text-[0.62rem] text-stone">{t("Office")}</p>
                <p>{company.legalName}</p>
                <p>{contact.address}</p>
              </div>
              <div className="mt-10 bg-ivory-deep p-8">
                <p className="font-display text-display-xs">{t("Ready to start planning?")}</p>
                <p className="mt-2 text-sm text-charcoal/75">{t("Our five-step planner takes about three minutes.")}</p>
                <PlanButton className="mt-5" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <h2 className="font-display text-display-sm">{t("Send us a message")}</h2>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
