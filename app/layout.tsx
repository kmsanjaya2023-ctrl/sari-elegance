import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

// NOTE: We intentionally use a system/web-safe font stack (defined in
// tailwind.config.ts) instead of next/font/google. next/font/google fetches
// font files from Google at build time, which fails in network-restricted
// build environments (like sandboxes and some CI/CD pipelines). If your
// deployment target has open internet access and you'd like to use real
// Google Fonts (e.g. Playfair Display + Jost, which this design was built
// around), you can swap this back in — see README.md for instructions.

export const metadata: Metadata = {
  metadataBase: new URL("https://sari-elegance.vercel.app"),
  title: {
    default: "Wudi Online | Handmade Sarees, Sri Lanka",
    template: "%s | Wudi Online",
  },
  description:
    "Discover beautiful handmade sarees with unique hand-painted and printed designs. Shop Wudi Online for quality, affordable sarees delivered island-wide in Sri Lanka.",
  keywords: ["sarees", "handmade saree", "Sri Lanka saree shop", "Wudi Online", "buy saree online"],
  openGraph: {
    title: "Wudi Online | Handmade Sarees",
    description: "Beautiful handmade sarees, crafted with care. Shop our collection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body bg-cream text-charcoal antialiased">
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-burgundy focus:px-4 focus:py-2 focus:text-cream"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
