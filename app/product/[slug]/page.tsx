import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts, products, reviews } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/StarRating";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const productReviews = reviews.slice(0, 4);

  return (
    <div className="container-elegant py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-8 text-xs text-charcoal/50">
        <Link href="/" className="hover:text-burgundy">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-burgundy">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-burgundy">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal/80">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} productName={product.name} />

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
            {product.category}
          </span>
          <h1 className="mt-2 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size={16} />
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-3xl text-burgundy">
              {formatPrice(product.discountPrice ?? product.price)}
            </span>
            {product.discountPrice && (
              <>
                <span className="text-lg text-charcoal/40 line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="rounded-full bg-burgundy/10 px-2.5 py-1 text-xs font-semibold text-burgundy">
                  Save {formatPrice(product.price - product.discountPrice)}
                </span>
              </>
            )}
          </div>

          <p className="mt-5 leading-relaxed text-charcoal/70">
            {product.description}
          </p>

          <ProductActions product={product} />

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl bg-white p-6 shadow-card sm:grid-cols-2">
            <DetailRow label="Fabric" value={product.fabric} />
            <DetailRow label="Colour" value={product.color} />
            <DetailRow label="Saree Length" value={product.sareeLength} />
            <DetailRow label="Blouse" value={product.blouseInfo} />
          </div>

          <details className="mt-6 rounded-2xl bg-white p-6 shadow-card">
            <summary className="cursor-pointer font-display text-lg text-charcoal">
              Care Instructions
            </summary>
            <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
              {product.careInstructions.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-gold">—</span> {c}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="section-heading mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {productReviews.map((r) => (
            <div key={r.id} className="rounded-2xl bg-white p-6 shadow-card">
              <StarRating rating={r.rating} />
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                &ldquo;{r.comment}&rdquo;
              </p>
              <p className="mt-4 font-display text-sm text-charcoal">{r.customerName}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="section-heading mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
        {label}
      </p>
      <p className="mt-1 text-sm text-charcoal/80">{value}</p>
    </div>
  );
}
