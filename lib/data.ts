import { Product, Review, Customer, Order } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "handmade-silk-saree-maroon-peacock",
    name: "Handmade Silk Saree — Maroon Peacock Feather",
    price: 5000,
    category: "Silk Sarees",
    description:
      "A striking maroon silk saree featuring hand-painted peacock feather motifs, paired with a contrasting mustard-gold blouse piece. A beautiful blend of tradition and elegance, handmade with care.",
    fabric: "Silk",
    color: "Maroon with Mustard Gold Blouse",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Matching mustard-gold blouse piece included",
    careInstructions: [
      "Dry clean only",
      "Store wrapped in cloth",
      "Avoid direct sunlight for long periods",
      "Iron on low heat with a cloth barrier",
    ],
    images: ["/sari1.jpeg", "/sari2.jpeg", "/sari3.jpeg", "/sari4.jpeg"],
    rating: 4.8,
    reviewCount: 12,
    stock: 10,
    isNew: true,
  },
  {
    id: "2",
    slug: "handmade-silk-saree-black-peacock",
    name: "Handmade Silk Saree — Black Peacock Feather",
    price: 5000,
    category: "Party Wear",
    description:
      "An elegant black silk saree featuring a hand-painted peacock feather design, perfect for evening occasions and celebrations. Comes styled with a delicate pearl necklace look, handmade with care.",
    fabric: "Silk",
    color: "Black",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Matching unstitched blouse piece included",
    careInstructions: [
      "Dry clean only",
      "Store wrapped in cloth",
      "Avoid direct sunlight for long periods",
      "Iron on low heat with a cloth barrier",
    ],
    images: ["/black-saree.jpeg"],
    rating: 4.7,
    reviewCount: 9,
    stock: 10,
    isNew: true,
  },
  {
    id: "3",
    slug: "handmade-cotton-saree-purple-floral",
    name: "Handmade Saree — Purple Floral Print",
    price: 5000,
    category: "Cotton Sarees",
    description:
      "A vibrant purple saree with a delicate hand-printed white floral design, perfect for both casual and semi-formal occasions. Handmade with attention to detail.",
    fabric: "Cotton Blend",
    color: "Purple",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Matching unstitched blouse piece included",
    careInstructions: [
      "Hand wash recommended",
      "Wash separately for first wash",
      "Line dry in shade",
      "Iron on medium heat",
    ],
    images: ["/purple-saree.jpeg"],
    rating: 4.6,
    reviewCount: 7,
    stock: 10,
  },
  {
    id: "4",
    slug: "handmade-cotton-saree-red-floral",
    name: "Handmade Saree — Red Floral Print with Pink Blouse",
    price: 5000,
    category: "Cotton Sarees",
    description:
      "A bold red saree with a beautiful hand-printed white floral design, paired with a soft pink blouse piece. A striking, handmade piece for any occasion.",
    fabric: "Cotton Blend",
    color: "Red with Pink Blouse",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Matching pink blouse piece included",
    careInstructions: [
      "Hand wash recommended",
      "Wash separately for first wash",
      "Line dry in shade",
      "Iron on medium heat",
    ],
    images: ["/red-saree.jpeg"],
    rating: 4.9,
    reviewCount: 15,
    stock: 10,
    isBestSeller: true,
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    customerName: "Amaya Perera",
    rating: 5,
    date: "2026-06-12",
    comment:
      "The silk quality is beyond what I expected from an online order. Beautifully handmade — received so many compliments wearing this.",
    verified: true,
  },
  {
    id: "r2",
    customerName: "Nethmi Fernando",
    rating: 5,
    date: "2026-05-28",
    comment:
      "Lovely design and great value for the price. Packaging was beautiful too — felt like a real premium experience.",
    verified: true,
  },
  {
    id: "r3",
    customerName: "Dilani Wickramasinghe",
    rating: 4,
    date: "2026-05-15",
    comment:
      "Very comfortable and the print quality is excellent. Delivery was quick and the saree looked exactly like the photos.",
    verified: true,
  },
];

export const customers: Customer[] = [
  { id: "c1", name: "Amaya Perera", email: "amaya.p@example.com", orders: 2, totalSpent: 10000, joined: "2025-11-02" },
  { id: "c2", name: "Nethmi Fernando", email: "nethmi.f@example.com", orders: 1, totalSpent: 5000, joined: "2026-01-14" },
];

export const orders: Order[] = [
  { id: "WO-1001", date: "2026-08-14", status: "Processing", items: [{ productId: "1", quantity: 1 }], total: 5000, customerName: "Amaya Perera" },
  { id: "WO-1000", date: "2026-08-10", status: "Delivered", items: [{ productId: "4", quantity: 1 }], total: 5000, customerName: "Nethmi Fernando" },
];

export const categories = ["Silk Sarees", "Bridal Sarees", "Party Wear", "Cotton Sarees"] as const;

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count);
}