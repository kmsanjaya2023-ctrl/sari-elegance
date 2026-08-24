import { Product, Review, Customer, Order } from "@/types";

// NOTE: Images are placeholders (picsum.photos seeded images) since real
// product photography was not provided. Replace the `images` arrays below
// with real photography URLs before going live.
const img = (seed: string, w = 900, h = 1200) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const products: Product[] = [
  {
    id: "1",
    slug: "kanchipuram-silk-heritage-maroon",
    name: "Kanchipuram Silk Heritage Saree — Maroon & Gold",
    price: 24500,
    discountPrice: 19999,
    category: "Silk Sarees",
    description:
      "A timeless Kanchipuram silk saree woven with a rich maroon body and intricate gold zari border. Handcrafted by master weavers, this piece carries centuries of tradition in every thread — perfect for weddings and grand celebrations.",
    fabric: "Pure Kanchipuram Silk",
    color: "Maroon & Gold",
    sareeLength: "6.3 metres (with 0.8m blouse piece)",
    blouseInfo: "Unstitched matching blouse piece included",
    careInstructions: [
      "Dry clean only",
      "Store wrapped in muslin cloth",
      "Avoid direct sunlight for long periods",
      "Iron on low heat with a cloth barrier",
    ],
    images:["/sari1.jpeg", "/sari2.jpeg", "/sari3.jpeg", "/sari4.jpeg"],
    rating: 4.8,
    reviewCount: 42,
    stock: 8,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "2",
    slug: "banarasi-bridal-red-zari",
    name: "Banarasi Bridal Saree — Regal Red Zari",
    price: 38500,
    category: "Bridal Sarees",
    description:
      "An opulent Banarasi bridal saree in regal red, featuring dense gold zari work across the pallu and border. Designed for the bride who wants to make an unforgettable entrance.",
    fabric: "Banarasi Silk with Zari Brocade",
    color: "Red & Gold",
    sareeLength: "6.5 metres (with 0.9m blouse piece)",
    blouseInfo: "Stitchable blouse piece, made-to-measure tailoring available on request",
    careInstructions: [
      "Dry clean only",
      "First dry clean recommended before wear",
      "Store flat or loosely rolled",
      "Keep away from moisture",
    ],
    images: [img("saree2a"), img("saree2b"), img("saree2c")],
    rating: 5.0,
    reviewCount: 67,
    stock: 5,
    isBestSeller: true,
  },
  {
    id: "3",
    slug: "georgette-party-emerald",
    name: "Emerald Georgette Party Saree",
    price: 12500,
    discountPrice: 9999,
    category: "Party Wear",
    description:
      "A flowing emerald georgette saree with delicate sequin embroidery, designed for evening parties and receptions. Lightweight and effortlessly elegant.",
    fabric: "Georgette",
    color: "Emerald Green",
    sareeLength: "5.5 metres (with 0.8m blouse piece)",
    blouseInfo: "Unstitched sequinned blouse piece included",
    careInstructions: ["Dry clean recommended", "Hand wash cold if needed", "Do not wring", "Hang dry in shade"],
    images: [img("saree3a"), img("saree3b"), img("saree3c")],
    rating: 4.5,
    reviewCount: 28,
    stock: 15,
    isNew: true,
  },
  {
    id: "4",
    slug: "handloom-cotton-daily-indigo",
    name: "Handloom Cotton Saree — Indigo Stripe",
    price: 4500,
    category: "Cotton Sarees",
    description:
      "Breathable handloom cotton saree in a classic indigo stripe, woven for everyday comfort without compromising on elegance. A wardrobe essential.",
    fabric: "Handloom Cotton",
    color: "Indigo Blue",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Matching unstitched blouse piece included",
    careInstructions: ["Machine washable on gentle cycle", "Wash separately for first 2 washes", "Line dry in shade", "Iron on medium heat"],
    images: [img("saree4a"), img("saree4b"), img("saree4c")],
    rating: 4.3,
    reviewCount: 51,
    stock: 30,
  },
  {
    id: "5",
    slug: "tussar-silk-champagne",
    name: "Tussar Silk Saree — Champagne Gold",
    price: 15800,
    category: "Silk Sarees",
    description:
      "A refined Tussar silk saree in champagne gold with a subtle textured weave, ideal for festive daytime occasions and office celebrations alike.",
    fabric: "Tussar Silk",
    color: "Champagne Gold",
    sareeLength: "6.2 metres (with 0.8m blouse piece)",
    blouseInfo: "Unstitched matching blouse piece included",
    careInstructions: ["Dry clean only", "Store flat", "Avoid perfume contact with fabric", "Iron on low heat"],
    images: [img("saree5a"), img("saree5b"), img("saree5c")],
    rating: 4.6,
    reviewCount: 19,
    stock: 12,
    isNew: true,
  },
  {
    id: "6",
    slug: "bridal-maroon-velvet-border",
    name: "Bridal Silk Saree — Maroon Velvet Border",
    price: 42000,
    discountPrice: 35999,
    category: "Bridal Sarees",
    description:
      "A statement bridal piece pairing pure silk with a plush velvet border and hand-embroidered motifs. Comes with a complimentary matching potli bag.",
    fabric: "Pure Silk with Velvet Border",
    color: "Deep Maroon",
    sareeLength: "6.5 metres (with 0.9m blouse piece)",
    blouseInfo: "Made-to-measure stitched blouse available on request",
    careInstructions: ["Dry clean only", "Store in a garment bag", "Keep away from direct heat", "Handle embroidery gently"],
    images: [img("saree6a"), img("saree6b"), img("saree6c"), img("saree6d")],
    rating: 4.9,
    reviewCount: 34,
    stock: 4,
    isBestSeller: true,
  },
  {
    id: "7",
    slug: "chiffon-party-rosegold",
    name: "Rose Gold Chiffon Party Saree",
    price: 10999,
    category: "Party Wear",
    description:
      "A dreamy rose gold chiffon saree with a shimmer finish, styled for cocktail evenings and celebratory nights out.",
    fabric: "Chiffon",
    color: "Rose Gold",
    sareeLength: "5.5 metres (with 0.8m blouse piece)",
    blouseInfo: "Unstitched blouse piece included",
    careInstructions: ["Dry clean recommended", "Avoid wringing", "Store away from sharp jewellery", "Hang to dry"],
    images: [img("saree7a"), img("saree7b"), img("saree7c")],
    rating: 4.4,
    reviewCount: 22,
    stock: 20,
  },
  {
    id: "8",
    slug: "mangalgiri-cotton-mustard",
    name: "Mangalgiri Cotton Saree — Mustard Yellow",
    price: 3800,
    category: "Cotton Sarees",
    description:
      "A cheerful mustard yellow Mangalgiri cotton saree with a classic gold-thread border, perfect for warm-weather everyday elegance.",
    fabric: "Mangalgiri Cotton",
    color: "Mustard Yellow",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Matching unstitched blouse piece included",
    careInstructions: ["Machine washable", "Wash in cold water", "Line dry", "Iron on medium heat"],
    images: [img("saree8a"), img("saree8b"), img("saree8c")],
    rating: 4.2,
    reviewCount: 37,
    stock: 25,
  },
  {
    id: "9",
    slug: "organza-silk-blush-pink",
    name: "Organza Silk Saree — Blush Pink Floral",
    price: 13500,
    discountPrice: 11499,
    category: "Silk Sarees",
    description:
      "A soft blush pink organza silk saree with delicate hand-painted florals, light as air and effortlessly graceful for daytime festivities.",
    fabric: "Organza Silk",
    color: "Blush Pink",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Unstitched matching blouse piece included",
    careInstructions: ["Dry clean only", "Store flat", "Keep away from water", "Iron on low heat with cloth barrier"],
    images: [img("saree9a"), img("saree9b"), img("saree9c")],
    rating: 4.7,
    reviewCount: 15,
    stock: 10,
    isNew: true,
  },
  {
    id: "10",
    slug: "bridal-gold-benarasi-ivory",
    name: "Ivory Benarasi Bridal Saree with Gold Motifs",
    price: 45999,
    category: "Bridal Sarees",
    description:
      "An heirloom-worthy ivory Benarasi saree densely woven with gold motifs from pallu to border — a graceful alternative for the modern bride.",
    fabric: "Benarasi Silk",
    color: "Ivory & Gold",
    sareeLength: "6.5 metres (with 0.9m blouse piece)",
    blouseInfo: "Made-to-measure stitched blouse available on request",
    careInstructions: ["Dry clean only", "Store wrapped in muslin", "Avoid folding on zari lines", "Re-fold every few months"],
    images: [img("saree10a"), img("saree10b"), img("saree10c")],
    rating: 4.9,
    reviewCount: 21,
    stock: 6,
  },
  {
    id: "11",
    slug: "net-party-sapphire",
    name: "Sapphire Blue Net Party Saree",
    price: 11999,
    category: "Party Wear",
    description:
      "A striking sapphire blue net saree with stone and sequin embellishment, made for standout moments at evening celebrations.",
    fabric: "Soft Net with Sequin Work",
    color: "Sapphire Blue",
    sareeLength: "5.5 metres (with 0.8m blouse piece)",
    blouseInfo: "Unstitched embellished blouse piece included",
    careInstructions: ["Dry clean only", "Store flat to protect stonework", "Avoid contact with perfume", "Handle sequins gently"],
    images: [img("saree11a"), img("saree11b"), img("saree11c")],
    rating: 4.5,
    reviewCount: 18,
    stock: 14,
  },
  {
    id: "12",
    slug: "handloom-cotton-white-red",
    name: "Handloom Cotton Saree — White & Red Temple Border",
    price: 5200,
    discountPrice: 4499,
    category: "Cotton Sarees",
    description:
      "A crisp white handloom cotton saree with a traditional red temple border, ideal for both daily wear and light festive occasions.",
    fabric: "Handloom Cotton",
    color: "White & Red",
    sareeLength: "6.0 metres (with 0.8m blouse piece)",
    blouseInfo: "Matching unstitched blouse piece included",
    careInstructions: ["Machine washable", "Wash separately for first wash", "Line dry in shade", "Starch lightly for crisp finish"],
    images: [img("saree12a"), img("saree12b"), img("saree12c")],
    rating: 4.4,
    reviewCount: 29,
    stock: 22,
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
      "The silk quality is beyond what I expected from an online order. The zari work catches the light beautifully — wore this to my sister's wedding and received so many compliments.",
    verified: true,
  },
  {
    id: "r2",
    customerName: "Nethmi Fernando",
    rating: 5,
    date: "2026-05-28",
    comment:
      "Ordered the bridal saree for my own wedding and it exceeded every expectation. Packaging was beautiful too — felt like a real luxury unboxing experience.",
    verified: true,
  },
  {
    id: "r3",
    customerName: "Dilani Wickramasinghe",
    rating: 4,
    date: "2026-05-15",
    comment:
      "Lovely cotton saree, very comfortable for daily wear at the office. Colour was slightly different from the photo but still beautiful. Delivery was quick.",
    verified: true,
  },
  {
    id: "r4",
    customerName: "Ishara Jayasuriya",
    rating: 5,
    date: "2026-04-30",
    comment:
      "This is my third purchase from this store and the quality has been consistent every time. Customer service was also very responsive when I had sizing questions.",
    verified: true,
  },
  {
    id: "r5",
    customerName: "Sanduni Rathnayake",
    rating: 4,
    date: "2026-04-02",
    comment:
      "Beautiful drape and the fabric feels premium. Would love to see more colour options for this design in future collections.",
    verified: true,
  },
  {
    id: "r6",
    customerName: "Chamathka Silva",
    rating: 5,
    date: "2026-03-19",
    comment:
      "Absolutely stunning party wear saree — the sequins are neatly finished and nothing has come loose after two wears. Highly recommend for special occasions.",
    verified: true,
  },
];

