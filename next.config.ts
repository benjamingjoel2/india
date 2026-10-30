import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      // Team, guide and testimonial pages were removed; old links go to About.
      { source: "/our-guides", destination: "/about", permanent: true },
      { source: "/testimonials", destination: "/about", permanent: true },
      // Website terms were folded into the booking terms.
      { source: "/legal/terms", destination: "/legal/booking-conditions", permanent: true },
    ];
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
