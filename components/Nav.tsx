import { site } from "@/content/site";
import { PillLink } from "@/components/ui/PillLink";

export function Nav() {
  return (
    <header>
      <nav
        aria-label="Main"
        className="flex items-center justify-between gap-4 rounded-pill bg-limestone py-3 pl-7 pr-3"
      >
        <a href="#top" className="display-type text-[26px]">
          {site.wordmark}
        </a>
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {site.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
            {site.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
          <PillLink href={site.nav.cta.href} className="px-6 py-2.5">
            {site.nav.cta.label}
          </PillLink>
        </div>
      </nav>
    </header>
  );
}
