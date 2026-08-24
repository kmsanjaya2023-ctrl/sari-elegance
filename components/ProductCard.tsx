"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import StarRating from "@/components/StarRating";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const hasDiscount = !!product.discountPrice;
  const discountPercent = hasDiscount
    ? Math.round(100 - (product.discountPrice! / product.price) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(107,15,26,0.14)]">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-ivory"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="rounded-full bg-charcoal/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream">
              New
            </span>
          )}
          {hasDiscount && (
            <span className="rounded-full bg-burgundy px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream">
              -{discountPercent}%
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm transition-transform hover:scale-110"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={wishlisted ? "#6B0F1A" : "none"}
            stroke={wishlisted ? "#6B0F1A" : "currentColor"}
            strokeWidth="1.8"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-[11px] font-medium uppercase tracking-wider text-gold-dark">
          {product.category}
        </span>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-base leading-snug text-charcoal line-clamp-2 hover:text-burgundy">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-semibold text-burgundy">
            {formatPrice(product.discountPrice ?? product.price)}
          </span>
          {hasDiscount && (
            <span className="text-xs text-charcoal/40 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        <button
          onClick={() => addToCart(product.id)}
          disabled={product.stock === 0}
          className="btn-primary mt-3 w-full py-2.5 text-xs disabled:bg-charcoal/20"
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
