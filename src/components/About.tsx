import { ProfilePhoto } from "./ProfilePhoto";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="Background"
        title="About me"
        description="Frontend-focused Full-Stack Developer based in Italy, with professional experience building responsive interfaces and integrating real-world web applications."
      />

      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
        <div className="relative">
          <ProfilePhoto />
        </div>

        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground">
            I build modern web applications with a strong focus on clean,
            responsive frontend development and reliable full-stack integration.
          </p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              My professional experience includes building reusable React and
              Next.js components, integrating REST APIs with TanStack React
              Query, and working with responsive interfaces at Chemanca. I have
              also worked on CSS and Bootstrap-based UI development at
              Italeader.
            </p>

            <p>
              Alongside my professional work, I develop full-stack projects with
              Node.js, Express, MongoDB, authentication, payments, and API
              architecture to strengthen my end-to-end development skills.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
              Based in Italy
            </span>

            <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
              Frontend + Full-Stack
            </span>

            <span className="rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-sm text-accent">
              Open to opportunities
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
