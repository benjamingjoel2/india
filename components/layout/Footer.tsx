import Link from "next/link";
import { brand, company, contact, navigation } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { BlockPrintBand } from "@/components/ui/Jaali";
import { GridLines } from "@/components/ui/GridLines";
import { NewsletterForm } from "./NewsletterForm";
import { WhatsAppIcon } from "./WhatsAppButton";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-indigo-deep text-ivory">
      <BlockPrintBand className="text-marigold/70" />
      <GridLines className="text-ivory/[0.05]" />
      <div className="page-x relative mx-auto max-w-page pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="text-ivory" />
            <p className="mt-6 max-w-sm leading-relaxed text-ivory/75">{brand.description}</p>
            <p className="mt-4 max-w-sm font-display text-lg italic text-ivory/90">{brand.tagline}</p>
            <ul className="mt-8 space-y-3 text-[0.95rem]">
              <li>
                <span className="eyebrow mr-3 text-ivory/70">Call</span>
                <a href={contact.phoneHref} className="link-underline">{contact.phone}</a>
              </li>
              <li>
                <span className="eyebrow mr-3 text-ivory/70">WhatsApp</span>
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5">
                  <WhatsAppIcon className="size-4" /> {contact.whatsappNumber}
                </a>
              </li>
              <li>
                <span className="eyebrow mr-3 text-ivory/70">Email</span>
                <a href={contact.emailHref} className="link-underline">{contact.email}</a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(navigation.footer).map(([title, links]) => (
              <div key={title}>
                <h2 className="eyebrow mb-5 font-sans text-ivory/70">{title}</h2>
                <ul className="space-y-2.5 text-[0.95rem] text-ivory/85">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="link-underline">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="eyebrow mb-5 font-sans text-ivory/70">Connect</h2>
              <ul className="space-y-2.5 text-[0.95rem] text-ivory/85">
                {contact.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="link-underline">{s.label}</a>
                  </li>
                ))}
                <li>
                  <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-underline">WhatsApp</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-display-xs">Letters from <em className="display-em">India</em></h2>
            <p className="mt-3 mb-6 text-ivory/75">Seasonal notes, new journeys and the odd recipe, a few times a year.</p>
            <NewsletterForm source="footer" />
          </div>
        </div>

        <p aria-hidden className="mt-24 -mb-[0.18em] select-none font-display text-[clamp(4rem,35vw,33.5rem)] leading-[0.8] font-[300] tracking-[-0.04em] text-ivory/90">
          {brand.logo.primary}
          <em className="display-em text-marigold">.</em>
        </p>

        <div className="mt-12 flex flex-col gap-6 border-t border-ivory/15 pt-8 text-[0.8rem] text-ivory/60 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p>
              © {year} {company.legalName}. Trading as {brand.name}.
            </p>
            <p>
              Company registration {company.registrationNumber} · GST {company.gstNumber}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
