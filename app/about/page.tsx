import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sari Elegance — our craft, our weavers, and our commitment to timeless quality.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <div className="relative aspect-[16/7] w-full overflow-hidden">
          <Image
            src="https://picsum.photos/seed/aboutHero/1600/700"
            alt="Weaving workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
            <span className="eyebrow text-gold-light">Our Journey</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">About Sari Elegance</h1>
          </div>
        </div>
      </section>

      <section className="container-elegant py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center leading-relaxed text-charcoal/70">
          <p>
            Sari Elegance was founded with a simple belief: that traditional
            craftsmanship deserves a place in the modern wardrobe.
            <span className="text-charcoal/40"> (Placeholder business story — replace with your own history.)</span>
          </p>
          <p>
            What began as a small family venture in Sri Lanka has grown into
            a destination for women who want their saree to say something —
            about heritage, about occasion, and about themselves. We work
            directly with weaving communities to ensure every purchase
            supports fair, sustainable livelihoods.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { title: "Authenticity", desc: "Every saree is sourced directly from verified artisan weavers." },
            { title: "Quality", desc: "Hand-checked fabric, stitching, and finishing before it reaches you." },
            { title: "Sustainability", desc: "Supporting traditional techniques and fair wages for our weavers." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-7 text-center shadow-card">
              <h3 className="font-display text-lg text-burgundy">{v.title}</h3>
              <p className="mt-2 text-sm text-charcoal/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
