---
name: KeenKids Storybook
description: A clothbound library book, read from the evergreen cover inward to warm paper pages.
colors:
  evergreen: "#254638"
  evergreen-deep: "#1b3429"
  evergreen-soft: "#3c5e4f"
  gold: "#d5a65d"
  gold-soft: "#e7c993"
  terracotta: "#b87c68"
  terracotta-ink: "#8f5441"
  paper: "#fffcf5"
  parchment: "#f7f3e9"
  parchment-deep: "#efe9da"
  ink: "#282c26"
  ink-soft: "#4f554c"
  ink-faint: "#6b7067"
  sage: "#d8dfd2"
  sage-deep: "#c3cdbb"
  rule: "#ddd7cb"
  rule-strong: "#c9c1b1"
  destructive: "#a3412e"
typography:
  display:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.55rem + 4.9vw, 5.75rem)"
    fontWeight: 460
    lineHeight: 1
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.45rem + 2.7vw, 3.75rem)"
    fontWeight: 480
    lineHeight: 1.06
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  subheading:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.375rem)"
    fontWeight: 520
    lineHeight: 1.3
  lede:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"kern\", \"liga\""
  small:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
rounded:
  notch: "2px"
  page: "4px"
  nav: "5px"
  card: "6px"
  round: "9999px"
spacing:
  gutter: "clamp(1.25rem, 4.2vw, 3rem)"
  section-y: "clamp(4.5rem, 2.5rem + 7vw, 9rem)"
  measure: "34rem"
  header-h: "4rem"
  shell-max: "82rem"
components:
  button-primary:
    backgroundColor: "{colors.evergreen}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.evergreen-soft}"
  button-cloth:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.evergreen-deep}"
    rounded: "{rounded.card}"
    padding: "0 24px"
    height: "56px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0 20px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.paper}"
  button-outline-cloth:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "0 24px"
    height: "56px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.parchment-deep}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0 14px"
    height: "48px"
  nav-link-cloth:
    textColor: "{colors.paper}"
    rounded: "{rounded.nav}"
    padding: "0 14px"
    height: "40px"
  index-card-tab:
    backgroundColor: "{colors.parchment-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "12px 16px"
  index-card-tab-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  card-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  tag-this-month:
    textColor: "{colors.terracotta-ink}"
    rounded: "{rounded.round}"
    padding: "2px 8px"
---

# Design System: KeenKids Storybook

## Overview

**Creative North Star: "The Clothbound Library Book"**

The site works like a well-made library book. Evergreen bookcloth wraps the outside: the sticky header, the cover, the open spread of the project story, the back-cover invitation and the colophon footer. Inside are warm paper and parchment pages with fine rules, dotted leaders and italic running heads. Photographs are tipped-in plates. They sit on a paper mount with a hairline inner rule, optional album corners and an italic caption. You read from the cover inward. Every page region is either cloth or paper, never a third material.

The density is that of a printed book: generous section rhythm, an asymmetric 12-column editorial grid, serif headings with balanced wrapping and sans reading text at a comfortable measure. The cloth is committed and full-bleed. The pages are restrained. Ornament comes from the book's own vocabulary: gold foil stamping, a silk ribbon bookmark, index-card tabs, dot leaders and authored line drawings at a 1.4 to 1.6 stroke. It never comes from decoration borrowed from software UI.

Motion is quiet and physical. The cover rises in once on load, plates settle as they enter the viewport, and the project-story plates turn on the gutter like pages. The motion is transform-based and fully removed under reduced motion.

**Key Characteristics:**
- Two materials only: evergreen bookcloth outside, warm paper inside.
- Literata for the book voice (display, headings, captions, running heads), Figtree for reading and controls.
- Photographs always arrive as mounted, captioned plates with light print toning.
- Gold appears only as foil on cloth. Terracotta appears only on index cards and the ribbon.
- Soft, offset, multi-layer shadows tinted from ink. Never hard offsets.

## Colors

The pages are restrained and the cloth is committed: an evergreen case, warm paper leaves, and two rare accents stamped or tipped in.

### Primary
- **Evergreen Bookcloth** (evergreen): fills every cloth region through a fine woven crosshatch, plus primary buttons, links, focus rings on paper, the caret and the browser theme colour. Evergreen Deep sits beneath the page as the overscroll and preview-notice ground and carries text on the cloth button. Evergreen Soft is the primary-button hover, the marginal drawings and the list bullet dots.

