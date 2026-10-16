import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light" | "accent";

const variants: Record<Variant, string> = {
  primary: "bg-indigo text-ivory hover:bg-indigo-deep",
  secondary: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "text-charcoal underline-offset-8 hover:underline px-0!",
  light: "border border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal",
  accent: "bg-marigold text-charcoal hover:bg-[#d48b1e]",
};

export const buttonClass = (variant: Variant = "primary", className?: string) =>
  cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium tracking-wide transition-colors duration-500 ease-musafir disabled:opacity-50",
    variants[variant],
    className,
  );

export function ButtonLink({
  href,
  variant,
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Link> & { variant?: Variant }) {
  const external = typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    const { prefetch: _prefetch, replace: _replace, scroll: _scroll, ...anchorProps } = rest as Record<string, unknown>;
    void _prefetch; void _replace; void _scroll;
    return (
      <a href={href as string} className={buttonClass(variant, className)} target="_blank" rel="noopener noreferrer" {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={buttonClass(variant, className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 10" className={cn("h-2.5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M0 5h18M14 1l4 4-4 4" />
    </svg>
  );
}
