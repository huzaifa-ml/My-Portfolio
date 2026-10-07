import { Linkedin, Mail, MessageCircle } from "lucide-react";
import huzaifaAbout from "@/assets/huzaifa-about.jpg";
import { CONTACT, CORE_TECH, PRINCIPLES, SKILLS } from "@/data/portfolio";
import { Reveal, Section, SectionHeading, TechPill } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        label="About"
        title={null}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-6">
          <article className="surface-card h-full p-6 sm:p-8 shadow-none border-none">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Mobile layout: portrait with text beside it */}
              <div className="flex sm:hidden items-center mb-4 gap-4">
                <img
                  src={huzaifaAbout}
                  alt="Muhammad Huzaifa"
                  loading="lazy"
                  width={300}
                  height={300}
                  className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-full border-none object-cover object-top shadow-none"
                />
                <div className="flex flex-col">
                  <p className="font-display text-xl font-bold uppercase tracking-tight text-foreground sm:text-3xl whitespace-nowrap">
                    MUHAMMAD HUZAIFA
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-gold sm:text-lg">
                    Automation Architect &amp; Student
                  </h3>
                </div>
              </div>

              {/* Desktop portrait */}
              <div className="hidden sm:flex flex-shrink-0">
                <img
                  src={huzaifaAbout}
                  alt="Muhammad Huzaifa"
                  loading="lazy"
                  width={300}
                  height={300}
                  className="h-[5rem] w-[5rem] shrink-0 order-first rounded-full border-none object-cover object-top sm:h-[6.5rem] sm:w-[6.5rem] shadow-none"
                />
              </div>

              <div className="min-w-0">
                <div className="hidden sm:block">
                  <div className="flex flex-col"><p className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    Muhammad Huzaifa
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-gold sm:text-lg">
                    Automation Architect &amp; Student
                  </h3>
                </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                  I build AI automation systems that simplify complex business operations —
                  designing workflows where AI agents, APIs and data pipelines work together
                  instead of living in separate tools.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                  My focus is agentic AI, intelligent workflow automation and integrations. I am
                  currently studying Artificial Intelligence while building and shipping real
                  automation systems as an independent and freelance AI automation developer,
                  based in {CONTACT.location}.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120} className="md:col-span-3">
          <article className="surface-card h-full p-6">
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold">
              Approach
            </h3>
            <ul className="mt-5 space-y-5">
              {PRINCIPLES.map((p) => (
                <li key={p.title}>
                  <p className="text-sm font-semibold text-foreground">{p.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground/90">{p.body}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={160} className="md:col-span-3">
          <article className="surface-card flex h-full flex-col p-6">
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold">
              Technology stack
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {CORE_TECH.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-[var(--surface-tag)] px-3 py-1 text-xs font-semibold text-gold"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <TechPill key={s}>{s}</TechPill>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email Muhammad Huzaifa"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Muhammad Huzaifa"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
