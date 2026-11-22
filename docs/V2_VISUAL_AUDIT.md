# V1 visual audit

Inspected 2026-11-10 in Chromium against the live V1. Viewports: 1440×900, 1280×800, 1024×768, 768×1024, 390×844, 375×812, plus subpages at 1440 and 390. Captures are in `docs/v2/screenshots/v1/`; first viewports side by side are in `docs/v2/screenshots/v1-folds.png`. Earlier input comes from Impeccable's finish reviewer (two rounds).

V1 is correct, accessible and honest. It is not yet memorable. Most of its problems are restraint that slipped into sameness.

## Brand identity — weak

- **The mark doesn't hold up small.** It is two thin ellipses on a line. At 16–24px it reads as "o-0" or a pair of glasses, not a glider, and its 1.6px stroke disappears on cloth.
- **The wordmark is just a typeface.** "KeenKids" in Literata Semibold has no custom detail and no relationship to the mark. Nothing on it would be recognizable on a T-shirt, a sign, or a favicon in a tab bar.
- **There is no favicon-scale mark.** The icon is the same ellipse drawing inside a rounded square.

## Hero — calm, but not emotional

- **The composition is the split-hero template in a cloth costume:** headline left, photo right. The photo is a small plate at about 40% of the width. It is the only real photograph in the first viewport, and it is held back.
- **"A little curiosity goes a long way."** is pleasant, but it never says *after school*. The supporting line does that work, and the location line sits in small gold text at the bottom.
- **Mobile:** at 375 the headline breaks into four lines ("A little / curiosity / goes a / long way."), and the photo starts below the first screen.
- **No sense of light, depth or motion** beyond a one-time fade. The blurred faces sit at the visual center of the plate.

## Typography — competent, monotone

- **One display recipe everywhere.** Every section title uses the same `t-title`, at the same size, in the same position (top left of a 4- or 5-column rail). The page has no typographic contrast between chapters.
- **Muted body text.** Figtree body copy is set in `ink-soft` almost everywhere, so long passages read grey and flat.
- **Captions** are italic Literata at 15px in `ink-faint`. They're legible but don't look designed. Plate captions, running heads and labels all share one treatment.

## Layout — repetitive

- **One grid, over and over.** Afternoon, curriculum, voices, tuition, founders and questions all use heading-left, content-right. After the cover, the page is a stack of near-identical two-column blocks on alternating parchment and paper.
- **Long, dense pages.** The homepage is about 10,500px tall at 1440 and about 14,200 CSS px at 390, too long for the decision a parent is making.
- **Cards and rules carry the structure** (finder panel, ledger, contents, FAQ) more than composition does.

## Photography — the biggest craft gap

- **Faces dominate the crops.** Centered `object-fit: cover` on photos whose subjects are faces makes the blurred ovals the focal point (classroom gliders, foil boats). The projects (hands, gliders, boats) are often in the lower third and cut off.
- **A fully blurred photo shown large.** The stairs group photo is blurred across the whole frame, then displayed at 520px or wider, where it reads as an out-of-focus mistake.
- **No responsive art direction.** The same crop is used at every width.
- **Small founder portraits** (Shilpa's source is 400×400) are handled sensibly, but they look like thumbnails.

## Visual personality — "nice template"

- **The book world appears in places, not everywhere.** The world exists (cloth, plates, ribbon, the page-turn), but it shows up in moments, while everything between them is a generic marketing page on cream.
- **No illustration system.** There are four activity icons and a paper plane, and nothing ties them together.

## Motion — thin, and uneven

- **The page-turn is the one rich moment.** It works well, but it is surrounded by near-zero motion. There are no route transitions, no image reveals on most photos, and no light or atmosphere.
- **School switching** is a simple fade, and the panel changes height between schools (Curtner and Rose have longer facts), which nudges the page.
- **Hover and press feedback are correct but generic:** the arrow nudges and the button scales.

## Conversion — right path, too much reading

- **The school finder is in the right place,** but its panel shows everything at once: summary, four facts, a pricing list of up to five lines, two links and a footnote. It's an information wall, not a quick choice.
- **Tuition appears in four places** (finder panel, homepage ledger, school pages, pricing page) with slightly different framing.
- **Sinnott is labelled "Now enrolling"** although its form is an interest form. V2 must not claim enrollment from an interest form alone.
- **The only enrollment CTA sits deep in the panel.** It is the right action, but it competes with "Everything about Mattos" and the cost list.

## Content density — too much on the homepage

- **"An afternoon at KeenKids":** five activities, each with a heading, a paragraph and two or three detail lines, plus a list of eight daily inclusions.
- **Tuition:** five footnote bullets, two CTAs and a second link.
- **Six FAQs,** three testimonials plus a "read all 12" link, and a founders block with two paragraphs.
- **Repetition:** program promises (build, code, speak) repeat across the afternoon, tuition, founders and closing sections.

## Mobile — compressed desktop

- **Same order, same density.** Mobile is the desktop order stacked, with the same density. The 2×2 school tab grid is fine, but the panel below it runs past a full screen.
- **Paper-on-cloth reads as boxes.** The static story spread and the contents card become long paper boxes.
- **Nothing is composed specifically for a phone,** such as a sticky school action or a shorter story.

## What V2 keeps

- The clothbound-storybook idea: evergreen outside, paper inside.
- Real photographs as plates.
- The card-drawer school finder concept and its WAI-ARIA behavior.
- Honest copy and every verified fact.
- All routes, forms, tests and the payment guard.

## What V2 changes structurally

1. A real identity: a new mark and wordmark, with a favicon-scale glyph.
2. A hero built around a large, art-directed photograph in a die-cut "cover window", an after-school headline, and a light, atmospheric entrance.
3. A two-step school finder: a compact selector first, then a fixed-height detail view with one action.
4. The activity list becomes an asymmetric photo essay with one-line captions.
5. The page-turn becomes "the journey of an idea" (Imagine → Build → Test → Try again → Share), with a separate mobile composition.
6. The contents list becomes a chapter index with one featured theme.
7. The homepage drops to about nine scenes with one idea each. Detail moves to subpages.
8. Per-breakpoint photo crops with explicit focal points, and the fully blurred stairs photo used small.
9. Distinct openers for each subpage.
10. One motion language across the site, including route transitions.
