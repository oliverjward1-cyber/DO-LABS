import type { AnchorHTMLAttributes } from "react";

type PillLinkProps = {
  href: string;
  /** primary = ember fill; ghost = obsidian outline on light surfaces */
  variant?: "primary" | "ghost";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  "inline-flex items-center justify-center rounded-pill px-7 py-3.5 text-base motion-safe:transition-colors";

const variants = {
  primary: "bg-ember text-chalk hover:bg-obsidian hover:text-chalk",
  ghost:
    "border-[1.5px] border-obsidian text-obsidian hover:bg-obsidian hover:text-chalk",
};

export function PillLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: PillLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
