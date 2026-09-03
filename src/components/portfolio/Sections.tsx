import { useState } from "react";
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Eye,
  Github,
  GraduationCap,
  Layers,
  MapPin,
  Rocket,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { Magnetic, Reveal, Section, SectionLabel, Tilt } from "./primitives";
import {
  ABOUT_PARAGRAPHS,
  APPROACH,
  CERTS,
  CONTACTS,
  EXPERIENCES,
  PROJECTS,
  ProjectItem,
  QUICK_FACTS,
  SKILLS,
} from "./data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function About() {
  const coreValues = [
    {
      title: "Clean Architecture",
      desc: "RESTful conventions, modular component design, and predictable data flow."
    },
    {
      title: "Pragmatic AI Acceleration",
      desc: "Leveraging Copilot & Cursor for speed while taking complete ownership of every line shipped."
    },
    {
      title: "Continuous Stack Expansion",
      desc: "Actively ramping up on TypeScript, NestJS, Next.js, and PostgreSQL for modern cloud stacks."
    }
  ];

  return (
    <Section id="about" label="about" title="Passionate about building software that scales.">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
        
        {/* Left Column: Image + Narrative & Philosophy (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white dark:bg-[#071324] p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-lg">
              {/* Profile Image */}
              <div className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-md">
                <img
                  src="/images/profile.jpg"
                  alt="Abishanan Pathmarajah"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Bio intro */}
              <div>
                <h3 className="font-display text-xl font-bold text-[#0a192f] dark:text-white leading-snug">
                  Abishanan Pathmarajah
                </h3>
                <p className="font-sans text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                  Full-Stack Software Engineer • Jaffna, Sri Lanka
                </p>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {ABOUT_PARAGRAPHS[0]}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4 pt-1">
            {ABOUT_PARAGRAPHS.slice(1).map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Experience Highlights Snapshot inside About */}
          <Reveal delay={0.2}>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <Briefcase size={15} /> Work Experience Overview
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.company} className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 shrink-0 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white p-0.5 shadow-xs">
                          <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
                        </div>
                        <span className="font-sans text-xs font-bold text-[#0a192f] dark:text-white">{exp.company}</span>
                      </div>
                      <span className="font-sans text-[10px] font-semibold text-blue-600 dark:text-blue-400">{exp.date}</span>
                    </div>
                    <p className="font-sans text-xs font-medium text-blue-800 dark:text-blue-300 mt-1.5">{exp.role}</p>
                    <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{exp.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Quick Facts & Philosophy (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071324] p-6 shadow-xl shadow-blue-950/5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                  <Code2 size={16} /> Quick Profile
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-sans text-[10px] font-semibold">
                  SLIIT / UoB
                </span>
              </div>

              <dl className="mt-4 divide-y divide-slate-100 dark:divide-slate-800/80">
                {QUICK_FACTS.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-3">
                    <dt className="font-sans text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      {k === "Location" && <MapPin size={14} className="text-blue-500" />}
                      {k === "Education" && <GraduationCap size={14} className="text-blue-500" />}
                      {k === "University" && <Award size={14} className="text-blue-500" />}
                      {k === "Focus" && <Briefcase size={14} className="text-blue-500" />}
                      <span>{k}</span>
                    </dt>
                    <dd className="text-right font-sans text-xs font-semibold text-[#0a192f] dark:text-slate-100">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Core Philosophy Box */}
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-white dark:bg-[#071324] p-6 shadow-md space-y-3">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Engineering Philosophy
              </h4>
              <div className="space-y-3">
                {coreValues.map((v) => (
                  <div key={v.title} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-xs font-bold text-[#0a192f] dark:text-white">{v.title}</p>
                      <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

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
            <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071324] p-6 transition-all duration-300 hover:border-blue-500/50 shadow-sm hover:shadow-md">
              <span
                className="font-display text-4xl font-extrabold text-blue-600/30 dark:text-blue-400/30"
              >
                {a.num}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-[#0a192f] dark:text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="experience" title="Where I've put theory into real product engineering.">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-blue-900/60 bg-gradient-to-br from-[#020b18] via-[#0a192f] to-[#040e20] shadow-2xl shadow-blue-950/40 backdrop-blur-md">
          
          {/* Ambient Glowing Background Auras */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl" />

          {/* Mobile / Tablet View: Stacked Timeline Experience Cards (clean & readable without awkward horizontal scroll) */}
          <div className="lg:hidden divide-y divide-blue-900/50 p-5 sm:p-6 space-y-6 divide-y-reverse relative z-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="pt-6 first:pt-0 space-y-4">
                {/* Header: Company & Role */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-blue-500/50 bg-white p-1 shadow-md shadow-blue-600/20 flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white leading-snug">
                        {exp.company}
                      </h3>
                      <p className="font-sans text-xs text-blue-400 font-semibold mt-0.5">
                        {exp.role}
                      </p>
                      <p className="font-sans text-[11px] text-slate-400">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="flex items-center">
                  <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold text-blue-200 bg-blue-950/90 border border-blue-800/80 px-2.5 py-1 rounded-lg shadow-xs">
                    <Calendar size={12} className="text-blue-400" />
                    {exp.date}
                  </span>
                </div>

                {/* Subtitle / Focus */}
                <p className="font-sans text-xs font-semibold text-slate-200 leading-relaxed">
                  {exp.subtitle}
                </p>

                {/* Impact Chips */}
                {exp.impact && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.impact.map((imp) => (
                      <span
                        key={imp}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-950/90 border border-blue-800/80 font-sans text-[10px] font-bold text-blue-200 shadow-xs"
                      >
                        <Sparkles size={11} className="text-blue-400 shrink-0" />
                        {imp}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                <ul className="space-y-2 pt-1">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-2">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md border border-blue-800/60 bg-blue-950/70 font-sans text-[10px] font-semibold text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Full Enterprise Table (min-w-full on lg screens) */}
          <div className="hidden lg:block overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-900/80 bg-[#0b1d3a]/90 font-sans text-xs font-bold uppercase tracking-wider text-blue-300">
                  <th className="py-4.5 px-6 min-w-[260px]">Company &amp; Brand Logo</th>
                  <th className="py-4.5 px-6 min-w-[180px]">Role &amp; Period</th>
                  <th className="py-4.5 px-6 min-w-[400px]">Key Deliverables &amp; Impact</th>
                  <th className="py-4.5 px-6 min-w-[220px]">Tech Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-900/50 font-sans text-xs">
                {EXPERIENCES.map((exp) => (
                  <tr
                    key={exp.company}
                    className="hover:bg-blue-900/30 transition-colors duration-300 group"
                  >
                    {/* Company Logo & Brand */}
                    <td className="py-6 px-6 align-top">
                      <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-blue-500/50 bg-white p-1.5 shadow-xl shadow-blue-600/25 group-hover:scale-105 group-hover:border-blue-400 transition-all flex items-center justify-center">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-white leading-snug">
                            {exp.company}
                          </h3>
                          <p className="font-sans text-xs font-medium text-slate-400 mt-0.5">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Role & Period */}
                    <td className="py-6 px-6 align-top space-y-2">
                      <h4 className="font-display text-sm font-bold text-blue-400">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold text-blue-200 bg-blue-950/90 border border-blue-800/80 px-3 py-1 rounded-xl shadow-xs">
                        <Calendar size={12} className="text-blue-400" />
                        {exp.date}
                      </span>
                    </td>

                    {/* Accomplishments & Impact */}
                    <td className="py-6 px-6 align-top space-y-3">
                      <p className="font-sans text-xs font-semibold text-slate-200">
                        {exp.subtitle}
                      </p>

                      {/* Impact Chips */}
                      {exp.impact && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.impact.map((imp) => (
                            <span
                              key={imp}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-950/90 border border-blue-800/80 font-sans text-[10px] font-bold text-blue-200 shadow-xs"
                            >
                              <Sparkles size={11} className="text-blue-400 shrink-0" />
                              {imp}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bullets */}
                      <ul className="space-y-2 pt-1">
                        {exp.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* Tech Stack */}
                    <td className="py-6 px-6 align-top">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg border border-blue-800/60 bg-blue-950/70 font-sans text-[11px] font-semibold text-blue-200 shadow-xs group-hover:border-blue-500/60 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}


function ProjectCard({
  project,
  featured,
  onSelect,
}: {
  project: ProjectItem;
  featured?: boolean;
  onSelect: (p: ProjectItem) => void;
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <Tilt className="h-full rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#071324] shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-all flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Direct Scrollable Live Interactive Preview Header */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          {project.demoUrl ? (
            <div className="absolute inset-0 z-10 bg-slate-950 overflow-hidden">
              <iframe
                src={project.demoUrl}
                title={`${project.title} live preview`}
                onLoad={() => setIframeLoaded(true)}
                className={cn(
                  "w-full h-full border-0 transition-opacity duration-500",
                  iframeLoaded ? "opacity-100" : "opacity-0"
                )}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm z-20 pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600/90 text-white font-mono text-[11px] shadow-lg animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                    <span>Loading Live Site...</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-90"
            />
          )}

          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap items-center gap-1.5 sm:gap-2 z-20 pointer-events-none">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#0a192f]/90 backdrop-blur-md font-mono text-[9px] sm:text-[10px] text-blue-300 border border-blue-500/30">
              {project.category}
            </span>
            {project.demoUrl && (
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md bg-emerald-500/90 backdrop-blur-md font-mono text-[8px] sm:text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Live
              </span>
            )}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-blue-600/95 hover:bg-blue-600 text-white font-mono text-[11px] sm:text-xs font-semibold backdrop-blur-md border border-blue-400/40 shadow-lg transition-all z-20"
          >
            <Eye size={13} className="sm:size-[14px]" />
            <span>Details</span>
          </button>
        </div>

        {/* Domain / Status Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 px-3.5 sm:px-4 py-2 bg-slate-50/80 dark:bg-slate-900/50">
          <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-blue-600 dark:text-blue-400 truncate">
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
            <span className="truncate">{project.title}</span>
          </span>
          <span className="shrink-0 font-sans text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            {project.path.replace("~/", "")}
          </span>
        </div>

        {/* Body Content */}
        <div className={cn("p-4 sm:p-6", featured && "md:p-8")}>
          <h3
            className={cn(
              "font-display font-semibold text-[#0a192f] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
              featured ? "text-xl sm:text-2xl md:text-[28px]" : "text-lg sm:text-xl",
            )}
          >
            {project.title}
          </h3>
          <p
            className={cn(
              "mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300",
              featured && "max-w-2xl md:text-[15px]",
            )}
          >
            {project.body}
          </p>
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-blue-200/60 dark:border-blue-800/60 bg-blue-50/50 dark:bg-blue-950/50 px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[10px] sm:text-[11px] text-blue-900 dark:text-blue-200 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60">
        <button
          onClick={() => onSelect(project)}
          className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
        >
          View Architecture &rarr;
        </button>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors p-1 text-xs"
            title="Live Demo"
          >
            <span className="sm:hidden font-mono text-[11px]">Demo</span>
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </Tilt>
  );
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Ed-Tech", "Booking Platform", "E-Commerce & Deals"];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Section
      id="projects"
      label="projects"
      title="A few things I've built end to end."
      className="relative bg-gradient-to-b from-blue-50/70 via-slate-100/90 to-blue-50/50 dark:from-[#051122] dark:via-[#091b35] dark:to-[#051122] border-y border-blue-200/70 dark:border-blue-900/60 py-16 sm:py-24 md:py-32 shadow-inner"
    >
      {/* Radiant Background Glow accents */}
      <div className="pointer-events-none absolute -top-10 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-[130px]" />
      
      {/* Category Filter & Search Header */}
      <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
        {/* Category Pills (horizontally scrollable on small screens) */}
        <div className="flex overflow-x-auto pb-1 sm:pb-0 scrollbar-none gap-2 -mx-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-200 border shrink-0",
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                  : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Box */}
        <div className="relative w-full md:max-w-xs">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 font-mono placeholder:text-slate-400 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} onSelect={(item) => setActiveProject(item)} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <p className="font-mono text-sm text-slate-500">No projects found matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Interactive Project Detail Modal */}
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        {activeProject && (
          <DialogContent className="w-[94vw] sm:max-w-3xl bg-white dark:bg-[#071324] border-slate-200 dark:border-slate-800 p-0 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col">
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-slate-950">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#071324]/40 to-transparent" />
              
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex items-end justify-between">
                <div>
                  <Badge className="bg-blue-600 text-white font-mono text-[10px] sm:text-xs mb-1.5 sm:mb-2">
                    {activeProject.category}
                  </Badge>
                  <DialogTitle className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    {activeProject.title}
                  </DialogTitle>
                  <p className="font-mono text-[11px] sm:text-xs text-blue-300 mt-0.5 sm:mt-1">{activeProject.path}</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
              
              {/* Architecture & Summary */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                  <Layers size={14} /> System Overview &amp; Architecture
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeProject.longDescription}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} /> Key Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {activeProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald-500 font-bold" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              {activeProject.metrics && activeProject.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
                  {activeProject.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-center">
                      <span className="font-mono text-[11px] sm:text-xs font-semibold text-blue-900 dark:text-blue-200">{m}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/60 font-mono text-[11px] sm:text-xs text-blue-900 dark:text-blue-200 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Footer */}
              <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-mono text-[11px] sm:text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-blue-500 transition-colors"
                  >
                    <Github size={14} /> Source Code
                  </a>
                )}
                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-mono text-[11px] sm:text-xs font-semibold text-white transition-colors shadow-md"
                  >
                    <ExternalLink size={14} /> Open Live Site
                  </a>
                )}
              </div>

            </div>
          </DialogContent>
        )}
      </Dialog>
    </Section>
  );
}


export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const categories = ["All", "Languages", "Frameworks & Libraries", "Databases & Tools", "Actively Ramping Up On"];

  const filteredSkills = SKILLS.filter(g => activeTab === "All" || g.group === activeTab);

  return (
    <Section id="skills" label="skills" title="Engineered with modern tools & Next-Gen stacks.">
      {/* Category Filter Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={cn(
              "px-3.5 py-1.5 rounded-xl font-sans text-xs font-semibold transition-all duration-200 border",
              activeTab === cat
                ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredSkills.map((g, i) => {
          const isRamping = g.group === "Actively Ramping Up On";
          return (
            <Reveal key={g.group} delay={i * 0.08}>
              <div className={cn(
                "h-full rounded-3xl border p-6 md:p-7 transition-all duration-300 shadow-md",
                isRamping
                  ? "border-blue-300 dark:border-blue-800/80 bg-blue-50/50 dark:bg-blue-950/30"
                  : "border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#071324] hover:border-blue-500/50"
              )}>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                    {g.group}
                  </span>
                  {isRamping && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-sans text-[10px] font-semibold animate-pulse">
                      ⚡ Ramping Up Fast
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "cursor-default rounded-xl px-4 py-2 font-sans text-xs font-semibold transition-all duration-200 shadow-sm flex items-center gap-2",
                        isRamping
                          ? "border border-blue-300 dark:border-blue-700 bg-white dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 hover:scale-105 hover:bg-blue-600 hover:text-white"
                          : "border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105"
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [certSearch, setCertSearch] = useState<string>("");
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const categories = ["All", "Problem Solving", "Programming", "Web Engineering"];

  const filteredCerts = CERTS.filter((c) => {
    const matchesCat = activeCategory === "All" || c.category === activeCategory;
    const matchesSearch =
      certSearch.trim() === "" ||
      c.title.toLowerCase().includes(certSearch.toLowerCase()) ||
      c.issuer.toLowerCase().includes(certSearch.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(certSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <Section
      id="certifications"
      label="certifications"
      title="Verified Technical Competencies & Academic Credentials."
    >
      {/* Top Controls: Category Pills + Search + Stat summary */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl font-sans text-xs font-semibold transition-all duration-200 border",
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                  : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search */}
        <div className="relative max-w-xs w-full">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={certSearch}
            onChange={(e) => setCertSearch(e.target.value)}
            placeholder="Search credentials or skills..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 font-mono placeholder:text-slate-400"
          />
          {certSearch && (
            <button
              onClick={() => setCertSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Certifications */}
      {filteredCerts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div 
                onClick={() => setSelectedCert(c)}
                className="h-full rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#071324] p-6 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Issuer Header & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-xl font-sans text-[11px] font-bold border flex items-center gap-1.5 shadow-xs",
                      c.issuer.includes("HackerRank")
                        ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50"
                        : "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50"
                    )}>
                      <Award size={13} className="shrink-0" />
                      <span>{c.issuer}</span>
                    </span>

                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {c.date}
                    </span>
                  </div>

                  {/* Title & Score Pill */}
                  <h3 className="font-display text-base md:text-lg font-bold text-[#0a192f] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {c.title}
                  </h3>

                  {c.score && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/50 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                      <Sparkles size={11} className="shrink-0" />
                      <span>{c.score}</span>
                    </div>
                  )}

                  <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                    {c.description}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 font-sans text-[11px] font-medium text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verified Badge & Modal Trigger */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>Verified</span>
                  </span>
                  <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-0.5">
                    <span>Inspect</span> &rarr;
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <p className="font-mono text-sm text-slate-500">No credentials found for "{certSearch}"</p>
        </div>
      )}

      {/* Interactive Certificate Detail Modal */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        {selectedCert && (
          <DialogContent className="max-w-lg bg-white dark:bg-[#071324] border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className={cn(
                  "px-3 py-1 rounded-xl font-sans text-xs font-bold border flex items-center gap-1.5",
                  selectedCert.issuer.includes("HackerRank")
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200"
                    : "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200"
                )}>
                  <Award size={14} />
                  <span>{selectedCert.issuer}</span>
                </span>
                <span className="font-mono text-xs text-slate-400">{selectedCert.date}</span>
              </div>

              <div>
                <DialogTitle className="font-display text-xl md:text-2xl font-bold text-[#0a192f] dark:text-white">
                  {selectedCert.title}
                </DialogTitle>
                {selectedCert.score && (
                  <p className="font-sans text-xs font-semibold text-amber-600 dark:text-amber-400 mt-1 flex items-center gap-1">
                    <Sparkles size={13} /> {selectedCert.score}
                  </p>
                )}
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  Curriculum &amp; Assessment Scope
                </h4>
                <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedCert.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Demonstrated Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-xs font-medium text-blue-900 dark:text-blue-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="block font-mono text-[10px] text-slate-400">CREDENTIAL ID</span>
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                    {selectedCert.credentialId}
                  </span>
                </div>
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-sans text-xs font-bold text-white transition-all shadow-md"
                  >
                    <span>Verify Authenticity</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </Section>
  );
}

import { toast } from "sonner";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Internship Offer", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields!");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully! Abishanan will get back to you shortly.");
      setFormData({ name: "", email: "", subject: "Internship Offer", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="scroll-mt-28 px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a192f] via-[#071324] to-[#040c18] border border-blue-900/50 p-8 md:p-12 shadow-2xl shadow-blue-950/30">
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <SectionLabel>contact</SectionLabel>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-[38px]">
                    Let's build something worth shipping.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-blue-200/70">
                    Open to full-stack engineering internships, software engineer roles, and high-impact digital product teams. Reach out anytime!
                  </p>
                </div>

                {/* Quick Info Badges */}
                <div className="space-y-3 pt-2">
                  {CONTACTS.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-2xl border border-blue-900/60 bg-blue-950/40 px-4 py-3 text-xs font-semibold text-blue-100 hover:border-blue-500 hover:bg-blue-900/60 transition-all group"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {c.href.includes("mailto") ? <Mail size={15} /> : c.href.includes("tel") ? <Phone size={15} /> : <MessageSquare size={15} />}
                      </span>
                      <span className="truncate">{c.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 rounded-2xl border border-blue-800/40 bg-[#071324]/90 p-6 md:p-8 backdrop-blur-md shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block font-sans text-xs font-semibold text-blue-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-blue-900/60 bg-blue-950/50 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs font-semibold text-blue-300 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-blue-900/60 bg-blue-950/50 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-blue-300 mb-1.5">Inquiry Type</label>
                    <div className="flex flex-wrap gap-2">
                      {["Internship Offer", "Full-Stack Project", "General Inquiry"].map((sub) => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: sub })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            formData.subject === sub
                              ? "bg-blue-600 border-blue-500 text-white"
                              : "bg-blue-950/40 border-blue-900/50 text-blue-300 hover:border-blue-700"
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-blue-300 mb-1.5">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abishanan, I would like to discuss..."
                      className="w-full rounded-xl border border-blue-900/60 bg-blue-950/50 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 font-sans text-xs font-bold text-white transition-all shadow-lg shadow-blue-600/30 disabled:opacity-50 cursor-pointer"
                  >
                    {sending ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
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
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-8">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
          © 2026 Abishanan Pathmarajah · designed &amp; coded by hand, accelerated with AI
        </p>
      </div>
    </footer>
  );
}
