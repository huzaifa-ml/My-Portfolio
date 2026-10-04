import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/data/portfolio";
import { Reveal, SectionLabel, TechPill } from "@/components/portfolio/primitives";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.service.title} — Muhammad Huzaifa`;
    const description = loaderData.service.summary;
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
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <main className={`ambient-gold relative min-h-screen overflow-x-hidden px-5 pb-40 pt-16 sm:px-8 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-opacity transition-transform duration-500 ease-out`}>
      <div className="mx-auto w-full max-w-5xl">
        <Link
          to="/"
          hash="services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to services
        </Link>

        <Reveal className="mt-8">
          <SectionLabel>Service {service.number}</SectionLabel>
          <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-gold">{service.positioning}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="surface-card p-6 sm:p-8">
            {service.overview.map((p) => (
              <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground first:mt-0">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal delay={120}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">What I build</h2>
              <ul className="mt-5 space-y-3">
                {service.builds.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">Key capabilities</h2>
              <ul className="mt-5 space-y-3">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-6">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">How it works</h2>
            <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((p, i) => (
                <li key={p.step}>
                  <p className="font-display text-xs font-bold tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-base font-bold text-foreground">{p.step}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={240} className="mt-6">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">Technologies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280} className="mt-6">
          <div className="surface-card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Have a process worth automating?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell me how the work flows today and I&apos;ll show you what can run on its own.
              </p>
            </div>
            <Link
              to="/"
              hash="contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-3 font-display text-sm font-bold text-primary-foreground shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--gold-soft)] hover:shadow-[var(--glow-gold-hover)]"
            >
              Work together
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>

    </main>
  );
}
