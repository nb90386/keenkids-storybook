# KeenKids Enrichment — Content Inventory (current live site)

Audited: 2026-11-10 (read-only; no forms submitted, no logins, Stripe checkout pages not opened).
Live site: https://keenkidsenrichment.com/

Conventions:
- Text inside `>` blockquotes or code blocks is copied **verbatim** from the source (emoji and punctuation kept as published; HTML entities decoded, e.g. `&amp;` → `&`).
- Line breaks inside a verbatim block mirror `<br>` / separate elements on the page.
- "Source" = page URL the item was taken from. `/#id` means an anchor section on the single homepage.
- Anything not found is stated as **Not published**.

---

## 1. Platform & structure

- **Platform:** hand-coded static single HTML page (no CMS/site builder). Hosted on **Netlify** (`cache-status: "Netlify Edge"`, `x-nf-request-id` header, Netlify-style 404 page) behind **Cloudflare** (`server: cloudflare`; email addresses obfuscated by Cloudflare Email Address Obfuscation, `/cdn-cgi/l/email-protection#…`).
- Contact form uses **Netlify Forms** conventions (hidden `form-name=contact`, `bot-field` honeypot, `POST` to `/thank-you`).
- Analytics: Google Analytics 4, ID `G-43KNY9M6H8`.
- Fonts: Google Fonts — Nunito (400/700/800/900) and Fraunces (700, italic 700).
- Colour tokens in CSS: `--pink:#FF2D78; --blue:#006FFF; --lime:#7CFF4F; --yellow:#FFE200; --orange:#FF6A00; --violet:#8B00FF; --cyan:#00D4FF; --navy:#0A0A2E`.
- **No logo image** — logo is text: `Keen` + `Kids` (in a span) + ` ✦`. No favicon (`/favicon.ico` → 404). No `og:image` / Open Graph tags.
- `<title>`: `KeenKids Enrichment — STEAM Programs · Milpitas, CA`
- `<meta name="description">`: `STEAM enrichment programs and after-school support for ages 6–11 in Milpitas, CA.`
- **No sitemap**: `/sitemap.xml`, `/sitemap_index.xml`, `/page-sitemap.xml` all 404. `robots.txt` is Cloudflare-managed (`User-agent: * / Allow: /`, `Content-Signal: search=yes,ai-train=no,use=reference`, blocks AI training crawlers); no `Sitemap:` line.

### Page list

| URL | Status | Contents |
|---|---|---|
| https://keenkidsenrichment.com/ (also `/index.html`) | 200 | Entire site. Sections in DOM order: nav → hero → "What makes us different" highlights + photos → "Our curriculum" STEAM strip (Weekly Sessions, Monthly Themes) → `#afterschool` school cards → "After-School Programs includes" bar → "Why families choose us" → Parent testimonials marquee → `#contact` contact form → CTA strip → `#pricing` → `#faq` → `#about` founders → `#hiring` → footer |
| https://keenkidsenrichment.com/thank-you (also `/thank-you.html`) | 200 | Contact form success page |
| https://keenkidsenrichment.com/bring-to-school.html | **404** | Linked from main nav + mobile menu ("Bring to Your School") — page does not exist |
| https://keenkids-enrichment.vercel.app/auth/login | 200 | Parent Portal (separate Next.js app on Vercel); root `https://keenkids-enrichment.vercel.app/` redirects here |

Other paths probed, all 404: `/bring-to-school`, `/bring-to-school/`, `/bring-to-your-school`, `/bring-to-your-school.html`, `/about.html`, `/camp.html`, `/summer-camp.html`, `/careers.html`, `/hiring.html`, `/privacy.html`, `/terms.html`, `/logo.png`, `/favicon.png`, `/apple-touch-icon.png`, `/og-image.jpg`.

### External destinations (Google Forms — read only, viewed not submitted)

| Linked URL (as on site) | Resolves to | Form title |
|---|---|---|
| https://docs.google.com/forms/d/e/1FAIpQLSdSc3tEnWsW5MJQCdKh84KdlION8CXc1XnFyYNpiyD0mEXjhA/viewform?usp=header | same | KeenKids Enrollment Form – Afterschool Program at Mattos |
| https://forms.gle/Y7DhexwmBF9JpvLe6 | https://docs.google.com/forms/d/e/1FAIpQLSfQGTNmf_l2BBQcXCvEq4_lrooSQ8QbtgeYq5tDZ42DOB3WBw/viewform?usp=send_form | KeenKids Interest Form@ Sinnott |
| https://forms.gle/DCKvuZNrGG7aRAso8 | https://docs.google.com/forms/d/e/1FAIpQLSe8ckj3bJYWCvXCnnJzIsHGD-UmtzmElHKO7R-9cFkTbYpvDQ/viewform?usp=send_form | KeenKids Interest Form – Future Programs at Rose |
| https://docs.google.com/forms/d/e/1FAIpQLSeVfMXxu39cDCFoVQ4Cfp3zZt77EtT7KS6V7toM9xlBEdsz1g/viewform?usp=dialog | same | KeenKids Enrichment at Curtner Elementary — Interest Form |

All four forms were open (accepting responses) at audit time.

---

## 2. Business basics

Source for all: https://keenkidsenrichment.com/ unless noted.

