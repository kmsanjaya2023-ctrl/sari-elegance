import Link from "next/link";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";

export default function ProductRail({
  eyebrow,
  title,
  products,
  viewAllHref,
}: {
  eyebrow: string;
  title: string;
  products: Product[];
  viewAllHref: string;
}) {
  return (
    <section className="bg-cream py-20">
      <div className="container-elegant">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-heading mt-3">{title}</h2>
          </div>
          <Link
            href={viewAllHref}
            className="text-sm font-semibold text-burgundy underline-offset-4 hover:underline"
          >
            View All →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
