import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function CardGrid({ children, cols = 3, className }: { children: React.ReactNode[]; cols?: 2 | 3 | 4; className?: string }) {
  const c = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <ul className={cn("grid gap-x-6 gap-y-14", c, className)}>
      {children.map((child, i) => (
        <Reveal as="li" key={i} delay={(i % cols) * 0.08}>
          {child}
        </Reveal>
      ))}
    </ul>
  );
}