| Field | Value (verbatim) | Where |
|---|---|---|
| Business name | `KeenKids Enrichment` | title, footer, founders |
| Hero pill | `📍 Milpitas, CA · Ages 6–11` | hero |
| Headline (H1) | `Where Bold Ideas` / `Meet Big Futures` (Bold = pink, Big = lime, Futures = cyan) | hero |
| Hero sub | `Hands-on STEAM projects, confidence through public speaking & dramatics — enrichment that goes far beyond the classroom.` | hero |
| Hero stats | `1–5` **Grade Range** · `6–11` **Ages Served** · `Milpitas` **Home Base** | hero |
| Footer tagline | `KeenKids Enrichment — STEAM After-School Programs` / `📍 Milpitas, California · Ages 6–11` | footer |
| Location | Milpitas, California. No street address published. | hero, footer |
| Grades / ages | Grades 1–5, ages 6–11 | hero, FAQ, school cards |
| Email | `keenkidsinfo@gmail.com` (Cloudflare-obfuscated on page; decoded) | `#contact`, `#hiring`, footer |
| Phone | **Not published** (no `tel:` link or number anywhere on site) | — |
| Address | **Not published** | — |
| Hours | **Not published** on site. Per-school times appear only inside the Google Forms (see §4). | — |
| Instagram | https://www.instagram.com/keenkids.enrichment/ — label `Follow us on Instagram @keenkids.enrichment` (contact) and `@keenkids.enrichment` (footer). Link returns 200. | `#contact`, footer |
| Other social | None | — |
| Copyright | `© 2026 KeenKids Enrichment · keenkidsinfo@gmail.com` (email is a mailto link) | footer |

---

## 3. Navigation & CTAs

Desktop nav (logo `KeenKids ✦` → `/`):

| Label | href | Works? |
|---|---|---|
| Home | `/` | yes |
| After-School Programs | `#afterschool` | yes |
| Bring to Your School | `bring-to-school.html` | **BROKEN — 404** |
| Pricing | `#pricing` | yes |
| FAQ | `#faq` | yes |
| About Us | `#about` | yes |
| Contact | `#contact` | yes |
| Parent Portal | `https://keenkids-enrichment.vercel.app/auth/login` | yes (login page) |
| `⚡ We're Hiring!` (pulsing badge) | `#hiring` | yes |
| `Enroll Now` (yellow button) | `#afterschool` | yes (anchors to school list; no direct enrollment) |

Mobile menu (≤768px, hamburger) repeats the same items; hiring = `⚡ We're Hiring!`, final button = `Enroll Now →` (`#afterschool`). Desktop nav links and Enroll button are hidden on mobile; hiring badge is not hidden.

Other CTAs on page:

| CTA text (verbatim) | Destination |
|---|---|
| `After-School Programs →` (hero) | `#afterschool` |
| `📋 Enroll at Mattos →` | Mattos Google Form (§4) |
| `📋 Enroll at Sinnott →` | https://forms.gle/Y7DhexwmBF9JpvLe6 |
| `📋 Enroll at Rose →` | https://forms.gle/DCKvuZNrGG7aRAso8 |
| `📋 Enroll at Curtner →` | Curtner Google Form (§4) |
| `Send Message →` (contact form submit) | POST `/thank-you` |
| `🏫 View After-School Programs` (CTA strip) | `#afterschool` |
| `📩 Contact Us` (CTA strip) | `#contact` |
| `Get Started →` (1 Day plan) | https://buy.stripe.com/3cIcMYbVLf6p8b57uQe3e03 |
| `Enroll Now →` (3 Days plan) | https://buy.stripe.com/14A28k1h7aQ9dvp6qMe3e04 |
| `Enroll Now →` (5 Days plan) | https://buy.stripe.com/bJeeV6aRHgatbnhaH2e3e00 |
| `Send us a message` (under pricing & FAQ) | `#contact` |
| `contact us` (in sibling-discount & schedule FAQs) | `#contact` |
| `✉️ Apply Now → keenkidsinfo@gmail.com` | mailto (see §11) |

CTA strip (between Contact and Pricing), verbatim:

> **Ready to spark something amazing?**
> Spots are filling fast — enroll your child today!

---

## 4. School locations & enrollment

Source: https://keenkidsenrichment.com/#afterschool

Section header (verbatim):

> chip: `After-School Enrichment`
> **After-School Programs** / **at Milpitas Schools**
> Hands-on STEAM enrichment right on your campus — coding, science labs, public speaking, engineering & free explore sessions. Grades 1–5.

Bar below cards (verbatim): `After-School Programs includes:` `🔬 Science Lab` · `💻 Coding & Tech` · `🎤 Public Speaking` · `🔧 Hands-On Build` · `🌟 Free Explore`

### 4.1 Mabel Mattos Elementary
- Card tags (verbatim): `Grades 1–5` · `School Campus, Milpitas` (no status tag)
- Button: `📋 Enroll at Mattos →`
- **Enrollment form URL (exact):** https://docs.google.com/forms/d/e/1FAIpQLSdSc3tEnWsW5MJQCdKh84KdlION8CXc1XnFyYNpiyD0mEXjhA/viewform?usp=header
- Hero photo caption also references it: `📍 Mabel Mattos Elementary, Milpitas` / `STEAM Build Day — kids showing off their projects!`
- Form title: `KeenKids Enrollment Form – Afterschool Program at Mattos` (internal doc title: `KeenKids Interest Form Programs@ Mattos`)
- Form description (verbatim):

