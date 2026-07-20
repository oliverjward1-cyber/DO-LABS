import { site } from "@/content/site";

/**
 * Full-width rounded halftone block: plasma→ember 135deg gradient, radial
 * ember glow top-right, screen-blended CSS dot pattern. No images.
 */
export function HalftoneHero() {
  return (
    <section
      className="halftone-surface relative flex min-h-[420px] items-end overflow-hidden rounded-card sm:min-h-[540px]"
      aria-label={site.halftoneHero.label}
    >
      <div aria-hidden className="halftone-dots absolute inset-0" />
      <p className="display-type relative p-8 text-[clamp(1.75rem,4vw,3rem)] text-chalk sm:p-12">
        {site.halftoneHero.label}
      </p>
    </section>
  );
}
