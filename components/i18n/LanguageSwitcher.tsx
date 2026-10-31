"use client";

import { usePathname } from "next/navigation";
import { useLocale, useT } from "./LocaleProvider";
import { localeLabels, localeNames, locales, localizeHref, stripLocale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/** EN · FR · DE · ES. Each link opens the same page in that language; no automatic redirects. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const t = useT();
  const path = stripLocale(usePathname() || "/");
  return (
    <nav aria-label={t("Language")} className={cn("flex items-center text-[0.8rem] font-medium tracking-wider", className)}>
      <ul className="flex items-center">
        {locales.map((l, i) => (
          <li key={l} className="flex items-center">
            {i > 0 && (
              <span aria-hidden className="px-1 opacity-50">
                ·
              </span>
            )}
            <a
              href={localizeHref(path, l)}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? "true" : undefined}
              aria-label={localeNames[l]}
              className={cn(
                "inline-flex min-h-11 min-w-8 items-center justify-center rounded-sm px-1 transition-opacity duration-500",
                l === locale ? "underline decoration-marigold decoration-2 underline-offset-[6px]" : "opacity-70 hover:opacity-100",
              )}
            >
              {localeLabels[l]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
