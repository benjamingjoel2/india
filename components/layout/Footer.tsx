import Link from "@/components/ui/Link";
import { company } from "@/config/site";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { Logo } from "@/components/ui/Logo";

export async function Footer() {
  const [{ brand, contact, navigation }, t] = await Promise.all([getContent(), getT()]);
  const year = new Date().getFullYear();
  return (
    <footer className="bg-indigo-deep text-ivory">
      <div className="page-x mx-auto max-w-page pt-16 pb-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="text-ivory" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ivory/75">{brand.promise}</p>
            <p className="mt-6 text-[0.95rem]">
              <a href={contact.emailHref} className="link-underline">{contact.email}</a>
            </p>
            <address className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-ivory/70 not-italic">{contact.address}</address>
          </div>

          <nav aria-label={t("Footer")} className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {navigation.footer.map(({ title, links }) => (
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
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-[0.8rem] text-ivory/60 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {company.legalName}.
          </p>
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
