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
  metadataBase: new URL("https://www.sarielegance-placeholder.com"),
  title: {
    default: "Sari Elegance | Premium Handwoven Sarees, Sri Lanka",
    template: "%s | Sari Elegance",
  },
  description:
    "Discover handwoven silk, bridal, party wear and cotton sarees crafted with timeless elegance. Shop Sri Lanka's premium saree destination — free island-wide delivery on orders over LKR 15,000.",
  keywords: ["sarees", "silk saree", "bridal saree", "Sri Lanka saree shop", "cotton saree", "buy saree online"],
  openGraph: {
    title: "Sari Elegance | Premium Handwoven Sarees",
    description: "Elegance woven in every thread. Shop our curated saree collection.",
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