```
Our hands-on program combines STEAM, building, science, coding, public speaking, creativity, and problem-solving in a fun and structured after-school environment.
Program Details
Start Date: August 31st 2026
Time: 2:30–5:30 PM
Location: B1 Nexus Room @ Mattos
Students will enjoy homework support, hands-on STEAM activities, individual builds, coding, science experiments, public speaking, reflection, and outdoor play.
5 Days: $699/month  |  4 days: $590/month |  3 Days: $450/month  |  1 Day: $220/month 
$100 materials fee at registration.
Parents can follow the weekly curriculum and child progress through the KeenKids Parent Portal. 
We’re looking forward to a fun year of building, creating, and exploring together!
Visit our Website keenkidsenrichment.com for more info.
```

- Form fields: Parent Name; Phone Number; Email Address; Child’s Full Name; Grade; "Which program format would you most likely enroll in?" (5-Day / 4-Day / 3-Day / 1-Day / Other); "Preferred Day if you choose Weekly Camp Program [M/T/W/Th/F]"; "Additional Comments / Questions if any for the team."

### 4.2 John Sinnott Elementary
- Card tags (verbatim): `Grades 1–5` · `Now Enrolling` · `School Campus, Milpitas`
- Button: `📋 Enroll at Sinnott →`
- **Enrollment form URL (exact, as linked):** https://forms.gle/Y7DhexwmBF9JpvLe6
  → resolves to https://docs.google.com/forms/d/e/1FAIpQLSfQGTNmf_l2BBQcXCvEq4_lrooSQ8QbtgeYq5tDZ42DOB3WBw/viewform?usp=send_form
- Form title: `KeenKids Interest Form@ Sinnott` (an *interest* form, though the button says "Enroll")
- Form description (verbatim, including the stray apostrophe in "1st'"):

```
Hi Sinnott Families! 
We’re excited to bring KeenKids Enrichment After School to John Sinnott Elementary! 
Our hands-on program combines STEAM, building, science, coding, public speaking, creativity, and problem-solving in a fun and structured after-school environment.
Program Details:
Start Date: September 1st' 2026 | Time: 2:00–5:00 PM | Location: Library @ Sinnott
Students will enjoy homework support, hands-on STEAM activities, individual builds, coding, science experiments, public speaking, reflection, and outdoor play.
5 Days: $699/month | 3 Days: $450/month | 1 Day: $220/month
$100 materials fee at registration.
Parents can follow the weekly curriculum and child progress through the KeenKids Parent Portal. We’re looking forward to a fun year of building, creating, and exploring together!
```

- Form fields: Parent Name; Phone Number; Email Address; Child’s Full Name; Grade; "Which program format would you most likely enroll in?" (5-Day / 3-Day / 1-Day); "Preferred Day if you choose Weekly Camp Program" (Monday / Tuesday / Other); "Additional Comments / Questions if any for the team."

### 4.3 Rose Elementary (Alexander Rose Elementary per form)
- Card tags (verbatim): `Grades 1–5` · `4 Weeks` · `Coming Soon!` · `School Campus, Milpitas`
- Button: `📋 Enroll at Rose →`
- **Enrollment form URL (exact, as linked):** https://forms.gle/DCKvuZNrGG7aRAso8
  → resolves to https://docs.google.com/forms/d/e/1FAIpQLSe8ckj3bJYWCvXCnnJzIsHGD-UmtzmElHKO7R-9cFkTbYpvDQ/viewform?usp=send_form
- Status: **Coming Soon** (site); form is an *interest* form for a **Game Design & Coding Lab** starting first week of January.
- Form title: `KeenKids Interest Form – Future Programs at Rose`
- Form description (verbatim):

```
Hi Rose Families! 👋
KeenKids Enrichment is bringing its Game Design & Coding Lab to Alexander Rose Elementary!
We've been running our program at John Sinnott Elementary and Mabel Mattos Elementary in Milpitas, where 40+ young makers are coding their own games with us every week. We'd love to bring the same program to Rose, starting the first week of January. We also plan to introduce Python down the road.
What do the kids do in coding?
Build their own games — using Scratch block coding, kids design and build playable games from scratch. No typing needed, so beginners jump straight in.
Animate characters and stories — they create characters, bring them to life with movement, sound, and dialogue, and build worlds around them.
Think like a coder — as they build, they learn real coding ideas: loops, variables, decisions, and game logic, one new idea at a time, inside a game they actually want to play.
Finish something every week — each session ends with a game they can play and show you, and they keep building on it week after week.
We'd love your help!
As we plan our classes, we want to make sure we're offering what Rose families are looking for. Please take a minute to fill out our interest form to let us know which schedule works best for you.
Your feedback will help us understand the interest in KeenKids' weekly programs at Rose.
PLEASE SEE BELOW FOR PRICING INFORMATION BEFORE FILLING OUT THE FORM
Weekly Coding program: $100 for 4 weeks ($25/class) — 90 minutes, once a week, starting the first week of January, on Wednesdays or Thursdays (TBD), 2:01–3:30pm. For Grades 2–6.
Students should bring their own Chromebooks.
We're looking forward to hopefully working with your kids soon!
— KeenKids Enrichment
```

