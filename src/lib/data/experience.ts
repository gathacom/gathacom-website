export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  accent?: boolean;
  offset?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Step Up Project",
    role: "Founder & Fullstack Developer",
    period: "Jan 2024 - Present",
    description:
      "Spearheading end-to-end development, establishing scalable codebases, and driving the technical vision for modern web applications.",
    accent: true,
  },
  {
    company: "Suitmedia",
    role: "Junior Frontend Developer Apprentice",
    period: "Dec 2025 - Jun 2026",
    description:
      "Focusing on high-performance frontend interfaces, adhering to strict clean code principles, and mastering modern UI patterns.",
    offset: true,
  },
];
