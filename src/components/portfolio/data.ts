export const SECTIONS = [
  { id: "about", label: "about", num: "01" },
  { id: "approach", label: "approach", num: "02" },
  { id: "experience", label: "experience", num: "03" },
  { id: "projects", label: "projects", num: "04" },
  { id: "skills", label: "skills", num: "05" },
  { id: "contact", label: "contact", num: "06" },
] as const;

export const STATS = [
  { value: 3, suffix: "", label: "product verticals shipped" },
  { value: 50, suffix: "+", label: "tour packages logic built" },
  { value: 6, suffix: "", label: "certifications earned" },
  { value: 2027, suffix: "", label: "graduating (B.Sc Hons)", raw: true },
];

export const MARQUEE = [
  "React",
  "Node.js",
  "Laravel",
  "MySQL",
  "MongoDB",
  "C# / .NET",
  "TypeScript",
  "NestJS",
  "Next.js",
  "PostgreSQL",
];

export const ABOUT_PARAGRAPHS = [
  "I'm a final-year Computer Science and Software Engineering undergraduate, currently interning as a Software Engineer with hands-on experience across the stack — from RESTful API design in PHP/Laravel to building interfaces with React, alongside additional experience in C#/.NET.",
  "I use AI-assisted tools like GitHub Copilot, ChatGPT and Cursor daily to move faster, but I make sure I understand every line that ships. I'm currently expanding into TypeScript, NestJS, Next.js and PostgreSQL to match modern full-stack expectations — and I say so plainly rather than padding a CV with tools I can't defend in an interview.",
  "Outside coursework, I've built production-style personal projects across ed-tech, booking platforms and freelance client work, and competed in hackathons and competitive programming.",
];

export const QUICK_FACTS = [
  ["Location", "Jaffna, LK"],
  ["Education", "B.Sc (Hons) CS & SE"],
  ["University", "SLIIT City (UoB, UK)"],
  ["Graduating", "May 2027"],
  ["Languages", "English, Tamil"],
  ["Focus", "Full-Stack Dev"],
];

export const APPROACH = [
  {
    num: "01",
    title: "Understand the problem",
    body: "Before writing a line, I map the data flow and the real user — like scoping bank-card offers, vehicles and events as separate verticals on Offero.lk rather than one generic module.",
  },
  {
    num: "02",
    title: "Build with the right tools",
    body: "React, Laravel, Node.js or C# depending on fit — with Copilot and Cursor accelerating the repetitive parts, while I stay accountable for every line that ships.",
  },
  {
    num: "03",
    title: "Ship and iterate honestly",
    body: "I track what actually works in production — like improving real-time deal-tracking reliability — and I'm upfront about what's still a work in progress.",
  },
];

export const EXPERIENCE = {
  role: "Intern Software Engineer",
  company: "CodeVita (Pvt) Ltd.",
  date: "Aug 2025 – Jan 2026",
  subtitle:
    "Offero.lk — Sri Lankan deals platform for bank cards, vehicles, properties & events",
  bullets: [
    "Led frontend development for a multi-category platform spanning Vehicles, Properties and Events, delivering a fully responsive UI used across 3 product verticals.",
    "Built and maintained backend APIs and modules for Bank Card Offers, User Management and Events using PHP/MySQL, following REST conventions and MVC architecture.",
    "Optimized data flow between user dashboards and backend services, improving real-time deal-tracking reliability across the platform.",
    "Used AI-assisted development tools throughout the development lifecycle to speed up implementation and debugging while maintaining code quality.",
  ],
};

export const PROJECTS = [
  {
    title: "Learning Management System",
    path: "~/projects/lms.abishanan.dev",
    body: "A dual-access educational platform: a public, login-free 'Knowledge Hub' and a credential-gated 'Learning Hub' for enrolled students. Includes a teacher/admin dashboard for managing enrollments, uploading academic papers, and configuring interactive quizzes.",
    tags: ["React", "Admin Dashboard", "Quiz Engine"],
  },
  {
    title: "Kalappai",
    path: "~/projects/kalappai.dev",
    body: "Studio booking & portfolio platform for photography/cinematography studios, with categorized media galleries and calendar-based booking.",
    tags: ["React", "Laravel", "Payments"],
  },
  {
    title: "Wanlanka",
    path: "~/projects/wanlanka",
    body: "Travel booking platform managing 50+ customizable tour packages — transport, accommodation, guides — with dynamic pricing logic.",
    tags: ["Laravel", "MySQL", "Dynamic Pricing"],
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "Java", "Python", "PHP", "C#", "SQL"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express", "Laravel", ".NET (C#)", "Tailwind CSS"],
  },
  {
    group: "Databases & Tools",
    items: ["MySQL", "MongoDB", "MS SQL Server", "Git", "Postman", "Jira"],
  },
  {
    group: "Actively Ramping Up On",
    items: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Docker", "Prisma"],
  },
];

export const CERTS = [
  "Problem Solving (Basic) — HackerRank",
  "Python (Basic) — HackerRank",
  "C# (Basic) — HackerRank",
  "Python for Beginners — University of Moratuwa (CODL)",
  "Front-End Web Development — University of Moratuwa (CODL)",
  "Web Design for Beginners — University of Moratuwa (CODL)",
];

export const CONTACTS = [
  { label: "abishanan123@gmail.com", href: "mailto:abishanan123@gmail.com" },
  { label: "+94 71 134 6376", href: "tel:+94711346376" },
  { label: "github.com/AbiMabi1011", href: "https://github.com/AbiMabi1011" },
  { label: "abishanan.dev", href: "https://abishanan.dev" },
];
