import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "./data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-[3px] z-40 border-b transition-all duration-300 backdrop-blur-xl",
          scrolled
            ? "border-slate-800 bg-[#071324]/95 py-3 shadow-xl shadow-black/50"
            : "border-slate-800/60 bg-[#071324]/85 py-4",
        )}
      >
        <div className="flex w-full items-center justify-between px-6 md:px-12">
          <a href="#top" className="focus-ring font-display text-base font-bold text-white tracking-wide flex items-center gap-1.5 group">
            <span className="text-blue-500 group-hover:scale-110 transition-transform">⚡</span>
            <span>abishanan</span>
            <span className="text-blue-400">.</span>
            <span className="font-mono text-xs font-normal text-blue-300/80">dev</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "focus-ring group font-sans text-xs transition-colors py-1",
                  active === s.id ? "text-white font-bold" : "text-slate-300 hover:text-white",
                )}
              >
                <span className="text-blue-400 font-bold">{s.num}</span> {s.label}
                <span
                  className={cn(
                    "mt-1 block h-[2px] origin-left bg-blue-500 transition-transform duration-300",
                    active === s.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50",
                  )}
                />
              </a>
            ))}
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 font-sans text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hire Me</span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="focus-ring rounded-xl border border-slate-800 bg-[#071324] p-2.5 text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 border-t border-slate-800 bg-[#071324] px-6 py-5 md:hidden shadow-2xl">
            <ul className="space-y-4">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="focus-ring block font-sans text-sm font-semibold text-slate-200 hover:text-white"
                  >
                    <span className="text-blue-400 mr-2">{s.num}</span> {s.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-sans text-xs font-bold text-white shadow-md"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Hire Me</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Side Dot Navigation */}
      <nav
        aria-label="Section navigation"
        className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3.5 lg:flex"
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            className="focus-ring group flex items-center gap-2.5"
          >
            <span className="pointer-events-none font-sans text-xs font-semibold text-blue-300 opacity-0 transition-opacity group-hover:opacity-100 bg-[#071324]/90 border border-slate-800 px-2 py-0.5 rounded-md shadow-sm">
              {s.label}
            </span>
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                active === s.id
                  ? "h-3 w-3 bg-blue-500 shadow-md shadow-blue-500/50 scale-110"
                  : "h-2 w-2 bg-slate-600 hover:bg-blue-400",
              )}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
