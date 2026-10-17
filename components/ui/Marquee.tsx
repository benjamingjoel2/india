import { cn } from "@/lib/utils";

/** Slow ticker band. Content is duplicated for a seamless loop; the copy is hidden from screen readers. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-8 pr-8 whitespace-nowrap">
          {item}
          <span aria-hidden className="inline-block size-1.5 rotate-45 bg-marigold" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
