"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { getProductById } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const products = wishlist.map(getProductById).filter(Boolean);

  return (
    <div className="container-elegant py-10 lg:py-14">
      <h1 className="section-heading mb-10">My Wishlist</h1>

      {products.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <p className="font-display text-xl text-charcoal">Your wishlist is empty</p>
          <p className="mt-2 max-w-sm text-sm text-charcoal/50">
            Save your favourite sarees here to find them easily later.
          </p>
          <Link href="/shop" className="btn-primary mt-8">Browse Sarees</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((p) => p && <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
