"use client";

import type { Project } from "@/types";
import { useState } from "react";
import { Button } from "./Button";
import { ProjectPreview } from "./ProjectPreview";
import { TechTag } from "./TechTag";

export function ProjectCard({ project }: { project: Project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <article
      className={`rounded-2xl border bg-surface transition-colors hover:border-border-hover ${
        project.featured
          ? "border-accent/25 shadow-lg shadow-accent/5"
          : "border-border"
      }`}
    >
      <div className="p-4 sm:p-6">
        <ProjectPreview
          src={project.previewImage.src}
          alt={project.previewImage.alt}
          featured={project.featured}
        />
      </div>

      <div className="border-t border-border px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            {project.typeLabel}
          </p>
          {project.featured && (
            <span className="rounded-md border border-accent/30 bg-accent-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
              Primary Project
            </span>
          )}
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">
          {project.subtitle}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {project.cardHighlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2.5 text-sm leading-relaxed text-muted"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={project.liveDemo} variant="primary" external>
            Live Demo
          </Button>
          {project.github && (
            <Button href={project.github} variant="secondary" external>
              GitHub
            </Button>
          )}
          <button
            type="button"
            onClick={() => setDetailsOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            aria-expanded={detailsOpen}
          >
            {detailsOpen ? "Hide Details" : "View Details"}
          </button>
        </div>

        {detailsOpen && (
          <div className="mt-8 rounded-xl border border-border bg-surface-raised p-5 sm:p-6">
            <h4 className="text-sm font-semibold text-foreground">
              Technical details
            </h4>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {project.detailFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {project.additionalImages &&
              project.additionalImages.length > 0 && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.additionalImages.map((image) => (
                    <ProjectPreview
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                    />
                  ))}
                </div>
              )}
          </div>
        )}
      </div>
    </article>
  );
}
