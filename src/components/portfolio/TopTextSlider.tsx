import { MARQUEE } from "./data";

const ANNOUNCEMENTS = [
  "🚀 FULL-STACK SOFTWARE ENGINEER",
  "⚡ REACT • NODE.JS • LARAVEL • C#/.NET",
  "💡 OPEN FOR INTERNSHIPS & PRODUCT ROLES",
  "🎯 BUILDING HIGH-IMPACT DIGITAL ECOSYSTEMS",
  "🎓 B.Sc (HONS) CS UNDERGRADUATE",
  "📍 BASED IN JAFFNA, SRI LANKA",
];

export function TopTextSlider() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <div className="relative pt-16 z-30">
      <div className="overflow-hidden border-y border-blue-900/50 bg-[#0a192f] py-2.5 shadow-lg shadow-blue-950/20 group">
        <div
          className="flex w-max gap-12 whitespace-nowrap will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee 55s linear infinite" }}
        >
          {items.map((text, i) => (
            <span
              key={`${text}-${i}`}
              className="flex items-center gap-12 font-mono text-xs font-semibold tracking-wider text-blue-100 uppercase"
            >
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                {text}
              </span>
              <span aria-hidden className="text-blue-500 font-bold text-sm">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
