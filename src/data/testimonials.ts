export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    quote: "Fixed my brakes fast and cheap! The staff was friendly and explained everything to me. Will definitely return for future repairs.",
    rating: 5
  },
  {
    id: 2,
    name: "John M.",
    quote: "I've been going to Discount Auto for years. Their prices are fair and the work is always done right. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Michael R.",
    quote: "Had my tires replaced and they gave me a great deal. The service was quick and the staff was very professional.",
    rating: 5
  },
  {
    id: 4,
    name: "Lisa T.",
    quote: "My AC stopped working during the hottest week of summer. They got me in the same day and fixed it for less than I expected. Great service!",
    rating: 5
  },
  {
    id: 5,
    name: "David W.",
    quote: "I was nervous about finding a trustworthy mechanic in Boca, but these guys are the real deal. Fair prices and honest work.",
    rating: 5
  }
];