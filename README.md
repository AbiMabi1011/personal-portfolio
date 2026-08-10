# Abishanan's Digital Studio

# Lovable Build Prompt — Abishanan Pathmarajah Portfolio

Paste everything below into Lovable as your first prompt.

---

Build a single-page personal portfolio site for a software engineer, using React + Tailwind CSS + Framer Motion. Light theme only. The whole site should feel like a clean, modern developer's website — precise, technical, confident — not a generic template with a cream background and serif headings.

## Design tokens

**Colors**
- `--paper: #FAFAF7` (page background)
- `--surface: #FFFFFF` (card background)
- `--ink: #14181C` (primary text / dark surfaces)
- `--ink-soft: #5C6570` (secondary text)
- `--line: #E4E1DA` (borders/dividers)
- `--blue: #3452FF` (primary accent)
- `--blue-soft: #EDF0FF` (accent background/tags)
- `--amber: #FF7A29` (secondary accent, used sparingly for prompts/highlights)
- `--amber-soft: #FFF1E6`

**Typography**
- Display/headings: `Space Grotesk` (600–800 weight)
- Body: `Inter` (400–600 weight)
- Mono (labels, nav numbers, code, terminal, tags): `JetBrains Mono` (400–600 weight)

**Layout**
- Max content width ~1160px, generous whitespace, 14–18px border-radius on cards, subtle faint grid-pattern background (1px lines, 56px grid, low opacity, masked/faded toward the edges) behind the whole page.
- Section labels are styled like code comments: `// about`, `// projects`, etc., in mono font, blue color.

## Signature hero — a live terminal boot sequence

This is the one big distinctive moment of the page, so give it real craft. The entire hero is a dark terminal window (`#14181C` background, rounded corners, big soft drop shadow) that "boots" on page load:

1. Terminal top bar: 3 traffic-light dots (red/yellow/green), a tab label "abishanan — zsh", and a live clock ticking on the right.
2. Inside, a typed command-line sequence runs automatically, one line at a time, real character-by-character typing for commands, with `→` prefixed instant output lines in green monospace:
   - `$ whoami` → `abishanan_pathmarajah`
   - `$ role --current` → `Software Engineer Intern · Final-year CS & SE undergrad`
   - `$ stack --primary` → `React · Node.js · Laravel · MySQL / MongoDB`
   - `$ build ./portfolio --prod` → an animated ASCII progress bar filling with block characters (`█`/`·`) up to 100%, then `✓ Build successful — welcome.`
3. Once the boot log finishes, fade/slide in (from below, ~20px, opacity 0→1) the actual hero content **inside the same terminal card**, below the log:
   - A small green "✓ build successful — 1.4s" tag
   - Big headline (Space Grotesk, ~52px, white/off-white): "Building **full-stack** software that ships — not just compiles." (the word "full-stack" in a blue gradient)
   - Sub paragraph: "Computer Science undergraduate and intern software engineer from Jaffna, Sri Lanka. React, Node.js and Laravel by day — honest about what I'm still learning, always."
   - A row of 4 animated count-up stats: `3` product verticals shipped · `50+` tour packages logic built · `6` certifications earned · `2027` graduating (B.Sc Hons) — numbers should count up from 0 when revealed.
   - Two CTA buttons styled like terminal commands: `$ view ./projects` (filled/light button) and `$ ./contact.sh` (outline button), both with a subtle magnetic hover effect (button shifts slightly toward the cursor).
4. A small blinking "scroll to explore ↓" hint fades in below the terminal card after the boot finishes.
5. Respect `prefers-reduced-motion`: skip the typing animation and just show the finished state immediately.

## Sections (in order, all on the light `--paper` background outside the hero)

Below the hero, an infinite auto-scrolling horizontal marquee strip (bordered top/bottom, white background) cycling through: React · Node.js · Laravel · MySQL · MongoDB · C# / .NET · TypeScript · NestJS · Next.js · PostgreSQL.

### About (`// about`)
Two-column layout. Left: 3 short paragraphs of bio copy (see content below). Right: a bordered "Quick facts" card with rows for Location, Education, University, Graduating, Languages, Focus.

### Approach (`// approach`)
Section titled "How I work through a build." Three cards in a row, each with a large outlined number (01/02/03), a short title, and a sentence — "Understand the problem", "Build with the right tools", "Ship and iterate honestly" (see content below).

### Experience (`// experience`)
Section titled "Where I've put the theory to work." One card with a colored left border (blue-to-amber gradient), role title, date pill, company/subtitle line, and a bulleted list of 4 achievements (chevron `›` bullets).

### Projects (`// projects`)
Section titled "A few things I've built end to end." Cards styled like file tabs — a top bar with 3 small dots and a mono file path (e.g. `~/projects/lms.abishanan.dev`), then title, description, and tag pills below. One large full-width featured card + two side-by-side cards below it. Cards should have a subtle 3D tilt on mouse move (rotate based on cursor position relative to card center) and lift with a shadow on hover.

### Skills (`// skills`)
Section titled "The stack I work in, and what's next." Four groups in a 2×2 grid: Languages, Frameworks & Libraries, Databases & Tools, and "Actively Ramping Up On" — each a set of pill tags that highlight blue on hover.

### Certifications (`// certifications`)
Section titled "Verified, incremental learning." A 2-column grid of small cards, each with a checkmark and a certification name.

