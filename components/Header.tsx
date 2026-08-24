"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/shop?sort=newest", label: "New Arrivals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-charcoal/10 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="container-elegant flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-wide text-burgundy sm:text-3xl"
        >
          Sari <span className="text-gold">Elegance</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-charcoal/80 transition-colors hover:text-burgundy after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            aria-label="Search products"
            onClick={() => setSearchOpen((s) => !s)}
            className="rounded-full p-2 text-charcoal/80 transition-colors hover:bg-burgundy/5 hover:text-burgundy"
          >
            <SearchIcon />
          </button>
          <Link
            href="/wishlist"
            aria-label={`Wishlist, ${wishlist.length} items`}
            className="relative rounded-full p-2 text-charcoal/80 transition-colors hover:bg-burgundy/5 hover:text-burgundy"
          >
            <HeartIcon />
            {wishlist.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-charcoal">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link
            href="/cart"
            aria-label={`Cart, ${itemCount} items`}
            className="relative rounded-full p-2 text-charcoal/80 transition-colors hover:bg-burgundy/5 hover:text-burgundy"
          >
            <BagIcon />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-burgundy text-[10px] font-semibold text-cream">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden rounded-full p-2 text-charcoal/80 transition-colors hover:bg-burgundy/5 hover:text-burgundy sm:inline-flex"
          >
            <UserIcon />
          </Link>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
            className="ml-1 rounded-full p-2 text-charcoal/80 hover:bg-burgundy/5 hover:text-burgundy lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-charcoal/10 bg-cream">
          <form
            onSubmit={handleSearchSubmit}
            className="container-elegant flex items-center gap-3 py-4"
          >
            <SearchIcon />
            <input
              autoFocus
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for silk sarees, bridal wear, colours..."
              className="w-full bg-transparent font-body text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none"
            />
            <button type="submit" className="btn-primary py-2 text-xs">
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-charcoal/10 bg-cream lg:hidden"
        >
          <ul className="container-elegant flex flex-col divide-y divide-charcoal/10 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-base font-medium text-charcoal/90 hover:text-burgundy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/account" className="block py-3 text-base font-medium text-charcoal/90 hover:text-burgundy">
                Account
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
