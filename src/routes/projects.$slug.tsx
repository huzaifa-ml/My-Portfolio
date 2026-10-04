import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal, SectionLabel, TechPill } from "@/components/portfolio/primitives";
import { Lightbox } from "@/components/portfolio/Lightbox";

/**
 * Resolve an imported image value to a string URL.
 * Handles the various shapes Vite may emit:
 *   - a plain string URL
 *   - an ES module object with a `default` export containing the URL
 *   - a legacy object with a `src` property
 * If none of these are present we log an error and return an empty string.
 */
function resolveImageSrc(src: any): string { if (src instanceof URL) return src.href;
  if (typeof src === "string") return src;
  if (src && typeof src === "object") {
    if ("default" in src) return (src as any).default ?? "";
    if ("src" in src) return (src as any).src ?? "";
  }
  console.error("Unable to resolve image source", src);
  return "";
}

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = PROJECTS.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    return {
      project: PROJECTS[index]!,
      prev: PROJECTS[index - 1] ?? null,
      next: PROJECTS[index + 1] ?? null,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.project.title} — Muhammad Huzaifa`;
    const description = loaderData.project.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, prev, next } = Route.useLoaderData();
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);
  const [zoom, setZoom] = useState<{ src: string; caption: string } | null>(null);

  const shots = project.gallery;

  return (
    <main className={`ambient-gold relative min-h-screen overflow-x-hidden px-5 pb-40 pt-16 sm:px-8 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-opacity transition-transform duration-500 ease-out`}>
      <div className="mx-auto w-full max-w-5xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        {/* Header */}
        <Reveal className="mt-8">
          <SectionLabel>Project {project.number}</SectionLabel>
          <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gold/90 sm:text-base">{project.positioning}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechPill key={t}>{t}</TechPill>
            ))}
          </div>
        </Reveal>

        {/* Compact, illustrative process figures */}
        <Reveal delay={60} className="mt-10">
          <div className="surface-card grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground">Process snapshot</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Illustrative view of how this system is structured — workflow characteristics, not
                measured client results.
              </p>
              <dl className="mt-5 grid grid-cols-3 gap-3">
                {project.figures.map((f) => (
                  <div key={f.label} className="rounded-lg border border-border/70 bg-card/40 p-3">
                    <dt className="sr-only">{f.label}</dt>
                    <dd className="font-display text-base font-bold leading-tight text-gold">{f.value}</dd>
                    <p className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">{f.label}</p>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.24em] text-gold/80">
                Automation coverage by stage
              </p>
              <ul className="mt-4 grid gap-3">
                {project.howItWorks.slice(0, 4).map((s, i) => (
                  <li key={s} className="grid grid-cols-[1.6rem_1fr] items-center gap-3">
                    <span className="font-mono text-[0.65rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/70">
                        <div className="h-full rounded-full bg-gold/70" style={{ width: `${55 + i * 15}%` }} />
                      </div>
                      <p className="mt-1.5 line-clamp-1 text-[0.7rem] text-muted-foreground">{s}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[0.6rem] text-muted-foreground/70">
                Bars indicate how far each stage runs without manual input — illustrative, not
                measured.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Layout A — first screenshot beside the overview */}
        {shots[0] ? (
          <Reveal delay={80} className="mt-14">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <ShotFrame shot={shots[0]} onZoom={setZoom} title={project.title} />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">Overview</h2>
                {project.overview.map((o) => (
                  <p key={o} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {o}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        {/* Challenge / Solution */}
        <Reveal delay={100} className="mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-foreground">The challenge</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
            </div>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-foreground">The solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </div>
          </div>
        </Reveal>

        {/* How it works — process flow */}
        <Reveal delay={120} className="mt-14">
          <h2 className="font-display text-xl font-bold text-foreground">How it works</h2>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-gold/80">
            {['Input', 'AI / Logic', 'Automation', 'Output'].map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                <span className="rounded-full border border-gold/30 px-3 py-1">{s}</span>
                {i < 3 && <span className="text-gold/40">→</span>}
              </span>
            ))}
          </div>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.howItWorks.map((s, i) => (
              <li key={s} className="flex items-start gap-3 rounded-lg border border-border/70 bg-card/40 p-4 text-sm text-muted-foreground">
                <span className="mt-0.5 shrink-0 font-mono text-[0.65rem] text-gold">{String(i + 1).padStart(2, '0')}</span>
                {s}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Layout B — second screenshot after the text, architecture side */}
        {shots[1] ? (
          <Reveal delay={140} className="mt-14">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="md:order-2">
                <h2 className="font-display text-xl font-bold text-foreground">Automation &amp; architecture</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {shots[1].caption}. Each component is wired so data passes forward in a predictable shape, with the AI layer making the decisions and the automation layer carrying out the actions.
                </p>
                <ul className="mt-5 grid gap-2">
                  {project.capabilities.slice(0, 5).map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:order-1">
                <ShotFrame shot={shots[1]} onZoom={setZoom} title={project.title} />
              </div>
            </div>
          </Reveal>
        ) : null}

        {/* Layout D — remaining screenshots, compact supporting evidence */}
        {shots.length > 2 ? (
          <Reveal delay={160} className="mt-14">
            <h2 className="font-display text-xl font-bold text-foreground">More from this system</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {shots.slice(2).map((g) => (
                <ShotFrame key={g.src} shot={g} onZoom={setZoom} title={project.title} compact />
              ))}
            </div>
          </Reveal>
        ) : null}

        {/* What it automates */}
        <Reveal delay={180} className="mt-14">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">What it automates</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.automates.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Role + Benefits */}
        <Reveal delay={200} className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-foreground">My role</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.role}</p>
            </div>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-foreground">Benefits</h2>
              <ul className="mt-4 grid gap-2">
                {project.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={220} className="mt-14">
          <div className="surface-card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Have a process worth automating?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                These are examples of systems I've designed — the approach adapts to most business workflows.
              </p>
            </div>
            <Link
              to="/"
              hash="contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold/10"
            >
              Let's build it
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <nav
          aria-label="Project navigation"
          className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {prev ? (
            <Link
              to="/projects/$slug"
              params={{ slug: prev.slug }}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
              <span className="truncate">Previous: {prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold sm:text-right"
            >
              <span className="truncate">Next: {next.title}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      {zoom && createPortal(<Lightbox src={zoom.src} caption={zoom.caption} onClose={() => setZoom(null)} />, document.body)}
    </main>
  );
}

/**
 * ShotFrame component – renders a workflow screenshot.
 * `compact` removes the outer width wrapper for tighter grid layout.
 */
function ShotFrame({
  shot,
  onZoom,
  title,
  compact = false,
}: {
  shot: { src: string; caption: string };
  onZoom: (v: { src: string; caption: string }) => void;
  title: string;
  compact?: boolean;
}) {
  const imgSrc = resolveImageSrc(shot.src);
  const handleClick = () => {
    if (imgSrc) {
      onZoom({ src: imgSrc, caption: shot.caption });
    } else {
      console.error('ShotFrame: image source is empty, cannot open Lightbox');
    }
  };

  return (
    <figure className={compact ? '' : 'mx-auto w-full max-w-md'}>
      <div
        className="block w-full overflow-hidden rounded-xl border border-border bg-background/40 p-2"
        aria-label={`Project screenshot: ${shot.caption}`}
      >
        <img
          src={imgSrc}
          alt={shot.caption}
          loading="lazy"
          className="h-auto w-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleClick}
        />
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">{shot.caption}</figcaption>
    </figure>
  );
}