- Form fields: Parent Name; Phone Number; Email Address; Child’s Name; Grade; question titled "Which day would work best for your child?\nTuesday — Preferred day" with options Wednesday / Thursday / Other; "Additional Comments / Questions if any for the team."

### 4.4 Curtner Elementary
- Card tags (verbatim): `Grades 1–5` · `4 Weeks` · `Starting on Nov 18th` · `School Campus, Milpitas`
- Button: `📋 Enroll at Curtner →`
- **Enrollment form URL (exact):** https://docs.google.com/forms/d/e/1FAIpQLSeVfMXxu39cDCFoVQ4Cfp3zZt77EtT7KS6V7toM9xlBEdsz1g/viewform?usp=dialog
- Form title: `KeenKids Enrichment at Curtner Elementary — Interest Form` (interest form only)
- Form description (verbatim):

```
KeenKids Enrichment is coming to Curtner Elementary — tell us you're interested! This form takes about 1 minute.

KeenKids Enrichment is a hands-on STEAM program where kids learn by building, creating, and experimenting. Using everyday and recycled materials, children explore engineering, science, creativity, and problem-solving through fun, interactive projects.

We're hoping to bring KeenKids Enrichment to Curtner Elementary this school year, starting this November — we'll confirm the exact start date once enrollment is set! We currently run our program at John Sinnott Elementary and Mabel Mattos Elementary in Milpitas. 

Join 40+ young makers building with KeenKids every week — 55 students built with us last season!

WHAT DO THE KIDS DO?
• Individual Building: Every child works on their own project from start to finish.
• Real Projects: They design and build projects that actually work — then test them, fix them, and make them better.
• Problem Solving: Kids learn to troubleshoot their own builds, which really builds their confidence.
• Sustainability: We use recycled items to show them they can be "makers" anywhere, using whatever they have on hand.

Project reveal: This session's projects will be revealed closer to the start date. Every class is a new hands-on build to complete and take home!

This is an interest form only. If there's enough interest, we'll follow up with enrollment details.

PRICING — PLEASE READ BEFORE FILLING OUT THE FORM
4-Session STEAM Program — $200, with a possible continuation from January for the rest of the school year (details to be confirmed later).

***Please note: the $200 covers 4 sessions only. We don't hold sessions on school holidays, and the schedule is planned around holidays — so a holiday week never uses up one of your 4 sessions.****
• Once a week, Tuesday or Wednesday, 2:30–4:30 PM for primary grades or 2:45–4:45 PM for grades 4–5 (2 hours), right on campus at Curtner Elementary — the final day will be confirmed based on family responses
• Open to Grades 1–5 — the class will be grouped by grade band based on responses (for example, if most interest comes from Grades 1–3, the class will run for that band)
• Enrollment is capped at 15 students to keep the class truly hands-on
• The program is $200 for 4 sessions; pricing includes all materials, and every child takes their completed project home
• Pick-up is at 4:30/4:45 PM at the front gate

Spots are very limited and enrollment will be first-come, first-served — please respond by early November!

Questions? Reach us at keenkidsinfo@gmail.com
```

- Form fields: Parent/Guardian Name; Email Address; Phone Number; Child's Name; Child's Grade at Curtner (Grade 1–5); Preferred Class Day (Tuesday / Wednesday / Either works for us); "Anything else we should know? (questions, comments, anything about your child)"

Waitlist / full: no school is marked waitlist or full. Status words used: Sinnott `Now Enrolling`; Rose `Coming Soon!`; Curtner `Starting on Nov 18th`; Mattos none.

---

## 5. Pricing

Source: https://keenkidsenrichment.com/#pricing

Header (verbatim):

> chip: `Transparent Pricing`
> **Simple, straightforward plans**
> No hidden fees. Pick the schedule that works best for your family.

| Plan (verbatim) | Price | Sub-line | Bullets (verbatim) | Button | Payment link (exact) |
|---|---|---|---|---|---|
| `1 Day / Week` | `$220/mo` | `~$55 per session` | `1 session per week` · `Full STEAM activity` · `Great for trying it out!` | `Get Started →` | https://buy.stripe.com/3cIcMYbVLf6p8b57uQe3e03 |
| `3 Days / Week` | `$450/mo` | `~$37 per session` | `3 sessions per week` · `STEAM + Coding + Public Speaking` · `Monthly themed projects` | `Enroll Now →` | https://buy.stripe.com/14A28k1h7aQ9dvp6qMe3e04 |
| `5 Days / Week` — badge `⭐ MOST POPULAR` | `$699/mo` | `~$35 per session` | `Every day of the week` · `Full STEAM, Coding, Science & Speaking` · `Monthly themed build projects` | `Enroll Now →` | https://buy.stripe.com/bJeeV6aRHgatbnhaH2e3e00 |

Below cards (verbatim): `💬 Not sure which plan fits? Send us a message — we're happy to help!`

Payment processor: **Stripe Payment Links** (`buy.stripe.com`). Links not opened (read-only constraint), so product names/amounts on the Stripe side were not verified.

