export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Air & Cabin Filter Replacement",
    description: "Keep your engine breathing clean air and maintain cabin air quality with our professional filter replacement service.",
    price: "From $29.99",
    icon: "cpu"
  },
  {
    id: 2,
    title: "Air Conditioning",
    description: "Complete AC diagnostics, repair, and recharge services to keep you cool in the Florida heat.",
    price: "From $89.99",
    icon: "snowflake"
  },
  {
    id: 3,
    title: "Auto Engine Diagnostic",
    description: "Advanced computer diagnostics to identify and resolve engine problems quickly and efficiently.",
    price: "From $59.99",
    icon: "cpu"
  },
  {
    id: 4,
    title: "Battery Service",
    description: "Battery testing, replacement, and electrical system diagnostics to keep your vehicle starting strong.",
    price: "From $49.99",
    icon: "alert-triangle"
  },
  {
    id: 5,
    title: "Brake Service",
    description: "Comprehensive brake services including pad replacement, rotor resurfacing, and complete system inspection.",
    price: "From $99.99",
    icon: "alert-triangle"
  },
  {
    id: 6,
    title: "Electrical Repair",
    description: "Expert electrical system diagnostics and repair for all vehicle makes and models.",
    price: "From $79.99",
    icon: "cpu"
  },
  {
    id: 7,
    title: "Oil Change",
    description: "Professional oil changes using high-quality oils and filters to keep your engine running smoothly.",
    price: "From $29.99",
    icon: "oil-can"
  },
  {
    id: 8,
    title: "Steering & Suspension",
    description: "Complete steering and suspension repair services for a smoother, safer ride.",
    price: "From $89.99",
    icon: "move-horizontal"
  },
  {
    id: 9,
    title: "Transmission Service",
    description: "Expert transmission diagnostics, repair, and maintenance to keep your vehicle shifting smoothly.",
    price: "From $149.99",
    icon: "circle"
  }
];