import type { Metadata } from "next";
import { images, type ImageKey } from "@/data/images";

export function ogImage(key: ImageKey) {
  return { url: `${images[key].src}&w=1200&h=630`, width: 1200, height: 630, alt: images[key].alt };
}

/** Standard page metadata: title, description, canonical and social cards. */
export function pageMeta({ title, description, path, image }: { title: string; description: string; path: string; image?: ImageKey }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, ...(image ? { images: [ogImage(image)] } : {}) },
    twitter: { card: "summary_large_image", title, description, ...(image ? { images: [ogImage(image).url] } : {}) },
  };
}

/** Puts the last word of a phrase in italics for <Display>: "Journeys in Kerala" → "Journeys in *Kerala*". */
export function emphLast(s: string) {
  const parts = s.trim().split(" ");
  const last = parts.pop()!;
  const m = last.match(/^(.*?)([.,!?]*)$/)!;
  return `${parts.join(" ")} *${m[1]}*${m[2]}`;
}
