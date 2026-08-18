import { experienceEntries } from "@/data/experience";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Work"
        title="Professional Experience"
        description="Frontend and CSS development experience with companies in Italy, focused on responsive interfaces, component architecture, and API integration."
      />

      <div className="relative mt-12 space-y-8">
        {experienceEntries.map((entry, index) => (
          <ExperienceItem
            key={entry.company}
            entry={entry}
            isLast={index === experienceEntries.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
