import { MARQUEE } from "./data";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y border-line bg-surface py-4">
      <div
        className="flex w-max gap-10 whitespace-nowrap will-change-transform motion-reduce:animate-none"
        style={{ animation: "marquee 26s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm text-ink-soft"
          >
            {item}
            <span aria-hidden className="text-amber">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
