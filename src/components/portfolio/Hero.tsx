import { ArrowRight, Bot, ChevronDown, DatabaseSearch } from "lucide-react";
import { siDocker, siN8n } from "simple-icons";
import portrait from "@/assets/huzaifa-hero.jpg";
import pythonLogo from "@/assets/python-logo-only.svg";

type HeroIconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

function N8nIcon(props: HeroIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d={siN8n.path} fill="#FF6D5A" />
    </svg>
  );
}

function PythonIcon(props: HeroIconProps) {
  return <img src={pythonLogo} alt="" {...props} />;
}

function RagIcon(props: HeroIconProps) {
  return <DatabaseSearch {...props} />;
}

function DockerIcon(props: HeroIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d={siDocker.path} fill="#2496ED" />
    </svg>
  );
}

function AiAgentsIcon(props: HeroIconProps) {
  return <Bot {...props} />;
}

const technologies = [
  { label: "n8n", Icon: N8nIcon, iconClassName: "text-[#FF6D5A]" },
  { label: "Python", Icon: PythonIcon, iconClassName: "object-contain" },
  { label: "RAG", Icon: RagIcon, iconClassName: "text-[#B9B4AC]" },
  { label: "Docker", Icon: DockerIcon, iconClassName: "text-[#2496ED]" },
  { label: "AI Agents", Icon: AiAgentsIcon, iconClassName: "text-[#D8D3C9]" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="cinema-hero relative isolate flex min-h-[780px] scroll-mt-20 overflow-hidden px-6 pb-0 pt-0 sm:px-10 md:px-12 lg:min-h-screen lg:px-16 md:min-h-[900px]"
    >
      {/* Background layers removed for seamless background */}
      {/* Subtle vertical panel lines background */}

      {/* Navigation bar — hero-scoped with higher z-index (z-30) so links remain clickable above content layers */}
      <nav className="absolute inset-x-0 top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10 md:px-12 lg:px-16">
        {/* Logo text — clean text, no box */}
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-[var(--foreground)] transition-opacity hover:opacity-80"
        >
          MH
        </a>

        {/* Center nav links with slash separators */}
        <ul className="hidden items-center lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.label} className="flex items-center">
              {i > 0 && (
                <span
                  className="mx-5 select-none text-[0.65rem] text-[var(--foreground)]/25"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
              <a
                href={link.href}
                className="hero-nav-link text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[var(--foreground)]/60 transition-colors duration-200 hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA pill button — visible on both mobile and desktop */}
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-[var(--foreground)]/20 bg-transparent px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] sm:px-6 sm:py-2.5 sm:text-[0.7rem]"
        >
          Contact Me
        </a>
      </nav>

      {/* Portrait image — visually centered on mobile, anchored bottom-right on desktop */}
      <img
        src={portrait}
        alt="Muhammad Huzaifa seated in a black suit"
        width={1470}
        height={1070}
        className="cinema-portrait pointer-events-none absolute bottom-0 md:bottom-4 lg:bottom-0 z-[1] select-none object-contain filter-none"
      />

      {/* Signature — beside ear/shoulder area matching desktop visual relationship */}
      <div className="hero-stage-4 pointer-events-none absolute inset-0 z-[5]">
        <p className="cinema-signature absolute text-left lg:text-right leading-[1.05] text-[var(--foreground)]/65">
          Muhammad
          <br />
          Huzaifa
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-start lg:mx-0 lg:ml-auto">
        <div className="cinema-copy w-full pt-20 sm:pt-24 lg:w-auto lg:max-w-[36rem] lg:pt-36 lg:transform lg:translate-x-[10%] md:translate-x-[5%]">
          {/* AI Automation Architect */}
          <p className="hero-stage-6 block text-[0.71rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)] sm:text-[0.78rem] text-left ml-[5%] lg:ml-0" style={{ opacity: 1.2 }}>
            AI Automation Architect
          </p>

          {/* MOBILE-ONLY THINK BUILD SCALE GRAPHIC */}
          <div className="hero-mobile-think-build-scale block mt-16 sm:mt-20 pr-4 sm:pr-6 text-right ml-auto relative select-none lg:hidden" style={{ transform: 'translateY(10%) scale(1.05)' }}>
            <div className="hero-tbs-block relative inline-block text-right" style={{ transform: 'rotate(-6deg) skewX(-12deg)' }}>
              
              {/* THINK — noticeably thin/lightweight */}
              <div className="relative font-display font-extralight uppercase tracking-[0.1em] text-[#d8d8d8] text-[clamp(2.4rem,9vw,3.4rem)] leading-[1]">
                Think
                {/* Thin white underline under Think, starting after T */}
                <div className="absolute -bottom-0.5 left-[22%] -right-[2%] h-[1px] bg-white/50 pointer-events-none" />
              </div>

              {/* BUILD — heavy bold */}
              <div className="font-display font-black uppercase tracking-[-0.02em] text-white text-[clamp(2.9rem,10.8vw,4.1rem)] leading-[0.88] mt-1.5">
                Build
              </div>

              {/* SCALE — heavy bold, gold color */}
              <div className="relative font-display font-black uppercase tracking-[-0.02em] text-[var(--gold)] text-[clamp(2.9rem,10.8vw,4.1rem)] leading-[0.88] mt-0.5">
                Scale
                
                {/* Brushy gold underline stroke under SCALE */}
                <svg 
                  className="absolute -bottom-3 -left-[4%] w-[108%] h-[14px] pointer-events-none" 
                  viewBox="0 0 200 14" 
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M 0 7 C 30 3, 70 11, 110 5 C 140 1, 170 9, 200 4" stroke="var(--gold)" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M 5 10 C 40 6, 80 13, 120 8 C 150 4, 175 11, 195 7" stroke="var(--gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>

              {/* Left angled gold line — frames THINK & BUILD */}
              <div 
                className="absolute border-l-[1.5px] border-[var(--gold)] pointer-events-none" 
                style={{ left: '-6px', top: '-4%', bottom: '34%' }}
                aria-hidden="true" 
              />

              {/* Right angled gold line — frames BUILD & SCALE */}
              <div 
                className="absolute border-r-[1.5px] border-[var(--gold)] pointer-events-none" 
                style={{ right: '-6px', top: '33%', bottom: '-4%' }}
                aria-hidden="true" 
              />

            </div>
          </div>

          {/* DESKTOP-ONLY HEADING — 100% strictly preserved */}
          <h1 className="hero-heading mt-3 hidden font-display uppercase font-bold text-left text-[clamp(2.8rem,7vw,6.5rem)] leading-[.78] tracking-[-0.04em] text-[var(--foreground)] lg:block">
            <span className="hero-stage-6 hero-word-think block font-bold">
              Think
            </span>
            <span className="hero-stage-6b hero-word-build block font-bold">
              Build
            </span>
            <span className="hero-stage-6c hero-word-scale block font-bold text-[var(--gold)]">
              Scale
            </span>
          </h1>

          {/* Supporting paragraph text — desktop only */}
          <div className="hero-stage-7 mt-5 hidden max-w-[26rem] space-y-4 text-[0.92rem] leading-[1.5] text-muted-foreground sm:text-[1rem] lg:block">
            <p>
              Turn scattered processes into something that flows.
              <br />
              Turn repetitive work into something that runs itself.
            </p>
            <p>
              Build once with intention.
              <br />
              Then let the system do the rest.
            </p>
          </div>

          {/* View My Work button — desktop only */}
          <div className="hero-stage-7 mt-6 hidden flex-wrap gap-3 lg:flex">
            <a
              href="#projects"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-[var(--gold)] pl-12 pr-7 py-3 text-sm font-semibold text-[var(--foreground)] shadow-[var(--glow-gold)] transition-colors duration-500 hover:text-[var(--primary-foreground)] hover:shadow-[var(--glow-gold-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <div className="absolute inset-y-0 left-0 w-10 bg-[var(--gold)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full z-0"></div>
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>

          {/* Tech badges — desktop only */}
          <div className="cinema-tech hero-stage-7 mt-12 hidden max-w-2xl flex-wrap items-center gap-x-8 gap-y-3 pb-8 text-[0.68rem] font-medium tracking-[0.02em] text-muted-foreground sm:gap-x-7 lg:flex lg:pb-10 md:flex">
            {technologies.map(({ label, Icon, iconClassName }) => (
              <span key={label} className="inline-flex items-center gap-2 whitespace-nowrap">
                <Icon className={`h-6 w-6 ${iconClassName}`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-down indicator — bottom-right, whole group floating smoothly together (desktop only) */}
      <div className="hero-stage-7 absolute bottom-8 right-8 z-10 hidden lg:flex lg:bottom-10 lg:right-16">
        <div className="hero-scroll-indicator flex flex-col items-center gap-1.5 cursor-pointer">
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50">
            Scroll Down
          </span>
          <ChevronDown
            className="h-4 w-4 text-[var(--foreground)]/40"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile-only scroll indicator — bottom-right */}
      <div className="hero-stage-7 hero-mobile-scroll absolute bottom-8 right-6 z-20 flex lg:hidden">
        <div className="hero-scroll-indicator flex flex-col items-center gap-1.5 cursor-pointer">
          <span className="text-[0.55rem] font-medium uppercase tracking-[0.25em] text-[var(--foreground)]/60">
            Scroll
          </span>
          <ChevronDown
            className="h-4 w-4 text-[var(--foreground)]/50"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
