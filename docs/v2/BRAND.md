# KeenKids identity (V2)

## The mark: the folded K

A K whose arm is a folded paper dart, with the fold's underside in antique gold. It comes from what KeenKids kids actually do (fold, cut and build with paper) and reads as a single letter at favicon size.

- **Grid:** 64 units. Stem 12 × 50 with a 2.5 radius. Arm: triangle (23.5,33.5) (56,7.5) (42.5,37). Fold: (23.5,33.5) (42.5,37) (31,44). Leg: (33.5,41.5) (44.5,36.5) (58,57) (45.5,57).
- **Colors:** evergreen `#23453a` on cream; paper `#fffdf8` on cloth. The fold is always gold `#c9a05a`.
- **Files:** component `src/components/brand/logo.tsx` (`<Mark>`, `<Logo>`); favicon `src/app/icon.svg` (cream K on an evergreen tile).
- **Wordmark:** "KeenKids" in Brygada 1918 Semibold, tracking −0.025em, set to the right of the mark with a gap of 0.3× the mark's height.
- **Minimum size:** 16px for the mark alone, 24px mark height for the lockup.

## Concepts considered

See `docs/v2/screenshots/logo-and-type-comparison.png`. The final sheet is `logo-final.png`.

| Concept | Verdict |
|---|---|
| A · The paper glider (two rings on a straw) | Rejected. At small sizes it reads as a pierced ring or a "no" sign, and the diagonal straw dominates. |
| B · The book and the idea (open book, gold dot) | Rejected. Clear and warm, but it is the most common education-logo shape, and the brief asked to avoid generic books. |
| **C · The folded K** | **Chosen.** Iconic, legible at 16px, distinctive on both grounds, and tied to the act of making. |

## Type

**Brygada 1918** (display and text serif, with a real italic) + **Figtree** (body and UI).

They were compared against Literata + Figtree (V1), Young Serif + Instrument Sans, and Literata + Instrument Sans. Brygada has more character at display sizes than Literata, keeps a fine italic for captions, and costs about 23 KB per style against Literata's about 110 KB with optical sizes.

## Palette

One tonal family: ivory `#f8f4ea`, paper `#fffdf8`, evergreen `#23453a`, deep evergreen `#172f26`, charcoal ink `#2a2d29`, antique gold `#c9a05a` (cloth and the fold), earthy red `#b5654e` (rare), sage `#dde3d6`.
