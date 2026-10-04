import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";
import { Lightbox } from "./Lightbox";

export function ProjectPreviewPlaceholder({ label = "Project preview" }: { label?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-gold/25 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--gold)_9%,transparent),transparent_70%)]">
      <span className="text-[0.6rem] uppercase tracking-[0.26em] text-gold/60">{label}</span>
    </div>
  );
}

// Detect pointer device (used for hover interactions on desktop)
const isPointerDevice = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export function Projects() {
  const [active, setActive] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);

  // Normalise an imported image – Vite may give a plain string URL or an object with a `url` field.
  const getImageUrl = (src: any): string => {
    if (typeof src === "string") return src;
    if (src && typeof src === "object" && "url" in src) return (src as any).url;
    return "";
  };

  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Systems I've built"
        subtitle="A selection of AI systems and automation workflows I've designed to turn repetitive processes into intelligent, connected systems."
      />

      <div
        onMouseLeave={() => setActive(null)}
        className="relative mt-16 border-t border-l border-r border-border sm:mt-20 lg:border-l-0 lg:border-r-0"
      >
        {PROJECTS.map((p, i) => {
          const isActive = active === p.slug;
          const shot = p.gallery[0];
          // Resolve the thumbnail URL (handles string or asset object)
          const imageUrl = getImageUrl(shot?.src);

          return (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                onMouseEnter={() => {
                  if (isPointerDevice()) setActive(p.slug);
                }}
                onFocus={() => {
                  if (isPointerDevice()) setActive(p.slug);
                }}
                className={`group relative border-b border-border flex items-center justify-between gap-5 px-1 py-6 outline-none transition-[opacity,color] duration-500 sm:px-3 sm:py-8 ${
                  active && !isActive ? "opacity-40" : "opacity-100"
                }`}
              >
                <span className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-gold/60 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />

                <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                  <span className="shrink-0 font-mono text-[0.65rem] tracking-[0.2em] text-gold/70 sm:text-xs">
                    {p.number}
                  </span>
                  <h3 className="min-w-0 font-display text-xl font-bold uppercase leading-tight tracking-tight text-foreground transition-[color,transform] duration-500 ease-out group-hover:text-gold group-focus-visible:text-gold motion-safe:group-hover:translate-x-1.5 sm:text-3xl md:text-[2.4rem]">
                    {p.title}
                  </h3>
                </div>

                <ArrowRight
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-gold sm:h-5 sm:w-5"
                  aria-hidden="true"
                />

                {/* Desktop‑only preview, vertically centred inside this row */}
                <div className="absolute right-6 top-1/2 z-20 hidden w-[20rem] -translate-y-1/2 lg:block">
                  <div
                    className={`block rounded-xl border border-gold/25 bg-card/95 p-3 shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--gold)_45%,transparent)] backdrop-blur-sm transition-[opacity,transform] duration-300 ease-out ${
                      isActive
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "translate-y-1 scale-95 opacity-0"
                    }`}
                  >
                    {shot ? (
                      <div className="overflow-hidden rounded-lg border border-border/60 bg-card/70 p-2 sm:p-3">
                        <img
                          src={imageUrl}
                          alt={`${p.title} workflow`}
                          loading="lazy"
                          className="h-36 w-full object-contain p-1"
                        />
                      </div>
                    ) : (
                      <div className="h-36 w-full">
                        <ProjectPreviewPlaceholder />
                      </div>
                    )}
                    <p className="mt-3 truncate font-display text-sm font-bold uppercase tracking-wide text-foreground">
                      {p.title}
                    </p>
                    <p className="mt-1 truncate text-xs text-muted-foreground">
                      {p.previewTagline}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.previewTech.split(" · ").map((t) =>
                        t ? (
                          <span
                            key={t}
                            className="rounded-full border border-gold/25 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.14em] text-gold/80"
                          >
                            {t}
                          </span>
                        ) : null,
                      )}
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-[0.62rem] uppercase tracking-[0.22em] text-gold">
                      View details
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}

        <p className="mt-6 text-right text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground/70">
          Click on a project to see details
        </p>
      </div>
      {lightbox && (
        <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />
      )}
    </Section>
  );
}
