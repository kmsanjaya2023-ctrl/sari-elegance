import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore our saree collections — Silk, Bridal, Party Wear, and Cotton.",
};

const COLLECTION_META: Record<string, { seed: string; blurb: string }> = {
  "Silk Sarees": { seed: "collectionSilk", blurb: "Rich, handwoven silk for heritage occasions." },
  "Bridal Sarees": { seed: "collectionBridal", blurb: "Heirloom-worthy pieces for your big day." },
  "Party Wear": { seed: "collectionParty", blurb: "Shimmer and shine for every celebration." },
  "Cotton Sarees": { seed: "collectionCotton", blurb: "Breathable comfort for everyday elegance." },
};

export default function CollectionsPage() {
  return (
    <div className="container-elegant py-14">
      <div className="mb-12 text-center">
        <span className="eyebrow">Explore</span>
        <h1 className="section-heading mt-3">Our Collections</h1>
        <p className="mx-auto mt-4 max-w-xl text-charcoal/60">
          Each collection is curated around a mood, a moment, and a
          tradition. Find the saree meant for your next occasion.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {categories.map((cat) => {
          const meta = COLLECTION_META[cat];
          const count = products.filter((p) => p.category === cat).length;
          return (
            <Link
              key={cat}
              href={`/shop?category=${encodeURIComponent(cat)}`}
              className="group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-card"
            >
              <Image
                src={`https://picsum.photos/seed/${meta.seed}/1000/700`}
                alt={cat}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                  {count} styles
                </span>
                <h2 className="mt-1 font-display text-2xl text-cream">{cat}</h2>
                <p className="mt-1 max-w-xs text-sm text-cream/70">{meta.blurb}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
