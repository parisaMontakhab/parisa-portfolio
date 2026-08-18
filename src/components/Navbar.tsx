"use client";

import Link from "next/link";
import { useState } from "react";
import { AppLink } from "./AppLink";
import { Container } from "./Container";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            Parisa Montakhabisani
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <AppLink
              href="/ParisaMontakhabi_cv.pdf"
              download
              className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-raised"
            >
              View Resume
            </AppLink>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-border-hover hover:bg-surface-raised md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5H15M3 9H15M3 13H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface-raised hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-3">
                <AppLink
                  href="/ParisaMontakhabi_cv.pdf"
                  download
                  className="block rounded-lg border border-border px-3 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-raised"
                  onClick={() => setMobileOpen(false)}
                >
                  View Resume
                </AppLink>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
