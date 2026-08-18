import type { ExperienceEntry } from "@/types";
import { Button } from "./Button";
import { TechTag } from "./TechTag";

export function ExperienceItem({
  entry,
  isLast = false,
}: {
  entry: ExperienceEntry;
  isLast?: boolean;
}) {
  return (
    <article className="relative pl-8 sm:pl-10">
      <div
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
        aria-hidden="true"
      />
      {!isLast && (
        <div
          className="absolute bottom-0 left-[5px] top-6 w-px bg-border"
          aria-hidden="true"
        />
      )}

      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 transition-colors hover:border-border-hover">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {entry.company}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">{entry.role}</p>
          </div>

          {entry.links && entry.links.length > 0 && (
            <div className="flex flex-wrap gap-2 sm:shrink-0">
              {entry.links.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant="secondary"
                  external
                  className="px-4 py-2 text-xs"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <ul className="mt-6 space-y-2.5">
          {entry.responsibilities.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </article>
  );
}
