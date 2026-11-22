# Photography art direction (V2)

## Usage status

| Set | Where it lives | Status |
|---|---|---|
| **Softened (faces blurred into the file)** | `public/images/*.jpg`, `public/images/v2/*.jpg` | **Public.** Used on the live preview. |
| **Clear (unblurred) crops** | `public/images-clear/v2/*.jpg`, generated locally by `scripts/crop-photos.mjs` | **Private, local review only.** Git-ignored and Vercel-ignored, so never deployed. To review them, run `NEXT_PUBLIC_PHOTO_SET=clear npm run dev` on a reviewer's own machine. |
| Founder portraits | `public/images/founder-*.jpg` | Public. Same photos as on the live site, with metadata stripped. Approval to reuse should still be confirmed. |

**Why the clear set is not public:** we have no documented guardian consent for children's faces. Photos being on the live site doesn't establish reuse rights. Clear photos go public only once KeenKids confirms consent in writing (see `CLIENT_REVIEW.md`). No faces were reconstructed or generated; the clear crops come from the original files.

## Crops

All crops are cut once, in source pixels, by `scripts/crop-photos.mjs` from the 1200px sources. Contact sheet: `docs/v2/screenshots/photo-crops.png`.

| Image | Purpose | Source box (L, T, W, H) | Aspect | Focal point | Desktop / tablet / mobile | Faces | Project detail |
|---|---|---|---|---|---|---|---|
| `hero-wide` | Hero window, ≥768px | 0, 30, 1200, 790 | ~3:2, shown in an 11:12 arch at lg and 6:5 at md | 50% 58% | Arch window, 40vw / 6:5 window, 92vw / — | Softened, small | Gliders held overhead |
| `hero-tall` | Hero window, <768px | 262, 120, 600, 735 | ~4:5 | 50% 62% | — / — / 4:5 arch, 92vw | Softened | Gliders, uniforms, courtyard |
| `boats-strip` | Making scene; Programs opener | 40, 440, 1080, 360 | 3:1 | center | 60vw / 55vw / 92vw | Cropped out (chin line at most) | Three foil boats in hands |
| `glider-hands` | Making scene; journey "Build" | 40, 515, 700, 385 | ~1.8:1, shown 4:3 in the journey | 45% 40% | 38vw / 48vw / 92vw | Cropped out | Hands, both loops, straw |
| `boat-hands` | Making scene | 730, 520, 400, 280 | 10:7 | center | 24rem / 24rem / 80vw | Cropped out | A boat with a foil sail on an open palm |
| `build-day-stairs` | Journey "Share" (small) | full frame, whole-frame blur | 4:3 | 50% 55% | About 34vw at most | Whole frame softened | Builds held up (soft) |

**Resolution:** sources are 1152–1200px wide. The detail crops (400–700px) are shown no wider than their source at 1x, and the hero at up to 40vw on desktop. Two crops were cut and then **rejected** after review: `glider-held` and `gliders-raised`, where faces still dominated.

## Rules

- **Crop by subject.** Every crop is chosen around hands and projects. Center cropping is never the default.
- **Explicit focal points.** `object-position` is set on every `object-cover` image.
- **Art direction per breakpoint.** The hero uses `<picture>` with a separate phone crop, plus per-breakpoint preloads.
- **Whole-frame blur stays small.** The fully blurred stairs photo never appears larger than a small print.