Other fees / discounts:
- **Registration/materials fee:** not on the website. Mattos and Sinnott Google Forms state `$100 materials fee at registration.`
- **4 Days / Week — $590/month:** only in the Mattos form; no website tier or Stripe link.
- **Sibling discount:** FAQ says yes, amount not published (`Please contact us for current discount details.`).
- **Early-bird:** Not published.
- **Rose:** `$100 for 4 weeks ($25/class)` (form only). **Curtner:** `$200` for 4 sessions (form only). Neither has a payment link.

---

## 6. Program offerings / activity descriptions

Source: https://keenkidsenrichment.com/ (highlights, STEAM strip, Why section)

### "What makes us different" (verbatim)
> chip: `What makes us different`
> **Learning that actually sticks**
> We combine rigorous STEAM with the skills kids need to succeed beyond the lab — confidence, communication, and creativity.

Photo captions: `🔧 Build Day results!` · `✨ Hoops Glider Challenge` · `🔧 Foil Boat Engineering`

Highlight cards (verbatim):
- **🔨 Hands-On STEAM Build Day** — `Monthly themed build projects` · `Design, build & improve each session` · `Take-home creations every week`
- **🎤 Public Speaking** — `Weekly improv & game-based learning` · `Safe space to speak, share & be heard` · `Storytelling, debates & roleplay`
- **💻 Coding & Technology** — `Scratch block coding (G1–2 ScratchJr)` · `Animation, games & interactive projects` · `AI literacy for young learners`

### "Our curriculum" strip (verbatim)
> chip: `Our curriculum`
> **The Full STEAM Spectrum**
> Every program weaves all five pillars — so kids see how everything connects.

**Weekly Sessions** — `Each week covers a mix of these sessions — schedule varies by school`

| Icon | Session | Description |
|---|---|---|
| 💻 | Coding & Technology | Scratch, animation & games |
| 🔧 | STEAM Build Day | Design, build & improve |
| 🔬 | Science Lab | Experiments & discoveries |
| 🎤 | Public Speaking | Improv, debate & storytelling |
| 🌟 | Free Exploration | Create, tinker & invent |

### "Why families choose us" (verbatim)
> chip: `Why families choose us`
> **Built for curious minds,** / **loved by parents**

- **🔨 Project-Based** — `No passive learning — kids build, create, and take something real home every week.`
- **🎤 Confidence Built In** — `Public speaking and improv are core parts of every program — not an afterthought.`
- **🔒 Safe & Supervised** — `Small group sizes so every student gets real attention and a real experience.`
- **🌈 Truly Interdisciplinary** — `From coding to science to public speaking — STEAM lives everywhere, not just in a lab.`

Additional program descriptions live only in the Google Forms (§4): after-school day includes `homework support, hands-on STEAM activities, individual builds, coding, science experiments, public speaking, reflection, and outdoor play.`

---

## 7. Monthly curriculum themes

Source: https://keenkidsenrichment.com/ (STEAM strip → "Monthly Themes")

> **Monthly Themes**
> A brand new theme every month — so there's always something exciting ahead

| Month | Icon | Theme (verbatim) |
|---|---|---|
| August | 🚗 | Motion & Transportation |
| September | ✈️ | Air & Flight |
| October | 🧪 | Spooky Science |
| November | ⚙️ | Engineering Machines |
| December | ❄️ | Winter Builders |
| January | 🚀 | Space Explorers |
| February | 💡 | Electricity & Light |
| March | 🌱 | Nature Engineers |
| April | 🤖 | Coding & Innovation |
| May | 🏆 | Inventor Challenge Month |

No per-month description text is published, only the theme names.

---

## 8. Testimonials

Source: https://keenkidsenrichment.com/ (Parent testimonials marquee). Header: chip `Parent Feedback`, title **What parents are saying**. 12 unique testimonials. The marquee lists them twice for the scrolling loop (in a different order the second time). Quotes are verbatim, including the original grammar.

| # | Quote (verbatim) | Name | Role line |
|---|---|---|---|
| 1 | The kids had a lot of fun and did learn a lot in a fun hands on manner! My son was super happy to share what he did everyday and made new friends! He can't wait to join the next camp! | Gayatri R. | KeenKids Parent |
| 2 | My son totally enjoyed the hands on activities and learnt things in a fun way! He also thoroughly enjoyed the debate sessions which was a surprise to me. | Wendy | KeenKids Parent |
| 3 | Wonderful initiative! I haven't seen my son freak out when we got 5 mins late to drop him off. He felt comfortable and safe while making the cool projects. | Chandana | KeenKids Parent |
| 4 | Thanks for running the super fun STEAM camp last week. Neil has already been asking me to enroll him in the next camp! | Anju | KeenKids Parent |
| 5 | Thank you so much! Kids had lots of fun! 🥳 | Eng Eng | KeenKids Parent |
| 6 | Thanks for running the STEAM camp for the spring break. David had a great time and learned so much. Thank you! | Chun | KeenKids Parent |
| 7 | Ethan loved your program. Looking forward to the daily after-school program for the upcoming school year! | Richard | 5-Week STEAM Series · Mabel Mattos |
| 8 | My child is enjoying the current program. We look forward to this program next school year. Thank you! | Aneri | 5-Week STEAM Series · Mabel Mattos |
| 9 | Hector is having a lot of fun at the class, thank you! | Beverly | 5-Week STEAM Series · Mabel Mattos |
| 10 | Kids are having a great time. Would definitely love an after-school program — looking forward to it! | Kavyashree | 5-Week STEAM Series · Mabel Mattos |
| 11 | Kylo is having a great time in class so far! | Katrina | 5-Week STEAM Series · Mabel Mattos |
| 12 | Great job KeenKids! | Antoinette | 5-Week STEAM Series · Mabel Mattos |

