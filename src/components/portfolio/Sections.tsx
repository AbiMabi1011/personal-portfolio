import { Check, ChevronRight } from "lucide-react";
import { Magnetic, Reveal, Section, SectionLabel, Tilt } from "./primitives";
import {
  ABOUT_PARAGRAPHS,
  APPROACH,
  CERTS,
  CONTACTS,
  EXPERIENCE,
  PROJECTS,
  QUICK_FACTS,
  SKILLS,
} from "./data";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <Section id="about" label="about">
      <div className="grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-16">
        <div className="space-y-5">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-[15px] leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="rounded-[16px] border border-line bg-surface p-6">
            <p className="font-mono text-[11px] tracking-wide text-ink-soft">Quick facts</p>
            <dl className="mt-4 divide-y divide-line">
              {QUICK_FACTS.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="font-mono text-[11px] text-ink-soft">{k}</dt>
                  <dd className="text-right text-sm font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Approach() {
  return (
    <Section id="approach" label="approach" title="How I work through a build.">
      <div className="grid gap-5 md:grid-cols-3">
        {APPROACH.map((a, i) => (
          <Reveal key={a.num} delay={i * 0.1}>
            <div className="h-full rounded-[16px] border border-line bg-surface p-6 transition-colors hover:border-blue/40">
              <span
                className="font-display text-4xl font-extrabold text-transparent"
                style={{ WebkitTextStroke: "1px var(--color-line)" }}
              >
                {a.num}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="experience" title="Where I've put the theory to work.">
      <Reveal>
        <div className="relative overflow-hidden rounded-[16px] border border-line bg-surface p-6 md:p-8">
          <span
            className="absolute inset-y-0 left-0 w-[3px]"
            style={{ background: "linear-gradient(to bottom, var(--color-blue), var(--color-amber))" }}
          />
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl font-semibold text-ink">{EXPERIENCE.role}</h3>
            <span className="rounded-full bg-blue-soft px-3 py-1 font-mono text-[11px] text-blue">
              {EXPERIENCE.date}
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-ink-soft">{EXPERIENCE.company}</p>
          <p className="mt-3 text-sm text-ink-soft">{EXPERIENCE.subtitle}</p>
          <ul className="mt-6 space-y-3">
            {EXPERIENCE.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <ChevronRight size={16} className="mt-0.5 shrink-0 text-blue" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof PROJECTS)[number];
  featured?: boolean;
}) {
  return (
    <Tilt className="h-full rounded-[16px] border border-line bg-surface hover:shadow-[0_24px_50px_-24px_rgba(20,24,28,0.28)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="flex gap-1" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </span>
        <span className="truncate font-mono text-[11px] text-ink-soft">{project.path}</span>
      </div>
      <div className={cn("p-6", featured && "md:p-8")}>
        <h3
          className={cn(
            "font-display font-semibold text-ink",
            featured ? "text-2xl md:text-[28px]" : "text-xl",
          )}
        >
          {project.title}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-ink-soft",
            featured && "max-w-2xl md:text-[15px]",
          )}
        >
          {project.body}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  );
}

export function Projects() {
  const [featured, ...rest] = PROJECTS;
  return (
    <Section id="projects" label="projects" title="A few things I've built end to end.">
      <div className="space-y-5">
        <Reveal>
          <ProjectCard project={featured!} featured />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" label="skills" title="The stack I work in, and what's next.">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.08}>
            <div className="h-full rounded-[16px] border border-line bg-surface p-6">
              <p className="font-mono text-[11px] tracking-wide text-ink-soft">{g.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-blue/40 hover:bg-blue-soft hover:text-blue"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" label="certifications" title="Verified, incremental learning.">
      <div className="grid gap-4 md:grid-cols-2">
        {CERTS.map((c, i) => (
          <Reveal key={c} delay={i * 0.05}>
            <div className="flex items-center gap-3 rounded-[14px] border border-line bg-surface px-5 py-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-soft text-amber">
                <Check size={13} aria-hidden />
              </span>
              <p className="text-sm text-ink">{c}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto w-full max-w-[1160px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[18px] bg-ink px-6 py-16 text-center md:px-10 md:py-24">
            <div className="pointer-events-none absolute inset-0 grid-bg-dark" aria-hidden />
            <div className="relative">
              <SectionLabel>contact</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight font-bold text-white md:text-[40px]">
                Let's build something worth shipping.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/55">
                Open to full-stack engineering internships and collaborative, product-driven teams.
                Reach out — I reply fast.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {CONTACTS.map((c) => (
                  <Magnetic
                    key={c.href}
                    href={c.href}
                    className="rounded-full border border-white/20 px-4 py-2.5 font-mono text-xs text-white/75 hover:border-white/50 hover:text-white"
                  >
                    {c.label}
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto w-full max-w-[1160px] px-5 md:px-8">
        <p className="font-mono text-[11px] text-ink-soft">
          © 2026 Abishanan Pathmarajah · designed &amp; coded by hand, accelerated with AI
        </p>
      </div>
    </footer>
  );
}
