import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Comp>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.83rem] font-medium uppercase tracking-[0.28em] text-gold">
      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function TechPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-[var(--surface-tag)] px-3 py-1 text-xs font-medium text-[#D8D3C9] transition-colors hover:border-gold/40 hover:text-foreground">
      {children}
    </span>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-20 px-7 py-9 sm:px-10 md:py-14", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
