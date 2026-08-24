import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <div className="container-elegant max-w-3xl py-14">
      <h1 className="section-heading">Terms &amp; Conditions</h1>
      <p className="mt-4 text-xs text-charcoal/40">
        Placeholder content — replace with your business&rsquo;s actual terms before launch.
      </p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-charcoal/70">
        <h2 className="font-display text-lg text-charcoal">Orders &amp; Payment</h2>
        <p>
          All orders are subject to availability. Prices are listed in LKR
          and are inclusive of applicable taxes unless stated otherwise.
        </p>
        <h2 className="font-display text-lg text-charcoal">Shipping &amp; Delivery</h2>
        <p>
          Orders are processed within 2–3 business days. Delivery timelines
          vary by location within Sri Lanka.
        </p>
        <h2 className="font-display text-lg text-charcoal">Returns &amp; Exchanges</h2>
        <p>
          Unworn items with original tags may be returned within 7 days of
          delivery. Bridal and made-to-order pieces are final sale.
        </p>
      </div>
    </div>
  );
}
