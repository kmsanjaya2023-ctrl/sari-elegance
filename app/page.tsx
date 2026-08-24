import Hero from "@/components/Hero";
import ProductRail from "@/components/ProductRail";
import {
  FeaturedCollections,
  PromoBanner,
  AboutBrand,
  CustomerReviews,
  Newsletter,
  InstagramSection,
} from "@/components/HomeSections";
import { products } from "@/lib/data";

export default function HomePage() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <>
      <Hero />
      <FeaturedCollections />
      <ProductRail
        eyebrow="Just In"
        title="New Arrivals"
        products={newArrivals.length ? newArrivals : products.slice(0, 4)}
        viewAllHref="/shop?sort=newest"
      />
      <ProductRail
        eyebrow="Customer Favourites"
        title="Best Sellers"
        products={bestSellers.length ? bestSellers : products.slice(4, 8)}
        viewAllHref="/shop?sort=popularity"
      />
      <PromoBanner />
      <AboutBrand />
      <CustomerReviews />
      <Newsletter />
      <InstagramSection />
    </>
  );
}
