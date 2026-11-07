# GATHA — Portfolio Experience
<!-- 
An editorial, neo-brutalist portfolio for **Yoga Agatha Pasaribu (GATHA)**, built with Next.js 15, React 19, Tailwind CSS v4, Shadcn UI, and Framer Motion. The visual system is based on the Stitch "GATHA Portfolio Experience" design.

The site is intentionally static, type-led, and motion-light: a deep-charcoal/sage palette, 0px radii, asymmetric layouts, oversized display type, and performance-safe parallax.

## Stack

- **Framework:** Next.js 15 App Router + React 19
- **Styling:** Tailwind CSS v4 (CSS-first tokens in `src/app/globals.css`)
- **UI primitives:** Shadcn UI (`radix-nova` preset)
- **Motion:** Framer Motion (custom reveals, parallax, menu transitions) + CSS marquee
- **Icons:** Lucide React
- **Fonts:** Bebas Neue, Hanken Grotesk, JetBrains Mono via `next/font`
- **Images:** `next/image` with local AVIF/WebP optimization

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Atomic Design structure

```
src/
├─ app/
│  ├─ globals.css          # design tokens, theme bridge, utilities, motion
│  ├─ layout.tsx           # fonts, metadata, skip link
│  ├─ page.tsx             # static route + JSON-LD
│  └─ opengraph-image.tsx  # generated social image
├─ components/
│  ├─ atoms/               # chip, CTA, typography, logo, reveal, parallax…
│  ├─ molecules/           # nav link, project card, archive row, social link…
│  ├─ organisms/           # header, hero, experience, works, archive, footer
│  ├─ templates/           # portfolio-template.tsx — page composition
│  └─ ui/                  # Shadcn primitives + Skiper UI free component
└─ lib/
   ├─ data/                # projects, experience, site metadata/copy
   └─ utils.ts
```

`components/templates/portfolio-template.tsx` is the single composition root. It renders the fixed header, main sections, footer, grid backdrop, and the vertical editorial rail.

## Design tokens

All brand tokens live in `src/app/globals.css` under `@theme`:

| Token | Value |
| --- | --- |
| Canvas | `#111111` |
| Ink | `#FFFFFF` |
| Sage | `#7BA082` |
| Surface | `#222222` |
| Surface low | `#1B1C1C` |
| Surface deep | `#0E0E0E` |
| Line | `#444748` |
| Muted ink | `#C4C7C7` |
| Radius | `0px` |

Display scale uses Bebas Neue at up to 120px desktop; body copy uses Hanken Grotesk; labels/utility text use JetBrains Mono with wide tracking. Spacing follows the Stitch system (`8px` unit, `24px` gutter, `20px` mobile margin, `64px` desktop margin, `48px` asymmetric gap).

## Caching and performance

- `/` is fully static: `dynamic = "force-static"` and `revalidate = false`.
- Images are locally hosted and optimized to AVIF/WebP with a one-year immutable cache for `/images/*`.
- `next/image` handles responsive `sizes`, lazy loading below the fold, and priority loading for the hero portrait.
- Framer Motion is limited to transform/opacity animations. `prefers-reduced-motion` disables non-essential motion; the tech-arsenal marquee is the deliberate exception, and it pauses on hover/focus.
- The page ships no client-side data fetching and no runtime third-party scripts.
- `metadata`, canonical URL, Open Graph/Twitter cards, JSON-LD, security headers, and a generated OG image are included.

## Skiper UI attribution

This project uses a **free-tier** Skiper UI component:

- `@skiper-ui/skiper58` — TextRoll, wrapped by `src/components/molecules/nav-link.tsx`.

Free-tier attribution is also displayed in the site footer. No paid/pro Skiper components are used.

## Content

Project case studies, archive entries, experience, social links, and navigation copy live in `src/lib/data/`. Add a project by appending a `Project` object; set `featured: true` to include it in the horizontal selected-works rail or `false` for the archive index. -->
