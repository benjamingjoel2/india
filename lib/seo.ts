import type { Metadata } from "next";
import { images, type ImageKey } from "@/data/images";
import { defaultLocale, locales, localizeHref, ogLocales, type Locale } from "@/lib/i18n/config";
import { getLocale, translateString } from "@/lib/i18n/server";

export function ogImage(key: ImageKey, locale: Locale = defaultLocale) {
  return { url: `${images[key].src}&w=1200&h=630`, width: 1200, height: 630, alt: translateString(locale, images[key].alt) };
}

/** Canonical plus hreflang alternates (en, fr, de, es, x-default → English) for an unprefixed path. */
export function alternates(path: string, locale: Locale): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localizeHref(path, l);
  languages["x-default"] = localizeHref(path, defaultLocale);
  return { canonical: localizeHref(path, locale), languages };
}

/** Standard page metadata: title, description, canonical, hreflang and social cards. `path` is the English (unprefixed) path. */
export async function pageMeta({ title, description, path, image }: { title: string; description: string; path: string; image?: ImageKey }): Promise<Metadata> {
  const locale = await getLocale();
  const url = localizeHref(path, locale);
  return {
    title,
    description,
    alternates: alternates(path, locale),
    openGraph: { title, description, url, locale: ogLocales[locale], ...(image ? { images: [ogImage(image, locale)] } : {}) },
    twitter: { card: "summary_large_image", title, description, ...(image ? { images: [ogImage(image, locale).url] } : {}) },
  };
}

/** Puts the last word of a phrase in italics for <Display>: "Journeys in Kerala" → "Journeys in *Kerala*". */
export function emphLast(s: string) {
  const parts = s.trim().split(" ");
  const last = parts.pop()!;
  const m = last.match(/^(.*?)([.,!?]*)$/)!;
  return `${parts.join(" ")} *${m[1]}*${m[2]}`;
}
