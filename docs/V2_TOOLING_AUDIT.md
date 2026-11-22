# V2 tooling audit

Checked on 2026-11-10. "Used for" lists only work actually done in V2.

## Design skills

| Skill | State before V2 | Action in V2 | Used for |
|---|---|---|---|
| Impeccable 4.8.2 | Installed (project) | `npx impeccable update --project -y`: already up to date, hooks re-registered | The design hook ran on every UI edit. `impeccable detect <url>` ran against the rendered production build and drove fixes (italic hero line, contrast on the journey steps and footer headings, line length on /pricing). The finish reviewer was not re-run for V2; see QA. |
| Emil Kowalski skills (18) | Installed | `npx skills@latest check` / `update`: up to date | `review-animations` standards applied to every V2 motion: exits faster than entrances, no ease-in, transform/opacity/clip-path only, interruptible CSS transitions for the picker, no motion on keyboard-repeated actions. `choreograph` informed the hero sequence (headline → window → actions). `animation-performance` informed lazy-loading Motion off the critical path. |
| Transitions.dev (`transitions-dev`, `transitions-polish`) | Installed | Up to date | Token durations and easings: `--ease-smooth-out`, panel swap 250ms, route transition 140ms out / 300ms in, picker thumb 320ms. |
| UI UX Pro Max | Installed | Present; no update channel via `skills` | Accessibility rules: focus never obscured, tablist and radiogroup semantics, 44px targets. |
| Taste Skill (`design-taste-frontend`) | Installed | Up to date | Real-browser inspection at 1440, 1280, 1024, 768, 390 and 375. Every visual is checked rendered, not just in source. |
| Hallmark 2.0 | Installed | Up to date | Anti-template rules: no eyebrow ornaments above headings (removed from page openers and school pages), no tracked caps, no invented metrics. |
| Scroll Craft | Installed (commit `75d81f7`) | Re-cloned to verify: same HEAD, nothing to update | Page pacing: one pinned signature scene (the idea journey), quiet scenes around it, a separate mobile composition, no scroll-jacking. |
| Anthropic frontend-design | Installed | Up to date | Creative reference for the type pairing and identity exploration. |

## Libraries

| Library | Change | Used for |
|---|---|---|
| Motion (`motion/react`) 14.12 | No change | The idea-journey scene only. Lazy-loaded, so phones and reduced-motion visitors never download it. |
| Motion Primitives | Listed (`npx motion-primitives list`, 33 components) | **Not installed.** `transition-panel` and `animated-background` matched the school picker, but a CSS-only sliding thumb and keyed swap did the same job without shipping Motion to every page. |
| Magic UI, React Bits, GSAP, Embla | Reviewed, not installed | No scene needed them. GSAP would have been a second animation engine for one scene, and there is no carousel by design. |
| shadcn/ui (Radix) | No change | Accordion, dialog, sheet, inputs, button. All restyled. |
| React `<ViewTransition>` (React 19.3) | New usage, no new package | Route transitions between pages |
| Playwright 1.65 | Installed WebKit and Firefox browsers | Cross-engine runs. WebKit desktop and iPhone 13 pass; Firefox fails to launch on this macOS host (see QA). |
| Brygada 1918 (Google Fonts via next/font) | Replaces Literata | Display and text serif |
| Lighthouse 12 (npx) | Run ad hoc | Performance measurement |

## Installation failures

- **Firefox (Playwright build 1572) won't launch on this macOS host.** It exits with "Could not find profile folder", including with a project-local temp directory. Firefox is opt-in (`PW_FIREFOX=1`) and reported as untested.
- **transitions-ui-generation**, from the transitions.dev repo, is still skipped by the `skills` CLI because its front matter is invalid YAML. It is not required.
