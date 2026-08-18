import { isExternalHref } from "@/lib/links";
import Link from "next/link";

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  download?: boolean | string;
};

export function AppLink({
  href,
  children,
  className,
  onClick,
  download,
}: AppLinkProps) {
  // Downloadable files should use a native anchor
  if (download) {
    return (
      <a
        href={href}
        className={className}
        download={download}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // External links
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Internal links
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
