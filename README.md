# D.O Labs — marketing site

Static marketing site for D.O Labs, a two-person indie software studio
(Drew + Ollie). Single scrolling page, no database, no auth, no CMS, no
API routes. Deploys to Vercel Hobby with zero configuration.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens live in
  `app/globals.css` as `@theme` variables
- Fonts via `next/font`: Anton (display) and DM Sans 500 (body)

## Editing copy

All words and product data live in **`content/site.ts`** — headline,
subline, stats, products, founders, footer meta. Components only read
from that file, so copy edits never touch components.

## Structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx          composes the sections (route: /)
  globals.css       design tokens + halftone/divider utilities
components/
  Nav.tsx, Footer.tsx
  sections/         Hero, HalftoneHero, StatRow, Products,
                    BuildInPublic, Studio
  ui/               PillLink, TagPill, Kicker, DottedDivider
content/
  site.ts           ALL copy and data (typed)
```

Extra routes (`/products`, `/journey`) can be added later as new files
under `app/` reusing the same sections and content file.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Design system (Caldera-style)

Flat, warm, bold, shadowless. Colors: ember `#fc5000`, plasma `#524ae9`
(halftone blocks only), sulfur `#f5f28e` (tags only), limestone
`#f7f6f2`, pumice `#f8fafb` (page bg, matched to HospoPilot), obsidian
`#070607`, chalk `#ffffff`.
Radii: 40px blocks, full pills — nothing in between. Anton is always
ALL CAPS with +0.02em tracking and is never set below 26px; DM Sans is
weight 500 everywhere. No shadows, ever.