---

## 9. FAQ

Source: https://keenkidsenrichment.com/#faq. Header: chip `FAQ`, title **Frequently Asked Questions**. These are collapsible `<details>` items. **Bold** shows text that is bold on the site.

**Q: What should my child bring?**
> Just themselves! We recommend bringing a water bottle and a healthy snack. All program materials and supplies are provided by KeenKids.

**Q: What if my child misses a day?**
> We understand that families have busy schedules. While we cannot guarantee make-up sessions, please reach out to us and we'll do our best to accommodate when possible.

**Q: What's the pickup/drop-off process?**
> Children are dropped off and picked up at the designated program location on campus. Parents will receive detailed instructions before the program begins. For safety, only authorized adults may pick up a child.

**Q: What age/grade is the program for?**
> Our programs are designed for elementary school students in grades 1–5 (ages 6–11). Activities are adapted to be age-appropriate and engaging for different skill levels.

**Q: How many kids are in each session?**
> We keep our groups small to ensure personalized attention and a high-quality experience for every child. We typically group children by grade levels — for example, Grades 1–2, Grades 3–4 — based on the number of enrollments received.

**Q: Is there a sibling discount?**
> Yes! We offer sibling discounts for families enrolling more than one child. Please contact us for current discount details.

("contact us" links to `#contact`)

**Q: What's the refund/cancellation policy?**
> If you wish to discontinue enrollment, we kindly request a minimum of **two weeks' notice** prior to your child's last day. Since tuition reserves your child's spot and program materials are planned in advance, **monthly fees are non-refundable once billed.** Families may choose to discontinue enrollment at the end of the current paid month.

**Q: Do kids need prior coding or STEAM experience?**
> Not at all! Our programs are designed for beginners as well as students with previous experience. We focus on curiosity, creativity, and learning by doing.

**Q: Which days and times do programs run?**
> Program schedules vary by school and session. Please refer to the specific school's enrollment form or contact us for current days and times.

("contact us" links to `#contact`)

**Q: Do you follow the school calendar? What about minimum days?**
> Minimum days are covered by our After-School program. Programs begin on the **first official school day** of the session. We follow the school calendar and will **not** hold camps during spring, winter, or ski breaks.

**Q: How do I know what my child did each day?**
> We regularly share project photos, highlights, and updates with families. Children also bring home many of the projects they create — giving them a great opportunity to share what they learned and built!

Below the FAQ (verbatim): `Still have questions? Send us a message — we're happy to help!`

**Policy pages:** none. No privacy policy, terms, or standalone refund page. The refund/cancellation policy exists only as the FAQ answer above.

---

## 10. Founders / About

Source: https://keenkidsenrichment.com/#about

> chip: `Our Story`
> **Meet the Founders**
> **Anjana Venkat & Shilpa Javli**
> Co-Founders, KeenKids Enrichment

Bio (verbatim; **bold** as on site). It is written as one shared bio, not one bio per founder:

> Anjana and Shilpa share remarkably similar journeys. Both spent years building successful careers as technology professionals in Silicon Valley while nurturing a deep passion for education and child development.
>
> As parents, they often found themselves searching for programs that went beyond traditional academics — experiences that encouraged **creativity, confidence, communication, and problem-solving**. That shared vision led them to co-found KeenKids: a place where children can explore, build, create, and learn through hands-on STEAM projects, coding, public speaking, and innovation-based activities.
>
> Their goal is simple: to inspire curiosity, foster a love of learning, and help every child discover their unique potential. Nothing brings them more joy than watching children light up with excitement as they build something new, solve a challenge, or confidently share their ideas with the world.
>
> Today, KeenKids serves families across the Milpitas community — creating meaningful learning experiences that prepare children with the skills and confidence they need for the future.

Tags (verbatim): `💻 Silicon Valley Tech Veterans` · `👩‍👧 Parents First` · `🔬 STEAM Advocates` · `🌱 Community Builders`

Photos: `founder-anjana-venkat.jpeg` (original `anjana_headshot.jpeg`, alt `Anjana Venkat`), `founder-shilpa-javli.jpg` (original `shilpa_headshot.jpg`, alt `Shilpa Javli`). See §15. An HTML comment in this block reads `Avatar placeholders + names`.

---

## 11. Hiring / careers

Source: https://keenkidsenrichment.com/#hiring

> `⚡ Now Hiring`
> **Join the KeenKids Team 🚀**
> We're looking for passionate, energetic people who love working with kids and making STEAM exciting. If you're creative, patient, and ready to inspire young minds — we'd love to meet you!

Roles (verbatim):
- 🧑‍🏫 **STEAM Instructor** — `Lead hands-on projects, coding & science labs for grades 1–5 at Milpitas schools.`
- 🎤 **Public Speaking Coach** — `Run improv, debate & storytelling sessions in a fun, safe environment.`
- 💻 **Coding Instructor** — `Teach Scratch, block coding & intro tech concepts to young learners.`

