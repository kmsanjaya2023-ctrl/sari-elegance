import { Suspense } from "react";
import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop All Sarees",
  description:
    "Browse our full collection of silk, bridal, party wear and cotton sarees. Filter by category, price, and sort by newest or popularity.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopSkeleton />}>
      <ShopContent />
    </Suspense>
  );
}

function ShopSkeleton() {
  return (
    <div className="container-elegant py-14">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-2xl skeleton" />
        ))}
      </div>
    </div>
  );
}
