import { useState } from "react";
import { Terminal as TerminalIcon, X, Send } from "lucide-react";
import { toast } from "sonner";

/** Floating Interactive CLI Terminal Drawer for visitors. */
export function InteractiveCliDrawer() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "welcome",
      output: "Type 'help' to view available developer CLI commands.",
    },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output = "";
    switch (cmd) {
      case "help":
        output = "Available commands:\n• whoami    - Abishanan profile summary\n• skills    - Primary tech stack & tools\n• projects  - Shipped full-stack platforms\n• experience - Work timeline at UltraKerb & CodeVita\n• contact   - Reach out directly\n• hire      - Quick hire inquiry\n• clear     - Clear terminal screen";
        break;
      case "whoami":
        output = "Abishanan Pathmarajah — Final-year B.Sc (Hons) Computer Science & Software Engineering undergraduate & Full-Stack Engineer based in Jaffna, LK.";
        break;
      case "skills":
        output = "Frontend: React, TypeScript, Next.js, Tailwind CSS\nBackend: Node.js, Express, PHP / Laravel, C# / .NET\nDatabases: MySQL, PostgreSQL, MongoDB, MS SQL Server";
        break;
      case "projects":
        output = "1. LMS Knowledge & Learning Hub\n2. Offero.lk Multi-Vertical Deals Platform\n3. Kalappai Studio Booking System\n4. Wanlanka Travel Booking Engine";
        break;
      case "experience":
        output = "• UltraKerb: Software Engineer (Feb 1 – Jul 31, 2026)\n• CodeVita (Pvt) Ltd.: Intern Software Engineer (Aug 1, 2025 – Jan 31, 2026)";
        break;
      case "contact":
        output = "Email: abishanan123@gmail.com | Phone: +94 71 134 6376 | Web: abishanan.dev";
        break;
      case "hire":
        output = "Redirecting to contact section...";
        toast.success("Let's build something great together!");
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: input, output }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-2xl bg-[#0a192f] hover:bg-blue-600 border border-blue-500/40 px-4 py-2.5 font-sans text-xs font-bold text-white shadow-2xl shadow-blue-950/40 transition-all hover:scale-105 cursor-pointer"
        title="Open Developer Terminal"
      >
        <TerminalIcon size={16} className="text-blue-400" />
        <span>Developer CLI</span>
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      </button>

      {/* Terminal Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-3xl border border-blue-800/80 bg-[#071324] shadow-2xl overflow-hidden text-slate-200">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-blue-900/60 bg-[#0a192f] px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <TerminalIcon size={16} className="text-blue-400" />
                <span className="font-mono text-xs font-bold text-white">abishanan@dev:~ interactive-cli</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs space-y-3 max-h-[350px] overflow-y-auto bg-[#040c18]">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-400">
                    <span>$</span>
                    <span className="text-white font-semibold">{h.cmd}</span>
                  </div>
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed text-[11px] pl-4 border-l border-blue-900/40">
                    {h.output}
                  </pre>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleCommand} className="flex items-center border-t border-blue-900/60 bg-[#0a192f] px-4 py-2.5">
              <span className="text-blue-400 font-mono text-xs mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help', 'skills', 'projects', 'hire'..."
                className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 font-mono focus:outline-none"
                autoFocus
              />
              <button type="submit" className="text-blue-400 hover:text-white p-1">
                <Send size={14} />
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
