import type { ReactNode } from "react";

/** Sulfur badge pill — the only place sulfur appears. */
export function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-sulfur px-4 py-1.5 text-sm text-obsidian">
      {children}
    </span>
  );
}
