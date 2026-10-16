import { cn } from "@/lib/utils";
import { Display } from "./Display";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("page-x mx-auto w-full max-w-page", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
  tone = "ivory",
  labelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "deep" | "indigo" | "none";
  labelledBy?: string;
}) {
  const tones = {
    ivory: "bg-ivory",
    deep: "bg-ivory-deep",
    indigo: "bg-indigo text-ivory",
    none: "",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-20 md:py-32", tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-6 md:mb-16",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow && <Eyebrow className={cn("mb-5 opacity-80", align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
        <Display id={id} size="lg">
          {title}
        </Display>
        {intro && <p className="mt-6 max-w-2xl text-lede opacity-80">{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
