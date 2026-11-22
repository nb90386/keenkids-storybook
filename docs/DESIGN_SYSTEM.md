> **V2 update (2026-11-10):** type is now Brygada 1918 + Figtree; the mark is the folded K (`docs/v2/BRAND.md`); the palette shifted slightly (`docs/v2/BRAND.md`); motion is documented in `docs/v2/MOTION.md`. The sections below describe V1 where they differ.

# Design system: the KeenKids Storybook

**The idea:** KeenKids as a well-made clothbound library book. Evergreen bookcloth on the outside (header, cover, the project spread, back cover and footer). Warm paper pages inside. Photographs sit on the page like tipped-in plates. One page turns.

Tokens live in `src/app/globals.css`. Impeccable's machine-readable record is in `DESIGN.md` and `.impeccable/design.json`.

## Color

| Token | Value | Role |
|---|---|---|
| `paper` | `#FFFCF5` | Pages, cards, form fields |
| `parchment` | `#F7F3E9` | Page ground (body) |
| `parchment-deep` | `#EFE9DA` | Quiet fills: inactive tabs, image wells |
| `ink` | `#282C26` | Headings and body text (13:1 on parchment) |
| `ink-soft` | `#4F554C` | Secondary text (7:1) |
| `ink-faint` | `#6B7067` | Captions and labels only (4.8:1) |
| `evergreen` / `-deep` / `-soft` | `#254638` / `#1B3429` / `#3C5E4F` | Bookcloth, primary buttons, links, focus rings |
| `gold` | `#D5A65D` | Foil stamping on cloth only: wordmark glider, cloth rules, closing plane, footer headings. List bullets on paper are `evergreen-soft` |
| `terracotta` / `-ink` | `#B87C68` / `#8F5441` | Index-card header rule, silk ribbon. `-ink` for small italic text (5.6:1) |
| `sage` / `-deep` | `#D8DFD2` / `#C3CDBB` | Text selection, confirmation panel |
| `rule` / `-strong` | `#DDD7CB` / `#C9C1B1` | Book rules, dotted leaders, borders |

Strategy: restrained on the pages, committed on the cloth. Gold and terracotta never fill a region.

## Type

Two families, both from Google Fonts and self-hosted by `next/font`:

- **Literata**, a typeface designed for books, with optical sizes and real italics. Used for display, headings, captions, running heads and quotations.
- **Figtree**, a warm, legible sans. Used for body text, controls and labels.

| Utility | Size (fluid) | Use |
|---|---|---|
| `t-display` | 2.75 → 5.75rem, lh 1.0, −0.022em | Cover and page titles |
| `t-title` | 2.125 → 3.75rem | Section titles |
| `t-heading` | 1.5 → 2.125rem | Sub-sections, school names |
| `t-subheading` | 1.19 → 1.375rem | Small serif heads |
| `t-lede` | 1.125 → 1.31rem | Standfirsts |
| body | 1.0625rem / 1.6 | Reading text, max ~65ch |
| `t-caption` | 0.94rem italic serif | Plate captions |
| `t-label` | 0.81rem sans 600 | Field and data labels. Sentence case, never tracked caps |

Headings use `text-wrap: balance`, paragraphs use `pretty`, and prices use tabular lining numerals.

## Space and layout

- `shell`: max 82rem, gutter `clamp(1.25rem, 4.2vw, 3rem)`.
- `section-y`: `clamp(4.5rem, 2.5rem + 7vw, 9rem)` vertical rhythm. There is more space above a heading than below it.
- A 12-column editorial grid, usually split 4 | 7 or 5 | 6 with an empty column, so pages read asymmetric but balanced.
- Corner radii: 6px for cards, buttons, fields and tabs; 4px for book pages; 5px for nav links. Full rounding is used only for bullet dots, the FAQ toggle and the "This month" tag.

## Materials and depth

- **`cloth`**: evergreen with a 3px woven crosshatch at 2–4% contrast.
- **`paper`**: SVG fractal-noise grain at 5% alpha. Almost invisible.
- **Shadows** always carry an offset and a soft blur. `shadow-plate` is for photographs, `shadow-card` for paper cards, `shadow-lift` for dialogs.
- **Plates** (`components/book/plate.tsx`): a paper mount, a hairline inner rule, optional album photo corners, and an italic caption. Images get a light print toning (saturate .88, sepia .06).

## Ornament

All drawings are authored inline SVG with a 1.4–1.6 stroke (`components/book/marks.tsx`):

- **Hoop glider:** the brand mark, drawn from the kids' real project.
- **Paper airplane:** on the closing section and the 404 page.
- **Flask, conversation, Scratch blocks, light bulb:** marginal drawings for the activities.
- **Chapter ornament:** rule, glider, rule.
- **Silk ribbon:** pure CSS with a fixed 7px notch.

No emoji are used, and no Unicode arrows; icons are Lucide.

## Components

- **Header:** a cloth bar, sticky. It hides on a deliberate scroll down and returns on scroll up or when focus moves into it. A gold underline marks the current page. On mobile, a right-hand "Contents" sheet with dot leaders.
- **School finder** (`school-finder.tsx`): index-card tabs. On the homepage they rise out of the cover into the page. It is a real WAI-ARIA tablist (arrows, Home and End), deep-linkable with `#school-<slug>`.
- **Curriculum contents:** a table of contents with dot leaders. A silk ribbon marks the visitor's current month.
- **Tuition ledger:** one table-like ledger of the three plans, with no promoted plan.
- **FAQ list:** a Radix accordion with a grid-rows height transition. Closed answers use `visibility: hidden`.
- **Buttons:** `default` (evergreen), `cloth` (paper on cloth), `outline`, `outline-cloth`, `ghost`, `link`. Minimum 40px tap height, 48px by default.
- **Forms:** 48px fields on paper, an evergreen focus ring, and errors in words under the field.

## Motion

| Moment | Values |
|---|---|
| Cover entrance (once, CSS) | rise 12px + blur 4px → 0 with no opacity fade (the words are readable from the first frame), 720ms `--ease-out-expo`, 60ms stagger (300ms total). The plate settles with a clip reveal at 900ms |
| Page-turn spread (signature) | Sticky 300vh scene on screens ≥1024 × 640. Each plate turns −96° on `rotateY` around the gutter, with spring-smoothed scroll progress (stiffness 180, damping 32). The plate beneath settles from 0.965 scale and 10px. Transform and opacity only |
| School panel swap | CSS keyframe, 250ms in (the old card leaves at once), `--ease-smooth-out`, 8px and 2px blur |
| Accordion | 250ms symmetric, interruptible CSS transition |
| Dialog | 250ms open from 0.96 scale, 150ms close |
| Mobile sheet | 300ms open, 200ms close. Kept quick on purpose, so the menu never delays navigation |
| Buttons | `active:scale(0.97)` at 100ms. The arrow nudges 3px on hover |
| Plates entering view | CSS `animation-timeline: view()`. Unsupported browsers show the image without motion |

With `prefers-reduced-motion`, all movement is removed. The spread becomes a static gallery, overlays keep only their fade, and the panel swap is opacity only. No content waits on a scroll trigger to become visible.

## Browser surfaces

The design also themes the browser's own parts: text selection (sage on evergreen), the caret, the scrollbar color, `:focus-visible` (evergreen on paper, gold on cloth), underline offset and thickness, and tabular numerals in prices. The overscroll color is evergreen, and the `theme-color` meta matches it.
