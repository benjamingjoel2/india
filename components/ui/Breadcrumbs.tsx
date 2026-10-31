import Link from "@/components/ui/Link";
import { siteUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { getLocale, translator } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

export async function Breadcrumbs({ items, className }: { items: { label: string; href: string }[]; className?: string }) {
  const locale = await getLocale();
  const t = translator(locale);
  const all = [{ label: t("Home"), href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteUrl}${localizeHref(item.href, locale)}`,
    })),
  };
  return (
    <nav aria-label={t("Breadcrumb")} className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 opacity-80">
        {all.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="inline-block size-1 rotate-45 border border-current" />}
            {i === all.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="link-underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
