"use client";

import NextLink from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { localizeHref } from "@/lib/i18n/config";

/** next/link that keeps the visitor in their language: "/journeys" becomes "/fr/journeys" on French pages. */
export default function Link({ href, ...rest }: React.ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const to = typeof href === "string" ? localizeHref(href, locale) : href;
  return <NextLink href={to} {...rest} />;
}
