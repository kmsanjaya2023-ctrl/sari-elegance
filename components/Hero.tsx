import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="container-elegant grid min-h-[560px] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-0">
        <div className="animate-fadeUp order-2 lg:order-1">
          <span className="eyebrow">Handwoven Since 1998</span>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            Elegance Woven
            <br />
            in Every <span className="italic text-burgundy">Thread</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            Discover our curated collection of handwoven silk, bridal, and
            everyday sarees — each piece a tribute to Sri Lankan craft and
            timeless grace.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link href="/collections" className="btn-secondary">
              Explore Collections
            </Link>
          </div>
          <div className="mt-10 flex gap-8 border-t border-charcoal/10 pt-6">
            <div>
              <p className="font-display text-2xl text-burgundy">25+</p>
              <p className="text-xs text-charcoal/50">Years of Craft</p>
            </div>
            <div>
              <p className="font-display text-2xl text-burgundy">12k+</p>
              <p className="text-xs text-charcoal/50">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-2xl text-burgundy">500+</p>
              <p className="text-xs text-charcoal/50">Unique Weaves</p>
            </div>
          </div>
        </div>

        <div className="animate-fadeUp order-1 lg:order-2" style={{ animationDelay: "150ms" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-card sm:max-w-lg">
            <Image
              src="https://picsum.photos/seed/heroSaree/900/1125"
              alt="Model draped in an elegant maroon and gold silk saree"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full bg-gold/20 blur-2xl sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
