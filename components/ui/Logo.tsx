import Link from "next/link";
import { brand } from "@/config/site";
import { cn } from "@/lib/utils";
import { JaaliMark } from "./Jaali";

/** Text-based logo placeholder with the jaali mark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${brand.name}, home`}>
      <JaaliMark className={cn("text-marigold transition-all duration-700 ease-musafir", compact ? "h-7 w-6" : "h-9 w-7")} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display tracking-tight transition-all duration-700 ease-musafir", compact ? "text-[1.35rem]" : "text-[1.6rem]")}>
          {brand.logo.primary}
        </span>
        <span className="eyebrow mt-1 text-[0.58rem]! tracking-[0.42em]!">{brand.logo.secondary}</span>
      </span>
    </Link>
  );
}
