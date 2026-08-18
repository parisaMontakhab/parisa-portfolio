import Link from "next/link";
import { isExternalHref } from "@/lib/links";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent-hover border border-accent/20",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-border-hover hover:bg-surface-raised",
  ghost:
    "bg-transparent text-muted hover:text-foreground border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variantStyles[variant]} ${className}`;
  const opensExternally = external || isExternalHref(href);

  if (opensExternally) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
