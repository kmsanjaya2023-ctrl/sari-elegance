"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/lib/utils";

const PAGE_SIZE = 8;
const MAX_PRICE = 50000;

type SortOption = "featured" | "price-asc" | "price-desc" | "newest" | "popularity";

export default function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") ?? "";
  const initialQuery = searchParams.get("q") ?? "";
  const initialSort = (searchParams.get("sort") as SortOption) ?? "featured";

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOption>(initialSort);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [selectedCategories, query, sort, maxPrice]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter((p) => (p.discountPrice ?? p.price) <= maxPrice);

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
        break;
      case "price-desc":
        result.sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
        break;
      case "newest":
        result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "popularity":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        result.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
    }

    return result;
  }, [query, selectedCategories, maxPrice, sort]);

  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;

  const clearFilters = () => {
    setSelectedCategories([]);
    setQuery("");
    setMaxPrice(MAX_PRICE);
    setSort("featured");
    router.replace("/shop");
  };

  return (
    <div className="container-elegant py-10 lg:py-14">
      <div className="mb-8 text-center">
        <span className="eyebrow">The Full Collection</span>
        <h1 className="section-heading mt-3">Shop All Sarees</h1>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <label htmlFor="shop-search" className="sr-only">Search products</label>
          <input
            id="shop-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, fabric, or colour..."
            className="input-elegant"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFiltersOpen((s) => !s)}
            className="btn-secondary py-2 text-xs lg:hidden"
          >
            Filters
          </button>
          <label htmlFor="sort-select" className="text-xs text-charcoal/50">Sort by</label>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="input-elegant w-auto py-2"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="popularity">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        <aside className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
          <div className="rounded-2xl bg-white p-5 shadow-card lg:sticky lg:top-28">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg text-charcoal">Filters</h2>
              <button onClick={clearFilters} className="text-xs text-burgundy underline-offset-2 hover:underline">
                Clear all
              </button>
            </div>

            <fieldset className="mt-5">
              <legend className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                Category
              </legend>
              <div className="mt-3 space-y-2.5">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2.5 text-sm text-charcoal/80">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="h-4 w-4 rounded border-charcoal/30 accent-burgundy"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                Max Price
              </legend>
              <input
                type="range"
                min={2000}
                max={MAX_PRICE}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-4 w-full accent-burgundy"
                aria-label="Maximum price"
              />
              <p className="mt-2 text-sm text-charcoal/70">
                Up to {formatPrice(maxPrice)}
              </p>
            </fieldset>
          </div>
        </aside>

        <div>
          <p className="mb-4 text-sm text-charcoal/50">
            Showing {paginated.length} of {filtered.length} products
          </p>

          {paginated.length === 0 ? (
            <div className="flex flex-col items-center rounded-2xl bg-white py-20 text-center shadow-card">
              <p className="font-display text-xl text-charcoal">No sarees found</p>
              <p className="mt-2 max-w-sm text-sm text-charcoal/50">
                Try adjusting your filters or search term to find what you're
                looking for.
              </p>
              <button onClick={clearFilters} className="btn-primary mt-6">
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                {paginated.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
              {hasMore && (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="btn-secondary"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
