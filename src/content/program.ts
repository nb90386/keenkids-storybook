// Program content. Facts from the live site's highlight cards, curriculum strip
// and the school forms (docs/CONTENT_INVENTORY.md §6–7). Copy rewritten, facts unchanged.

export type Activity = {
  id: "build" | "experiment" | "voice" | "code" | "explore";
  lead: string;
  body: string;
  details: string[];
};

export const activities: Activity[] = [
  {
    id: "build",
    lead: "They build.",
    body: "From paper gliders to foil boats, kids learn by making things with their own hands. They design it, build it, see what goes wrong and make it better.",
    details: [
      "A themed build project every month",
      "Design, build and improve in each session",
      "Something to take home every week",
    ],
  },
  {
    id: "experiment",
    lead: "They experiment.",
    body: "In science lab, questions turn into experiments. Sometimes the unexpected result is the best part.",
    details: ["Hands-on experiments and discoveries"],
  },
  {
    id: "voice",
    lead: "They find their voice.",
    body: "Improv games, storytelling, roleplay and friendly debates help kids get comfortable speaking up and sharing their ideas.",
    details: [
      "Weekly improv and game-based learning",
      "A safe space to speak, share and be heard",
      "Storytelling, debates and roleplay",
    ],
  },
  {
    id: "code",
    lead: "They create with code.",
    body: "With Scratch block coding (ScratchJr for first and second graders), kids animate characters, tell stories and build games of their own.",
    details: [
      "Scratch, with ScratchJr for grades 1–2",
      "Animation, games and interactive projects",
      "AI literacy for young learners",
    ],
  },
  {
    id: "explore",
    lead: "And they explore.",
    body: "Free exploration time is for tinkering, inventing and following an idea wherever it goes.",
    details: ["Create, tinker and invent"],
  },
];

/** The daily programs (Mattos, Sinnott) also include these, per the school forms. */
export const dailyIncludes = [
  "Homework support",
  "Hands-on STEAM activities",
  "Individual builds",
  "Coding",
  "Science experiments",
  "Public speaking",
  "Reflection",
  "Outdoor play",
];

export const weeklySessions = [
  { name: "Coding & Technology", note: "Scratch, animation and games" },
  { name: "STEAM Build Day", note: "Design, build and improve" },
  { name: "Science Lab", note: "Experiments and discoveries" },
  { name: "Public Speaking", note: "Improv, debate and storytelling" },
  { name: "Free Exploration", note: "Create, tinker and invent" },
];

/** `blurb` describes the theme only; it does not claim specific activities. */
export type Month = { month: string; index: number; theme: string; blurb: string };

/** index = JavaScript month number (0 = January). */
export const curriculum: Month[] = [
  { month: "August", index: 7, theme: "Motion & Transportation", blurb: "A month about how things move, roll and carry." },
  { month: "September", index: 8, theme: "Air & Flight", blurb: "A month about air, lift and things that fly." },
  { month: "October", index: 9, theme: "Spooky Science", blurb: "Science with a little Halloween spirit." },
  { month: "November", index: 10, theme: "Engineering Machines", blurb: "A month about machines and how they work." },
  { month: "December", index: 11, theme: "Winter Builders", blurb: "Building through the winter weeks." },
  { month: "January", index: 0, theme: "Space Explorers", blurb: "A month pointed at the planets and stars." },
  { month: "February", index: 1, theme: "Electricity & Light", blurb: "A month about circuits, power and light." },
  { month: "March", index: 2, theme: "Nature Engineers", blurb: "Engineering ideas borrowed from the natural world." },
  { month: "April", index: 3, theme: "Coding & Innovation", blurb: "A month for code and new inventions." },
  { month: "May", index: 4, theme: "Inventor Challenge Month", blurb: "The year ends with an inventor challenge." },
];

/** Why families choose KeenKids, from the live site, rewritten. */
export const principles = [
  {
    title: "Kids make real things",
    body: "No passive learning. Every week, kids build and create something real, and bring it home.",
  },
  {
    title: "Confidence is part of the plan",
    body: "Public speaking and improv are core parts of every program, not an afterthought.",
  },
  {
    title: "Small groups, real attention",
    body: "Groups are kept small so every student gets real attention and a real experience.",
  },
  {
    title: "Everything connects",
    body: "Coding, science, building and speaking run through the whole program, not just a lab hour.",
  },
];
