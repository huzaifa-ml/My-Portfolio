import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, Section, SectionHeading, TechPill } from "./primitives";

export function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0]!.id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0]!;

  return (
    <Section id="services" className="mt-20 md:mt-24 lg:mt-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <Reveal className="flex h-full flex-col">
          <SectionHeading
            label="Services"
            title="How I can help"
            subtitle="I offer a range of AI and automation services to help businesses eliminate repetitive work, connect their systems, and improve everyday operations."
          />

          <ul
            className="mt-12 flex flex-col sm:flex-1 space-y-7 sm:space-y-0 lg:mt-14"
            role="tablist"
            aria-label="Services"
          >
            {SERVICES.map((s) => {
              const isActive = s.id === activeId;
              return (
                <li key={s.id} className="flex flex-col sm:flex-1 mb-10 sm:mb-0 last:mb-10 sm:last:mb-0">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveId(s.id)}
                    onFocus={() => setActiveId(s.id)}
                    onClick={() => setActiveId(s.id)}
                    className={cn(
                      "group flex h-full w-full items-center gap-5 text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive ? "translate-x-1 " : "hover:translate-x-1 ",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-xs font-bold tabular-nums transition-all duration-300",
                        isActive ? "text-gold" : "text-muted-foreground/60",
                      )}
                    >
                      {s.number}
                    </span>
                    <span
                      className={cn(
                        "font-display text-lg font-bold uppercase tracking-tight transition-colors duration-300 sm:text-xl",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/50 group-hover:text-muted-foreground",
                      )}
                    >
                      {s.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "ml-auto h-[2px] shrink-0 rounded-full bg-gold transition-all duration-300",
                        isActive ? "w-8 opacity-100" : "w-0 opacity-0",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal className="h-full" delay={100}>
          <article
            key={active.id}
            className="surface-card animate-fade-in flex h-full flex-col p-5 shadow-[0_0_60px_-40px_var(--gold)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-display text-3xl font-bold text-gold/30">{active.number}</p>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
                Service {active.number}
              </span>
            </div>

            <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-gold">{active.summary}</p>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{active.detail}</p>

            <ul className="mt-4 space-y-2">
              {active.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                Next step
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: active.slug }}
                className="group mt-2 inline-flex items-center gap-2 font-display text-base font-bold text-foreground transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Details
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
