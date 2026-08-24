"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const router = useRouter();
  const wishlisted = isWishlisted(product.id);
  const outOfStock = product.stock === 0;

  const handleBuyNow = () => {
    addToCart(product.id, quantity);
    router.push("/checkout");
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-charcoal/70">Quantity</span>
        <div className="flex items-center rounded-full border border-charcoal/15">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="h-10 w-10 text-lg text-charcoal/70 hover:text-burgundy disabled:opacity-30"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            aria-label="Increase quantity"
            className="h-10 w-10 text-lg text-charcoal/70 hover:text-burgundy disabled:opacity-30"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
        {product.stock > 0 && product.stock <= 10 && (
          <span className="text-xs font-medium text-burgundy">
            Only {product.stock} left in stock
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => addToCart(product.id, quantity)}
          disabled={outOfStock}
          className="btn-secondary flex-1"
        >
          {outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
        <button
          onClick={handleBuyNow}
          disabled={outOfStock}
          className="btn-primary flex-1"
        >
          Buy Now
        </button>
        <button
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={wishlisted}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-charcoal/15 transition-colors hover:border-burgundy self-center sm:self-auto"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={wishlisted ? "#6B0F1A" : "none"}
            stroke={wishlisted ? "#6B0F1A" : "currentColor"}
            strokeWidth="1.8"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
