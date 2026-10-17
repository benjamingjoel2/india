import { cn } from "@/lib/utils";

/** Hairline column grid laid over full-bleed imagery: a quiet nod to the jaali lattice. */
export function GridLines({ className, columns = 6 }: { className?: string; columns?: number }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="page-x mx-auto flex h-full max-w-page">
        {Array.from({ length: columns }).map((_, i) => (
          <span key={i} className={cn("h-full flex-1 border-l border-current", i === columns - 1 && "border-r")} />
        ))}
      </div>
    </div>
  );
}
