import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CountUp, Magnetic } from "./primitives";
import { STATS } from "./data";

type Step = { cmd: string; out?: string; progress?: boolean; done?: string };

const STEPS: Step[] = [
  { cmd: "whoami", out: "abishanan_pathmarajah" },
  { cmd: "role --current", out: "Software Engineer Intern · Final-year CS & SE undergrad" },
  { cmd: "stack --primary", out: "React · Node.js · Laravel · MySQL / MongoDB" },
  {
    cmd: "build ./portfolio --prod",
    progress: true,
    done: "✓ Build successful — welcome.",
  },
];

const BAR_WIDTH = 28;

function Clock() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono text-[11px] text-white/40 tabular-nums">{now}</span>;
}

export function Hero() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(reduced ? STEPS.length : 0);
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "output">(reduced ? "output" : "typing");
  const [progress, setProgress] = useState(reduced ? 100 : 0);
  const finished = step >= STEPS.length;

  useEffect(() => {
    if (reduced || finished) return;
    const current = STEPS[step]!;

    if (phase === "typing") {
      if (chars < current.cmd.length) {
        const id = setTimeout(() => setChars((c) => c + 1), 38);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase("output"), 260);
      return () => clearTimeout(id);
    }

    if (current.progress) {
      if (progress < 100) {
        const id = setTimeout(() => setProgress((p) => Math.min(100, p + 4)), 40);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setStep((s) => s + 1), 500);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setStep((s) => s + 1);
      setChars(0);
      setPhase("typing");
    }, 380);
    return () => clearTimeout(id);
  }, [reduced, finished, step, chars, phase, progress]);

  const filled = Math.round((progress / 100) * BAR_WIDTH);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto w-full max-w-[1160px] px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[18px] bg-ink shadow-[0_40px_80px_-30px_rgba(20,24,28,0.45)]">
          <div className="pointer-events-none absolute inset-0 grid-bg-dark" aria-hidden />

          {/* top bar */}
          <div className="relative flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </span>
            <span className="font-mono text-[11px] text-white/50">abishanan — zsh</span>
            <span className="ml-auto">
              <Clock />
            </span>
          </div>

          <div className="relative px-5 py-6 md:px-10 md:py-10">
            {/* boot log */}
            <div className="font-mono text-[13px] leading-relaxed md:text-sm">
              {STEPS.map((s, i) => {
                if (i > step) return null;
                const isCurrent = i === step;
                const text = isCurrent && !reduced && phase === "typing" ? s.cmd.slice(0, chars) : s.cmd;
                const showOut = !isCurrent || reduced || phase === "output";
                return (
                  <div key={s.cmd} className="mb-1.5">
                    <p className="text-white/85">
                      <span className="text-blue">$</span> {text}
                      {isCurrent && !reduced && phase === "typing" && (
                        <span
                          className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-white/80"
                          style={{ animation: "blink 1s step-end infinite" }}
                        />
                      )}
                    </p>
                    {showOut && s.out && (
                      <p className="text-term-green">
                        <span className="text-white/30">→</span> {s.out}
                      </p>
                    )}
                    {showOut && s.progress && (
                      <>
                        <p className="text-white/60">
                          <span className="text-white/30">→</span>{" "}
                          <span className="text-amber">
                            {"█".repeat(filled)}
                            <span className="text-white/25">{"·".repeat(BAR_WIDTH - filled)}</span>
                          </span>{" "}
                          <span className="tabular-nums">{progress}%</span>
                        </p>
                        {progress === 100 && s.done && (
                          <p className="text-term-green">
                            <span className="text-white/30">→</span> {s.done}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* hero content */}
            {finished && (
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 border-t border-white/10 pt-10"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-term-green/30 bg-term-green/10 px-3 py-1 font-mono text-[11px] text-term-green">
                  ✓ build successful — 1.4s
                </span>
                <h1 className="mt-6 max-w-3xl font-display text-[34px] leading-[1.08] font-bold text-white sm:text-[42px] md:text-[52px]">
                  Building{" "}
                  <span className="bg-gradient-to-r from-[#6f86ff] to-blue bg-clip-text text-transparent">
                    full-stack
                  </span>{" "}
                  software that ships — not just compiles.
                </h1>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                  Computer Science undergraduate and intern software engineer from Jaffna, Sri
                  Lanka. React, Node.js and Laravel by day — honest about what I'm still learning,
                  always.
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <dt className="font-display text-3xl font-bold text-white tabular-nums">
                        <CountUp to={s.value} suffix={s.suffix} raw={s.raw ?? false} start />
                      </dt>
                      <dd className="mt-1 font-mono text-[11px] leading-snug text-white/45">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Magnetic
                    href="#projects"
                    className="rounded-xl bg-white px-5 py-3 font-mono text-[13px] font-medium text-ink hover:bg-white/90"
                  >
                    $ view ./projects
                  </Magnetic>
                  <Magnetic
                    href="#contact"
                    className="rounded-xl border border-white/25 px-5 py-3 font-mono text-[13px] font-medium text-white/80 hover:border-white/50 hover:text-white"
                  >
                    $ ./contact.sh
                  </Magnetic>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {finished && (
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 text-center font-mono text-[11px] text-ink-soft"
          >
            <span style={{ animation: "blink 1.6s step-end infinite" }}>scroll to explore ↓</span>
          </motion.p>
        )}
      </div>
    </section>
  );
}
