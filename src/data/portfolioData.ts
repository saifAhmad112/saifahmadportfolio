import { Project, Experience, SkillCategory, Education, SocialLink } from "@/types";

export const PERSONAL_INFO = {
  name: "Saif Ahmad Siddique",
  shortName: "Saif",
  role: "Full Stack Web Developer",
  tagline: "Building High-Performance Next.js Web Applications, AI Dashboards & Scalable Modern UIs",
  location: "New Delhi, India",
  email: "saif.sid6@gmail.com",
  phone: "+91 9582035423",
  experienceYears: "3+",
  projectsCompleted: "15+",
  satisfiedClients: "100%",
  availability: "Available for Full-time Roles & High-Impact Projects",
  bio: "Full Stack Web Developer with 3+ years of experience building modern, responsive, and scalable web applications using React.js, Next.js, JavaScript, Tailwind CSS, Node.js, and MongoDB. Experienced in developing AI platforms, admin dashboards, analytics systems, healthcare applications, and service marketplaces. Strong knowledge of REST APIs, TanStack Query, authentication, CRUD systems, responsive UI/UX, and reusable component architecture.",
  highlights: [
    "3+ Years of production-grade Full Stack Development",
    "Deep expertise in Next.js App Router, React 19, & Server State Management",
    "Specialized in AI dashboards, prompt systems & interactive admin workflows",
    "Expertise in modern design systems: Shadcn UI, Aceternity UI, Tailwind CSS",
    "High-throughput RESTful APIs, NextAuth.js & MongoDB architecture"
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saif-ahmad-siddique",
    icon: "linkedin",
    label: "linkedin.com/in/saif-ahmad-siddique"
  },
  {
    name: "GitHub",
    url: "https://github.com/saifAhmad112",
    icon: "github",
    label: "github.com/saifAhmad112"
  },
  {
    name: "Email",
    url: "mailto:saif.sid6@gmail.com",
    icon: "mail",
    label: "saif.sid6@gmail.com"
  },
  {
    name: "Phone",
    url: "tel:+919582035423",
    icon: "phone",
    label: "+91 9582035423"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "frontend",
    description: "Core web standards and modern component architecture with blazing speed.",
    skills: [
      { name: "React.js", level: 95, highlight: true, tag: "Expert" },
      { name: "Next.js (App Router)", level: 95, highlight: true, tag: "Production" },
      { name: "JavaScript (ES6+)", level: 92, highlight: true },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "TypeScript", level: 88, tag: "Strict" }
    ]
  },
  {
    title: "UI & Modern Design Systems",
    icon: "ui",
    description: "State-of-the-art UI styling, responsive micro-interactions and sleek aesthetics.",
    skills: [
      { name: "Tailwind CSS", level: 98, highlight: true, tag: "Core" },
      { name: "Shadcn UI", level: 95, highlight: true, tag: "Preferred" },
      { name: "Aceternity UI", level: 92, highlight: true, tag: "3D/FX" },
      { name: "Radix UI Primitives", level: 90 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    title: "State & Data Management",
    icon: "state",
    description: "Optimized server state caching, pagination, sorting and API orchestration.",
    skills: [
      { name: "TanStack Query", level: 94, highlight: true, tag: "Caching" },
      { name: "RESTful APIs", level: 96, highlight: true },
      { name: "Server-side Pagination", level: 92 },
      { name: "Advanced Filtering & Search", level: 95 },
      { name: "State Synchronization", level: 90 }
    ]
  },
  {
    title: "Backend & Database",
    icon: "backend",
    description: "Robust scalable backend services, auth flows and document databases.",
    skills: [
      { name: "Node.js", level: 90, highlight: true },
      { name: "Express.js", level: 88, highlight: true },
      { name: "MongoDB & Mongoose", level: 88, highlight: true },
      { name: "NextAuth.js", level: 90, tag: "OAuth/JWT" },
      { name: "CRUD & Middleware", level: 95 }
    ]
  },
  {
    title: "Authentication & API Architecture",
    icon: "backend",
    description: "Secure session handling, OAuth integration, role-based access and API security.",
    skills: [
      { name: "NextAuth.js (Auth.js)", level: 92, highlight: true, tag: "OAuth/JWT" },
      { name: "Role-Based Access Control", level: 90, highlight: true },
      { name: "RESTful Endpoints & Middleware", level: 95 },
      { name: "JWT Token Management", level: 92 },
      { name: "Secure Form Handling", level: 94 }
    ]
  },
  {
    title: "Engineering & Architecture",
    icon: "gear",
    description: "Reusable modular systems, web performance and clean code patterns.",
    skills: [
      { name: "Reusable Component Libs", level: 96, highlight: true },
      { name: "Performance Optimization", level: 92 },
      { name: "Responsive UI/UX", level: 98 },
      { name: "REST API Integration", level: 94 },
      { name: "Git & Vercel CI/CD", level: 92 }
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Full Stack Web Developer",
    company: "Digrowfa Private Limited",
    location: "New Delhi, India",
    period: "2 June 2023 – Present",
    startDate: "June 2023",
    isCurrent: true,
    type: "Full-Time",
    description: "Architecting and maintaining production web applications using React.js, Next.js, Tailwind CSS, Node.js, and MongoDB with a focus on UI excellence and scalable state management.",
    achievements: [
      "Develop and maintain responsive web applications using React.js and Next.js.",
      "Build reusable UI components with Tailwind CSS, Shadcn UI, Radix UI, and Aceternity UI, cutting new-feature development time by reusing a shared component library.",
      "Implement efficient data fetching, caching, and server-state management using TanStack Query, drastically reducing redundant API calls and server load.",
      "Integrate RESTful APIs and backend services using Node.js, Express.js, and MongoDB across multiple high-traffic production applications.",
      "Develop complex features including admin dashboards, CRUD systems, NextAuth.js authentication, instant search, multi-layered filtering, pagination, and interactive forms.",
      "Optimize application performance and maintain clean, scalable, and modular codebases, consistently improving Core Web Vitals and page load speed."
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Aceternity UI",
      "Radix UI",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "NextAuth.js"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "gleq-ai-admin",
    title: "GLEQ AI Admin",
    tagline: "AI Platform Administration & Real-Time Analytics Dashboard",
    category: "AI & Analytics",
    liveUrl: "https://gleqai-admin.vercel.app/login",
    featured: true,
    gradient: "from-indigo-600/30 via-purple-600/20 to-pink-600/30",
    accentColor: "#6366f1",
    iconName: "brain",
    stats: "Live 48h Analytics & Global Map",
    metrics: [
      { label: "Active Tracking", value: "48h Timeline" },
      { label: "AI Management", value: "Agents & Models" },
      { label: "Conversion", value: "Guest-to-User" }
    ],
    description: "A flagship enterprise-grade AI admin dashboard equipped with real-time user metrics, geospatial visitor analytics, comprehensive AI agent & provider lifecycle management, and prompt engineering tools.",
    highlights: [
      "Developed a real-time analytics dashboard using React.js and Next.js for active-user and 48-hour activity insights.",
      "Built an interactive analytics map with country-based visitor visualization, hover interactions, dynamic color scaling, and visitor counts.",
      "Implemented user drill-down analytics showing filtered users, session timelines, and complete visit history.",
      "Developed complete AI Agent, Model & Provider management with full CRUD functionality.",
      "Implemented interactive AI prompt editor with live preview and model testing capabilities.",
      "Implemented Guest-to-User conversion tracking, server-side pagination, advanced filtering, sorting, and reusable bulk actions."
    ],
    techStack: ["Next.js", "React.js", "Tailwind CSS", "REST APIs", "TanStack Query", "NextAuth.js", "MongoDB"]
  },
  {
    id: "ai-tools-bazaar",
    title: "AI Tools Bazaar",
    tagline: "AI Tools Discovery & Management Platform",
    category: "AI & Marketplace",
    liveUrl: "https://aitoolsbazaarv16.vercel.app",
    featured: true,
    gradient: "from-cyan-600/30 via-teal-600/20 to-emerald-600/30",
    accentColor: "#06b6d4",
    iconName: "sparkles",
    stats: "Dynamic AI Index & TanStack Query",
    metrics: [
      { label: "Stack", value: "MERN + Next.js" },
      { label: "UI System", value: "Aceternity + Shadcn" },
      { label: "Caching", value: "TanStack Query" }
    ],
    description: "An AI discovery hub where developers and creators can search, filter, bookmark, and review hundreds of curated AI tools with dynamic categories and lightning-fast state synchronization.",
    highlights: [
      "Developed an AI tools discovery and management platform using React.js, Next.js, and Radix UI.",
      "Implemented search, filtering, CRUD operations, authentication, and dynamic tool pages.",
      "Used TanStack Query for efficient data fetching, caching, and optimistic state updates.",
      "Built a fully responsive UI using Tailwind CSS, Shadcn UI, and Aceternity UI; integrated backend services with Node.js, Express.js, and MongoDB."
    ],
    techStack: ["Next.js", "React.js", "Aceternity UI", "Shadcn UI", "TanStack Query", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
  },
  {
    id: "patientfi",
    title: "PatientFi",
    tagline: "Healthcare & Doctor Consultation Platform",
    category: "Healthcare",
    liveUrl: "https://patientfi.vercel.app",
    featured: true,
    gradient: "from-emerald-600/30 via-teal-600/20 to-blue-600/30",
    accentColor: "#10b981",
    iconName: "activity",
    stats: "Full Patient & Doctor Workflows",
    metrics: [
      { label: "Domain", value: "Healthcare / Telemed" },
      { label: "Architecture", value: "Modular Forms" },
      { label: "Database", value: "MongoDB REST" }
    ],
    description: "A comprehensive digital healthcare management platform designed for doctors, patients, and clinics to handle appointments, patient records, consultation schedules, and medical profiles.",
    highlights: [
      "Developed a healthcare platform using React.js and Next.js for patient, doctor, and appointment management.",
      "Built responsive interfaces using Tailwind CSS, Shadcn UI, and Radix UI, and integrated REST APIs/backend services with Node.js, Express.js, and MongoDB.",
      "Developed reusable forms, modals, and interactive components with a strict focus on usability, accessibility, and maintainability."
    ],
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Shadcn UI", "Radix UI", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    id: "zeengo",
    title: "Zeengo",
    tagline: "On-Demand Service Marketplace Platform",
    category: "Marketplace & SaaS",
    liveUrl: "https://myzeengo.com",
    featured: true,
    gradient: "from-amber-600/30 via-orange-600/20 to-red-600/30",
    accentColor: "#f59e0b",
    iconName: "store",
    stats: "Geo-Filtered Services & Instant Caching",
    metrics: [
      { label: "Domain", value: "Marketplace" },
      { label: "Filters", value: "Category + Location" },
      { label: "Performance", value: "TanStack Caching" }
    ],
    description: "A responsive local services marketplace platform connecting customers with verified service providers featuring multi-criteria search, location-based matching, and dynamic price quotes.",
    highlights: [
      "Developed a responsive service marketplace using React.js, Next.js, Tailwind CSS, and Shadcn UI.",
      "Implemented service search, category, location, and price-based filtering; integrated REST APIs and TanStack Query for efficient data fetching and caching.",
      "Developed reusable cards, filter drawers, dropdowns, forms, and interactive UI components for rapid development."
    ],
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Shadcn UI", "TanStack Query", "REST APIs", "Node.js"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Krishna Engineering College",
    degree: "B.Tech — Bachelor of Technology",
    field: "Computer Science & Engineering",
    type: "Degree",
    details: "Strong foundation in data structures, algorithms, web technologies, database management, and software engineering principles."
  },
  {
    institution: "Mother Suhag Inter College",
    degree: "Intermediate (10+2)",
    field: "Science Stream (PCM)",
    type: "Senior Secondary",
    details: "Mathematics, Physics, and Chemistry curriculum."
  },
  {
    institution: "Mother Suhag Inter College",
    degree: "Secondary School Education (10th)",
    field: "General High School Studies",
    type: "High School",
    details: "Foundational academics with honors."
  }
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Live Analytics", href: "#live-analytics" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];
