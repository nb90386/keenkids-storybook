# For the KeenKids team

## V2 (Signature Edition), November 10, 2026

**What's new:**
- A new identity: the folded K mark and the Brygada 1918 wordmark.
- A cover with an arched window onto the courtyard photo.
- A two-step school picker.
- A photo essay of real projects.
- "How an idea grows", a new signature scroll scene.
- A monthly chapter index.
- A quote spread, tuition at a glance, and a quieter homepage: nine scenes instead of eleven dense sections.
- Distinct openers on the subpages.

**Changed on purpose, please confirm:**
- **Sinnott's status** now reads **"Interest form"**, not "Now enrolling", because its form is titled "Interest Form". Tell us if enrollment is in fact open.
- **The hero headline** is "A little more wonder after the bell." (V1: "A little curiosity goes a long way."). The alternatives we tested were "Good things grow from curiosity", "Afternoons made for curious minds" and "Big ideas start with little hands".
- **Monthly theme lines** ("A month about air, lift and things that fly") describe each theme in general terms, because there are no published activity descriptions. Send real descriptions and we'll use them.
- **Two sketch illustrations** in "How an idea grows" are clearly labelled illustrations, not student work.

**Photos.** Clear (unblurred) versions of the art-directed crops exist for **private review on a local machine only**. They have never been deployed. To publish them, we need written confirmation of guardian consent for each photo, and confirmation that KeenKids may reuse them on this site.

**Measurement.** A privacy-conscious event plan is ready (`docs/v2/ANALYTICS_PLAN.md`). Nothing is tracked until you approve a tool.

---

## V1 notes (still open)

## What changed

- **A new identity.** The site is now a clothbound storybook: evergreen cloth, warm paper pages, a gold hoop-glider mark drawn from your own Hoop Glider Challenge, and Literata and Figtree type. The neon palette and emoji are gone.
- **A clearer path to sign up.** "Where does your child go to school?" now sits at the bottom of the opening screen. Each school shows its own days, times, room, start date, prices and form.
- **Separate pages** for Programs, Schools (plus one page per school), Pricing, About, FAQs, Contact, Careers and Bring KeenKids to your school. The last one replaces the broken link on the current site.
- **Honest wording.** Interest forms are called interest forms. The "most popular" badge and the "spots are filling fast" line are gone. The $100 materials fee is shown next to the prices.
- **Children's faces are softened** in every photo (see below).

## Please confirm before launch

1. **Photo consent.** Your live site blurs children's faces with CSS, but it still serves the sharp original files. We baked the blur into these photos so the originals are never published. If you have consent to show faces, we can switch to clearer images. If you'd rather show none, we can do that too.
2. **School status** for each campus as of today. V2 shows: Mattos "Enrollment open", Sinnott "Interest form", Rose "Interest · January", Curtner "Interest list".
3. **Curtner start date.** The current site says November 18; the form says the date will be confirmed.
4. **Rose grades.** The site says 1–5; the Rose form says 2–6. The Rose form's day question also mentions Tuesday, but the options are Wednesday or Thursday.
5. **Pricing scope.** Do the $220, $450 and $699 plans apply only to Mattos and Sinnott? Is the 4-day $590 option only at Mattos? Does the $100 materials fee apply everywhere? What is the sibling discount amount?
6. **Payments.** Confirm that the three Stripe links are current, and whether parents should pay before or after the school form. In this preview the Pay buttons are switched off.
7. **Contact form.** For launch, choose how messages should arrive: keep the email-app version, or add a real form service, which needs an email provider account.
8. **Careers.** Are the three roles still open?
9. **"Dramatics."** Your current hero mentions it, but no program detail does. Should it be part of the public speaking strand?
10. **Founders' photos.** Shilpa's photo is 400×400, the largest available, so both portraits are shown small. A higher-resolution photo of each founder in similar light would help.
11. **Analytics and policies.** The live site runs Google Analytics with no privacy policy. The preview has no tracking. If you want analytics at launch, add a short privacy policy too.
12. **Address and phone.** Neither is published. The site works without them, but parents often look for a phone number.

## Production switch-on (for whoever launches it)

- Set `NEXT_PUBLIC_PAYMENTS_LIVE=true` to make the Pay buttons open Stripe.
- Set `NEXT_PUBLIC_SITE_INDEXABLE=true` and `NEXT_PUBLIC_SITE_URL=https://keenkidsenrichment.com` to allow search indexing and generate the sitemap.
- Remove the "Design preview" notice in `src/app/layout.tsx`.
- Point the domain at the project. This preview deliberately does **not** touch keenkidsenrichment.com.
