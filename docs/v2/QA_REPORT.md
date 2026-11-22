# V2 QA report

Run on 2026-11-10 against the production build, both locally (`next start`) and live at https://keenkids-storybook-preview.vercel.app.

## Baseline

V1 on the live URL, before any changes: **73 passed, 1 skipped**. The V1 snapshot is in `.snapshots/`; see `docs/V1_RECOVERY.md`.

## Deterministic checks (final build)

| Check | Result |
|---|---|
| `npm run lint` | Pass, 0 problems |
| `npx tsc --noEmit` | Pass |
| `npm run build` | Pass. 20 routes prerendered |
| `impeccable detect <url>` (rendered) | Fixed: italic serif hero headline; low contrast on the journey's inactive steps (2.2:1) and footer headings (4.4:1); pricing line length. Accepted: "cream palette" (the brief pins warm ivory) and "repeating stripes" (the near-invisible bookcloth weave, an advisory) |

## Playwright (`tests/site.spec.ts`)

**170 passed, 2 skipped** across Chromium desktop (1440), Chromium mobile (Pixel 7 at 390), WebKit desktop (1280) and WebKit iPhone 13. The suite passes against both the local production build and the live URL.

The two skips are the mobile-menu test on the two desktop-width projects, by design. All of these are emulated browser engines, **not physical devices**.

**Retained from V1:**
- every route renders with exactly one h1, no overflow and no console errors;
- axe WCAG 2.2 AA finds no serious violations on any route;
- the 404 page returns a real 404;
- every internal link resolves;
- FAQ, payment guard (no stripe.com requests), contact form, preview notice and robots, and the mobile menu all behave.

**New in V2:**
- The school picker is a radiogroup with arrow, Home and End keys. Every school links to its exact form URL, and deep links work.
- Switching schools never changes the page height.
- Interest-form schools never show the word "enroll".
- The monthly chapter tablist works by keyboard.
- Every homepage image loads.
- Browser back and forward work.
- Keyboard focus is always visibly outlined. WebKit uses Option+Tab, as Safari does.
- The idea journey has a static five-step reduced-motion fallback.

**Firefox: not tested.** Playwright's Firefox build fails to launch on this macOS host ("Could not find profile folder"). It's opt-in with `PW_FIREFOX=1` for a machine where it runs.

## Three inspection passes

1. **Composition** (1440 and 390, then every page as a contact sheet):
   - the hero headline was breaking into three lines;
   - detail crops still showed face blur;
   - the chapters medallion was clipped;
   - the debossed K was cut at the footer seam;
   - the `/schools` heading was squeezed beside the picker;
   - the old ornament label was still on school pages.

   All fixed.
2. **Interaction and motion:**
   - Journey frames are captured at six scroll points (`screenshots/motion/journey-sequence.png`).
   - Picker height was measured at 390, 768, 1024, 1280 and 1440. It varied by up to 43px at 768 and 1024, so fixed minimum heights were set per breakpoint; it's now constant at every width.
   - The keyboard model, route transitions (View Transitions are supported in Chromium) and reduced motion were checked.
3. **Precision:**
   - the rendered-page detector;
   - contrast fixes;
   - two-line headline from tablet up;
   - status labels shortened so they don't wrap;
   - the footer seam (flat cloth);
   - the private clear-photo mode, checked in a local dev run only.

## Lighthouse 12 (live, final)

| Page | Mobile perf | Desktop perf | Accessibility | Best practices | SEO* | Mobile LCP / CLS / TBT |
|---|---|---|---|---|---|---|
| `/` | 97 | 100 | 100 | 100 | 69 | 2.7 s / 0 / 10 ms |
| `/schools` | 99 | 100 | 100 | 100 | 66 | 2.0 s / 0 / 0 ms |
| `/pricing` | 98 | 100 | 100 | 100 | 66 | 2.4 s / 0 / 10 ms |
| `/programs` | 98 | 100 | 100 | 100 | 69 | 2.4 s / 0 / 10 ms |

\*The only failing SEO audit is `is-crawlable`: the preview is deliberately `noindex`.

V1 for comparison: mobile homepage 91, LCP 3.5 s.

**What changed for performance:**
- **Fonts:** about 240 KB of preloaded fonts (Literata with optical sizes, in two styles) down to about 68 KB (Brygada 1918 regular and italic, plus Figtree).
- **Hero:** both art-directed crops are preloaded per breakpoint.
- **Motion:** removed from every page except the lazy-loaded journey scene.

## Deployment

1. **Candidate:** V2 first went out as a **preview deployment** (`keenkids-storybook-preview-ddvddv3rv…`). It sits behind Vercel Authentication (302 for anonymous visitors) and was inspected with `vercel curl`: every route returned 200. The unblurred crops (`/images-clear/…`) and the originals (`/source-assets/…`) returned 404.
2. **Promotion:** after the gates passed, it was promoted to production. The stable URL https://keenkids-storybook-preview.vercel.app is public (200 to an anonymous `curl`), and the full suite passed against it.
3. **Rollback:** V1 remains available (`docs/V1_RECOVERY.md`).

## Known gaps

- Firefox was not tested, and no physical-device testing was done.
- The private clear-photo set has not been reviewed by the client.
- The Google Forms and Stripe pages were never opened or submitted, by design.
