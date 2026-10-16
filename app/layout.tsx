import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { brand, contact, siteUrl } from "@/config/site";
import { CurrencyProvider } from "@/lib/currency";
import { PlannerProvider } from "@/components/planner/PlannerProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} · Tailor-made India journeys`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  openGraph: {
    type: "website",
    siteName: brand.name,
    locale: "en_GB",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: brand.name }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#141B33",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: brand.name,
  description: brand.description,
  slogan: brand.tagline,
  url: siteUrl,
  email: contact.email,
  telephone: contact.phone,
  areaServed: "India",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <MotionConfig reducedMotion="user">
          <CurrencyProvider>
            <PlannerProvider>
              <Header />
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
            </PlannerProvider>
          </CurrencyProvider>
        </MotionConfig>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
