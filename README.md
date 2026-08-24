# Sari Elegance — Premium Saree E-Commerce Website

A complete, production-quality e-commerce storefront built with **Next.js
14 (App Router)**, **TypeScript**, and **Tailwind CSS** for a premium
Sri Lankan saree brand.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm start
```

## What's Included

- **Homepage** — hero, featured collections, new arrivals, best sellers,
  promo banner, brand story, reviews, newsletter, Instagram grid, footer.
- **Shop page** (`/shop`) — search, category filters, price filter, sort
  (featured / newest / popularity / price), load-more pagination.
- **Product detail page** (`/product/[slug]`) — image gallery, full spec
  sheet (fabric, colour, length, blouse info, care instructions), quantity
  selector, add to cart / buy now / wishlist, related products, reviews.
- **Cart** (`/cart`) — persisted to `localStorage`, quantity controls,
  free-delivery threshold logic, subtotal/delivery/total breakdown.
- **Checkout** (`/checkout`) — validated customer info form, order summary,
  Cash on Delivery / Online Payment UI (payment gateway not wired up — see
  below).
- **Wishlist** (`/wishlist`) — persisted to `localStorage`.
- **Account** (`/account`, `/account/login`, `/account/register`) — demo
  authentication (see **Authentication** below), order history table.
- **Admin dashboard** (`/admin/*`) — protected route, stats overview,
  products / categories / orders / customers / inventory management UI.
- **About**, **Contact** (with validated form), **Privacy Policy**,
  **Terms & Conditions**, custom **404** page.
- Toast notifications, loading skeletons, empty states, and form validation
  throughout.

## Project Structure

```
app/                 Route segments (App Router)
  admin/              Admin dashboard + sub-pages (protected)
  account/             Login, register, account dashboard
  product/[slug]/      Dynamic product detail pages
  shop/                Shop listing (client component + Suspense wrapper)
  ...                  Other routes (cart, checkout, about, contact, etc.)
components/          Reusable UI components (Header, Footer, ProductCard, ...)
context/             React Context providers (Cart, Wishlist, Auth, Toast)
lib/                 Mock data (products, reviews, orders, customers) + utils
types/               Shared TypeScript interfaces
```

## ⚠️ Placeholders You Should Replace Before Launch

This project ships with clearly-marked placeholder data so it runs out of
the box. Before using it for a real business, update:

1. **Business details** — business name, address, phone number, and email
   appear in `components/Footer.tsx` and `app/contact/page.tsx`, each
   marked `(placeholder)`.
2. **Product images** — all product/collection photography currently uses
   [picsum.photos](https://picsum.photos) placeholder images (see
   `lib/data.ts`, `components/Hero.tsx`, `components/HomeSections.tsx`).
   Replace the `images` arrays with real photography URLs or local files in
   `public/`.
3. **Product catalogue** — 12 sample sarees live in `lib/data.ts`. Replace
   or extend with your real inventory.
4. **Logo** — the header currently renders a text wordmark
   (`components/Header.tsx`). Swap in an actual logo image if you have one.
5. **Payment gateway** — the checkout page has a UI placeholder for card
   payment (`app/checkout/page.tsx`). It does **not** process real payments.
   Integrate a real provider (e.g. Stripe, PayHere, or another gateway
   common in Sri Lanka) via a server route before going live.

## Authentication (Important — Read Before Production Use)

`context/AuthContext.tsx` implements a **demo-only** authentication flow:
any email/password combination "succeeds," and an email containing the
word `admin` (e.g. `admin@example.com`) unlocks the `/admin` dashboard in
the UI. This exists purely so you can click through the account and admin
experience — **it is not secure and must not be used in production.**

Before launch, replace it with real authentication, for example:
- [NextAuth.js](https://authjs.dev/) / Auth.js
- [Supabase Auth](https://supabase.com/auth)
- A custom API with hashed passwords and sessions/JWTs

## Data & Backend

All product, order, customer, and review data currently lives in
`lib/data.ts` as static mock data, and cart/wishlist/auth state persists to
the browser's `localStorage` (so it survives a page refresh, but is
per-device and not shared across users).

The type definitions in `types/index.ts` (`Product`, `Order`, `OrderItem`,
`Category`, `User`, `Cart`, `Wishlist`, `Review`) are designed to map
cleanly onto a real database. To connect a real backend:

1. Stand up a database (PostgreSQL, Supabase, PlanetScale, etc.) with
   tables matching those types.
2. Replace the functions in `lib/data.ts` (`getProductBySlug`,
   `getRelatedProducts`, etc.) with real API/database calls — ideally via
   Next.js Route Handlers (`app/api/.../route.ts`) or Server Actions.
3. Replace the `localStorage`-based cart/wishlist/auth in `context/` with
   calls to your backend once a user is authenticated, keeping
   `localStorage` as a fallback for guest carts if you like.

## Fonts

The design is built around an elegant serif/sans pairing (e.g. **Playfair
Display** for headings + **Jost** for body text). This project currently
uses system font fallbacks (configured in `tailwind.config.ts`) instead of
`next/font/google`, because fetching Google Fonts at build time fails in
network-restricted environments (some CI/CD pipelines, sandboxes, etc.).

If your deployment target has open internet access during build, you can
restore the original Google Fonts pairing:

```tsx
// app/layout.tsx
import { Playfair_Display, Jost } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const jost = Jost({ subsets: ["latin"], weight: ["300","400","500","600"], variable: "--font-body", display: "swap" });

// then add `className={`${playfair.variable} ${jost.variable}`}` to <html>
```

...and update `tailwind.config.ts`'s `fontFamily.display` / `fontFamily.body`
to `["var(--font-display)", "serif"]` / `["var(--font-body)", "sans-serif"]`.

## Design System

Defined in `tailwind.config.ts`:

- **Colours**: cream `#FBF7F0`, ivory `#F7F1E6`, burgundy `#6B0F1A`,
  gold `#B8892B`, charcoal `#2A2420`.
- **Shadows**: `shadow-card`, `shadow-gold` for the soft luxury look.
- **Animations**: `animate-fadeUp` (entrance), `animate-shimmer` (loading
  skeletons). Reduced-motion is respected globally (`app/globals.css`).

## Pre-Launch Checklist

- [ ] Replace placeholder business info, images, and product data
- [ ] Wire up real authentication
- [ ] Wire up a real database/backend
- [ ] Integrate a real payment gateway
- [ ] Set `metadataBase` in `app/layout.tsx` to your real domain
- [ ] Add a real `favicon.ico` / social share image to `app/`
- [ ] Run `npm run build` and fix any warnings for your target host
- [ ] Test on mobile, tablet, and desktop breakpoints
