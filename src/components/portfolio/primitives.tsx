import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 font-sans text-[11px] font-bold tracking-widest text-blue-700 dark:text-blue-300 uppercase shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  label,
  title,
  className,
  children,
}: {
  id: string;
  label: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-28 py-20 md:py-28 transition-all", className)}
      initial={reduced ? false : { opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          {title ? (
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight font-bold text-[#0a192f] dark:text-white md:text-[40px]">
              {title}
            </h2>
          ) : null}
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </motion.section>
  );
}

/** Button/link that shifts slightly toward the cursor. */
export function Magnetic({
  children,
  className,
  href,
  onClick,
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    });
  };

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: "transform 180ms cubic-bezier(0.22,1,0.36,1)",
  };
  const shared = {
    className: cn("focus-ring inline-flex items-center justify-center", className),
    style,
    onMouseMove: handleMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
  };

  if (href) {
    return (
      <a
        {...shared}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button {...shared} ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export function CountUp({
  to,
  suffix = "",
  raw = false,
  start,
}: {
  to: number;
  suffix?: string;
  raw?: boolean;
  start: boolean;
}) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(start || reduced ? to : 0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let frame = 0;
    const duration = 1200;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, to, reduced]);

  return (
    <span>
      {raw ? value : value.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState("");
  const reduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn("transition-shadow duration-300", className)}
      style={{
        transform: t,
        transition: "transform 250ms cubic-bezier(0.22,1,0.36,1), box-shadow 250ms ease",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setT(`perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`);
      }}
      onMouseLeave={() => setT("")}
    >
      {children}
    </div>
  );
}
