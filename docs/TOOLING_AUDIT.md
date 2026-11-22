# Tooling audit

Checked on disk on 2026-11-10. Every skill below has a readable `SKILL.md` in `.claude/skills/` (project scope). Hashes come from `skills-lock.json`.

## Design skills

| Skill | Official repository | Command run | Installed at / version | Readable | How it was used |
|---|---|---|---|---|---|
| Impeccable | github.com/pbakaus/impeccable | `npx impeccable install --providers=claude --scope=project` | `.claude/skills/impeccable`, skill v4.8.2, engine v0.1.21 (darwin-arm64). Agents in `.claude/agents/`, design hook in `.claude/settings.local.json` | Yes | Ran `impeccable context`. Followed `new-work.md`, `mode-persuade.md` and `craft-floor.md`. Wrote PRODUCT.md and the direction contract (`.impeccable/surfaces/src-app-page-tsx.md`). The design hook scanned every UI edit (no findings), `impeccable detect --json src` returned `[]`, and the shipped finish reviewer audited the screenshots. |
| Emil Kowalski skills (18) | github.com/emilkowalski/skills | `npx skills@latest add emilkowalski/skills --skill '*' -a claude-code -y` | `.claude/skills/{emil-design-eng, apple-design, animate, review-animations, improve-animations, find-animation-opportunities, animation-performance, choreograph, …}` | Yes | `review-animations` checklist run against all motion. Rules applied from `emil-design-eng`, `animate`, `choreograph` and `animation-performance`: no ease-in, UI under 300ms, never `scale(0)`, interruptible transitions, reduced-motion fallbacks. |
| Transitions.dev | github.com/Jakubantalik/transitions.dev | `npx skills@latest add Jakubantalik/transitions.dev -a claude-code -y` and the same command with `-s transitions-polish` | `.claude/skills/transitions-dev`, `.claude/skills/transitions-polish` | Yes | Ran a token review with transitions-polish. Changes: accordion symmetric at 250ms, dialog 250ms open / 150ms close from 0.96, panel swap 250ms with 2px blur, cover stagger capped at 300ms, `--ease-smooth-out` added. Transitions Pro was not used. |
| UI UX Pro Max | github.com/nextlevelbuilder/ui-ux-pro-max-skill | `npx ui-ux-pro-max-cli init --ai claude` | `.claude/skills/ui-ux-pro-max` plus helpers (`design`, `design-system`, `ui-styling`, `brand`, `banner-design`, `slides`) | Yes | Accessibility rules applied, including `focus-not-obscured` (scroll-padding under the sticky header), `color-not-only` and `hover-vs-tap`. |
| Taste Skill | github.com/Leonxlnx/taste-skill | `npx skills@latest add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend -a claude-code -y` | `.claude/skills/design-taste-frontend` | Yes | Applied its rule that every visual must render at 1440, 1024, 768 and 390. The storybook brief overrode its generic style recommendations, as the brief asks. |
| Hallmark | github.com/Nutlope/hallmark | `npx skills@latest add nutlope/hallmark --skill '*' -a claude-code -y` | `.claude/skills/hallmark`, v2.0.0 | Yes | Anti-slop rules applied: no eyebrow kickers, no tracked-caps labels (the TOC label was fixed), `overflow-x: clip` on html and body, no invented metrics or testimonials. |
| Scroll Craft | github.com/nateherkai/scroll-craft | `git clone --depth 1 https://github.com/nateherkai/scroll-craft`, then the skill folder was copied | `.claude/skills/scroll-craft` at commit `75d81f74e83692add18cd7a8a8e078b8a887a579` | Yes | Used for page pacing (one emotional peak) and for the single signature scroll scene, the page-turn spread. No scroll-jacking. |
| Anthropic frontend-design | github.com/anthropics/skills | `npx skills@latest add anthropics/skills --skill frontend-design -a claude-code -y` | `.claude/skills/frontend-design` | Yes | Second-opinion reference for typography and art direction. |

### Installation problems and remedies

- **npm cache:** the sandbox blocks writes to `~/.npm`. Every `npx` call ran with `npm_config_cache=$TMPDIR/npm-cache`.
- **create-next-app:** it crashed after scaffolding (a file-lock retry loop). The scaffold was generated in a temp folder, copied in, and dependencies were reinstalled cleanly.
- **Protected `.claude/skills`:** the sandbox protects this folder, so the skill installers ran outside the sandbox with their output logged.
- **transitions-ui-generation:** the `skills` CLI skipped this skill from the transitions.dev repo because its `SKILL.md` front matter is invalid YAML ("Nested mappings are not allowed"). It is not one of the required skills (`transitions-dev` and `transitions-polish` both installed), so it was left out.
- **Scroll Craft:** installed by cloning the repo and copying the skill folder, which the brief allows as an alternative to the plugin marketplace.

## Implementation libraries

| Library | Version | Use |
|---|---|---|
| Next.js (App Router, Cache Components, Partial Prefetching) | 16.4.6 | Framework. APIs were checked against `node_modules/next/dist/docs/` |
| React | 19.3.0 | — |
| TypeScript | 5.x (strict) | — |
| Tailwind CSS (`@tailwindcss/turbopack`) | 4.3.3 | Design tokens and utilities |
| shadcn/ui (`radix-nova`, Radix base) | CLI 4.23 | Added: button, accordion, dialog, sheet, input, textarea, label. All restyled to the storybook system |
| Motion (`motion/react`) | 14.12.0 | The page-turn spread. Lazy-loaded only on wide, motion-allowed screens |
| Lucide | 1.71.0 | Interface icons |
| Zod | 4.6.7 | Contact form validation |
| Playwright + @axe-core/playwright | 1.65.0 / 4.14.0 | End-to-end and accessibility tests |
| sharp (bundled with Next) | 0.35.5 | Face blurring and metadata stripping (`scripts/process-images.mjs`) |

GSAP, Lenis and React Bits were not installed. Motion covers the one scroll scene, and the brief asks for no smooth-scroll library.