Button: `✉️ Apply Now → keenkidsinfo@gmail.com`
Application link (decoded mailto, exact):
```
mailto:keenkidsinfo@gmail.com?subject=KeenKids%20Job%20Application&body=Hi%20KeenKids%20team%2C%0A%0AI%27m%20interested%20in%20joining%20your%20team!%0A%0AName%3A%0ARole%20interested%20in%3A%0AA%20little%20about%20me%3A
```
(Subject `KeenKids Job Application`; prefilled body: `Hi KeenKids team,` / blank line / `I'm interested in joining your team!` / blank line / `Name:` / `Role interested in:` / `A little about me:`)

Footer line (verbatim): `Part-time · After-school hours · Milpitas, CA`

No application form or ATS. Applications go by email only.

---

## 12. Parent portal

- **URL (exact, as linked):** https://keenkids-enrichment.vercel.app/auth/login
- Separate Next.js app on Vercel (`theme-color #B8973A`, meta description `Enrichment program portal`, apple web-app title `KeenKids`). Visible text: `KeenKids Enrichment` · `Enrichment Program` · `Parent Portal` · `Welcome` · `Sign in to access your child's portal` · `Continue with Google` · `or sign in with email` · tabs `Magic Link` / `Password` · button `Send magic link`. Not logged in.
- Google Forms (Mattos, Sinnott) say: `Parents can follow the weekly curriculum and child progress through the KeenKids Parent Portal.`

---

## 13. Contact form

Source: https://keenkidsenrichment.com/#contact

> chip: `Get in touch`
> **We'd love to hear from you**
> Questions about our programs or hosting at your school? Send us a message.

- `<form name="contact" method="POST" action="/thank-you">` (Netlify Forms; hidden `form-name=contact`; honeypot `bot-field`). Not submitted, so delivery was not verified.
- Fields:
  - `Your Name`: text, `name`, required, placeholder `Jane Smith`
  - `Email`: email, `email`, required, placeholder `jane@email.com`
  - `I'm interested in`: select `program`, options `Select a program...` (empty), `Mabel Mattos After-School`, `John Sinnott After-School`, `Rose Elementary After-School`, `Bring KeenKids to my school`, `General information`. **Curtner is missing.**
  - `Message`: textarea `message`, placeholder `Tell us about your child or school...`
  - Submit: `Send Message →`
- Below the form: `Or email us directly: keenkidsinfo@gmail.com` (mailto) and the Instagram link.

