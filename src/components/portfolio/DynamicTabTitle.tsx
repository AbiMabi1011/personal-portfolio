import { useEffect } from "react";

export function DynamicTabTitle() {
  useEffect(() => {
    const titles = [
      "⚡ Abishanan Pathmarajah — Full-Stack Software Engineer",
      "🚀 React • Node.js • Laravel • C#/.NET",
      "💼 Open for Full-Stack Software Roles",
      "✨ Building Scalable Digital Platforms",
    ];

    let index = 0;
    let intervalId: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "👋 Come Back! — Abishanan Pathmarajah";
      } else {
        document.title = titles[index];
      }
    };

    // Cycle titles every 4 seconds when active
    intervalId = setInterval(() => {
      if (!document.hidden) {
        index = (index + 1) % titles.length;
        document.title = titles[index];
      }
    }, 4000);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
