import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Wudi Online — our story, our craft, and our commitment to timeless quality sarees.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <div className="relative aspect-[16/7] w-full overflow-hidden">
          <Image
            src="https://picsum.photos/seed/aboutHero/1600/700"
            alt="Wudi Online saree collection"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
            <span className="eyebrow text-gold-light">Our Journey</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">About Wudi Online</h1>
          </div>
        </div>
      </section>

      <section className="container-elegant py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center leading-relaxed text-charcoal/70">
          <p>
            Wudi Online was born out of a simple love for the saree — its
            grace, its history, and the way it makes every woman who wears
            it feel effortlessly beautiful.
          </p>
          <p>
            What started as a small passion project has grown into a
            trusted online destination for women across Sri Lanka looking
            for quality sarees they can rely on. We handpick every piece in
            our collection, from everyday cottons to statement bridal
            silks, so that whatever the occasion, you'll find something
            that feels like it was made for you.
          </p>
          <p>
            Shopping with us is simple, personal, and built on trust — from
            the moment you browse our collection to the moment your order
            arrives at your doorstep.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { title: "Quality First", desc: "Every saree is carefully checked for fabric, finish, and detail before it reaches you." },
            { title: "Honest Pricing", desc: "Fair, transparent prices with no hidden costs — quality that doesn't break the bank." },
            { title: "Customer Care", desc: "Real support from real people, from your first question to after your order arrives." },
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