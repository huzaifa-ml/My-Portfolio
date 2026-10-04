import { useEffect, useState, Fragment } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
];

export function FloatingNav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  /* Track scroll for active section highlighting */
  useEffect(() => {
    if (!onHome) return;

    const sections = NAV_LINKS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const onScroll = () => {
      const marker = window.innerHeight * 0.4;
      let current = sections[0]?.id ?? "home";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= marker) current = s.id;
      }
      setActive(current);
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  /* Track scroll state even when not on home */
  useEffect(() => {
    if (onHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-4 sm:top-6 z-50 px-4 sm:px-10 lg:px-16 pointer-events-none flex justify-center"
    >
      <div
        className="pointer-events-auto flex w-full max-w-7xl items-center justify-between px-6 py-2.5 bg-[var(--background)]/95 backdrop-blur-2xl rounded-full"
      >
        <a
          href={onHome ? "#home" : "/"}
          className="flex items-center justify-center w-10 h-10 rounded-md font-display text-xl font-bold tracking-tight text-[var(--foreground)] transform -translate-x-[10%]"
        >
          MH
        </a>

        {/* Items 2-6: Center navigation links (Home, About, Services, Projects, Contact) */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ id, label }, i) => {
            const isActive = onHome && active === id;
            const isLast = i === NAV_LINKS.length - 1;
            return (
              <Fragment key={id}>
                <li>
                  <a
                    href={onHome ? `#${id}` : `/#${id}`}
                    className={cn(
                      "text-[0.65rem] font-medium uppercase tracking-[0.3em] transition-colors duration-200",
                      isActive ? "text-[var(--foreground)]" : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]",
                    )}
                  >
                    {label}
                  </a>
                </li>
                {!isLast && <span key={`${id}-sep`} className="mx-2 text-gray-400 opacity-50">/</span>}
              </Fragment>
            );
          })}
        </ul>

        {/* Item 7: Contact Me button (Far Right) */}
        <div className="flex items-center gap-3">
          <a
            href={onHome ? "#contact" : "/#contact"}
            className="hidden sm:inline-flex items-center rounded-full border border-[var(--foreground)]/20 bg-transparent px-7 py-3 text-xs font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)]"
          >
            Contact Me
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-8 w-8 items-center justify-center text-[var(--foreground)]/70 lg:hidden"
            onClick={() => {
              const el = document.getElementById("mobile-nav-drawer");
              if (el) el.classList.toggle("mobile-nav-open");
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        className="mobile-nav-drawer pointer-events-auto absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl bg-[var(--background)]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden"
      >
        <ul className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = onHome && active === id;
            return (
              <li key={id}>
                <a
                  href={onHome ? `#${id}` : `/#${id}`}
                  onClick={() => {
                    const el = document.getElementById("mobile-nav-drawer");
                    if (el) el.classList.remove("mobile-nav-open");
                  }}
                  className={cn(
                    "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    isActive ? "bg-white/10 text-[var(--foreground)]" : "text-[var(--foreground)]/60 hover:bg-white/5 hover:text-[var(--foreground)]",
                  )}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={onHome ? "#contact" : "/#contact"}
              onClick={() => {
                const el = document.getElementById("mobile-nav-drawer");
                if (el) el.classList.remove("mobile-nav-open");
              }}
              className="mt-2 block rounded-lg bg-white/10 px-4 py-2.5 text-center text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)]"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
