export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  timeline: string;
  tagline: string;
  overview: string;
  solution: string;
  stack: string[];
  specs: string[];
  image: string;
  imageAlt: string;
  live: string;
  repo: string;
  meta: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "absensi",
    index: "01",
    title: "ABSENSI THE IDAMAN",
    category: "Enterprise Attendance Backend // Infrastructure",
    timeline: "StepUp Project, 2025",
    tagline:
      "Backend system & scalable API for employee attendance across 400+ outlets with automated CI/CD pipeline on VPS.",
    overview:
      "Absensi The Idaman: 400+ outlets attendance backend, scalable Express API, MySQL, VPS CI/CD deployment.",
    solution:
      "Constructed resilient API architecture engineered to ingest simultaneous punch-in payloads from over 400 distributed retail locations without lock contentions, configured with continuous deployment automation straight to production VPS.",
    stack: ["Express.js", "MySQL", "VPS", "CI/CD", "Linux Server", "Node.js"],
    specs: [
      "400+ outlets multi-tenant attendance engine",
      "Scalable Express.js modular API architecture",
      "Optimized MySQL schema indexing & transactional queries",
      "Automated zero-downtime CI/CD deployment on VPS",
    ],
    image: "/images/work-absensi.png",
    imageAlt:
      "Brutalist backend attendance system and server metrics display",
    live: "#",
    repo: "https://github.com",
    meta: "STEPUP PROJECT // 2025",
    featured: true,
  },
  {
    id: "iclus",
    index: "02",
    title: "ICLUS (INSURANCE CLAIM UTILITY SYSTEM)",
    category: "Enterprise Claims Engine // Frontend System",
    timeline: "Suitmedia, 2026",
    tagline:
      "Enterprise insurance claims engine featuring dynamic multi-step validation logic, role-based rendering, and document workflow.",
    overview:
      "IClus: Nuxt claims engine, multi-step validation, role-based UI, end-to-end draft-to-appeal workflows.",
    solution:
      "Architected a typed Nuxt 3 modular frontend providing fine-grained access control, real-time client validation passes, and document management across high-liability insurance verification states.",
    stack: ["Nuxt", "Vue", "TypeScript", "Tailwind CSS", "Pinia", "Zod"],
    specs: [
      "Nuxt 3 & TypeScript type-safe claim state management",
      "Dynamic multi-step validation & interactive form runners",
      "Role-based UI components (Agent, Reviewer, Auditor)",
      "End-to-end draft-to-appeal document lifecycle workflow",
    ],
    image: "/images/work-iclus.png",
    imageAlt: "Insurance claims engine dashboard and workflow",
    live: "#",
    repo: "https://github.com",
    meta: "SUITMEDIA // 2026",
    featured: true,
  },
  {
    id: "stepup",
    index: "03",
    title: "STEPUP PROJECT",
    category: "Fullstack Platform // Architecture & Incubation",
    timeline: "StepUp Project, 2024-Present",
    tagline:
      "Digital transformation, scalable codebases, and modern web application platforms for EduTech and SME digitalization.",
    overview:
      "Founded to bridge academic learning with enterprise software engineering standards. StepUp delivers an ecosystem for technical workshops, mentoring checkpoints, and curated fullstack project builds.",
    solution:
      "Constructed using a clean decoupled client-server architecture with granular role-based authentication, Mongo aggregations for student performance tracking, and sub-100ms API response metrics.",
    stack: [
      "ReactJs",
      "ExpressJs",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "RESTful API",
    ],
    specs: [
      "Modular microservices with Express routing",
      "Secure JWT auth & CSRF defensive tokenization",
      "Custom responsive UI with 98+ Lighthouse scores",
      "Automated test suites & CI/CD deployment",
    ],
    image: "/images/work-stepup.png",
    imageAlt: "Modern brutalist web application dashboard for StepUp Project",
    live: "https://github.com",
    repo: "https://github.com",
    meta: "FOUNDER // 2024-PRESENT",
    featured: true,
  },
  {
    id: "sier",
    index: "04",
    title: "SIER SPORT ARENA",
    category: "Venue Booking & Management Platform",
    timeline: "Suitmedia, 2026",
    tagline:
      "Venue booking & management platform with multi-step asynchronous forms, multi-language support, and real-time scheduling.",
    overview:
      "SIER Sport Arena: Nuxt sports venue booking dashboard, dynamic dependent fields, scheduling & payment payloads.",
    solution:
      "Delivered a reactive court scheduling system handling dynamic slot locking, i18n multi-language switching, and dependable booking confirmation states across high concurrency hours.",
    stack: [
      "Nuxt",
      "State Management",
      "Real-time Validation",
      "Vue 3",
      "Tailwind CSS",
    ],
    specs: [
      "Real-time venue calendar with dynamic time-slot locking",
      "Multi-step asynchronous booking forms with dependent fields",
      "Integrated multi-language (i18n) localization architecture",
      "Resilient state management for payment verification handoffs",
    ],
    image: "/images/work-iclus.png",
    imageAlt: "SIER Sport Arena venue scheduling and booking dashboard",
    live: "#",
    repo: "https://github.com",
    meta: "SUITMEDIA // 2026",
    featured: true,
  },
  {
    id: "ipkms",
    index: "01",
    title: "IP KMS (INDONESIA POWER KNOWLEDGE MANAGEMENT SYSTEM)",
    category: "Enterprise Knowledge Management",
    timeline: "2026 | Enterprise Frontend Engineer",
    tagline:
      "Enterprise knowledge management system powered by Configuration-Driven UI and schema validation.",
    overview:
      "IP KMS: Nuxt enterprise knowledge management, Configuration-Driven UI (CDUI), Zod schema validation, reactivity & Nuxt cache optimizations.",
    solution:
      "Designed and built an enterprise Knowledge Management System using dynamic CDUI templates driven by JSON configurations, paired with runtime Zod contracts and Nuxt SSR cache layers for heavy engineering dossiers.",
    stack: ["Nuxt", "CDUI", "Zod", "Vue 3", "Tailwind CSS", "Pinia"],
    specs: [
      "Configuration-Driven UI (CDUI) renderer for fluid schemas",
      "Zod runtime validation across data mutation boundaries",
      "Reactive SSR caching for heavy technical manuals",
      "Enterprise permission gating & departmental document silos",
    ],
    image: "/images/work-absensi.png",
    imageAlt: "Enterprise knowledge management dashboard",
    live: "#",
    repo: "https://github.com",
    meta: "2026 // Nuxt • CDUI • Zod",
    featured: false,
  },
  {
    id: "nike",
    index: "02",
    title: "NIKE DETECTOR",
    category: "Machine Learning & Computer Vision",
    timeline: "2025 | ML Engineer & Web UI",
    tagline:
      "Object detection ML (YOLOv8, RetinaNet/ResNet-50 FPN) with dedicated web app.",
    overview:
      "Nike Detector: Object detection ML (YOLOv8, RetinaNet/ResNet-50 FPN) with dedicated web app.",
    solution:
      "Fine-tuned deep convolutional networks (YOLOv8 and RetinaNet with ResNet-50 FPN backbones) to identify brand elements and counterfeit variances, served via an interactive web inference workbench.",
    stack: [
      "YOLOv8",
      "RetinaNet",
      "ResNet-50 FPN",
      "Web App",
      "Python",
      "ReactJs",
    ],
    specs: [
      "Comparative benchmarking: YOLOv8 vs RetinaNet (ResNet-50 FPN)",
      "Sub-150ms real-time bounding box prediction pipeline",
      "Dedicated React frontend with image augment workbench",
      "High recall performance on distorted and low-light inputs",
    ],
    image: "/images/work-stepup.png",
    imageAlt: "Computer vision detection workbench interface",
    live: "#",
    repo: "https://github.com",
    meta: "2025 // YOLOv8 • RetinaNet • Web App",
    featured: false,
  },
  {
    id: "edutanimas",
    index: "03",
    title: "EDUTANIMAS",
    category: "EduTech Agritech Portal",
    timeline: "2024 | Fullstack Developer",
    tagline:
      "Agricultural education web app for SMANSABRI students, ReactJs.",
    overview:
      "EduTanimas: Agricultural education web app for SMANSABRI students, ReactJs.",
    solution:
      "Developed an interactive educational platform facilitating agricultural botany curricula for SMAN 1 Berbek (SMANSABRI) students with quiz modules, crop libraries, and digital field observation cards.",
    stack: ["ReactJs", "EduTech Platform", "Node.js", "Tailwind CSS"],
    specs: [
      "Engaging interactive React interface for high school students",
      "Interactive crop diagnostics and botanical encyclopedia",
      "Lightweight load times optimized for mobile campus networks",
      "Teacher administrative CMS for weekly agronomy challenges",
    ],
    image: "/images/work-absensi.png",
    imageAlt: "Agricultural education portal interface",
    live: "#",
    repo: "https://github.com",
    meta: "2024 // ReactJs • EduTech",
    featured: false,
  },
  {
    id: "swanbag",
    index: "04",
    title: "SWANBAG",
    category: "E-Commerce & Digital Catalog",
    timeline: "2024 | Frontend Engineer",
    tagline: "Eco-bag e-commerce catalog, ReactJs.",
    overview: "SwanBag: Eco-bag e-commerce catalog, ReactJs.",
    solution:
      "Constructed an aesthetic, high-conversion modern digital product catalog for sustainable bag merchandising with instant visual filtering, cart staging, and direct channel checkout handoffs.",
    stack: ["ReactJs", "E-Commerce Catalog", "Tailwind CSS", "Vite"],
    specs: [
      "High-speed SPA product catalog with React & Tailwind",
      "Dynamic multi-facet filtering (material, volume, style)",
      "Seamless mobile checkout cart flow",
      "Performance tuned for 100/100 Core Web Vitals",
    ],
    image: "/images/work-iclus.png",
    imageAlt: "Sustainable bag e-commerce product catalog",
    live: "#",
    repo: "https://github.com",
    meta: "2024 // ReactJs • E-Commerce",
    featured: false,
  },
  {
    id: "dlh",
    index: "05",
    title: "ARCHIVING SYSTEM (DLH)",
    category: "Government Enterprise Digitisation",
    timeline: "2025 | Fullstack Systems Engineer",
    tagline:
      "Mail archiving & document management, NextJs & Supabase real-time backend.",
    overview:
      "Archiving System (DLH): Mail archiving & document management, NextJs & Supabase real-time backend.",
    solution:
      "Built a centralized digital archiving system equipped with deep full-text indexing, strict Row Level Security (RLS), and cryptographic audit logs for every incoming and outgoing departmental record.",
    stack: [
      "NextJs",
      "Supabase",
      "PostgreSQL",
      "RLS Security",
      "Tailwind CSS",
    ],
    specs: [
      "Postgres Row-Level Security policy enforcement",
      "Sub-second search through 50,000+ indexed records",
      "Immutable activity audit trail & mail status tracker",
      "Direct cryptographic Supabase cloud storage synchronization",
    ],
    image: "/images/work-absensi.png",
    imageAlt: "Government mail archiving system dashboard",
    live: "#",
    repo: "https://github.com",
    meta: "2025 // NextJs • Supabase",
    featured: false,
  },
  {
    id: "elibrary",
    index: "06",
    title: "E-LIBRARY",
    category: "Academic Library & Repository Platform",
    timeline: "2025 | Backend & Database Architect",
    tagline:
      "University department digital book lending & thesis cloud storage via Supabase, Express.js, MySQL.",
    overview:
      "E-Library: University department digital book lending & thesis cloud storage via Supabase, Express.js, MySQL.",
    solution:
      "Delivered a centralized department academic catalog that automates book loans, returns, fine penalties, and secured PDF distribution for research theses powered by Supabase bucket assets.",
    stack: [
      "Express.js",
      "MySQL",
      "Supabase Storage",
      "Node.js",
      "REST API",
    ],
    specs: [
      "Structured relational catalog with relational MySQL schemas",
      "Cloud PDF document storage with signed Supabase URLs",
      "Automated loan duration & penalty calculations",
      "Robust Express REST APIs with role-based JWT validation",
    ],
    image: "/images/work-stepup.png",
    imageAlt: "Academic library and thesis repository interface",
    live: "#",
    repo: "https://github.com",
    meta: "2025 // Express.js • MySQL • Supabase Storage",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archivedProjects = projects.filter((project) => !project.featured);
