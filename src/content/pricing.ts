// Published monthly tuition (live site #pricing) and its Stripe Payment Links.
// The links are preserved exactly; in the preview they are guarded (see paymentsLive).

export type Plan = {
  id: "one" | "three" | "five";
  days: number;
  label: string;
  price: number;
  perSession: string;
  fit: string;
  includes: string[];
  stripeUrl: string;
};

export const plans: Plan[] = [
  {
    id: "one",
    days: 1,
    label: "1 day a week",
    price: 220,
    perSession: "about $55 a session",
    fit: "A good way to try it out. One afternoon a week with a full STEAM activity.",
    includes: ["1 session per week", "Full STEAM activity"],
    stripeUrl: "https://buy.stripe.com/3cIcMYbVLf6p8b57uQe3e03",
  },
  {
    id: "three",
    days: 3,
    label: "3 days a week",
    price: 450,
    perSession: "about $37 a session",
    fit: "Enough afternoons for building, coding and public speaking every week, plus the monthly themed projects.",
    includes: ["3 sessions per week", "STEAM, coding and public speaking", "Monthly themed projects"],
    stripeUrl: "https://buy.stripe.com/14A28k1h7aQ9dvp6qMe3e04",
  },
  {
    id: "five",
    days: 5,
    label: "5 days a week",
    price: 699,
    perSession: "about $35 a session",
    fit: "Every school day. The full mix of STEAM, coding, science and speaking, with monthly build projects.",
    includes: [
      "Every day of the week",
      "Full STEAM, coding, science and speaking",
      "Monthly themed build projects",
    ],
    stripeUrl: "https://buy.stripe.com/bJeeV6aRHgatbnhaH2e3e00",
  },
];

/** Facts that sit beside the plans. Each one is published on the site or a school form. */
export const pricingNotes = {
  materialsFee: "$100 materials fee at registration",
  materialsFeeSource: "listed on the Mattos and Sinnott enrollment forms",
  fourDay: "Mattos also offers 4 days a week for $590/month.",
  sibling: "Sibling discounts are available for families enrolling more than one child.",
};
