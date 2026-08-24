"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { reviews } from "@/lib/data";
import StarRating from "@/components/StarRating";
import { useToast } from "@/context/ToastContext";

const COLLECTIONS = [
  { name: "Silk Sarees", href: "/shop?category=Silk+Sarees", img: "collectionSilk", blurb: "Rich weaves for grand occasions" },
  { name: "Bridal Sarees", href: "/shop?category=Bridal+Sarees", img: "collectionBridal", blurb: "Heirloom pieces for your big day" },
  { name: "Party Wear", href: "/shop?category=Party+Wear", img: "collectionParty", blurb: "Shimmer through every celebration" },
  { name: "Cotton Sarees", href: "/shop?category=Cotton+Sarees", img: "collectionCotton", blurb: "Everyday comfort, effortless grace" },
];

export function FeaturedCollections() {
  return (
    <section className="bg-cream py-20">
      <div className="container-elegant">
        <div className="text-center">
          <span className="eyebrow">Curated For You</span>
          <h2 className="section-heading mt-3">Featured Collections</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card"
            >
              <Image
                src={`https://picsum.photos/seed/${c.img}/600/800`}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl text-cream">{c.name}</h3>
                <p className="mt-1 text-xs text-cream/70">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-16 text-cream">
      <div className="container-elegant relative z-10 flex flex-col items-center gap-5 text-center">
        <span className="eyebrow text-gold-light">Limited Time</span>
        <h2 className="font-display text-3xl sm:text-4xl">
          Discover Timeless Elegance
        </h2>
        <p className="max-w-lg text-cream/80">
          Up to 20% off selected sarees — celebrate every occasion in
          handwoven luxury, while stocks last.
        </p>
        <Link href="/shop" className="btn-gold mt-2">
          Shop the Offer
        </Link>
      </div>
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
    </section>
  );
}

export function AboutBrand() {
  return (
    <section className="bg-ivory py-20">
      <div className="container-elegant grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
          <Image
            src="https://picsum.photos/seed/weavingProcess/900/700"
            alt="Artisan hand-weaving a silk saree on a traditional loom"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="section-heading mt-3">
            Crafted With Purpose, Worn With Pride
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal/70">
            For over 25 years, Sari Elegance has partnered with master weavers
            across Sri Lanka and South India to bring authentic, handcrafted
            sarees to modern wardrobes. Every piece is selected for its
            quality of fabric, precision of weave, and the story it carries —
            because a saree is never just clothing, it is a legacy passed
            through generations.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-charcoal/70">
            <li className="flex gap-2"><CheckIcon /> Ethically sourced from verified weaving communities</li>
            <li className="flex gap-2"><CheckIcon /> Quality-checked by hand before every shipment</li>
            <li className="flex gap-2"><CheckIcon /> Committed to preserving traditional textile art</li>
          </ul>
          <Link href="/about" className="btn-secondary mt-8 inline-flex">
            Learn Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CustomerReviews() {
  return (
    <section className="bg-cream py-20">
      <div className="container-elegant">
        <div className="text-center">
          <span className="eyebrow">Loved By Many</span>
          <h2 className="section-heading mt-3">What Our Customers Say</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((r) => (
            <div key={r.id} className="rounded-2xl bg-white p-6 shadow-card">
              <StarRating rating={r.rating} />
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                &ldquo;{r.comment}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-4">
                <div>
                  <p className="font-display text-sm text-charcoal">{r.customerName}</p>
                  <p className="text-xs text-charcoal/40">
                    {new Date(r.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                  </p>
                </div>
                {r.verified && (
                  <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold text-gold-dark">
                    Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubmitted(true);
    showToast("You're subscribed! Welcome to Sari Elegance.", "success");
  };

  return (
    <section className="bg-charcoal py-16 text-cream">
      <div className="container-elegant flex flex-col items-center text-center">
        <span className="eyebrow text-gold-light">Stay Connected</span>
        <h2 className="mt-3 font-display text-3xl">Join Our Inner Circle</h2>
        <p className="mt-3 max-w-md text-sm text-cream/60">
          Be the first to know about new arrivals, exclusive collections, and
          member-only offers.
        </p>
        {submitted ? (
          <p className="mt-6 rounded-full bg-gold/15 px-6 py-3 text-sm text-gold-light">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-invalid={!!error}
                aria-describedby={error ? "newsletter-error" : undefined}
                className="w-full rounded-full border border-cream/20 bg-cream/5 px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
              {error && (
                <p id="newsletter-error" className="mt-2 text-left text-xs text-red-400">
                  {error}
                </p>
              )}
            </div>
            <button type="submit" className="btn-gold">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function InstagramSection() {
  const seeds = ["ig1", "ig2", "ig3", "ig4", "ig5", "ig6"];
  return (
    <section className="bg-cream py-20">
      <div className="container-elegant text-center">
        <span className="eyebrow">Follow Along</span>
        <h2 className="section-heading mt-3">@sarielegance</h2>
        <p className="mt-2 text-sm text-charcoal/50">
          Tag us for a chance to be featured
        </p>
        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
          {seeds.map((s) => (
            <a
              key={s}
              href="#"
              aria-label="View on Instagram"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={`https://picsum.photos/seed/${s}/400/400`}
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-burgundy/0 transition-colors group-hover:bg-burgundy/30">
                <svg className="h-6 w-6 text-cream opacity-0 transition-opacity group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
