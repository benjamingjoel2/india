/**
 * Locale settings shared by server and client code. English is the default and lives at the
 * unprefixed URLs (/journeys); French, German and Spanish live under /fr, /de and /es.
 * Translations are English-keyed dictionaries in /i18n/{fr,de,es}.json (see scripts/i18n.mjs).
 */
export const locales = ["en", "fr", "de", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (s: unknown): s is Locale => typeof s === "string" && (locales as readonly string[]).includes(s);

/** Selector labels and the language names they stand for. */
export const localeLabels: Record<Locale, string> = { en: "EN", fr: "FR", de: "DE", es: "ES" };
export const localeNames: Record<Locale, string> = { en: "English", fr: "Français", de: "Deutsch", es: "Español" };
export const ogLocales: Record<Locale, string> = { en: "en_GB", fr: "fr_FR", de: "de_DE", es: "es_ES" };
/** Locale used for dates and lists. */
export const intlLocales: Record<Locale, string> = { en: "en-GB", fr: "fr-FR", de: "de-DE", es: "es-ES" };

const prefixRe = new RegExp(`^/(${locales.join("|")})(?=/|$|\\?|#)`);

/** "/fr/journeys" → "/journeys"; "/en" → "/". Unprefixed paths are returned unchanged. */
export function stripLocale(path: string): string {
  const out = path.replace(prefixRe, "");
  return out === "" || out[0] !== "/" ? `/${out}` : out;
}

/** Points an internal href at the same page in `locale`. External, hash-only and API links are left alone. */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/api/") || href.startsWith("/_next/")) return href;
  const bare = stripLocale(href);
  if (locale === defaultLocale) return bare;
  return bare === "/" ? `/${locale}` : /^\/[?#]/.test(bare) ? `/${locale}${bare.slice(1)}` : `/${locale}${bare}`;
}

/** Fills {name} placeholders. */
export function interpolate(s: string, vars?: Record<string, string | number>): string {
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

export type Translate = (s: string, vars?: Record<string, string | number>) => string;

/** Marks module-level English copy for the string extractor; translate it where it renders with t(). */
export const msg = <S extends string>(s: S): S => s;
