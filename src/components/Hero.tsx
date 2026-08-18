import { Button } from "./Button";
import { Container } from "./Container";
import { HeroVisual } from "./HeroVisual";

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Junior Full-Stack Developer
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-4xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
            >
              I build modern web applications from frontend to backend.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m Parisa, a Junior Full-Stack Developer based in Italy,
              working with React, Next.js, TypeScript, Node.js, Express and
              MongoDB to build responsive and maintainable web applications.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="#projects"
                variant="primary"
                className="w-36 justify-center"
              >
                View Projects
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="w-36 justify-center"
              >
                Contact Me
              </Button>
            </div>

            <p className="mt-10 text-sm text-muted">
              {techStack.map((tech, index) => (
                <span key={tech}>
                  <span className="transition-colors hover:text-foreground">
                    {tech}
                  </span>
                  {index < techStack.length - 1 && (
                    <span className="mx-2 text-border-hover">•</span>
                  )}
                </span>
              ))}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>

      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent-subtle blur-3xl"
        aria-hidden="true"
      />
    </section>
  );
}
