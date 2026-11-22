# KeenKids Enrichment: the storybook preview

A redesign of keenkidsenrichment.com as a clothbound storybook: evergreen cloth outside, warm paper pages inside. Built with Next.js 16 (App Router, Cache Components), Tailwind CSS 4, shadcn/ui, Motion and Playwright. **V2 (Signature Edition)**: folded-K identity, Brygada 1918 + Figtree, nine-scene homepage. See `docs/v2/` and `docs/V2_VISUAL_AUDIT.md`; restore V1 with `docs/V1_RECOVERY.md`.

**Live preview:** https://keenkids-storybook-preview.vercel.app. This is a separate Vercel project; the real site is untouched.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm run start
```

Checks:

```bash
npm run typecheck
npm run lint
npx playwright install chromium   # once
npm run test:e2e                  # Chromium desktop + mobile, WebKit desktop + iPhone; PW_FIREFOX=1 adds Firefox
BASE_URL=https://keenkids-storybook-preview.vercel.app npm run test:e2e
```

## Where things live

| Path | What |
|---|---|
| `src/content/*` | **Single source of truth** for every fact: schools and their form URLs, pricing and Stripe links, FAQs, testimonials, founders, careers. Edit content here, not in the components. |
| `src/app/*` | Routes: `/`, `/programs`, `/schools`, `/schools/[slug]`, `/pricing`, `/about`, `/faq`, `/contact`, `/bring-to-your-school`, `/careers`, plus robots, sitemap, the icon and the share image |
| `src/components/home/*` | Homepage sections (cover, afternoon, project spread, voices, founders, closing) |
| `src/components/book/*` | The storybook primitives: photo plates and the authored line drawings |
| `src/app/globals.css` | Design tokens, type scale, materials, motion |
| `scripts/crop-photos.mjs` | V2 art-directed crops: softened public set plus a local-only clear set (see `docs/v2/PHOTOGRAPHY.md`) |
| `scripts/process-images.mjs` | Softens children's faces and strips metadata. Reads `source-assets/` (never committed or deployed) and writes `public/images/` |
| `scripts/shoot.mjs`, `scripts/contact-sheet.mjs` | Multi-viewport screenshots and the review contact sheet |
| `tests/site.spec.ts` | Playwright and axe tests |
| `docs/` | Content inventory, design system, copy guide, conversion audit, QA report, client review, tooling audit |
| `DESIGN.md`, `PRODUCT.md`, `.impeccable/` | Impeccable's design record and direction contract |

## Environment variables

| Variable | Default | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://keenkids-storybook-preview.vercel.app` | Canonical URLs, sitemap, Open Graph |
| `NEXT_PUBLIC_PAYMENTS_LIVE` | unset | Set to `true` to make "Pay online" open the real Stripe links. Otherwise it shows a preview dialog |
| `NEXT_PUBLIC_PHOTO_SET` | unset | `clear` switches to the unblurred crops in `public/images-clear`, which exist only on a reviewer's machine and are never deployed |
| `NEXT_PUBLIC_SITE_INDEXABLE` | unset | Set to `true` on the production domain to allow indexing. Otherwise every page sends `noindex` and robots.txt disallows all |

## Updating photos

Put the original files in `source-assets/`, add the face ellipses in `scripts/process-images.mjs`, and run `npm run images`. Check each output by eye before publishing.

## Deploying

```bash
vercel deploy --prod   # deploys this separate preview project (keenkids-storybook-preview)
```

Share the short alias above. Per-deployment URLs sit behind Vercel Authentication.

## About this repository

- **Children's privacy.** Every photo of children in `public/images/` has faces softened and metadata stripped by `scripts/process-images.mjs`. The original photos (`source-assets/`) and the unblurred review crops (`public/images-clear/`) are gitignored and have never been committed. Screenshots and contact sheets were also left out of the repository, because some captured the original site's unblurred photos.
- **Content.** Program, school, pricing and testimonial content belongs to KeenKids Enrichment and comes from its public website (see `docs/CONTENT_INVENTORY.md`).
- **Fonts.** Brygada 1918 and Figtree (`assets/`, used for Open Graph images) are SIL Open Font License fonts.
- **Last verified 2026-11-22.** `npm run lint` and `npx tsc --noEmit` are clean (run `npx next typegen` first on a fresh clone). Build and Playwright e2e were not re-run for this import.