export const customers: Customer[] = [
  { id: "c1", name: "Amaya Perera", email: "amaya.p@example.com", orders: 5, totalSpent: 98500, joined: "2025-11-02" },
  { id: "c2", name: "Nethmi Fernando", email: "nethmi.f@example.com", orders: 2, totalSpent: 64300, joined: "2026-01-14" },
  { id: "c3", name: "Dilani Wickramasinghe", email: "dilani.w@example.com", orders: 8, totalSpent: 45200, joined: "2025-08-22" },
  { id: "c4", name: "Ishara Jayasuriya", email: "ishara.j@example.com", orders: 3, totalSpent: 33100, joined: "2026-02-05" },
  { id: "c5", name: "Sanduni Rathnayake", email: "sanduni.r@example.com", orders: 1, totalSpent: 11999, joined: "2026-06-30" },
];

export const orders: Order[] = [
  { id: "SR-10021", date: "2026-08-14", status: "Processing", items: [{ productId: "1", quantity: 1 }], total: 19999, customerName: "Amaya Perera" },
  { id: "SR-10020", date: "2026-08-13", status: "Shipped", items: [{ productId: "6", quantity: 1 }, { productId: "4", quantity: 2 }], total: 44999, customerName: "Nethmi Fernando" },
  { id: "SR-10019", date: "2026-08-12", status: "Delivered", items: [{ productId: "3", quantity: 1 }], total: 9999, customerName: "Dilani Wickramasinghe" },
  { id: "SR-10018", date: "2026-08-10", status: "Delivered", items: [{ productId: "12", quantity: 3 }], total: 13497, customerName: "Ishara Jayasuriya" },
  { id: "SR-10017", date: "2026-08-09", status: "Cancelled", items: [{ productId: "11", quantity: 1 }], total: 11999, customerName: "Sanduni Rathnayake" },
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
