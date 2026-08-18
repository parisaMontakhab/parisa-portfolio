type TechTagProps = {
  label: string;
};

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-border-hover hover:text-foreground">
      {label}
    </span>
  );
}
