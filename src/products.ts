export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Durex Thin Feel Condoms",
    price: 6500,
    image: "/products/durex_thin_feel.png",
    description:
      "Ultra-thin condoms designed for enhanced sensitivity and a more natural feel.",
    category: "Condoms",
  },
  {
    id: 2,
    name: "Durex Extra Safe Condoms",
    price: 7000,
    image: "/products/durex_extra_safe.png",
    description:
      "Thicker condoms with extra lubrication for added safety and protection.",
    category: "Condoms",
  },
  {
    id: 3,
    name: "Durex Invisible Ultra Thin",
    price: 7500,
    image: "/products/durex_invisible.png",
    description:
      "Durex’s thinnest condoms ever — maximum sensitivity and comfort.",
    category: "Condoms",
  },
  {
    id: 4,
    name: "Okamoto Zero One (0.01mm)",
    price: 12000,
    image: "/products/okamoto_001.png",
    description:
      "Premium Japanese condoms with only 0.01mm thickness — extremely natural feeling.",
    category: "Condoms",
  },
  {
    id: 5,
    name: "Okamoto Zero Two (0.02mm)",
    price: 9500,
    image: "/products/okamoto_002.png",
    description:
      "Soft, durable, and smooth condoms with 0.02mm thickness for a natural feel.",
    category: "Condoms",
  },
  {
    id: 6,
    name: "Sagami Original 0.02",
    price: 11000,
    image: "/products/sagami_002.png",
    description:
      "Non-latex polyurethane condoms with high heat transfer for real-skin sensation.",
    category: "Condoms",
  },
  {
    id: 7,
    name: "King Size XL Condoms",
    price: 8500,
    image: "/products/king_size_xl.png",
    description: "Extra-large condoms for better comfort and perfect fit.",
    category: "Condoms",
  },
  {
    id: 8,
    name: "Ribbed & Dotted Condoms",
    price: 6500,
    image: "/products/ribbed_dotted.png",
    description:
      "Textured condoms with ribbed and dotted patterns for enhanced pleasure.",
    category: "Condoms",
  },
  {
    id: 9,
    name: "Flavored Condoms (Mix Pack)",
    price: 6000,
    image: "/products/flavored_mix.png",
    description:
      "Variety pack with strawberry, banana, chocolate, and mint flavors. Ideal for couples.",
    category: "Condoms",
  },
  {
    id: 10,
    name: "Ultra Thin Japanese Latex",
    price: 7000,
    image: "/products/jp_ultra_thin.png",
    description:
      "Soft-touch Japanese latex designed for thinness and maximum sensitivity.",
    category: "Condoms",
  },
];
