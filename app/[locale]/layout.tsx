import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "../globals.css";
import { siteUrl } from "@/config/site";
import { locales, ogLocales } from "@/lib/i18n/config";
import { clientMessages, getLocale, getT } from "@/lib/i18n/server";
import { getContent } from "@/lib/content";
import { alternates } from "@/lib/seo";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { CurrencyProvider } from "@/lib/currency";
import { PlannerProvider } from "@/components/planner/PlannerProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SideTab } from "@/components/planner/SideTab";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata(): Promise<Metadata> {
  const [{ brand, locale }, t] = await Promise.all([getContent(), getT()]);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${brand.name} · ${t("Tailor-made India journeys")}`,
      template: `%s · ${brand.name}`,
    },
    description: brand.description,
    applicationName: brand.name,
    openGraph: {
      type: "website",
      siteName: brand.name,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image" },
    alternates: alternates("/", locale),
  };
}

export const viewport: Viewport = {
  themeColor: "#141B33",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const { brand, contact, navigation } = await getContent();
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: brand.name,
    description: brand.description,
    slogan: brand.tagline,
    url: siteUrl,
    email: contact.email,
    address: { "@type": "PostalAddress", ...contact.postalAddress },
    areaServed: "India",
    inLanguage: locale,
  };
  return (
    <html lang={locale} className={`${fraunces.variable} ${instrument.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <LocaleProvider locale={locale} messages={clientMessages(locale)}>
        <MotionConfig reducedMotion="user">
          <CurrencyProvider>
            <PlannerProvider>
              <Header nav={navigation.main} />
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
              <SideTab />
              <SmoothScroll />
            </PlannerProvider>
          </CurrencyProvider>
        </MotionConfig>
        </LocaleProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
