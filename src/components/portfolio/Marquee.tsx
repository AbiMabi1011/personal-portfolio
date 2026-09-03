import { MARQUEE } from "./data";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#040c18] py-4">
      <div
        className="flex w-max gap-10 whitespace-nowrap will-change-transform motion-reduce:animate-none"
        style={{ animation: "marquee 26s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            {item}
            <span aria-hidden className="text-blue-600 dark:text-blue-400 font-bold">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