### Contact (`// contact`)
A large dark card (matches hero's `--ink` background, faint grid pattern overlay) with centered content: "Let's build something worth shipping.", a short line about being open to full-stack internships, and pill-style links for email, phone, GitHub, and portfolio — each with the same magnetic hover effect as the hero buttons.

## Navigation & scroll behavior

- Fixed header, blurred/translucent background, shrinks slightly in height once the page is scrolled.
- Nav links: about / approach / experience / projects / skills / contact, each prefixed with a mono number (01–06). Active link underlines based on scroll position (scrollspy).
- A thin gradient progress bar (blue → amber) fixed at the very top of the viewport, filling as the user scrolls down the page.
- A vertical dot navigation fixed to the right edge of the screen (desktop only) with one dot per section; active dot enlarges and turns blue; hovering a dot reveals its label.
- All sections fade/slide up into view on scroll (staggered, ~30px offset, using an intersection observer or Framer Motion's `whileInView`).
- Smooth scrolling for anchor links.
- Mobile: hamburger menu, dot-nav hidden, all grids collapse to a single column.

## Content — use this real content, don't invent placeholder text

**Name:** Abishanan Pathmarajah
**Location:** Jaffna, Sri Lanka
**Email:** abishanan123@gmail.com
**Phone:** +94 71 134 6376
**GitHub:** https://github.com/AbiMabi1011
**Portfolio:** https://abishanan.dev

**About paragraphs:**
"I'm a final-year Computer Science and Software Engineering undergraduate, currently interning as a Software Engineer with hands-on experience across the stack — from RESTful API design in PHP/Laravel to building interfaces with React, alongside additional experience in C#/.NET."
"I use AI-assisted tools like GitHub Copilot, ChatGPT and Cursor daily to move faster, but I make sure I understand every line that ships. I'm currently expanding into TypeScript, NestJS, Next.js and PostgreSQL to match modern full-stack expectations — and I say so plainly rather than padding a CV with tools I can't defend in an interview."
"Outside coursework, I've built production-style personal projects across ed-tech, booking platforms and freelance client work, and competed in hackathons and competitive programming."

**Quick facts:** Location: Jaffna, LK · Education: B.Sc (Hons) CS & SE · University: SLIIT City (UoB, UK) · Graduating: May 2027 · Languages: English, Tamil · Focus: Full-Stack Dev

**Approach cards:**
1. Understand the problem — "Before writing a line, I map the data flow and the real user — like scoping bank-card offers, vehicles and events as separate verticals on Offero.lk rather than one generic module."
2. Build with the right tools — "React, Laravel, Node.js or C# depending on fit — with Copilot and Cursor accelerating the repetitive parts, while I stay accountable for every line that ships."
3. Ship and iterate honestly — "I track what actually works in production — like improving real-time deal-tracking reliability — and I'm upfront about what's still a work in progress."

**Experience:**
Intern Software Engineer — CodeVita (Pvt) Ltd. · Aug 2025 – Jan 2026
Offero.lk — Sri Lankan deals platform for bank cards, vehicles, properties & events
- Led frontend development for a multi-category platform spanning Vehicles, Properties and Events, delivering a fully responsive UI used across 3 product verticals.
- Built and maintained backend APIs and modules for Bank Card Offers, User Management and Events using PHP/MySQL, following REST conventions and MVC architecture.
- Optimized data flow between user dashboards and backend services, improving real-time deal-tracking reliability across the platform.
- Used AI-assisted development tools throughout the development lifecycle to speed up implementation and debugging while maintaining code quality.

**Projects:**
1. Learning Management System — `~/projects/lms.abishanan.dev` — "A dual-access educational platform: a public, login-free 'Knowledge Hub' and a credential-gated 'Learning Hub' for enrolled students. Includes a teacher/admin dashboard for managing enrollments, uploading academic papers, and configuring interactive quizzes." Tags: React, Admin Dashboard, Quiz Engine.
2. Kalappai — `~/projects/kalappai.dev` — "Studio booking & portfolio platform for photography/cinematography studios, with categorized media galleries and calendar-based booking." Tags: React, Laravel, Payments.
3. Wanlanka — `~/projects/wanlanka` — "Travel booking platform managing 50+ customizable tour packages — transport, accommodation, guides — with dynamic pricing logic." Tags: Laravel, MySQL, Dynamic Pricing.

**Skills:**
- Languages: JavaScript (ES6+), Java, Python, PHP, C#, SQL
- Frameworks & Libraries: React.js, Node.js, Express, Laravel, .NET (C#), Tailwind CSS
- Databases & Tools: MySQL, MongoDB, MS SQL Server, Git, Postman, Jira
- Actively Ramping Up On: TypeScript, NestJS, Next.js, PostgreSQL, Docker, Prisma

**Certifications:**
- Problem Solving (Basic) — HackerRank
- Python (Basic) — HackerRank
- C# (Basic) — HackerRank
- Python for Beginners — University of Moratuwa (CODL)
- Front-End Web Development — University of Moratuwa (CODL)
- Web Design for Beginners — University of Moratuwa (CODL)

**Contact card copy:** "Let's build something worth shipping." / "Open to full-stack engineering internships and collaborative, product-driven teams. Reach out — I reply fast."

**Footer:** "© 2026 Abishanan Pathmarajah · designed & coded by hand, accelerated with AI"

## Important constraints

- Do not fabricate or imply more years of experience, seniority, or accomplishments than what's listed above — this needs to stay honest and defensible in an interview.
- Fully responsive down to mobile.
- Visible keyboard focus states on all interactive elements.
- Keep the accent colors to blue/amber only — no cream/terracotta default palette, no dark-mode-only neon look.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/044389ca-f4bf-4f2f-979b-921aeb6f8b56).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
