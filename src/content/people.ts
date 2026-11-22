// Founders and hiring, from the live site (#about, #hiring).

export const founders = [
  { name: "Anjana Venkat", photo: "/images/founder-anjana.jpg", width: 900, height: 1125 },
  { name: "Shilpa Javli", photo: "/images/founder-shilpa.jpg", width: 400, height: 400 },
] as const;

/** The original shared biography, verbatim, for the About page. */
export const foundersBio = [
  "Anjana and Shilpa share remarkably similar journeys. Both spent years building successful careers as technology professionals in Silicon Valley while nurturing a deep passion for education and child development.",
  "As parents, they often found themselves searching for programs that went beyond traditional academics — experiences that encouraged creativity, confidence, communication, and problem-solving. That shared vision led them to co-found KeenKids: a place where children can explore, build, create, and learn through hands-on STEAM projects, coding, public speaking, and innovation-based activities.",
  "Their goal is simple: to inspire curiosity, foster a love of learning, and help every child discover their unique potential. Nothing brings them more joy than watching children light up with excitement as they build something new, solve a challenge, or confidently share their ideas with the world.",
  "Today, KeenKids serves families across the Milpitas community — creating meaningful learning experiences that prepare children with the skills and confidence they need for the future.",
];

export const founderTags = [
  "Silicon Valley tech veterans",
  "Parents first",
  "STEAM advocates",
  "Community builders",
];

export const roles = [
  {
    title: "STEAM Instructor",
    body: "Lead hands-on projects, coding and science labs for grades 1–5 at Milpitas schools.",
  },
  {
    title: "Public Speaking Coach",
    body: "Run improv, debate and storytelling sessions in a fun, safe environment.",
  },
  {
    title: "Coding Instructor",
    body: "Teach Scratch, block coding and intro tech concepts to young learners.",
  },
];

/** The exact application link from the live site. */
export const applyMailto =
  "mailto:keenkidsinfo@gmail.com?subject=KeenKids%20Job%20Application&body=Hi%20KeenKids%20team%2C%0A%0AI%27m%20interested%20in%20joining%20your%20team!%0A%0AName%3A%0ARole%20interested%20in%3A%0AA%20little%20about%20me%3A";
