import { ImageResponse } from "next/og";
import { brand } from "@/config/site";
import { isLocale, locales } from "@/lib/i18n/config";
import { translator } from "@/lib/i18n/server";

export const alt = brand.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translator(isLocale(locale) ? locale : "en");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#141B33", color: "#F7F1E6", padding: 80 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 40 }}>
          <svg width="44" height="56" viewBox="0 0 32 40" fill="none" stroke="#E39B2D" strokeWidth="1.4">
            <path d="M2 39V16C2 8 8.5 2 16 2s14 6 14 14v23z" />
            <path d="M16 12 L19 18 L25 21 L19 24 L16 30 L13 24 L7 21 L13 18 Z" />
          </svg>
          {brand.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>{t(brand.tagline)}</div>
          <div style={{ fontSize: 30, marginTop: 24, color: "#E39B2D" }}>{t(brand.promise)}</div>
        </div>
      </div>
    ),
    size,
  );
}
