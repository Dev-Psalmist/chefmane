import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, children, center = false }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3", center && "justify-center")}>
        <span className="h-px w-10 bg-primary" />
        <span className="text-[11px] uppercase tracking-[0.34em] text-primary">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">{title}</h2>
      {children ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{children}</p>
      ) : null}
    </div>
  );
}