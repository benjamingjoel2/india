import { cn } from "@/lib/utils";
import { JaaliMark } from "./Jaali";

/** Designed stand-in for team and guide portraits until real photos are supplied. */
export function PortraitPlaceholder({
  name,
  className,
  tone = "indigo",
}: {
  name: string;
  className?: string;
  tone?: "indigo" | "sandstone" | "peacock" | "teak";
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  const tones = {
    indigo: "bg-indigo text-ivory",
    sandstone: "bg-sandstone text-charcoal",
    peacock: "bg-peacock text-ivory",
    teak: "bg-teak text-ivory",
  };
  return (
    <div
      role="img"
      aria-label={`Portrait placeholder for ${name}`}
      className={cn("relative flex items-center justify-center overflow-hidden", tones[tone], className)}
    >
      <div aria-hidden className="jaali-fill absolute inset-0 opacity-15" />
      <div className="relative flex flex-col items-center gap-3">
        <JaaliMark className="h-12 w-10 opacity-70" />
        <span className="font-display text-4xl italic">{initials}</span>
        <span className="eyebrow text-[0.6rem] opacity-70">Portrait placeholder</span>
      </div>
    </div>
  );
}
