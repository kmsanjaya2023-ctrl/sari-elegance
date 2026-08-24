"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeFromCart, increaseQuantity, decreaseQuantity, subtotal, deliveryFee, total, isHydrated } = useCart();

  if (!isHydrated) {
    return (
      <div className="container-elegant py-14">
        <div className="mx-auto max-w-3xl space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-28 rounded-2xl skeleton" />
          ))}
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-elegant flex flex-col items-center py-24 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ivory">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B0F1A" strokeWidth="1.5">
            <path d="M6 8h12l-1 12H7L6 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>
        </div>
        <h1 className="mt-6 font-display text-2xl text-charcoal">Your cart is empty</h1>
        <p className="mt-2 max-w-sm text-sm text-charcoal/50">
          Looks like you haven&rsquo;t added any sarees yet. Explore our
          collection to find your perfect piece.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container-elegant py-10 lg:py-14">
      <h1 className="section-heading mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            const price = product.discountPrice ?? product.price;

            return (
              <div
                key={item.productId}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-card sm:gap-6 sm:p-5"
              >
                <Link href={`/product/${product.slug}`} className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-ivory sm:h-32 sm:w-28">
                  <Image src={product.images[0]} alt={product.name} fill sizes="140px" className="object-cover" />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-3">
                    <div>
                      <Link href={`/product/${product.slug}`} className="font-display text-sm text-charcoal hover:text-burgundy sm:text-base">
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs text-charcoal/50">{product.color} · {product.fabric}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      aria-label={`Remove ${product.name} from cart`}
                      className="h-fit text-charcoal/40 hover:text-burgundy"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M6 6l12 12M18 6 6 18" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex items-center rounded-full border border-charcoal/15">
                      <button
                        onClick={() => decreaseQuantity(item.productId)}
                        aria-label="Decrease quantity"
                        className="h-8 w-8 text-charcoal/70 hover:text-burgundy"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.productId)}
                        aria-label="Increase quantity"
                        disabled={item.quantity >= product.stock}
                        className="h-8 w-8 text-charcoal/70 hover:text-burgundy disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-burgundy">
                      {formatPrice(price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:underline">
            ← Continue Shopping
          </Link>
        </div>

        <div className="h-fit rounded-2xl bg-white p-6 shadow-card lg:sticky lg:top-28">
          <h2 className="font-display text-lg text-charcoal">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-charcoal/70">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-charcoal/70">
              <span>Delivery Fee</span>
              <span>{deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}</span>
            </div>
            {deliveryFee > 0 && (
              <p className="rounded-lg bg-gold/10 px-3 py-2 text-xs text-gold-dark">
                Add {formatPrice(15000 - subtotal)} more for free delivery
              </p>
            )}
            <div className="flex justify-between border-t border-charcoal/10 pt-3 font-display text-base text-charcoal">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
          <Link href="/checkout" className="btn-primary mt-6 w-full">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
