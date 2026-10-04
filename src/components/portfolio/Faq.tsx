import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQS } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, Section, SectionLabel } from "./primitives";

export function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (n: string) => setOpen(prev => (prev === n ? null : n));

  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-16">
        <Reveal className="max-w-md lg:sticky lg:top-24 lg:self-start">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Common questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Anything else, reach out directly — happy to talk through your specific setup.
          </p>
        </Reveal>

        <div className="flex flex-col gap-3">


        {FAQS.map((f, i) => {
          const isOpen = open === f.number;
          const panelId = `faq-panel-${f.number}`;
          const buttonId = `faq-button-${f.number}`;
          return (
            <Reveal key={f.number} delay={Math.min(i, 5) * 60}>
              <div
                className={cn(
                  "surface-card overflow-hidden transition-all duration-300",
                  isOpen && "border-gold/40 shadow-[0_0_40px_-20px_var(--gold)]",
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(f.number)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-6 sm:py-5"
                  >
                    <span className="text-[0.7rem] font-medium tracking-[0.18em] text-gold/70">
                      {f.number}
                    </span>
                    <span
                      className={cn(
                        "flex-1 text-sm font-medium transition-colors sm:text-base",
                        isOpen ? "text-gold" : "text-foreground",
                      )}
                    >
                      {f.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                        isOpen
                          ? "border-gold/50 text-gold"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pr-12 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
        </div>
      </div>
    </Section>

  );
}