### Secondary
- **Foil Gold** (gold): stamping on cloth only. Used for the wordmark glider, the cover's location line and its short rule, the header's current-page underline, footer column heads and external-link arrows, the closing paper-plane drawing and the focus ring on cloth. Gold Soft is the hover border of the cloth button.

### Tertiary
- **Ribbon Terracotta** (terracotta): the 3px header rule on the selected index card and the silk ribbon bookmark. Terracotta Ink is the text colour for the small "This month" tag, which sits on a 15% terracotta wash.

### Neutral
- **Warm Paper** (paper): cards, plate mounts, form fields, the mobile Contents sheet and text on cloth.
- **Parchment** (parchment): the body ground, with an SVG fractal-noise grain at 5% alpha.
- **Deep Parchment** (parchment-deep): quiet fills such as inactive index cards, image wells, ghost-button hover and the tuition band at 50%.
- **Reading Ink** (ink): headings and body text. Ink Soft is for secondary text and ledes. Ink Faint is for captions, labels and running heads only.
- **Sage** (sage, sage-deep): text selection (sage-deep with evergreen-deep text), hover on index cards over paper, and the confirmation panel.
- **Book Rule** (rule, rule-strong): the default border colour, hairline rules and table dividers. Rule Strong is for dotted leaders, outline-button borders, input borders and the FAQ rules.
- **Destructive** (destructive): inline field errors, written in words below the field.

### Named Rules
**The Foil Rule.** Gold appears only on cloth, as stamping, focus rings and hairlines. It never fills a region and never sits on paper.

**The Ribbon Rule.** Terracotta belongs to the index card and the silk ribbon. It never colours headings, buttons or backgrounds.

**The Two Materials Rule.** Every region is cloth (evergreen with weave) or paper (paper or parchment with grain). Mark cloth regions `on-cloth` so focus rings switch to gold.

## Typography

**Display Font:** Literata (with Iowan Old Style, Georgia, serif), variable with optical sizes and true italics
**Body Font:** Figtree (with ui-sans-serif, system-ui, sans-serif)

**Character:** A book face designed for long reading, set at intermediate weights (460 to 520) with optical sizing, paired with a warm, open sans that keeps controls and data plain.

### Hierarchy
- **Display** (460, clamp 2.75 to 5.75rem, 1.0, -0.022em): cover headline, chapter openers on subordinate pages, and the closing invitation.
- **Headline** (480, clamp 2.125 to 3.75rem, 1.06, -0.018em): section titles, usually held to 10 to 16ch.
- **Title** (500, clamp 1.5 to 2.125rem, 1.15): sub-sections, school names and activity leads.
- **Subheading** (520, clamp 1.19 to 1.375rem, 1.3): small serif heads within a column.
- **Lede** (Figtree 400, clamp 1.125 to 1.31rem, 1.55): standfirsts beside or under titles, at 32 to 46ch.
- **Body** (Figtree 400, 1.0625rem, 1.6): reading text, with long answers capped near 62ch.
- **Caption** (Literata italic, 0.9375rem, 1.45): plate captions (max 40ch), running heads (0.8125rem) and the "Contents" heading.
- **Label** (Figtree 600, 0.8125rem, 0.01em, sentence case): field and data labels such as "Cost" and "Monthly tuition".

### Named Rules
**The Book Voice Rule.** Serif carries anything a printed book would set: titles, captions, running heads, numerals in prices, contents entries and the mobile menu entries. Sans carries anything a form would set: body, controls and labels.

**The Sentence Case Rule.** Labels are sentence case at 0.01em. The system has no uppercase tracked text.

**The Typeset Rule.** Headings use `text-wrap: balance`, prose uses `pretty`, and prices, months and session counts use tabular lining numerals.

## Layout

Content sits in a shell (max 82rem) with a fluid gutter. Sections breathe on a fluid vertical rhythm (section-y). Pages use a 12-column grid from `lg`, almost always split asymmetrically with an empty column: 5 | 6 offset to column 7, 4 | 7 offset to column 6, 7 | 5, or 4 | 8. The heading column is often sticky beneath the header at header-h plus 2 to 2.5rem. Text measures are set per element in ch (10 to 62ch) rather than with one global width.

