import type { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Chemanca",
    role: "Frontend Developer",
    links: [
      { label: "Visit Website", href: "https://chemanca.it" },
      { label: "Visit Platform", href: "https://hub.chemanca.it" },
    ],
    responsibilities: [
      "Developed reusable, maintainable, and responsive React components based on Figma designs.",
      "Integrated frontend components with REST APIs.",
      "Used TanStack React Query for server-state management and API integration.",
      "Worked with Swagger/OpenAPI documentation to understand and integrate backend endpoints.",
      "Refactored existing frontend code.",
      "Fixed UI and frontend integration issues.",
      "Worked with responsive layouts and reusable component architecture.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack React Query",
      "REST APIs",
      "Swagger/OpenAPI",
      "Responsive Design",
    ],
  },
  {
    company: "Italeader",
    role: "CSS Developer",
    links: [{ label: "Visit Website", href: "https://italeader.com" }],
    responsibilities: [
      "Developed and maintained responsive user interfaces.",
      "Implemented layouts and UI styling using Bootstrap.",
      "Worked on CSS styling and responsive behavior.",
      "Improved and maintained existing frontend layouts.",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
];
