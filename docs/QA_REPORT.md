# QA report

Run on 2026-11-10 against the production build, locally (`next start`) and live at https://keenkids-storybook-preview.vercel.app.

## Deterministic checks

| Check | Command | Result |
|---|---|---|
| Typecheck | `npm run typecheck` | Pass, 0 errors |
| Lint | `npm run lint` | Pass, 0 errors, 0 warnings |
| Production build | `npm run build` | Pass. 20 routes prerendered (17 static; `/schools/[slug]` partial prerender for its fallback) |
| Impeccable detector | `impeccable detect --json src` | `[]`. The design hook reported no findings on any edited UI file |

## Playwright (`tests/site.spec.ts`, desktop 1440×900 and Pixel 7 at 390×844)

**73 passed, 1 skipped**, both locally and against the live deployment. The skip is the mobile-menu test on the desktop project, by design.

- **Every route** (homepage, programs, schools, all four school pages, pricing, about, FAQ, contact, bring-to-your-school, careers):
  - returns 200, has exactly one `<h1>`, has no horizontal overflow, and logs no console or page errors;
  - has no serious or critical axe violations for WCAG 2.0/2.1/2.2 A and AA.
- **Unknown URLs** return a designed 404 with a real 404 status, including unknown school slugs.
- **Every internal link** on every route resolves to 200. No empty or `javascript:` hrefs.
- **School finder:**
  - each tab shows that school's name and links to its **exact** form URL;
  - Arrow keys, Home and End move between tabs;
  - `#school-rose` deep-links and selects Rose.
- **FAQ:** opens and closes with the correct `aria-expanded`. Closed answers are hidden.
- **Payments:** "Pay online" opens the preview dialog with the real Stripe URL as text. **No request to stripe.com** is made.
- **Contact form:** an empty submit shows errors and focuses the first invalid field. A valid submit shows the honest "your email app should have opened… isn't sent until you press send" confirmation.
- **Preview safety:** the notice is visible, `<meta name="robots" content="noindex, nofollow">` is present, and `robots.txt` disallows everything.
- **Reduced motion:** the project story renders three visible static plates.
- **Mobile menu:** opens, navigates to /programs and closes. The first run exposed a hydration race in the test itself (tapping before React attached); the test now waits for network idle.

## Responsive and visual review

- **Captured viewports:** 390, 768, 1024 and 1440 for the homepage; 390 and 1440 for every other page. All are in `docs/screenshots/after/`. The live site's "before" captures are in `docs/screenshots/before/`, and the overview is `docs/screenshots/contact-sheet.png`.
- **Overflow:** none at any captured width. The script checks `scrollWidth`.
- **Overflow bugs found and fixed during review:**
  - 14px at 390 (header controls);
  - 193px at 390 on /schools (an `sr-only` span escaping the table's scroll container);
  - 26px at 768 (fixed-width school tabs).
- **Signature spread:** the page-turn was checked with motion on, at rest and mid-turn (`home-spread-*-1440.png`).
- **Impeccable finish reviewer:** two rounds. Round 1 (disposition **fix**) found 8 material issues. Round 2 scored 5 resolved and 3 partial, and noted 2 regressions. Every remaining item was then fixed and re-verified by screenshot:
  - contract wording;
  - static spread balance (sticky left page);
  - interpuncts (lists restyled);
  - gutter shade (Tailwind v4 `space-y` margin);
  - clipped leaf corner (clip-path that frees the top edge).
  Those last fixes were not re-scored by the reviewer; the run's two-round budget ended there.

## Lighthouse 12 (live URL, final deploy)

| Page | Mobile perf | Desktop perf | Accessibility | Best practices | SEO* | Mobile LCP / CLS / TBT |
|---|---|---|---|---|---|---|
| `/` | 91 | 100 | 100 | 100 | 69 | 3.5 s / 0 / 10 ms |
| `/schools` | 93 | 100 | 100 | 100 | 66 | 3.2 s / 0 / 0 ms |
| `/pricing` | 96 | 100 | 100 | 100 | 66 | 2.8 s / 0 / 20 ms |
| `/faq` | 97 | 100 | 100 | 100 | 66 | 2.7 s / 0 / 0 ms |

\*The only failing SEO audit is `is-crawlable`. That is deliberate: preview builds send `noindex` and `robots.txt` disallows all crawlers. With `NEXT_PUBLIC_SITE_INDEXABLE=true` the same pages should score in the high 90s, but that has not been measured.

The first measurement scored the mobile homepage 79 (TBT 360 ms). Two changes brought it to 91:
- The page-turn scene is lazy-loaded only on wide, motion-allowed screens, so phones never download Motion.
- The school panel swap moved to CSS, and the cover entrance no longer starts invisible.

Mobile LCP (about 2.7–3.5 s under Lighthouse's simulated slow 4G) is still the weakest number. Most of it is render delay from the two variable font files (about 110 KB each).

## Deployment checks

- **Vercel project:** a new project, `keenkids-storybook-preview` (team "Neel's projects"). It is not linked to any KeenKids production project or domain.
- **Public access:** https://keenkids-storybook-preview.vercel.app returns 200 to an unauthenticated `curl`. Per-deployment URLs (`…-<hash>-neel-s-projects9.vercel.app`) are behind Vercel Authentication (302), so **share the short alias**.
- **No originals exposed:** the unblurred originals are not deployed. `/source-assets/*` returns 404, and `source-assets` is in both `.vercelignore` and `.gitignore`.
- **Share preview:** the Open Graph image renders at `/opengraph-image` (200, image/png).

## Not tested / known gaps

- Real phones and Safari or Firefox were not tested; only Chromium was automated. Scroll-driven plate reveals use `animation-timeline: view()`, so browsers without it simply show the images.
- The Google Forms and Stripe pages were not opened or submitted, by design.
- The live Lighthouse numbers come from one run each and vary by a few points.
