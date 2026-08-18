import { skillCategories } from "@/data/skills";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { TechTag } from "./TechTag";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical Skills"
        description="Technologies and tools used across professional work and personal full-stack projects."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-hover"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {category.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <TechTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
