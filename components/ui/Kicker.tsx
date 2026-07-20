import type { ReactNode } from "react";

/** Anton section heading — kept at 26px+ per the type rules. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <h2 className="display-type text-[clamp(1.75rem,3.2vw,2.5rem)]">
      {children}
    </h2>
  );
}
