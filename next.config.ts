import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      // English lives at the unprefixed URLs; /en/... is never linked, but send it home if typed.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path((?!opengraph-image).*)", destination: "/:path", permanent: true },
      // Team, guide and testimonial pages were removed; old links go to About.
      { source: "/our-guides", destination: "/about", permanent: true },
      { source: "/testimonials", destination: "/about", permanent: true },
      { source: "/:locale(fr|de|es)/our-guides", destination: "/:locale/about", permanent: true },
      { source: "/:locale(fr|de|es)/testimonials", destination: "/:locale/about", permanent: true },
      // Website terms were folded into the booking terms.
      { source: "/legal/terms", destination: "/legal/booking-conditions", permanent: true },
      { source: "/:locale(fr|de|es)/legal/terms", destination: "/:locale/legal/booking-conditions", permanent: true },
    ];
  },
  async rewrites() {
    // Every page is pre-rendered under app/[locale]. French, German and Spanish keep their
    // /fr, /de, /es prefix in the URL; English is served from the unprefixed URL.
    return {
      beforeFiles: [],
      afterFiles: [
        { source: "/", destination: "/en" },
        { source: "/:path((?!(?:en|fr|de|es)(?:/|$)|_next/|api/).+)", destination: "/en/:path" },
      ],
      fallback: [],
    };
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
