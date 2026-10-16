import { company, contact } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PlanButton } from "@/components/planner/PlanButton";
import { WhatsAppIcon } from "@/components/layout/WhatsAppButton";
import { ContactForm } from "@/components/sections/ContactForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact a specialist",
  description: "Talk to an India specialist by WhatsApp, phone or email. We reply in as little as 15 minutes and support you 24/7 on WhatsApp while you travel.",
  path: "/contact",
  image: "kerala-canoe",
});

export default function ContactPage() {
  const ways = [
    { label: "WhatsApp", value: contact.whatsappNumber, href: contact.whatsappHref, note: "Fastest. 24/7 while you travel." },
    { label: "Telephone", value: contact.phone, href: contact.phoneHref, note: contact.hours },
    { label: "Email", value: contact.email, href: contact.emailHref, note: "For longer questions and documents." },
  ];
  return (
    <>
      <PageHero
        title="Let's *talk* India."
        eyebrow="Contact"
        intro={`${contact.replyPromise}. Real people, who have been where you're going.`}
        image="kerala-canoe"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <ul className="divide-y divide-charcoal/15 border-y border-charcoal/15">
                {ways.map((w) => (
                  <li key={w.label} className="py-6">
                    <p className="eyebrow text-[0.62rem] text-stone">{w.label}</p>
                    <a href={w.href} className="mt-1 inline-flex items-center gap-2 font-display text-display-xs underline decoration-marigold underline-offset-4" {...(w.label === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {w.label === "WhatsApp" && <WhatsAppIcon className="size-5" />}
                      {w.value}
                    </a>
                    <p className="mt-1 text-sm text-stone">{w.note}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-sm text-charcoal/75">
                <p className="eyebrow mb-2 text-[0.62rem] text-stone">Office</p>
                <p>{company.legalName}</p>
                <p>{contact.address}</p>
              </div>
              <div className="mt-10 bg-ivory-deep p-8">
                <p className="font-display text-display-xs">Ready to start planning?</p>
                <p className="mt-2 text-sm text-charcoal/75">Our five-step planner takes about three minutes.</p>
                <PlanButton className="mt-5" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <h2 className="font-display text-display-sm">Send us a message</h2>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
