# Motion walkthrough (V2)

There is one motion language: things are laid down like paper. Masks uncover from an edge, prints settle at small angles, and nothing bounces. Exits are faster than entrances. Only transform, opacity and clip-path animate (plus a single grid-rows height reveal). Frame sequences are in `docs/v2/screenshots/motion/`.

| Moment | What happens | Values | Reduced motion |
|---|---|---|---|
| **Opening** | The headline lines rise 12px from a 4px blur, staying readable from the first frame. The arched window opens from a narrower inset while the photo settles from 1.07× scale. The actions follow. | 720ms `--ease-out-expo`, 60ms stagger (total under 300ms); window 1100ms, photo 1600ms; starts at 60–120ms | All off; the page renders final |
| **Dust motes** | Twelve specks drift slowly in the window's sunlight, the only particles on the site | 9s loops, transform/opacity; paused by IntersectionObserver when offscreen | Hidden |
| **School picker** | An evergreen thumb slides under the chosen school (CSS `mod()`/`round()` positions, so it's interruptible). The detail card opens once (grid-rows); later swaps cross-fade in place at a fixed height. | Thumb 320ms `--ease-smooth-out`; reveal 300ms; swap 250ms in with 8px and 2px blur; the old card leaves instantly | Thumb fades only; no swap animation |
| **Image reveals** | Prints uncover from the bottom edge as they enter the viewport | Scroll-driven `animation-timeline: view()`, clip-path inset 14% → 0 | Off; images are simply visible |
| **The idea journey** (signature) | A 260vh pinned stage on wide screens. Each of five steps lays a paper sheet down: unmasks from the bottom, drops 34px and rotates into a resting angle. Earlier sheets slide back into a stack and dim. A fine thread fills down the step markers. | Motion `useScroll` with a spring (stiffness 170, damping 30); each step owns 1/5 of the scroll | A static vertical sequence (also used on phones) |
| **Chapters** | The selected month's marker line extends, and the featured theme swaps | Marker width 300ms; panel swap 250ms | Swap is instant |
| **Route transitions** | React `<ViewTransition>`: the old page fades out, the new page rises 10px | 140ms out, 300ms in | 1ms |
| **Buttons and links** | Press scales to 0.97; arrows nudge 3px; underlines darken | Press 100ms, release 200ms; hover gated by Tailwind v4's `(hover: hover)` | Same (no movement beyond the press) |
| **Accordion, dialog, sheet** | As in V1, tuned to tokens | 250ms symmetric accordion; dialog 250/150ms; sheet 300/200ms | Fades only |

## Performance

- **Motion stays off the critical path.** The library loads only with the journey scene (dynamic import), so phones and reduced-motion visitors never download it.
- **No layout reads per frame.** Scroll values feed transforms directly.
- **Fixed geometry.** The school picker has fixed minimum heights per breakpoint, so switching schools never moves the page. A test verifies this.
