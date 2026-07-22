/**
 * All site copy and data. Edit words here — components only read from
 * this file and never hard-code copy.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

/** Bespoke line-art drawn behind each stat number. */
export type StatMotif = "bars" | "timeline" | "hills" | "commits";

export type Stat = {
  /** Big Anton value, e.g. "3", "'25" or "Devon" */
  num: string;
  label: string;
  motif: StatMotif;
};

export type Product = {
  name: string;
  /** Sulfur tag pill text, e.g. "Live in beta" */
  tag: string;
  description: string;
  /** Ghost pill link at the bottom of the card */
  link: Cta;
};

export type Founder = {
  name: string;
  /** Sulfur tag pill text */
  role: string;
  bio: string;
};

export const site = {
  name: "D.O Labs",
  wordmark: "D.O Labs",

  meta: {
    title: "D.O Labs — a two-person software studio",
    description:
      "D.O Labs is Drew and Ollie: a two-person indie software studio in Devon, UK, building small, honest products and shipping them in public.",
    /** Production URL — used for canonical + Open Graph / Twitter tags. */
    url: "https://dolabs.co.uk",
  },

  nav: {
    links: [
      { label: "Products", href: "#products" },
      { label: "Studio", href: "#studio" },
    ] satisfies NavLink[],
    cta: { label: "Say hello", href: "mailto:hello@dolabs.co.uk" } satisfies Cta,
  },

  hero: {
    eyebrow: "A two-person software studio",
    headline: "We build software worth shipping",
    subline:
      "Drew writes the code. Ollie's still on the line. Together we turn problems we know first-hand into small, honest products — and ship them in public.",
    primaryCta: { label: "See the products", href: "#products" } satisfies Cta,
    secondaryCta: {
      label: "Say hello",
      href: "mailto:hello@dolabs.co.uk",
    } satisfies Cta,
    status: {
      label: "Available for new projects",
      href: "mailto:hello@dolabs.co.uk",
    } satisfies Cta,
  },

  halftoneHero: {
    label: "Drew + Ollie — Devon, UK",
  },

  skipLink: { label: "Skip to content", href: "#main" } satisfies Cta,

  statRow: {
    label: "Studio in numbers",
  },

  stats: [
    { num: "3", label: "Products in the works", motif: "bars" },
    { num: "'25", label: "Studio started", motif: "timeline" },
    { num: "Devon", label: "Where we build", motif: "hills" },
    // Commits shipped — counted live at build (git rev-list --count HEAD);
    // this value is only the fallback used on shallow CI checkouts.
    { num: "18", label: "Commits shipped", motif: "commits" },
  ] satisfies Stat[],

  products: {
    kicker: "What we're building",
    items: [
      {
        name: "HospoPilot",
        tag: "Live in beta",
        description:
          "Food safety compliance for independent restaurants. EHO-ready in minutes, not lost weekends — built by a chef who's worked the line.",
        link: { label: "Visit HospoPilot", href: "https://hospopilot.co.uk" },
      },
      {
        name: "Arca",
        tag: "Relaunching",
        description:
          "A pocket-sized wireless recovery device for everyday aches and pains. Drug-free relief that fits into normal life.",
        link: { label: "Coming soon", href: "#" },
      },
      {
        name: "F.R.E.D",
        tag: "In development",
        description:
          "Food data without the faff. Look up what's actually in your meals and make calls that fit your goals — no spreadsheets, no guesswork.",
        link: { label: "Coming soon", href: "#" },
      },
    ] satisfies Product[],
  },

  buildInPublic: {
    title: "We build in public",
    body: "Right now that means signing HospoPilot's first restaurants and getting Arca ready to come back. We share the work as it happens — what ships, what stalls, and what we learn along the way.",
    // Points at the X profile below. Update the href when the handle is set.
    cta: { label: "Follow along on X", href: "https://x.com/" } satisfies Cta,
  },

  studio: {
    kicker: "Who we are",
    founders: [
      {
        name: "Ollie",
        role: "Chef turned builder",
        bio: "A working chef building his way out of the kitchen with AI. Ecommerce background, restaurant scars, and the first user of everything we ship.",
      },
      {
        name: "Drew",
        role: "The developer half",
        bio: "Co-founder and the technical half — code, infrastructure, and a steady stream of ideas. Increasingly the one who'll actually talk to customers.",
      },
    ] satisfies Founder[],
  },

  footer: {
    wordmark: "D.O Labs",
    meta: [
      { label: "Devon, UK" },
      { label: "Building in public" },
      { label: "hello@dolabs.co.uk", href: "mailto:hello@dolabs.co.uk" },
    ] as { label: string; href?: string }[],
  },

  // Social / build-in-public links. Replace the placeholder hrefs with real
  // profile URLs (or delete a line to drop that link everywhere it renders).
  social: [
    { label: "X", href: "https://x.com/" }, // TODO: paste handle, e.g. https://x.com/dolabs
    { label: "GitHub", href: "https://github.com/" }, // TODO: paste org/user or delete this line
  ] satisfies Cta[],
} as const;

export type Site = typeof site;
