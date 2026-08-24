"use client";

import { useState } from "react";
import Image from "next/image";
import { products as initialProducts } from "@/lib/data";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/context/ToastContext";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [query, setQuery] = useState("");
  const { showToast } = useToast();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast("Product removed (demo only — not persisted)", "info");
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-charcoal">Products</h1>
          <p className="mt-1 text-sm text-charcoal/50">Manage your saree catalogue</p>
        </div>
        <button
          onClick={() => showToast("Connect a backend to enable adding new products", "info")}
          className="btn-primary py-2 text-xs"
        >
          + Add Product
        </button>
      </div>

      <input
        className="input-elegant mt-6 max-w-sm"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-card">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-charcoal/10 text-left text-xs uppercase tracking-wider text-charcoal/40">
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Stock</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-charcoal/5">
                <td className="flex items-center gap-3 px-5 py-3">
                  <div className="relative h-12 w-10 flex-shrink-0 overflow-hidden rounded-md bg-ivory">
                    <Image src={p.images[0]} alt="" fill sizes="48px" className="object-cover" />
                  </div>
                  <span className="line-clamp-1 max-w-[220px] text-charcoal">{p.name}</span>
                </td>
                <td className="px-5 py-3 text-charcoal/70">{p.category}</td>
                <td className="px-5 py-3 text-charcoal/80">{formatPrice(p.discountPrice ?? p.price)}</td>
                <td className="px-5 py-3">
                  <span className={p.stock <= 5 ? "font-medium text-burgundy" : "text-charcoal/70"}>
                    {p.stock}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <button
                    onClick={() => showToast("Editing requires a connected backend", "info")}
                    className="mr-3 text-xs font-medium text-burgundy hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-xs font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
