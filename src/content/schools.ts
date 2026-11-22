// School programs, taken from each school's live Google Form (checked 2026-11-10).
// Status labels only repeat what the live site or the form itself says.

export type School = {
  slug: string;
  name: string;
  shortName: string;
  /** Short, verified status shown in the finder. Taken from the form's own title, never guessed. */
  status: string;
  /** The essentials for the compact school picker: one line each. */
  glance: { when: string; where: string; start: string };
  program: string;
  summary: string;
  facts: { label: string; value: string }[];
  pricing: string[];
  notes: string[];
  form: {
    url: string;
    kind: "enrollment" | "interest";
    title: string;
    cta: string;
  };
};

export const VERIFIED_ON = "November 10, 2026";

export const schools: School[] = [
  {
    slug: "mabel-mattos",
    name: "Mabel Mattos Elementary",
    shortName: "Mattos",
    status: "Enrollment open",
    glance: { when: "Weekdays, 2:30–5:30 PM", where: "B1 Nexus Room", start: "Running since August 31" },
    program: "Daily after-school program",
    summary:
      "The full after-school program, right on campus. Kids come straight from class for building, science, coding, public speaking, homework time and outdoor play.",
    facts: [
      { label: "When", value: "2:30–5:30 PM, 1, 3, 4 or 5 days a week" },
      { label: "Where", value: "B1 Nexus Room, on campus" },
      { label: "Started", value: "August 31, 2026" },
      { label: "Grades", value: "1–5" },
    ],
    pricing: [
      "1 day a week: $220/month",
      "3 days a week: $450/month",
      "4 days a week: $590/month",
      "5 days a week: $699/month",
      "$100 materials fee at registration",
    ],
    notes: [
      "Each afternoon includes homework support, hands-on STEAM activities, individual builds, coding, science experiments, public speaking, reflection and outdoor play.",
      "Parents can follow the weekly curriculum and their child's progress in the KeenKids Parent Portal.",
    ],
    form: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdSc3tEnWsW5MJQCdKh84KdlION8CXc1XnFyYNpiyD0mEXjhA/viewform?usp=header",
      kind: "enrollment",
      title: "KeenKids Enrollment Form – Afterschool Program at Mattos",
      cta: "Open the Mattos enrollment form",
    },
  },
  {
    slug: "john-sinnott",
    name: "John Sinnott Elementary",
    shortName: "Sinnott",
    // The live site says "Now Enrolling", but the linked form is titled "Interest Form".
    // We report what the form says; CLIENT_REVIEW.md asks KeenKids to confirm.
    status: "Interest form",
    glance: { when: "Weekdays, 2:00–5:00 PM", where: "School library", start: "Running since September 1" },
    program: "Daily after-school program",
    summary:
      "The full after-school program, held in the Sinnott library. Pick one, three or five afternoons a week.",
    facts: [
      { label: "When", value: "2:00–5:00 PM, 1, 3 or 5 days a week" },
      { label: "Where", value: "Library, on campus" },
      { label: "Started", value: "September 1, 2026" },
      { label: "Grades", value: "1–5" },
    ],
    pricing: [
      "1 day a week: $220/month",
      "3 days a week: $450/month",
      "5 days a week: $699/month",
      "$100 materials fee at registration",
    ],
    notes: [
      "Each afternoon includes homework support, hands-on STEAM activities, individual builds, coding, science experiments, public speaking, reflection and outdoor play.",
      "Parents can follow the weekly curriculum and their child's progress in the KeenKids Parent Portal.",
    ],
    form: {
      url: "https://forms.gle/Y7DhexwmBF9JpvLe6",
      kind: "interest",
      title: "KeenKids Interest Form @ Sinnott",
      cta: "Open the Sinnott form",
    },
  },
  {
    slug: "rose",
    name: "Rose Elementary",
    shortName: "Rose",
    status: "Interest · January",
    glance: { when: "Weekly, Wed or Thu, 2:01–3:30 PM", where: "On campus", start: "First week of January" },
    program: "Game Design & Coding Lab",
    summary:
      "A four-week coding lab. Kids design and build playable games in Scratch and finish something they can show you every week.",
    facts: [
      { label: "When", value: "Once a week, Wednesday or Thursday (to be confirmed), 2:01–3:30 PM" },
      { label: "Starts", value: "First week of January" },
      { label: "Grades", value: "2–6, per the Rose interest form" },
      { label: "Bring", value: "Their own Chromebook" },
    ],
    pricing: ["$100 for 4 weeks ($25 a class)"],
    notes: [
      "Block coding in Scratch means no typing is needed, so beginners can start right away. Kids pick up loops, variables, decisions and game logic one idea at a time.",
      "KeenKids plans to introduce Python later on.",
      "This is an interest form. It helps KeenKids pick the day that works best for Rose families.",
    ],
    form: {
      url: "https://forms.gle/DCKvuZNrGG7aRAso8",
      kind: "interest",
      title: "KeenKids Interest Form – Future Programs at Rose",
      cta: "Join the Rose interest list",
    },
  },
  {
    slug: "curtner",
    name: "Curtner Elementary",
    shortName: "Curtner",
    status: "Interest list",
    glance: { when: "Weekly, Tue or Wed, from 2:30 PM", where: "On campus", start: "Date to be confirmed" },
    program: "4-session STEAM build program",
    summary:
      "Four hands-on build sessions using everyday and recycled materials. Every child builds their own project and takes it home.",
    facts: [
      {
        label: "When",
        value:
          "Once a week, Tuesday or Wednesday. 2:30–4:30 PM for primary grades, 2:45–4:45 PM for grades 4–5",
      },
      {
        label: "Starts",
        value: "Listed for November 18. The form says the exact date will be confirmed once enrollment is set",
      },
      { label: "Grades", value: "1–5, grouped by grade band" },
      { label: "Pickup", value: "4:30 / 4:45 PM at the front gate" },
    ],
    pricing: [
      "$200 for 4 sessions, all materials included",
      "Holiday weeks never use up a session",
    ],
    notes: [
      "Enrollment is capped at 15 students to keep the class hands-on.",
      "There may be a continuation from January for the rest of the school year (details to be confirmed).",
      "This is an interest form only. If there's enough interest, KeenKids will follow up with enrollment details.",
    ],
    form: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeVfMXxu39cDCFoVQ4Cfp3zZt77EtT7KS6V7toM9xlBEdsz1g/viewform?usp=dialog",
      kind: "interest",
      title: "KeenKids Enrichment at Curtner Elementary — Interest Form",
      cta: "Join the Curtner interest list",
    },
  },
];

export const getSchool = (slug: string) => schools.find((s) => s.slug === slug);
