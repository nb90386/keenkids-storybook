# Conversion measurement plan (for client approval)

**Nothing is tracked today.** `src/lib/track.ts` dispatches a browser event (`keenkids:track`) that goes nowhere until KeenKids approves an analytics tool. No personal data and no child data is ever included.

| Event | Fires when | Properties | Answers |
|---|---|---|---|
| `school_selected` | A parent picks a school in the picker | `school` | Which campuses draw interest? |
| `form_opened` | An enrollment or interest-form button is clicked | `school`, `kind` (enrollment or interest) | **The primary conversion.** |
| `chapter_selected` | A month is chosen in the curriculum preview | `month` | Is the curriculum preview used? |
| `program_viewed` | "How a week works" is clicked (`data-track`) | — | Do parents look for program detail? |
| `contact_composed` | (planned) The contact form opens the mail app | `topic` | The secondary conversion |

**Funnel to watch:** homepage visit → `school_selected` → `form_opened`.

**Recommended tools:** cookieless analytics (for example Vercel Web Analytics or Plausible) listening for `keenkids:track` and forwarding events. A privacy note should be added to the site at the same time. The live site currently runs GA4 without one.

Don't treat any change in these numbers as proof that a redesign worked without a before/after period of the same length.
