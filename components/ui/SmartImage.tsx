"use client";

import Image from "next/image";
import { useT } from "@/components/i18n/LocaleProvider";
import { getImage, type ImageKey } from "@/data/images";
import { cn } from "@/lib/utils";

/**
 * next/image from the image library. `fill` by default: the parent sets the size.
 * Add `zoom` inside a `group` to get the soft hover zoom used on cards.
 */
export function SmartImage({
  image,
  sizes = "100vw",
  priority,
  className,
  zoom,
  alt,
}: {
  image: ImageKey;
  sizes?: string;
  priority?: boolean;
  className?: string;
  zoom?: boolean;
  alt?: string;
}) {
  const t = useT();
  const img = getImage(image);
  return (
    <Image
      src={img.src}
      alt={alt ?? t(img.alt)}
      fill
      sizes={sizes}
      preload={priority}
      fetchPriority={priority ? "high" : undefined}
      className={cn(
        "object-cover",
        zoom && "transition-transform duration-[1400ms] ease-musafir will-change-transform group-hover:scale-[1.06] motion-reduce:group-hover:scale-100",
        className,
      )}
    />
  );
}
