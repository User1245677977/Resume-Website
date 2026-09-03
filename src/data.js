export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'employment', label: 'Employment' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const skills = [
  {
    name: 'JavaScript',
    description: "A dynamic, interpreted language originally built for the browser and now powering servers, mobile apps, and more through runtimes like Node.js. It's event-driven and asynchronous by design — which is exactly what lets a page respond instantly to clicks and updates without a full reload. It's the language behind almost everything I build, from the Boss Mode front end to the autonomous control code I wrote on the robotics team.",
  },
  {
    name: 'Python',
    description: "A high-level, dynamically typed language known for clean syntax and a massive ecosystem spanning data science, automation, and web backends. Its readability makes it a favorite for moving fast without sacrificing power — and it's the language that first pulled me into programming.",
  },
  {
    name: 'C++',
    description: 'A compiled, statically typed systems language that gives direct control over memory management and hardware resources — the low-level control that higher-level languages abstract away. It underlies game engines, operating systems, and performance-critical software. Learning it taught me how computers actually work under the hood.',
  },
  {
    name: 'React',
    description: "A declarative JavaScript library for building interfaces out of composable, stateful components, using a virtual DOM to efficiently update only what's changed on screen instead of re-rendering everything. It's the backbone of Bit Of Logic's reporting platform, the Boss Mode site, and this portfolio.",
  },
  {
    name: 'Mongoose',
    description: 'An Object Data Modeling (ODM) library that sits on top of MongoDB, layering schema-based structure — validation, type casting, query building — onto an otherwise schema-less database. I use it to keep backend data logic clean and predictable.',
  },
  {
    name: 'HTML / CSS',
    description: "HTML defines a page's semantic structure; CSS controls its visual presentation — layout, responsiveness, typography, and everything between. Together they're the substrate every website runs on, regardless of what framework sits on top.",
  },
  {
    name: 'SQL',
    description: "A declarative query language for relational databases, used to define, retrieve, and manipulate structured data through statements like SELECT, JOIN, and WHERE. I use it to query the centralized database behind Bit Of Logic's engine test-stand reporting platform.",
  },
  {
    name: 'REST APIs',
    description: 'An architectural style for networked applications where resources are exposed through predictable, stateless HTTP endpoints — GET, POST, PUT, DELETE. It\u2019s the standard contract that lets a front end and back end, or two entirely separate systems, talk to each other reliably.',
  },
  {
    name: 'System Design',
    description: "The discipline of architecting how a system's components — services, databases, data flow — fit together at scale, weighing tradeoffs like performance, reliability, and maintainability before a single line of code gets written.",
  },
  {
    name: 'Agile',
    description: 'An iterative development methodology built around short cycles, continuous feedback, and adapting scope as requirements evolve — rather than committing to a rigid plan upfront and hoping it survives contact with reality.',
  },
  {
    name: 'Git / GitHub',
    description: 'Git is a distributed version control system that tracks every change to a codebase, enabling branching, merging, and rollback. GitHub hosts that history in the cloud and layers on collaboration tooling \u2014 pull requests, code review, CI/CD pipelines \u2014 for teams working together.',
  },
  {
    name: 'Cloudflare Pages',
    description: 'A JAMstack hosting platform that builds and deploys sites directly from a GitHub repository, with automatic deploys on every push and a global CDN for fast delivery worldwide. It\u2019s where Boss Mode lives.',
  },
]

export const employment = [
  {
    id: 'bossmode',
    title: 'Computer Programmer',
    org: 'Bossmode.co',
    meta: 'May 2026 — Current · Little Elm, TX',
    summary: 'Shipped a pre-launch brand site and deployment pipeline; currently building an investor pitch platform for the same client.',
    desc: 'Designed and launched a fully responsive teaser site for a pre-launch functional beverage brand, including email capture and waitlist integration. Built a reusable component system and a custom design system to keep the codebase clean and scalable without a build step. Engineered a deployment pipeline using Cloudflare Pages and GitHub, so every push ships straight to production automatically. Currently building a second site for the same client — an investor pitch platform for high-profile investment conversations.',
  },
  {
    id: 'bitoflogic',
    title: 'Computer Programmer',
    org: 'Bit Of Logic',
    meta: 'Jul 2024 — Apr 2026 · Valley View, TX',
    summary: 'Built a reporting platform turning raw engine test-stand data into filterable, no-code reports on a centralized SQL database.',
    desc: 'Engineered a reporting platform that transforms raw engine test-stand data into actionable, digestible insights. Designed intuitive interfaces and flexible filtering tools that let users customize reports without writing a line of code. Streamlined data flow by integrating with a centralized SQL database, ensuring fast, reliable access to real-time test data. Built smart reporting features that support deep technical analysis and drive better decision-making across engineering and R&D teams — bridging the gap between complex data and everyday usability.',
  },
  {
    id: 'robotics',
    title: 'Robotics Programmer',
    org: 'FIRST Team 815',
    meta: 'Sep 2021 — Apr 2023 · Allen Park, MI',
    summary: 'Programmed two autonomous robots in JavaScript, with manual override via a standard Xbox controller.',
    desc: 'Collaborated with the high school computer programming team to develop software for two autonomous robots using JavaScript. Designed and implemented code enabling the robots to perform predefined tasks within a set timeframe, and programmed both to switch seamlessly between autonomous operation and manual control via a standard Xbox controller. Gained hands-on experience in problem-solving, algorithm development, and teamwork over two full academic years of competitive robotics.',
  },
]

export const education = [
  {
    institution: 'Massachusetts Institute of Technology',
    location: 'Boston, MA',
    credential: 'Professional Certificate in Coding: Full Stack Development with MERN',
    date: 'June 2026',
    badge: '48 CEUs',
    summary: 'Intensive full-stack program covering the MERN stack, from front-end React to back-end deployment.',
    story: "During this program I completed an intensive full-stack web development course built around the MERN stack. I built fully functional websites from scratch using JavaScript, HTML, and CSS, and developed real proficiency in React on the front end alongside MongoDB and Docker on the back end. The program gave me a strong foundation in both client-side and server-side development, including database management, API integration, and deployment strategies — the same skills I use day-to-day now, building sites like the Boss Mode teaser and the reporting platform at Bit Of Logic.",
  },
  {
    institution: 'University of Michigan, Dearborn',
    location: 'Dearborn, MI',
    credential: 'Certificate in Computer Programming — Python (Summer Dual-Enrollment)',
    date: 'July 2022',
    badge: null,
    summary: 'A summer dual-enrollment course that took me from Python basics to real algorithmic thinking.',
    story: "The summer before my senior year of high school, I completed an intensive dual-enrollment college course in Python programming at the University of Michigan, Dearborn. I went in knowing the basics and came out having progressed through much more advanced coding techniques, with a genuinely solid foundation in data structures and algorithms. This was the course that got me hooked on programming in the first place — it's a big part of why I ended up pursuing this as a career.",
  },
]

export const contactInfo = [
  { label: 'Email', value: 'sophiaguseth@gmail.com', href: 'mailto:sophiaguseth@gmail.com' },
  { label: 'Phone', value: '313-391-8382', href: 'tel:3133918382' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sophia-guseth', href: 'https://www.linkedin.com/in/sophia-guseth-14b24a292/' },
  { label: 'GitHub', value: 'github.com/User1245677977', href: 'https://github.com/User1245677977?tab=repositories' },
]