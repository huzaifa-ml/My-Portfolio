import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Faq } from "@/components/portfolio/Faq";
import { Contact } from "@/components/portfolio/Contact";
import { WhatsAppFab } from "@/components/portfolio/WhatsAppFab";

const title = "Muhammad Huzaifa — AI Automation Architect";
const description =
  "AI Automation Architect building agentic AI systems, n8n workflows and API integrations that turn repetitive business work into intelligent automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Faq />
      <Contact />
      <footer className="border-t border-border px-5 pb-10 pt-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Muhammad Huzaifa — AI Automation Architect
      </footer>
    </main>
  );
}