Thank-you page (https://keenkidsenrichment.com/thank-you), verbatim:
> 🎉
> **Message received!**
> Thanks for reaching out to KeenKids Enrichment. We'll get back to you as soon as possible — usually within 1 business day.
> `← Back to Homepage` (→ `/`)

---

## 14. Safety / staff / ratios (only what is published)

- Why card: `Safe & Supervised` — `Small group sizes so every student gets real attention and a real experience.`
- FAQ pickup: `For safety, only authorized adults may pick up a child.`
- FAQ group size: `We keep our groups small to ensure personalized attention and a high-quality experience for every child. We typically group children by grade levels — for example, Grades 1–2, Grades 3–4 — based on the number of enrollments received.`
- Highlights: `Safe space to speak, share & be heard`
- Curtner form only: `Enrollment is capped at 15 students to keep the class truly hands-on` and `Pick-up is at 4:30/4:45 PM at the front gate`
- **Not published:** background checks, staff credentials/training, CPR/first aid, insurance, specific student:staff ratios, licensing.

---

## 15. Downloaded images (`source-assets/`)

All images come from https://keenkidsenrichment.com/. The site has no `srcset` or responsive variants, so these files are the largest versions available. No logo image exists (the logo is text), and there are no school logos. The Google Forms have no header photos (their og:image is an auto-generated text preview, so it was skipped).

**Note:** every kid photo is shown on the live site with a CSS blur (`filter: blur(2.5px–3px)`; the hero photo un-blurs on hover). This looks like a deliberate choice to obscure children's faces. The original files are **not** blurred and the children's faces are clearly visible. Confirm photo-consent policy before showing them unblurred in the redesign.

| File | Original URL | Pixels | Size | Shows | Used on (alt text / caption) |
|---|---|---|---|---|---|
| `group-photo-stairs-mabel-mattos-01.jpg` | https://keenkidsenrichment.com/img_6143.jpg | 1152×864 | 340 KB | Large group photo on an outdoor school staircase with orange railings and green/yellow-striped steps: about 30 elementary kids and 4 adults (3 women, 1 man). Many kids hold up white paper/straw geometric builds and most are eating orange popsicles. Blue sky, bright daylight, faces clearly visible. | Hero. Alt `KeenKids students and instructors on school stairs holding their STEAM projects`. Caption `📍 Mabel Mattos Elementary, Milpitas` / `STEAM Build Day — kids showing off their projects!` |
| `kids-outdoors-hoop-gliders-01.jpg` | https://keenkidsenrichment.com/img_6059.jpg | 1200×855 | 290 KB | Eight kids in school uniforms (navy/maroon/white/khaki) standing in a line in a sunny school courtyard, each holding a paper-hoop-and-straw glider overhead. Two-storey building with orange walkways behind; "Mabel Mattos Elementary School" lettering is visible (reversed) on the railing. Faces visible. | "What makes us different" block. Alt `KeenKids students outside holding up their STEAM projects`. Badge `🔧 Build Day results!` |
| `two-girls-hoop-gliders-classroom-01.jpg` | https://keenkidsenrichment.com/img_6055.jpg | 1200×900 | 211 KB | Close-up of two young girls in maroon uniform tops at a yellow-green classroom table, each holding a hoop glider made of paper loops on a pink straw. A crayon basket is in the foreground and shelves (Magna-Tiles boxes) behind. One girl is smiling. Faces clearly visible. | Photo pair, left. Alt `Two girls showing their Hoops Glider builds`. Caption `✨ Hoops Glider Challenge` |
| `kids-foil-boats-classroom-01.jpg` | https://keenkidsenrichment.com/img_5881.jpg | 1200×900 | 192 KB | Three kids (a girl in navy, a boy in maroon, a boy in white polo) standing in a classroom, each holding an aluminium-foil boat with a foil sail. Other kids and tables are in the background. Faces clearly visible. | Photo pair, right. Alt `Kids holding their foil STEAM builds in class`. Caption `🔧 Foil Boat Engineering` |
| `founder-anjana-venkat.jpeg` | https://keenkidsenrichment.com/anjana_headshot.jpeg | 2736×3648 (portrait) | 1.57 MB | Head-and-shoulders portrait of a woman with long dark curly hair in a sleeveless green top, wearing a gold name necklace, in a restaurant with a wood-panelled ceiling (background blurred). | Founders. Alt `Anjana Venkat` |
| `founder-shilpa-javli.jpg` | https://keenkidsenrichment.com/shilpa_headshot.jpg | 400×400 (square) | 57 KB | Head-and-shoulders photo of a woman with dark tied-back hair, hoop earrings and an off-shoulder white top, smiling, at night in front of a lit river/canal with a boat. Low resolution. | Founders. Alt `Shilpa Javli` |

Privacy note: `anjana_headshot.jpeg` contains its original EXIF metadata, including a GPS block (Pixel 10 Pro, taken 2026-06-14). Strip the metadata before republishing. The downloaded copy was left as the original file.

---

## 16. Broken / problematic

1. **"Bring to Your School" nav item is broken.** It links to `bring-to-school.html`, which returns a Netlify 404 (desktop nav and mobile menu). No "host at your school" content exists on the site apart from the contact-form option `Bring KeenKids to my school` and the line `Questions about our programs or hosting at your school?`
2. **No phone, address, or hours** anywhere on the site.
3. **Pricing inconsistencies:**
   - The site says `No hidden fees`, but the Mattos and Sinnott forms add `$100 materials fee at registration.`
   - The Mattos form lists `4 days: $590/month`. The website has no 4-day tier and no Stripe link for it.
   - Rose (`$100 for 4 weeks`) and Curtner (`$200` for 4 sessions) pricing appears only in the forms. Their cards show `4 Weeks` with no price and no payment link.
   - The pricing section is generic (monthly plans), and it is not stated that it applies only to Mattos/Sinnott daily after-school.
4. **Rose grade mismatch:** the site card says `Grades 1–5`, but the Rose form says `For Grades 2–6`. The Rose form's day question is titled "Which day would work best for your child? Tuesday — Preferred day" while its options are only Wednesday/Thursday, and the description says `Wednesdays or Thursdays (TBD)`. It is also a coding-only lab, which the card does not mention. Odd start time `2:01–3:30pm`.
5. **Curtner date mismatch:** the card says `Starting on Nov 18th`, but the form says start date will be confirmed and asks families to `respond by early November`. The form says `Tuesday or Wednesday` (Nov 18, 2026 is a Wednesday).
6. **"Enroll" buttons go to interest forms.** Sinnott, Rose, and Curtner forms are titled "Interest Form" (Curtner: `This is an interest form only`). Only Mattos is titled "Enrollment Form".
7. **Contact form dropdown is missing Curtner.**
8. **Status tags are inconsistent:** Mattos has no status tag, Sinnott says `Now Enrolling`, Rose says `Coming Soon!`. The Sinnott form gives a start date of `September 1st' 2026` (stray apostrophe typo).
9. **Camp vs. after-school wording:** several testimonials mention "camp" and "spring break" camp. The FAQ says KeenKids `will not hold camps during spring, winter, or ski breaks`, and the forms ask for a "Preferred Day if you choose Weekly Camp Program". No camp offering is described on the site.
10. **"dramatics"** is promised in the hero sub-headline but appears nowhere else.
11. **Section order:** Pricing, FAQ, and About appear *after* the final CTA strip and the contact form.
12. **No favicon, no og:image/social meta, no sitemap, no privacy policy or terms** (the site collects names and emails and runs GA4).
13. **Founder photo GPS metadata** is left in `anjana_headshot.jpeg` (see §15). The two founder photos are very different in resolution (2736×3648 vs 400×400) and in style.
14. **Weekly session vs. plan copy:** the 1-day plan promises `Full STEAM activity` and the 3-day plan `STEAM + Coding + Public Speaking`, while Weekly Sessions says `schedule varies by school`. The site does not say which sessions fall on which days.
15. Stripe payment links were not opened (read-only constraint), so their product names and amounts are unverified.
