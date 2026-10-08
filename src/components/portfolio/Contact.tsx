import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Linkedin,
  ArrowUpRight,
  Send,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react";
import { CONTACT, SERVICES } from "@/data/portfolio";
import { CONTACT_WEBHOOK } from "@/data/webhooks";

import { Reveal, Section, SectionHeading } from "./primitives";
const CHANNELS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappUrl,
    Icon: MessageCircle,
    external: true,
  },
  {
    label: "LinkedIn",
    value: CONTACT.linkedinDisplay,
    href: CONTACT.linkedin,
    Icon: Linkedin,
    external: true,
  },
];

type FormState = { name: string; email: string; industry?: string; topic: string; message: string };

const STEPS = [
  { key: "name", title: "What's your name?" },
  { key: "email", title: "Where can I reach you?" },
  { key: "industry", title: "Which industry best describes you?" },
  { key: "topic", title: "What do you want to build?" },
  { key: "message", title: "What are you looking to automate?" },
  { key: "review", title: "Ready to send?" },
] as const;

const field =
  "w-full rounded-lg border border-input bg-[var(--surface-input)] px-4 py-3 text-sm text-foreground placeholder:text-[var(--text-muted)]/80 transition-colors focus:border-[var(--gold)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/10";

export function Contact() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", industry: "", topic: "", message: "" });

  function set<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  }

  function validate(index: number): string | null {
    if (index === 0 && form.name.trim().length < 2) return "Please enter your name.";
    if (index === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return "Please enter a valid email.";
    if (index === 2 && !form.industry) return "Please select an industry.";
    if (index === 3 && !form.topic) return "Please select a service.";
    if (index === 4 && form.message.trim().length < 10)
      return "Tell me a little more (10+ characters).";
    return null;
  }

  function next() {
    const err = validate(step);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function send() {
  for (let i = 0; i < 5; i++) {
    const err = validate(i);
    if (err) {
      setStep(i);
      setError(err);
      return;
    }
  }
  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    industry: form.industry,
    topic: form.topic,
    message: form.message.trim(),
  };
  try {
    await fetch(CONTACT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSent(true);
  } catch (e) {
    console.error(e);
    setError("Failed to send message. Please try again.");
  }
}

  return (
    <Section id="contact" className="ambient-gold pb-10">
      <SectionHeading
        label="Contact"
        title="Let's build something intelligent."
        subtitle="Tell me about the process you want to automate — or the AI system you want to exist."
      />

      <div className="mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex flex-col gap-3">
            {CHANNELS.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="surface-card w-full box-border group flex items-center gap-4 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/35 bg-[var(--gold)]/10 text-[var(--gold)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-[var(--gold)]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-card w-full box-border p-6 sm:p-8">
            {!started ? (
              <div className="animate-in fade-in duration-500">
                <span className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Ready to automate?
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  Let's start building.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Tell me what you're building, what you're trying to automate, or where your
                  workflow gets stuck.
                </p>
                <button
                  type="button"
                  onClick={() => setStarted(true)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--gold-soft)] hover:shadow-[0_0_28px_rgba(244,185,60,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  Let's start
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            ) : sent ? (
              <div className="animate-in fade-in duration-500 py-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--gold)]/35 bg-[var(--gold)]/10 text-[var(--gold)]">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="mt-3 p-6 rounded-lg bg-[var(--surface-card)] border border-[var(--border)] text-foreground shadow-lg text-center">
                  <h3 className="text-3xl font-bold mb-3">Thanks for reaching out!</h3>
                  <p className="text-base leading-relaxed">Your message has been received successfully. I’ll review it and get back to you shortly.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setStarted(false);
                    setStep(0);
                  }}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-[var(--gold)]"
                >
                  Start over
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">
                    Step {String(step + 1).padStart(2, "0")} / 05
                  </span>
                  <div className="flex flex-1 items-center gap-1.5">
                    {STEPS.map((s, i) => (
                      <span
                        key={s.key}
                        className={`h-px flex-1 transition-colors duration-300 ${
                          i <= step ? "bg-[var(--gold)]" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div
                  key={step}
                  className="mt-6 animate-in fade-in slide-in-from-right-2 duration-300"
                >
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {STEPS[step]?.title}
                  </h3>

                  {step === 0 ? (
                    <>
                      <input
                        autoFocus
                        className={`${field} mt-5`}
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && next()}
                      />
                    </>
                  ) : null}

                  {step === 1 ? (
                    <input
                      autoFocus
                      type="email"
                      className={`${field} mt-5`}
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && next()}
                    />
                  ) : null}

                  {step === 2 ? (
                    <select
                      autoFocus
                      className={`${field} mt-5`}
                      value={form.industry}
                      onChange={(e) => set("industry", e.target.value)}
                    >
                      <option value="">Select an industry</option>
                      <option value="SaaS / Technology">SaaS / Technology</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Marketing / Agency">Marketing / Agency</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Education">Education</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Finance">Finance</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : null}
                  {step === 3 ? (
                    <select
                      autoFocus
                      className={`${field} mt-5`}
                      value={form.topic}
                      onChange={(e) => set("topic", e.target.value)}
                    >
                      <option value="">Select a service</option>
                      <option value="Business Process Automation">Business Process Automation</option>
                      <option value="AI-Powered Content Systems">AI-Powered Content Systems</option>
                      <option value="Social Media Content Automation">Social Media Content Automation</option>
                      <option value="AI Agents & Assistants">AI Agents & Assistants</option>
                      <option value="Custom AI Workflows">Custom AI Workflows</option>
                      <option value="API & Tool Connections">API & Tool Connections</option>
                      <option value="Other / Not Sure Yet">Other / Not Sure Yet</option>
                    </select>
                  ) : null}

                  {step === 4 ? (
                    <textarea
                      autoFocus
                      rows={5}
                      className={`${field} mt-5 resize-y`}
                      placeholder="Describe your project..."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                    />
                  ) : null}

                  {step === 5 ? (
                    <div className="mt-5">
                      <p className="text-sm text-muted-foreground">
                        Review your details and let's start building.
                      </p>
                      <dl className="mt-5 space-y-3 rounded-lg border border-border bg-background/40 p-4">
                        {[
                          ["Name", form.name],
                          ["Email", form.email],
                          ["Industry", form.industry],
                          ["Service", form.topic],
                          ["Project", form.message],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <dt className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                              {k}
                            </dt>
                            <dd className="mt-0.5 whitespace-pre-wrap break-words text-sm text-foreground">
                              {v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ) : null}

                  {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
                </div>

                <div className="mt-7 flex items-center gap-4">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      Back
                    </button>
                  ) : null}

                  {step < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={next}
                      className="ml-auto inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--gold-soft)] hover:shadow-[0_0_28px_rgba(244,185,60,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={send}
                      className="ml-auto inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--gold-soft)] hover:shadow-[0_0_28px_rgba(244,185,60,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send message
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
