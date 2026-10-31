/**
 * Server-side translation. Server Components call `await getT()` (the locale comes from the
 * root [locale] segment via next/root-params); content is localized with `localize()`.
 * Nothing here reaches the browser: client components get a filtered message map through
 * <LocaleProvider> (see clientMessages).
 */
import { locale as rootLocale } from "next/root-params";
import fr from "@/i18n/fr.json";
import de from "@/i18n/de.json";
import es from "@/i18n/es.json";
import clientKeys from "@/i18n/client-keys.json";
import { defaultLocale, interpolate, isLocale, type Locale, type Translate } from "./config";

const dictionaries: Record<Exclude<Locale, "en">, Record<string, string>> = { fr, de, es };

const norm = (s: string) => s.replace(/\s+/g, " ").trim();

export function dictionary(locale: Locale): Record<string, string> | null {
  return locale === "en" ? null : dictionaries[locale];
}

/** Looks up the translation of an English string. Unknown strings fall back to English. */
export function translateString(locale: Locale, s: string): string {
  const dict = dictionary(locale);
  if (!dict || !s) return s;
  return dict[s] ?? dict[norm(s)] ?? s;
}

export function translator(locale: Locale): Translate {
  return (s, vars) => interpolate(translateString(locale, s), vars);
}

export async function getLocale(): Promise<Locale> {
  const l = await rootLocale();
  return isLocale(l) ? l : defaultLocale;
}

export async function getT(): Promise<Translate> {
  return translator(await getLocale());
}

/** Keys that hold identifiers, not copy. Their values are never translated. */
const ID_KEYS = new Set([
  "slug", "key", "id", "image", "images", "gallery", "src", "href", "emailHref", "region", "regions", "route", "styles",
  "accent", "date", "staySlug", "bestMonths", "typicalMonths", "festivals", "relatedJourneys", "bestRegions", "type",
  "calendar", "category_", "code", "symbol", "locale", "hex", "ink", "poster", "mp4", "webm", "devanagari", "urdu",
  "pronunciation", "postalAddress", "email", "name_",
]);

/** Deep copy of `value` with every copy string translated into `locale`. */
export function localize<T>(value: T, locale: Locale, key = ""): T {
  if (locale === defaultLocale) return value;
  if (typeof value === "string") return (ID_KEYS.has(key) ? value : translateString(locale, value)) as T;
  if (Array.isArray(value)) return value.map((v) => localize(v, locale, key)) as T;
  if (value && typeof value === "object") {
    if (ID_KEYS.has(key)) return value;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = localize(v, locale, k);
    return out as T;
  }
  return value;
}

/** The translations client components need (strings passed to useT() plus image alt text). */
export function clientMessages(locale: Locale): Record<string, string> {
  const dict = dictionary(locale);
  if (!dict) return {};
  const out: Record<string, string> = {};
  for (const k of clientKeys as string[]) if (dict[k]) out[k] = dict[k];
  return out;
}
