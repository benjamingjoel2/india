import Link from "next/link";
import type { Experience } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";

export function ExperienceCard({ experience, sizes = "(min-width: 1024px) 25vw, 80vw" }: { experience: Experience; sizes?: string }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory-deep">
        <SmartImage image={experience.image} sizes={sizes} zoom />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/80 via-indigo-deep/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
          <p className="eyebrow text-[0.65rem] opacity-80">{experience.where}</p>
          <h3 className="mt-2 font-display text-display-xs">
            <Link href={`/experiences/${experience.slug}`} className="after:absolute after:inset-0">
              {experience.title}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 max-h-0 text-sm opacity-0 transition-all duration-700 ease-musafir group-hover:max-h-12 group-hover:opacity-90 group-focus-within:max-h-12 group-focus-within:opacity-90">
            {experience.summary}
          </p>
        </div>
      </div>
    </article>
  );
}
