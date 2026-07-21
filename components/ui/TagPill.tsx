import type { ReactNode } from "react";

/** Sulfur badge pill — the only place sulfur appears. */
export function TagPill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill bg-sulfur px-4 py-1.5 text-sm text-obsidian ${className}`}
    >
      {children}
    </span>
  );
}
