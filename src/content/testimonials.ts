// Verbatim parent feedback from the live site (12 unique entries).
// Wording, grammar and attribution are unchanged.

export type Testimonial = { quote: string; name: string; context: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Wonderful initiative! I haven't seen my son freak out when we got 5 mins late to drop him off. He felt comfortable and safe while making the cool projects.",
    name: "Chandana",
    context: "KeenKids Parent",
  },
  {
    quote:
      "My son totally enjoyed the hands on activities and learnt things in a fun way! He also thoroughly enjoyed the debate sessions which was a surprise to me.",
    name: "Wendy",
    context: "KeenKids Parent",
  },
  {
    quote:
      "The kids had a lot of fun and did learn a lot in a fun hands on manner! My son was super happy to share what he did everyday and made new friends! He can't wait to join the next camp!",
    name: "Gayatri R.",
    context: "KeenKids Parent",
  },
  {
    quote:
      "Thanks for running the super fun STEAM camp last week. Neil has already been asking me to enroll him in the next camp!",
    name: "Anju",
    context: "KeenKids Parent",
  },
  {
    quote: "Thank you so much! Kids had lots of fun! 🥳",
    name: "Eng Eng",
    context: "KeenKids Parent",
  },
  {
    quote:
      "Thanks for running the STEAM camp for the spring break. David had a great time and learned so much. Thank you!",
    name: "Chun",
    context: "KeenKids Parent",
  },
  {
    quote:
      "Ethan loved your program. Looking forward to the daily after-school program for the upcoming school year!",
    name: "Richard",
    context: "5-Week STEAM Series · Mabel Mattos",
  },
  {
    quote:
      "My child is enjoying the current program. We look forward to this program next school year. Thank you!",
    name: "Aneri",
    context: "5-Week STEAM Series · Mabel Mattos",
  },
  {
    quote: "Hector is having a lot of fun at the class, thank you!",
    name: "Beverly",
    context: "5-Week STEAM Series · Mabel Mattos",
  },
  {
    quote:
      "Kids are having a great time. Would definitely love an after-school program — looking forward to it!",
    name: "Kavyashree",
    context: "5-Week STEAM Series · Mabel Mattos",
  },
  {
    quote: "Kylo is having a great time in class so far!",
    name: "Katrina",
    context: "5-Week STEAM Series · Mabel Mattos",
  },
  { quote: "Great job KeenKids!", name: "Antoinette", context: "5-Week STEAM Series · Mabel Mattos" },
];

/** The three shown on the homepage: safety, a surprise skill, and joy at home. */
export const featuredTestimonials = testimonials.slice(0, 3);
