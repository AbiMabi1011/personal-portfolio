import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Magnetic, CountUp } from "./primitives";
import { PROJECTS, STATS, MARQUEE } from "./data";
import profilePhoto from "../../images/abi.jpeg";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative pt-8 pb-14 md:pt-12 md:pb-20 border-b border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#071324] text-slate-900 dark:text-white overflow-hidden">
      {/* Soft Radiant Glow Background Effects */}
      <div className="pointer-events-none absolute -top-12 left-1/3 w-[650px] h-[380px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-cyan-400/20 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden />

      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 relative z-10">
        
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-800 dark:text-white">Abishanan Pathmarajah</span>
            <span className="opacity-40">•</span>
            <span>Jaffna, Sri Lanka</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 font-sans text-xs font-medium text-blue-700 dark:text-blue-300 shadow-sm">
            <span>BSc (Hons) Computer Science</span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Hero Card with Profile Image + Sentences (8 Cols) */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col justify-between rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 dark:from-[#0a192f] dark:via-[#071324] dark:to-[#040c18] p-7 md:p-9 shadow-xl shadow-blue-950/5 relative overflow-hidden group backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/80 bg-blue-50/90 dark:bg-blue-950/80 font-sans text-xs font-semibold text-blue-700 dark:text-blue-300 shadow-sm">
                  ✨ High-Impact Digital Ecosystems
                </span>
              </div>

              {/* Side-by-Side: Image on Left + Text on Right */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
                
                {/* Profile Picture Card on Left */}
                <div className="shrink-0 w-44 sm:w-52 md:w-56 relative group/img">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 blur-md group-hover/img:opacity-60 transition duration-500" />
                  <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border-2 border-blue-200 dark:border-blue-600/60 shadow-2xl relative">
                    <img
                      src={profilePhoto}
                      alt="Abishanan Pathmarajah"
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-[#0a192f]/90 backdrop-blur-md border border-blue-500/40 text-center shadow-lg">
                      <span className="font-sans text-[11px] font-semibold text-emerald-400 flex items-center justify-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Hire
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sentences & Headline */}
                <div className="flex-1">
                  <h1 className="font-display text-[30px] sm:text-[40px] md:text-[46px] font-bold leading-[1.1] tracking-tight text-[#0a192f] dark:text-white">
                    Engineering the Foundation for{" "}
                    <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                      Tomorrow’s Digital Ecosystems
                    </span>
                  </h1>

                  <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
                    Turning raw ideas into fully realized software platforms with precise engineering, modern tools, and seamless performance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-slate-200 dark:border-slate-800">
              <Magnetic
                href="#projects"
                className="rounded-xl bg-[#0a192f] dark:bg-blue-600 px-6 py-2.5 font-sans text-xs font-semibold text-white hover:bg-blue-900 dark:hover:bg-blue-500 shadow-lg shadow-blue-950/20 transition-all"
              >
                Explore Work ↓
              </Magnetic>

              <Magnetic
                href="#contact"
                className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 px-6 py-2.5 font-sans text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-sm"
              >
                Get in Touch
              </Magnetic>

              <Magnetic
                href="/cv.pdf"
                className="rounded-xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/80 dark:bg-blue-950/60 px-6 py-2.5 font-sans text-xs font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>View CV</span>
                <span className="text-[11px]">↗</span>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Side Widgets (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">

            {/* Bento Metric Counter Card */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a192f]/80 p-5 shadow-xl shadow-blue-950/5 flex-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5 mb-3">
                <span className="font-sans text-[11px] uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
                  Performance Metrics
                </span>
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {STATS.map((s) => (
                  <div key={s.label} className="p-3 rounded-2xl bg-slate-50 dark:bg-blue-950/40 border border-slate-100 dark:border-blue-800/40 hover:border-blue-500/40 transition-colors text-center">
                    <div className="font-display text-xl md:text-2xl font-bold text-[#0a192f] dark:text-white tabular-nums">
                      <CountUp to={s.value} suffix={s.suffix} raw={s.raw ?? false} start />
                    </div>
                    <div className="mt-1 font-sans text-[11px] text-slate-500 dark:text-blue-200/70 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bento Tech Stack Interactive Badge Box */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a192f]/80 p-5 shadow-xl shadow-blue-950/5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5 mb-3">
                <span className="font-sans text-[11px] uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
                  Ecosystem Stack
                </span>
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {MARQUEE.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl border border-blue-200 dark:border-blue-800/60 bg-blue-50/60 dark:bg-blue-950/60 font-sans text-xs text-blue-900 dark:text-blue-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white transition-all cursor-default font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}







