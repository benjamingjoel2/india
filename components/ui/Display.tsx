import { Fragment, type ElementType } from "react";
import { cn } from "@/lib/utils";

type Size = "xl" | "lg" | "md" | "sm" | "xs";

const sizes: Record<Size, string> = {
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
  sm: "text-display-sm",
  xs: "text-display-xs",
};

/**
 * Serif display heading. Wrap ONE word in asterisks to set it in italic:
 * <Display>Where to *wander*.</Display>
 */
export function Display({
  children,
  as: Tag = "h2",
  size = "md",
  className,
  id,
}: {
  children: string;
  as?: ElementType;
  size?: Size;
  className?: string;
  id?: string;
}) {
  const parts = children.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <Tag id={id} className={cn("font-display font-[350]", sizes[size], className)}>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="display-em">
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </Tag>
  );
}

/** Plain-text version for metadata and aria labels. */
export function stripEmphasis(s: string) {
  return s.replace(/\*/g, "");
}
