import type { Person } from "@/data/types";
import { cn } from "@/lib/utils";
import { SmartImage } from "./SmartImage";
import { PortraitPlaceholder } from "./PortraitPlaceholder";

/**
 * Person portrait. Shows the person's photo when one is set (flagged as a stand-in
 * while profiles are placeholders), otherwise the designed jaali placeholder.
 */
export function Portrait({
  person,
  className,
  tone = "indigo",
  sizes = "(min-width:1024px) 30vw, 90vw",
  compact = false,
}: {
  person: Pick<Person, "name" | "image">;
  className?: string;
  tone?: "indigo" | "sandstone" | "peacock" | "teak";
  sizes?: string;
  /** Small avatar: no label. */
  compact?: boolean;
}) {
  if (!person.image) {
    return <PortraitPlaceholder name={person.name} tone={tone} className={cn(compact && "[&_span]:hidden [&_svg]:hidden", className)} />;
  }
  return (
    <div className={cn("group relative overflow-hidden bg-ivory-deep", className)}>
      <SmartImage image={person.image} sizes={sizes} zoom={!compact} />
      {!compact && (
        <span className="absolute bottom-3 left-3 rounded-full bg-indigo-deep/70 px-2.5 py-1 text-[0.62rem] tracking-[0.14em] text-ivory uppercase backdrop-blur">
          Stand-in photo
        </span>
      )}
    </div>
  );
}
