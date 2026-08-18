export function HeroVisual() {
  return (
    <div
      className="relative w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      {/* Status card — top right */}
      <div
        className="absolute -top-3 right-0 z-10 rounded-lg border border-border bg-surface-raised px-3.5 py-2.5 shadow-lg shadow-black/20"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs font-medium text-foreground">
            Available for work
          </span>
        </div>
      </div>

      {/* Stack card — bottom left */}
      <div
        className="absolute -bottom-4 -left-2 z-10 rounded-lg border border-border bg-surface-raised px-3.5 py-3 shadow-lg shadow-black/20 sm:left-0"
      >
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
          Stack
        </p>
        <p className="mt-1 text-xs font-medium text-foreground">
          React · Next.js · Node
        </p>
      </div>

      {/* Code editor card */}
      <div className="rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          </div>
          <span className="font-mono text-xs text-muted">page.tsx</span>
        </div>

        {/* Code content */}
        <div className="space-y-1 px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          <p>
            <span className="text-[#c792ea]">export</span>
            <span className="text-foreground"> </span>
            <span className="text-[#c792ea]">default</span>
            <span className="text-foreground"> </span>
            <span className="text-[#82aaff]">function</span>
            <span className="text-foreground"> </span>
            <span className="text-[#ffcb6b]">Home</span>
            <span className="text-muted">() {"{"}</span>
          </p>
          <p className="pl-4">
            <span className="text-[#c792ea]">return</span>
            <span className="text-muted"> (</span>
          </p>
          <p className="pl-8">
            <span className="text-muted">&lt;</span>
            <span className="text-accent">Layout</span>
            <span className="text-muted">&gt;</span>
          </p>
          <p className="pl-12">
            <span className="text-muted">&lt;</span>
            <span className="text-accent">Hero</span>
            <span className="text-muted"> /&gt;</span>
          </p>
          <p className="pl-12">
            <span className="text-muted">&lt;</span>
            <span className="text-foreground">Projects</span>
            <span className="text-muted"> /&gt;</span>
          </p>
          <p className="pl-8">
            <span className="text-muted">&lt;/</span>
            <span className="text-accent">Layout</span>
            <span className="text-muted">&gt;</span>
          </p>
          <p className="pl-4">
            <span className="text-muted">);</span>
          </p>
          <p>
            <span className="text-muted">{"}"}</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] text-muted">
              TypeScript · strict
            </span>
          </div>
          <span className="font-mono text-[11px] text-muted">Ln 12, Col 4</span>
        </div>
      </div>
    </div>
  );
}
