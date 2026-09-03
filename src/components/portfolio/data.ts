import ultrakerbLogo from "@/images/ultrakerb.png";
import codevitaLogo from "@/images/codevita logo.png";

export const SECTIONS = [
  { id: "about", label: "about", num: "01" },
  { id: "approach", label: "approach", num: "02" },
  { id: "experience", label: "experience", num: "03" },
  { id: "projects", label: "projects", num: "04" },
  { id: "skills", label: "skills", num: "05" },
  { id: "contact", label: "contact", num: "06" },
] as const;

export const STATS = [
  { value: 2, suffix: "", label: "internships completed" },
  { value: 3, suffix: "+", label: "product verticals shipped" },
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
  ["Education", "B.Sc (Hons) CS"],
  ["University", "SLIIT City (UoB, UK)"],
  ["Graduating", "May 2027"],
  ["Languages", "English, Tamil"],
  ["Focus", "Software Engineering"],
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

export interface ExperienceItem {
  role: string;
  company: string;
  logo: string;
  location: string;
  date: string;
  subtitle: string;
  impact: string[];
  techStack: string[];
  bullets: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "UltraKerb",
    logo: ultrakerbLogo,
    location: "Classmate Tech Startup",
    date: "Feb 1 – Jul 31, 2026",
    subtitle: "Full-Stack Software Engineering & Application Development",
    impact: ["⚡ Startup Velocity", "🔄 Full-Stack APIs", "🤝 Founder Collaboration"],
    techStack: ["React", "Node.js", "REST APIs", "Full-Stack", "Startup Environment"],
    bullets: [
      "Engineered full-stack web architecture and user-facing features in a fast-paced tech startup environment.",
      "Developed responsive frontend modules and optimized RESTful APIs in direct collaboration with company founders.",
      "Implemented database schemas, authentication workflows, and core application business logic."
    ]
  },
  {
    role: "Intern Software Engineer",
    company: "CodeVita (Pvt) Ltd.",
    logo: codevitaLogo,
    location: "Jaffna / Colombo, LK",
    date: "Aug 1, 2025 – Jan 31, 2026",
    subtitle: "Offero.lk — Multi-vertical promotional platform for bank card deals, vehicles, properties & events",
    impact: ["📈 3 Verticals Shipped", "💳 Bank Deals Engine", "⚡ Real-Time Deal Sync"],
    techStack: ["PHP", "Laravel", "React", "MySQL", "REST API"],
    bullets: [
      "Led frontend development for a multi-category platform spanning Vehicles, Properties and Events, delivering a fully responsive UI across 3 product verticals.",
      "Built and maintained backend APIs and modules for Bank Card Offers, User Management and Events using PHP/MySQL, following REST conventions.",
      "Optimized data flow between user dashboards and backend services, improving real-time deal-tracking reliability across the platform.",
      "Used AI-assisted development tools throughout the lifecycle to accelerate implementation while keeping code maintainable."
    ]
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "Ed-Tech" | "Booking Platform" | "E-Commerce & Deals" | "Full-Stack System";
  path: string;
  body: string;
  longDescription: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  highlights: string[];
  metrics?: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "lms",
    title: "Intelligent Physics LMS",
    category: "Ed-Tech",
    path: "~/projects/intelligent-physics",
    image: "/images/lms_preview.jpg",
    demoUrl: "https://intelligentphy.netlify.app/",
    githubUrl: "https://github.com/AbiMabi1011",
    body: "Comprehensive Learning Management System built for Intelligent Physics — featuring a public Knowledge Hub and credential-gated student portal with study materials, online exams, and admin management.",
    longDescription: "Engineered a dedicated LMS platform for Intelligent Physics. Features an interactive learning portal, paper and study note archives, dynamic student assessment modules, and an intuitive admin panel for class and resource management.",
    tags: ["React", "LMS", "Admin Dashboard", "Ed-Tech", "REST API"],
    highlights: [
      "Credential-gated student portal with role-based routing",
      "Interactive physics resource library and study material distribution",
      "Teacher and admin control panel for class and syllabus management"
    ],
    metrics: ["Physics LMS", "Live Platform", "Student Portal"]
  },
  {
    id: "bright-brain",
    title: "Bright Brain — IT Solutions",
    category: "Full-Stack System",
    path: "~/projects/bright-brain",
    image: "/images/lms_preview.jpg",
    demoUrl: "https://bright-brain.abishanan123.workers.dev/",
    githubUrl: "https://github.com/AbiMabi1011",
    body: "Modern, responsive agency portfolio website for Bright Brain IT Solutions, presenting enterprise software services, client case studies, and automated inquiry channels.",
    longDescription: "Developed the corporate web presence for Bright Brain IT Solutions. Designed with high-performance animations, responsive layouts, service catalog showcases, and seamless client communication workflows.",
    tags: ["React", "TypeScript", "Cloudflare Workers", "Tailwind CSS", "Portfolio"],
    highlights: [
      "Modern agency portfolio with dynamic service showcases",
      "Optimized edge deployment on Cloudflare Workers",
      "Interactive contact and business inquiry channels"
    ],
    metrics: ["IT Solutions", "Edge Deployed", "High Performance"]
  },
  {
    id: "kalappai",
    title: "Kalappai Studio Booking & Admin",
    category: "Booking Platform",
    path: "~/projects/kalappai",
    image: "/images/kalappai_preview.jpg",
    demoUrl: "https://kalappai.abishanan123.workers.dev/",
    githubUrl: "https://github.com/AbiMabi1011",
    body: "Full-stack studio management platform equipped with an administrative panel for overseeing studio booking schedules, client sessions, and categorized media portfolios.",
    longDescription: "Complete full-stack system built for photography and cinematography studios. Features interactive calendar booking, automated slot reservations, comprehensive admin console for managing client activities, and portfolio galleries.",
    tags: ["React", "Admin Panel", "Booking System", "Cloudflare Workers", "Full-Stack"],
    highlights: [
      "Complete admin dashboard to manage bookings & studio activities",
      "Interactive date & time slot booking engine",
      "Categorized high-definition cinematography & photo gallery"
    ],
    metrics: ["Admin Panel", "Live Booking", "Studio Management"]
  },
  {
    id: "offero",
    title: "Offero.lk Deals & Offers Platform",
    category: "E-Commerce & Deals",
    path: "~/projects/offero.lk",
    image: "/images/offero_preview.jpg",
    demoUrl: "https://offero.lk",
    githubUrl: "https://github.com/AbiMabi1011",
    body: "Multi-category promotional platform spanning Bank Card Offers, Vehicles, Properties, and Events. Optimized data flow between front-end deal feeds and backend micro-services.",
    longDescription: "Built during my internship at CodeVita, Offero.lk aggregates bank card promotions and marketplace listings across Sri Lanka. Built scalable backend APIs in PHP/MySQL following MVC patterns, and delivered a responsive React dashboard with live filtering.",
    tags: ["React", "PHP / Laravel", "MySQL", "REST API", "Tailwind CSS"],
    highlights: [
      "Bank Card promotions engine with bank-specific filtering",
      "Multi-vertical backend API for Vehicles, Properties & Events",
      "Real-time offer expiration & deal tracking dashboard"
    ],
    metrics: ["3 Main Verticals", "10+ Partner Banks", "Real-Time Tracking"]
  }
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

export interface CertificationItem {
  title: string;
  issuer: "HackerRank" | "University of Moratuwa (CODL)" | "Industry Standard";
  category: "Problem Solving" | "Programming" | "Web Engineering";
  skills: string[];
  credentialId?: string;
  date: string;
  score?: string;
  verifyUrl?: string;
  description: string;
}

export const CERTS: CertificationItem[] = [
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    category: "Problem Solving",
    date: "Verified 2025",
    score: "Gold Badge Level",
    skills: ["Data Structures", "Algorithms", "Optimization", "Time Complexity"],
    credentialId: "HACKERRANK-PS-BASIC",
    verifyUrl: "https://www.hackerrank.com/certificates",
    description: "Evaluated competency across foundational data structures, recursive problem solving, dynamic optimization, and algorithmic efficiency."
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    category: "Programming",
    date: "Verified 2025",
    score: "Top Percentile",
    skills: ["Python 3", "OOP Concepts", "Scripting", "Data Manipulation"],
    credentialId: "HACKERRANK-PY-BASIC",
    verifyUrl: "https://www.hackerrank.com/certificates",
    description: "Assessed understanding of Python core semantics, object-oriented principles, functional patterns, and robust exception handling."
  },
  {
    title: "C# (Basic)",
    issuer: "HackerRank",
    category: "Programming",
    date: "Verified 2025",
    score: "Certified",
    skills: [".NET Ecosystem", "C#", "Object-Oriented Design", "LINQ"],
    credentialId: "HACKERRANK-CSHARP-BASIC",
    verifyUrl: "https://www.hackerrank.com/certificates",
    description: "Demonstrated practical proficiency in C# language syntax, memory safety, class hierarchies, interfaces, and LINQ queries."
  },
  {
    title: "Front-End Web Development",
    issuer: "University of Moratuwa (CODL)",
    category: "Web Engineering",
    date: "Completed 2024",
    score: "Distinction Grade",
    skills: ["JavaScript (ES6+)", "HTML5 / Semantic Web", "Modern CSS", "Responsive Design"],
    credentialId: "UOM-CODL-FE",
    verifyUrl: "https://codl.lk/",
    description: "Comprehensive front-end engineering program covering modern browser architecture, DOM lifecycle, responsive layouts, and modern CSS."
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa (CODL)",
    category: "Programming",
    date: "Completed 2024",
    score: "Honors",
    skills: ["Core Syntax", "Problem Logic", "Automation", "File I/O"],
    credentialId: "UOM-CODL-PY",
    verifyUrl: "https://codl.lk/",
    description: "Structured academic training in computational thinking, procedural programming, structured logic, and automated script pipelines."
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa (CODL)",
    category: "Web Engineering",
    date: "Completed 2024",
    score: "Certificate of Completion",
    skills: ["UI / UX Principles", "CSS Styling", "Web Layouts", "Accessibility"],
    credentialId: "UOM-CODL-WD",
    verifyUrl: "https://codl.lk/",
    description: "Core principles of user interface ergonomics, typography hierarchy, visual contrast ratios, and cross-browser consistency."
  },
];

export const CONTACTS = [
  { label: "abishanan123@gmail.com", href: "mailto:abishanan123@gmail.com" },
  { label: "+94 71 134 6376", href: "tel:+94711346376" },
  { label: "github.com/AbiMabi1011", href: "https://github.com/AbiMabi1011" },
  { label: "abishanan.dev", href: "https://abishanan.dev" },
];
