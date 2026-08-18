import { Button } from "./Button";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="GET IN TOUCH"
        title="Let's connect."
        description="I'm currently open to Junior Frontend and Full-Stack Developer opportunities in Italy and across Europe.

If you're hiring, collaborating on a web project, or simply want to discuss my work and experience, feel free to reach out through LinkedIn or explore my GitHub."
      />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          href="https://github.com/parisaMontakhab"
          variant="primary"
          external
          className="w-36 justify-center"
        >
          GitHub Profile
        </Button>
        <Button
          href="https://www.linkedin.com/in/parisamontakhabisani/"
          variant="primary"
          external
          className="w-36 justify-center"
        >
          LinkedIn
        </Button>
      </div>
    </Section>
  );
}
