import { site } from "@/content/site";

/**
 * The one plasma-violet moment besides the hero block — same halftone
 * treatment, plasma-dominant.
 */
export function BuildInPublic() {
  return (
    <section className="halftone-surface-plasma relative overflow-hidden rounded-card">
      <div aria-hidden className="halftone-dots absolute inset-0 opacity-60" />
      {/* Subtle dark scrim so chalk text stays legible where the gradient
          crosses its bright mid-tones. Not a shadow — a flat overlay. */}
      <div aria-hidden className="absolute inset-0 bg-obsidian/25" />
      <div className="relative flex flex-col gap-6 p-8 py-16 sm:p-12 sm:py-24 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <h2 className="display-type max-w-[10ch] text-[clamp(2.75rem,7vw,6rem)] text-chalk">
          {site.buildInPublic.title}
        </h2>
        <p className="max-w-[44ch] text-lg leading-relaxed text-chalk sm:text-xl">
          {site.buildInPublic.body}
        </p>
      </div>
    </section>
  );
}
