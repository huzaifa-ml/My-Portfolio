import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading label="Testimonials" title="What it's like to work together" />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <figure className="surface-card flex h-full flex-col p-6">
              <Quote className="h-5 w-5 text-gold/60" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
