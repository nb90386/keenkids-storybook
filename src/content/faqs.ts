// The complete FAQ from the live site. Answers are verbatim; links point to
// the new contact page instead of the old #contact anchor.

export type Faq = {
  id: string;
  question: string;
  /** Paragraph text. `{contact}` renders as a link to /contact. */
  answer: string;
  /** Phrases inside the answer to set in bold, as on the live site. */
  emphasis?: string[];
  featured?: boolean;
};

export const faqs: Faq[] = [
  {
    id: "pickup",
    question: "What's the pickup/drop-off process?",
    answer:
      "Children are dropped off and picked up at the designated program location on campus. Parents will receive detailed instructions before the program begins. For safety, only authorized adults may pick up a child.",
    featured: true,
  },
  {
    id: "grades",
    question: "What age/grade is the program for?",
    answer:
      "Our programs are designed for elementary school students in grades 1–5 (ages 6–11). Activities are adapted to be age-appropriate and engaging for different skill levels.",
    featured: true,
  },
  {
    id: "schedule",
    question: "Which days and times do programs run?",
    answer:
      "Program schedules vary by school and session. Please refer to the specific school's enrollment form or {contact} for current days and times.",
    featured: true,
  },
  {
    id: "bring",
    question: "What should my child bring?",
    answer:
      "Just themselves! We recommend bringing a water bottle and a healthy snack. All program materials and supplies are provided by KeenKids.",
    featured: true,
  },
  {
    id: "missed",
    question: "What if my child misses a day?",
    answer:
      "We understand that families have busy schedules. While we cannot guarantee make-up sessions, please reach out to us and we'll do our best to accommodate when possible.",
    featured: true,
  },
  {
    id: "cancellation",
    question: "What's the refund/cancellation policy?",
    answer:
      "If you wish to discontinue enrollment, we kindly request a minimum of two weeks' notice prior to your child's last day. Since tuition reserves your child's spot and program materials are planned in advance, monthly fees are non-refundable once billed. Families may choose to discontinue enrollment at the end of the current paid month.",
    emphasis: ["two weeks' notice", "monthly fees are non-refundable once billed."],
    featured: true,
  },
  {
    id: "group-size",
    question: "How many kids are in each session?",
    answer:
      "We keep our groups small to ensure personalized attention and a high-quality experience for every child. We typically group children by grade levels — for example, Grades 1–2, Grades 3–4 — based on the number of enrollments received.",
  },
  {
    id: "sibling",
    question: "Is there a sibling discount?",
    answer:
      "Yes! We offer sibling discounts for families enrolling more than one child. Please {contact} for current discount details.",
  },
  {
    id: "experience",
    question: "Do kids need prior coding or STEAM experience?",
    answer:
      "Not at all! Our programs are designed for beginners as well as students with previous experience. We focus on curiosity, creativity, and learning by doing.",
  },
  {
    id: "calendar",
    question: "Do you follow the school calendar? What about minimum days?",
    answer:
      "Minimum days are covered by our After-School program. Programs begin on the first official school day of the session. We follow the school calendar and will not hold camps during spring, winter, or ski breaks.",
    emphasis: ["first official school day", "not"],
  },
  {
    id: "updates",
    question: "How do I know what my child did each day?",
    answer:
      "We regularly share project photos, highlights, and updates with families. Children also bring home many of the projects they create — giving them a great opportunity to share what they learned and built!",
  },
];

export const featuredFaqs = faqs.filter((f) => f.featured);
