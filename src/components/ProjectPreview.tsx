"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectPreviewProps = {
  src: string;
  alt: string;
  featured?: boolean;
};

export function ProjectPreview({ src, alt, featured }: ProjectPreviewProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-surface-raised ${
        featured ? "border-accent/30" : "border-border"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        </div>
        <span className="truncate font-mono text-xs text-muted">{src}</span>
      </div>

      <div className="relative aspect-[16/10] bg-surface">
        {!hasError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
            onError={() => setHasError(true)}
            priority={featured}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Screenshot placeholder
            </span>
            <p className="font-mono text-xs text-muted">
              Add image at{" "}
              <span className="text-foreground">public{src}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
