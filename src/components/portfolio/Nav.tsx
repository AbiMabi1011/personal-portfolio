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
          className="h-full bg-gradient-to-r from-blue to-amber transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-[3px] z-40 border-b backdrop-blur-md transition-all duration-300",
          scrolled
            ? "border-line bg-paper/85 py-2.5"
            : "border-transparent bg-paper/50 py-4",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1160px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="focus-ring font-display text-sm font-bold text-ink">
            abishanan
            <span className="text-blue">.</span>
            <span className="font-mono text-xs font-normal text-ink-soft">dev</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "focus-ring group font-mono text-xs transition-colors",
                  active === s.id ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                <span className="text-blue/60">{s.num}</span> {s.label}
                <span
                  className={cn(
                    "mt-1 block h-px origin-left bg-blue transition-transform duration-300",
                    active === s.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50",
                  )}
                />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="focus-ring rounded-lg border border-line bg-surface p-2 text-ink md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 border-t border-line bg-paper px-5 py-4 md:hidden">
            <ul className="space-y-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="focus-ring block font-mono text-sm text-ink-soft"
                  >
                    <span className="text-blue/60">{s.num}</span> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* dot nav */}
      <nav
        aria-label="Section navigation"
        className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            className="focus-ring group flex items-center gap-2"
          >
            <span className="pointer-events-none font-mono text-[10px] text-ink-soft opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                active === s.id
                  ? "h-2.5 w-2.5 bg-blue"
                  : "h-1.5 w-1.5 bg-ink/25 group-hover:bg-ink/50",
              )}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