On mobile, columns stack in source order with the heading first. The index-card tabs become a 2-up grid and the header collapses to the wordmark, a compact cloth button and a "Contents" sheet. The project-story spread runs as a sticky 300vh scene only at 1024 by 640 and above with motion allowed. Everywhere else it is a static two-page spread that stacks into one column below `md`. Chapter openers on subordinate pages use their own fluid padding (clamp 3.5 to 7rem top). Tap targets are at least 40px, and text links carry `min-h-11`.

## Elevation & Depth

Depth is physical and soft, as if paper rests on cloth. Shadows are layered, offset downward, negatively spread and tinted from Reading Ink on paper or from black on cloth. Paper itself is flat apart from the grain. Shadows mark objects that sit on top of a page: plates, cards and dialogs. On the cloth, depth is deeper and darker, as if a page block casts onto the case. A gutter gradient (ink at 12 to 14%) shades the inner edge of open spreads.

### Shadow Vocabulary
- **Plate** (`box-shadow: 0 1px 1px rgb(40 44 38 / 0.06), 0 6px 14px -6px rgb(40 44 38 / 0.18), 0 22px 40px -24px rgb(40 44 38 / 0.28)`): photograph mounts on paper.
- **Plate on cloth** (`box-shadow: 0 2px 2px rgb(0 0 0 / 0.12), 0 30px 50px -28px rgb(0 0 0 / 0.65)`): photograph mounts on the cover.
- **Card** (`box-shadow: 0 1px 0 rgb(40 44 38 / 0.04), 0 10px 24px -14px rgb(40 44 38 / 0.22)`): paper cards (school panel, contents, ledger), paired with a 1px ring of ink at 5%.
- **Lift** (`box-shadow: 0 2px 2px rgb(40 44 38 / 0.05), 0 18px 36px -18px rgb(40 44 38 / 0.32)`): dialogs and overlays.
- **Spread on cloth** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.6)`, deepening to `0 40px 80px -40px rgb(0 0 0 / 0.75)` in the animated scene): the open book on the project-story cloth.

### Named Rules
**The Soft Offset Rule.** Every shadow has a downward offset and a long, negatively spread blur. No hard-edged offset shadows, no glow and no coloured shadows.

## Shapes

The corners are those of a bound object: barely softened, never pill-shaped. Cards, buttons, fields and index-card tabs use 6px (card). Book pages and spreads use 4px (page). Header nav links use 5px (nav). The index-card header rule uses a 2px notch. Full rounding is reserved for things that are round in print: bullet dots, the FAQ plus toggle and the single "This month" tag. Plate mounts are square-cornered paper with album photo corners clipped as triangles. The silk ribbon is a CSS clip-path with a fixed 7px notched tail. Hairline rules (1px, rule) and dotted leaders (1.5px, rule-strong) divide content instead of boxes.

## Components

### Buttons
Firm, bookish and quiet. Semibold Figtree with a trailing arrow that nudges 3px on hover.
- **Shape:** gently squared corners (6px). Heights are 48px by default, 40px small and 56px large. Icon buttons are 44px.
- **Primary:** evergreen fill and border with paper text, a faint inner top highlight and a soft evergreen drop (`0 1px 0 rgb(255 255 255/0.08) inset, 0 6px 16px -10px rgb(27 52 41/0.7)`). Hover moves to Evergreen Soft.
- **Cloth:** the primary action on cloth. Paper fill with Evergreen Deep text and `0 8px 20px -12px rgb(0 0 0/0.55)`. Hover warms the fill to #fff6e3 with a Gold Soft border.
- **Outline / Outline-cloth:** transparent, with a Rule Strong border on paper or paper at 35% on cloth. Hover sharpens the border.
- **Ghost / Link:** ghost hovers to Deep Parchment. The link variant is evergreen text with a 35% underline that firms on hover.
- **Press:** `scale(0.97)` at 100ms. Transitions run 200ms ease-out. Disabled is 50% opacity.

### Chips
- **"This month" tag:** the only pill. Terracotta Ink 0.75rem semibold text on a 15% terracotta wash, set beside the ribbon-marked contents entry.

### Cards / Containers
- **Corner Style:** 6px for cards and 4px for book pages.
- **Background:** paper with grain.
- **Shadow Strategy:** Card shadow plus a 1px ink ring at 5% (see Elevation).
- **Border:** internal hairline rules (rule) only.
- **Internal Padding:** 24px on mobile, 32px from `sm`, and 40px at `lg` for the school panel. Ledger rows use 28px vertical padding.

### Inputs / Fields
- **Style:** 48px tall, paper ground, a 1px Rule Strong border, 6px radius and 14px side padding. Labels sit above in 0.9375rem semibold ink.
- **Focus:** the border turns evergreen, with a 3px evergreen ring at 15%. Hover darkens the border to ink at 40%.
- **Error:** a destructive border plus an error message in words under the field. Hints sit beneath in Ink Faint.

### Navigation
- **Header:** a sticky cloth bar 4rem tall that hides on deliberate scroll down and returns on scroll up or when focus enters it. Links are 40px tall, Figtree medium in paper at 80%. A gold 1px underline draws in from the left on hover (300ms, ease-out-expo) and stays on the current page. The bar gains a shadow once scrolled.
- **Mobile:** a right-hand paper "Contents" sheet with Literata 1.5rem entries joined to dot leaders, secondary links in Ink Soft and a full-width primary button at the foot.
- **Footer:** the colophon on cloth. Column heads are gold Figtree semibold at 0.875rem, links are paper at 80%, and the fine print is italic serif.

### Index-card School Finder (signature)
A WAI-ARIA tablist of index cards, one per school. On the homepage the tabs rise out of the cover cloth into the page below. Inactive cards sit 6px lower, with paper at 8% on cloth or Deep Parchment on paper, and lift 4px on hover. The selected card is paper, flush with the panel, with a terracotta 3px header rule and an upward shadow. Card names use Literata 1.125rem medium and statuses Figtree 0.8125rem. The panel below is a paper card with a 7 | 5 split: details as a label and value list, cost with tabular numerals, and a full-width large primary button to the school's real form.

### Plate (signature)
A photograph tipped into the page. A paper mount with fluid padding (0.5 to 0.875rem), a hairline inner outline (ink at 10%), print toning (`saturate(0.88) contrast(1.02) sepia(0.06)`), a faint printed-stock sheen, optional album corners (#e9e1cf) and an italic caption in Ink Faint, or paper at 80% on cloth.

### Curriculum Contents (signature)
A paper page titled "Contents" in italic serif. Month themes in Literata are joined to tabular month names by dotted leaders, with dashed rules between rows. A silk ribbon drops in (900ms, ease-out-expo) to mark the visitor's current month, alongside the terracotta tag.

### Tuition Ledger
One paper card listing every plan as a row, with no promoted plan. A parchment header row carries the labels, and the day counts and prices are set in large tabular serif.

### FAQ List
A Radix accordion between Rule Strong hairlines. Questions are Literata 1.1875rem medium. A 36px round toggle with a plus icon rotates on open. Answers open with a grid-rows height transition (250ms, ease-smooth-out) and stay hidden while closed.

## Do's and Don'ts

### Do:
- **Do** put every region on one of the two materials: cloth (evergreen with weave, marked `on-cloth`) or paper (paper or parchment with grain).
- **Do** present every photograph as a Plate with a mount, an inner hairline, print toning and an italic caption.
- **Do** set titles, captions, running heads and prices in Literata. Set body, controls and labels in Figtree, in sentence case.
- **Do** use dotted leaders, hairline rules and running heads to structure lists and contents, the way a book would.
- **Do** keep corners at 6px for cards, buttons and fields and 4px for book pages. Use full rounding only for dots, the FAQ toggle and the "This month" tag.
- **Do** use the soft offset shadow tokens (plate, card, lift) and keep motion to transform, opacity and clip, with a reduced-motion fallback that shows everything statically.
- **Do** draw ornaments as inline SVG line art at a 1.4 to 1.6 stroke in currentColor.

### Don't:
- **Don't** use gold on paper or as a fill. Gold is foil on cloth.
- **Don't** use terracotta outside the index-card rule, the ribbon and its tag.
- **Don't** use emoji, Unicode arrow glyphs or icon fonts. Icons are Lucide SVG or authored marks.
- **Don't** set uppercase tracked labels or pills as decoration.
- **Don't** use hard-edged offset shadows, glows or coloured shadows.
- **Don't** let content wait on a scroll trigger to become visible.
