import { projects } from "@/data/projects";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Full-Stack Projects"
        description="Personal projects built independently to practice modern frontend development, REST API integration, and full-stack architecture."
      />

      <div className="mt-12 space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
