# Conversion audit

## The parent's path

1. **Understand.** The cover says what KeenKids is (after-school, hands-on, grades 1–5, Milpitas) in one headline, one sentence and one real photograph.
2. **Find the school.** The school tabs rise out of the cover. At 1440×900 they are visible without scrolling, and on a phone they are the next thing below the cover. Picking a school shows that campus's days, times, room, start date and cost, plus the button for **that school's own form**.
3. **See evidence.** "An afternoon at KeenKids", the project spread, the monthly table of contents, and verbatim parent notes.
4. **Check price and logistics.** The tuition ledger compares the three plans side by side. The materials fee, the 4-day Mattos option, the sibling discount and the cancellation policy sit directly beneath it. Pickup, grades, schedule, what to bring, missed days and refunds are open on the homepage FAQ.
5. **Act.** Open the school's Google Form, or ask a question. **Find your school** appears in the header on every page, in the cover, after tuition and on the back cover.

## Every CTA and where it goes

| CTA | Destination | Real? |
|---|---|---|
| Find your school (header, closing, subpages) | `/schools` | Yes |
| Find your school (cover, tuition) | `#find-your-school` on the homepage | Yes |
| Explore the program | `/programs` | Yes |
| School tabs | Select in place. Deep links use `#school-<slug>` | Yes |
| Open the Mattos enrollment form | Mattos Google Form (exact URL from the live site) | Yes, external |
| Open the Sinnott form | `https://forms.gle/Y7DhexwmBF9JpvLe6` | Yes, external (titled "Interest Form") |
| Join the Rose interest list | `https://forms.gle/DCKvuZNrGG7aRAso8` | Yes, external |
| Join the Curtner interest list | Curtner Google Form (exact URL) | Yes, external |
| Pay online (×3) | **Preview:** a dialog naming the Stripe link. **Live** (`NEXT_PUBLIC_PAYMENTS_LIVE=true`): the exact `buy.stripe.com` links | Guarded |
| Ask us a question, Contact | `/contact` | Yes |
| Write the email (contact, bring-to-your-school) | Opens the visitor's mail app (`mailto:keenkidsinfo@gmail.com`) with a prefilled message | Yes. Nothing is stored or sent by the site |
| Apply by email | The exact prefilled `mailto:` from the live site | Yes |
| Parent portal | `https://keenkids-enrichment.vercel.app/auth/login` (unchanged) | Yes |
| Instagram | `https://www.instagram.com/keenkids.enrichment/` | Yes |

Playwright checks every internal link and every school form URL (see QA_REPORT.md).

## Decisions

- **Fixed: broken "Bring to Your School" link.** The live site's link returns a 404. It now leads to `/bring-to-your-school`, a real page with a short hosting form.
- **No fake urgency.** "Spots are filling fast" is gone, and the "⭐ MOST POPULAR" badge on the 5-day plan is gone (not confirmed).
- **Labels match the forms.** Buttons say "interest list" where the form is an interest form, and "enrollment form" only for Mattos.
- **The "no hidden fees" contradiction is fixed by disclosure.** The $100 materials fee from the school forms now appears beside the prices.
- **Curtner was missing from the contact form's dropdown.** It's included now.
- **Pricing is scoped.** The live site presented monthly plans as universal. They are now labelled as the Mattos and Sinnott daily programs, and Rose and Curtner have their own prices.

## Remaining friction (needs the client)

1. **Enroll vs pay order.** Should parents fill the school form first and pay after confirmation, or pay right away? The ledger currently says "Find your school first" and keeps Pay online secondary.
2. **Contact delivery.** The preview composes an email in the parent's mail app. That is honest, but it adds a step on devices with no mail app set up (the confirmation offers "Copy the message" as a fallback). For launch, connect a form backend, for example a Next.js Server Action that sends through an email provider, with the API key kept server-side. Only then can the site say "Message sent".
3. **No phone number** is published anywhere. Some parents prefer to call.
4. **Inconsistent statuses** come from the source: Sinnott says "Now enrolling", but its form is titled "Interest Form", and the Curtner start date conflicts between sources. Confirm the current status for each school.
5. **Google Forms leave the site.** That's acceptable for now; the forms open in a new tab so the school page stays put.

## Content-to-destination matrix

| Source item (live site) | New home |
|---|---|
| Hero headline, sub-headline and stats (grades, ages, Milpitas) | Cover copy and location line; site description |
| "What makes us different" highlight cards (Build Day, Public Speaking, Coding) | `Afternoon` activities (home and `/programs`), with their bullet details |
| "Our curriculum": five weekly sessions | `/programs` → "The weekly sessions" |
| Monthly themes (10) | Homepage contents with the ribbon; `/programs#curriculum` |
| School cards (4), tags, enroll buttons and form URLs | School finder (home and `/schools`); `/schools/<slug>`; at-a-glance table |
| Form-only details (times, rooms, dates, prices, caps, pickup) | `/schools/<slug>` facts, cost and notes |
| "After-School Programs includes" bar | "At the daily programs, there's also…" |
| "Why families choose us" (4) | `/programs` cloth section; `/about` → "What we care about" |
| Parent testimonials (12) | 3 on the homepage, all 12 behind "Read all 12 notes from parents" |
| Contact form, email, Instagram | `/contact`; footer |
| CTA strip | Removed (it contained fake urgency); replaced by the closing invitation |
| Pricing plans, per-session notes, Stripe links | Tuition ledger (home and `/pricing`) |
| "Not sure which plan fits?" | Sibling and contact links under the ledger |
| FAQ (11) | 6 on the homepage; all 11 on `/faq`; policies also on `/pricing#policies` |
| Founders' bio, photos and tags | Homepage summary; `/about` verbatim |
| Hiring roles, apply mailto, footer line | `/careers` |
| Parent Portal | Header (desktop xl), mobile menu, footer, contact page, Mattos and Sinnott notes |
| Thank-you page | Replaced by the honest in-page confirmation on `/contact` |
| Bring to Your School (broken) | `/bring-to-your-school` |
| "Dramatics" (hero copy only, not described anywhere) | Not repeated, because no program detail supports it. Flagged in CLIENT_REVIEW.md |
