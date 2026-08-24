"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/context/ToastContext";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

const initialForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
};

export default function CheckoutPage() {
  const { items, subtotal, deliveryFee, total, clearCart, isHydrated } = useCart();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod");
  const [placing, setPlacing] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email address";
    if (!form.address.trim()) next.address = "Address is required";
    if (!form.city.trim()) next.city = "City is required";
    if (!/^[0-9]{4,6}$/.test(form.postalCode.trim())) next.postalCode = "Enter a valid postal code";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setPlacing(true);
    // Placeholder order placement — replace with a real API/payment
    // gateway call (e.g. Stripe, PayHere) when connecting a backend.
    setTimeout(() => {
      setPlacing(false);
      clearCart();
      showToast("Order placed successfully!", "success");
      router.push("/account?orderPlaced=1");
    }, 900);
  };

  if (isHydrated && items.length === 0) {
    return (
      <div className="container-elegant flex flex-col items-center py-24 text-center">
        <h1 className="font-display text-2xl text-charcoal">Nothing to check out</h1>
        <p className="mt-2 text-sm text-charcoal/50">Your cart is currently empty.</p>
        <Link href="/shop" className="btn-primary mt-8">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="container-elegant py-10 lg:py-14">
      <h1 className="section-heading mb-10">Checkout</h1>
      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-display text-lg text-charcoal">Customer Information</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.fullName}>
                <input className="input-elegant" value={form.fullName} onChange={handleChange("fullName")} placeholder="e.g. Amaya Perera" />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input className="input-elegant" value={form.phone} onChange={handleChange("phone")} placeholder="e.g. 077 123 4567" />
              </Field>
              <Field label="Email" error={errors.email} full>
                <input type="email" className="input-elegant" value={form.email} onChange={handleChange("email")} placeholder="you@example.com" />
              </Field>
              <Field label="Address" error={errors.address} full>
                <input className="input-elegant" value={form.address} onChange={handleChange("address")} placeholder="Street address" />
              </Field>
              <Field label="City" error={errors.city}>
                <input className="input-elegant" value={form.city} onChange={handleChange("city")} placeholder="e.g. Colombo" />
              </Field>
              <Field label="Postal Code" error={errors.postalCode}>
                <input className="input-elegant" value={form.postalCode} onChange={handleChange("postalCode")} placeholder="e.g. 00300" />
              </Field>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-display text-lg text-charcoal">Payment Method</h2>
            <div className="mt-5 space-y-3">
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${paymentMethod === "cod" ? "border-burgundy bg-burgundy/5" : "border-charcoal/15"}`}>
                <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} className="accent-burgundy" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Cash on Delivery</p>
                  <p className="text-xs text-charcoal/50">Pay in cash when your order arrives</p>
                </div>
              </label>
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${paymentMethod === "online" ? "border-burgundy bg-burgundy/5" : "border-charcoal/15"}`}>
                <input type="radio" name="payment" checked={paymentMethod === "online"} onChange={() => setPaymentMethod("online")} className="accent-burgundy" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Online Payment</p>
                  <p className="text-xs text-charcoal/50">Card payment gateway — placeholder, to be integrated (e.g. Stripe or PayHere)</p>
                </div>
              </label>
              {paymentMethod === "online" && (
                <div className="grid grid-cols-1 gap-4 rounded-xl border border-dashed border-charcoal/20 p-4 sm:grid-cols-2">
                  <Field label="Card Number (placeholder)">
                    <input disabled className="input-elegant bg-ivory" placeholder="•••• •••• •••• ••••" />
                  </Field>
                  <Field label="Expiry (placeholder)">
                    <input disabled className="input-elegant bg-ivory" placeholder="MM/YY" />
                  </Field>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="h-fit space-y-6 rounded-2xl bg-white p-6 shadow-card lg:sticky lg:top-28">
          <h2 className="font-display text-lg text-charcoal">Order Summary</h2>
          <div className="max-h-64 space-y-4 overflow-y-auto pr-1">
            {items.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;
              return (
                <div key={item.productId} className="flex gap-3">
                  <div className="relative h-16 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-ivory">
                    <Image src={product.images[0]} alt={product.name} fill sizes="60px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 justify-between text-sm">
                    <div>
                      <p className="line-clamp-1 text-charcoal">{product.name}</p>
                      <p className="text-xs text-charcoal/50">Qty {item.quantity}</p>
                    </div>
                    <p className="font-medium text-charcoal">
                      {formatPrice((product.discountPrice ?? product.price) * item.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="space-y-2 border-t border-charcoal/10 pt-4 text-sm">
            <div className="flex justify-between text-charcoal/70">
              <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-charcoal/70">
              <span>Delivery Fee</span><span>{deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}</span>
            </div>
            <div className="flex justify-between border-t border-charcoal/10 pt-2 font-display text-base text-charcoal">
              <span>Total</span><span>{formatPrice(total)}</span>
            </div>
          </div>
          <button type="submit" disabled={placing} className="btn-primary w-full">
            {placing ? "Placing Order..." : "Place Order"}
          </button>
          <p className="text-center text-[11px] text-charcoal/40">
            This is a demo checkout. No real payment will be processed.
          </p>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-medium text-charcoal/60">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
