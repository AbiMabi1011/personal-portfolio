import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Nav } from "@/components/portfolio/Nav";
import {
  About,
  Approach,
  Certifications,
  Contact,
  Experience,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abishanan Pathmarajah — Full-Stack Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Abishanan Pathmarajah, intern software engineer from Jaffna, Sri Lanka — React, Node.js, Laravel and C#/.NET projects built end to end.",
      },
      { property: "og:title", content: "Abishanan Pathmarajah — Full-Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "Final-year CS & SE undergraduate and intern software engineer building full-stack software with React, Node.js and Laravel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-paper font-sans text-ink">
      <div className="pointer-events-none fixed inset-0 grid-bg" aria-hidden />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Approach />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
