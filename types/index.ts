export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  discountPrice?: number;
  category: "Silk Sarees" | "Bridal Sarees" | "Party Wear" | "Cotton Sarees";
  description: string;
  fabric: string;
  color: string;
  sareeLength: string;
  blouseInfo: string;
  careInstructions: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Review {
  id: string;
  productId?: string;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
  verified?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: CartItem[];
  total: number;
  customerName: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  orders: number;
  totalSpent: number;
  joined: string;
}
