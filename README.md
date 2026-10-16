# Musafir Travel

Marketing site for **Musafir Travel**, a tailor-made India travel company.
*Musafir* means traveler in Hindi and Urdu. Tagline: **Every journey needs a traveler.**

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion and MDX. Every page is
statically generated from typed data files, so content can later move to a CMS without touching pages.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static build of all 78 routes
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain (used for canonical URLs, sitemap and structured data).

## Where things live

| What | Where |
| --- | --- |
| Brand name, meaning, tagline, logo text | `data/brand.ts` (single source; re-exported by `config/site.ts`) |
| Colours, currencies + rates, contact details, company details, navigation, hero film | `config/site.ts` |
| Content model (types) | `data/types.ts` |
| Content | `data/regions.ts`, `journeys.ts`, `experiences.ts`, `stays.ts`, `festivals.ts`, `people.ts`, `testimonials.ts`, `faqs.ts`, `months.ts`, `posts.ts` |
| Data access helpers (swap for CMS calls later) | `data/index.ts` |
| Photography library | `data/images.ts` (content refers to images by key) |
| Journal post bodies | `content/journal/<slug>.mdx` (metadata in `data/posts.ts`) |
| Design tokens | `app/globals.css` (`@theme`) |
| API routes | `app/api/plan` (planner), `app/api/subscribe` (newsletter/guide), `app/api/contact` |

### Placeholders to replace before launch

Everything in square brackets in `config/site.ts` and `data/brand.ts`: `[YEAR]`, `[PHONE]`, `[EMAIL]`,
`[NUMBER]` (WhatsApp), `[COMPANY NAME]`, `[REGISTRATION NUMBER]`, `[GST NUMBER]`, `[OFFICE ADDRESS]`, `[CITY]`.
Also:

- **People** (`data/people.ts`): placeholder profiles; portraits render as designed placeholders until an `image` is set.
- **Stays** (`data/stays.ts`): property names end in "(placeholder)".
- **Testimonials** (`data/testimonials.ts`): flagged `placeholder: true` and labelled as such on the site.
- **FAQ** cancellations answer and the `/legal/*` pages.
- **Currency rates** in `config/site.ts` are indicative; wire to a rates API or update regularly.
- **Photography** is from Unsplash; images marked "stand-in" in `data/images.ts` are near matches.
- **Hero film**: add MP4/WebM files to `public/films` and set `media.heroFilm` in `config/site.ts`. Until then the
  hero plays a slow cross-fade of stills.
- **Seasons, festival dates, e-Visa, health and permit guidance** are flagged "verify" on the site and must be
  checked each year against official sources.
- **Integrations**: `app/api/*/route.ts` log payloads and contain TODOs for email/CRM/newsletter.

## Design system

**Principles.** A travel magazine, not a booking engine: full-bleed photography, generous whitespace, serif
display type with one italic word per heading, slow and quiet motion.

**Type.** Fraunces (display serif, optical sizing, italic for emphasis) and Instrument Sans (body).
Fluid scale defined in `globals.css`: `text-display-xl` (48→112px), `-lg` (40→76px), `-md` (32→54px),
`-sm` (24→34px), `-xs` (20→24px), `text-lede` (18→22px), `eyebrow` (12px, 0.22em tracking, uppercase).
Headings use `<Display>`; wrap the one emphasised word in asterisks: `<Display>Where to *wander*.</Display>`.

**Colour.** Base: ivory `#F7F1E6`, ivory-deep `#EEE3CF`, indigo `#1F2A4D`, indigo-deep `#141B33`,
charcoal `#2B2926`. Accents, used one at a time: marigold `#E39B2D` (primary CTA, highlights),
sandstone pink `#D58A7F` (Rajasthan), Kerala green `#3E7B52` (South), Ladakh sky `#7FA7CC` (Himalaya),
teak `#A26A34` (Central India), peacock teal `#1C6E73` (East & Northeast), lagoon `#2F8F98` (Islands),
spice red `#B0442D` (verify flags, errors). Region pages set `--accent`/`--accent-ink`; components use
`bg-accent`/`text-accent-ink`.

**Spacing.** Sections `py-20` → `md:py-32`; page gutter 16px → 32px → 48px (`.page-x`); max width 1440px.

**Motif.** Jaali (carved lattice) and block-print patterns, used sparingly: `JaaliDivider`, `JaaliPanel`
(lattice texture tinted with `currentColor`), `BlockPrintBand`, `.jaali-frame` double-rule border and the
`JaaliMark` in the logo.

**Motion.** One easing curve `cubic-bezier(0.22, 1, 0.36, 1)`; reveals 1.1s fade-and-rise, card image zoom
1.4s to 1.06×, hero stills cross-fade over 2.4s. `<MotionConfig reducedMotion="user">` plus a CSS
`prefers-reduced-motion` rule remove movement for visitors who ask for less.

## Features

- Sticky header that shrinks on scroll, mega-menu (hover with intent delay, click, keyboard, Esc), full-screen
  mobile menu with accordions
- Currency switcher (USD, GBP, EUR, AUD, CAD, INR) converting every price; choice persists in `localStorage`
- Site-wide search overlay (`/` or Ctrl/⌘+K, Esc to close), index served statically from `/search-index.json`
- Five-step journey planner at `/plan-my-journey` and as a modal from any "Plan my journey" button, with
  per-step validation, progress saved to `localStorage`, presets (e.g. "Plan around Diwali") and a confirmation screen
- Journey filters (region, length, style, budget, month) synced to the URL
- Per-page metadata, Open Graph images, JSON-LD (TravelAgency, TouristTrip, FAQPage, Article, BreadcrumbList),
  `sitemap.xml`, `robots.txt`
