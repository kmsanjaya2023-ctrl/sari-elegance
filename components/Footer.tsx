import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-cream/80">
      <div className="container-elegant grid grid-cols-2 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="font-display text-2xl text-cream">
            Sari <span className="text-gold">Elegance</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Handwoven sarees crafted with heritage techniques, curated for the
            modern woman who honours tradition. Based in Sri Lanka, shipped
            island-wide.
          </p>
          <div className="mt-5 flex gap-3">
            {["Instagram", "Facebook", "TikTok"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-xs transition-colors hover:border-gold hover:text-gold"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base text-cream">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
            <li><Link href="/shop" className="hover:text-gold">Shop All</Link></li>
            <li><Link href="/collections" className="hover:text-gold">Collections</Link></li>
            <li><Link href="/shop?sort=newest" className="hover:text-gold">New Arrivals</Link></li>
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-cream">Customer Support</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
            <li><Link href="/contact" className="hover:text-gold">Contact Us</Link></li>
            <li><Link href="/account" className="hover:text-gold">Track My Order</Link></li>
            <li><Link href="/shop" className="hover:text-gold">Shipping & Returns</Link></li>
            <li><Link href="/contact" className="hover:text-gold">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-cream">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
            <li>123 Galle Road, Colombo 03,<br />Sri Lanka <span className="text-cream/30">(placeholder)</span></li>
            <li>+94 77 123 4567 <span className="text-cream/30">(placeholder)</span></li>
            <li>hello@sarielegance.lk <span className="text-cream/30">(placeholder)</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-elegant flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Sari Elegance. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
