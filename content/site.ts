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

export type Stat = {
  /** Big Anton number, e.g. "2" or "∞" */
  value: string;
  label: string;
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
      "Drew writes the code. Ollie ran the kitchens. Together we turn problems we know first-hand into small, honest products — and ship them in public.",
    primaryCta: { label: "See the products", href: "#products" } satisfies Cta,
    secondaryCta: {
      label: "Say hello",
      href: "mailto:hello@dolabs.co.uk",
    } satisfies Cta,
  },

  halftoneHero: {
    label: "Drew + Ollie — Devon, UK",
  },

  stats: [
    { value: "2", label: "Founders" },
    { value: "2", label: "Products live" },
    { value: "'25", label: "Studio started" },
    { value: "∞", label: "Ideas in branches" },
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
    ] satisfies Product[],
  },

  buildInPublic: {
    title: "We build in public",
    body: "Right now that means signing HospoPilot's first restaurants and getting Arca ready to come back. We share the work as it happens — what ships, what stalls, and what we learn along the way.",
  },

  studio: {
    kicker: "Who we are",
    founders: [
      {
        name: "Ollie",
        role: "Chef turned builder",
        bio: "Ollie spent years on the line in professional kitchens before crossing over to software. He's the domain half of the studio — the reason HospoPilot works the way a real kitchen does — and the first user of everything we ship.",
      },
      {
        name: "Drew",
        role: "The developer half",
        bio: "Drew turns ideas into working products. He looks after the code, the infrastructure and the details — fast pages, small tools, and software that stays out of your way.",
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
} as const;

export type Site = typeof site;
