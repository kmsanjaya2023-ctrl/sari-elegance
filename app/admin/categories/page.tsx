import { categories, products } from "@/lib/data";

export default function AdminCategoriesPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-charcoal">Categories</h1>
      <p className="mt-1 text-sm text-charcoal/50">Manage product categories</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          return (
            <div key={cat} className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-card">
              <div>
                <p className="font-display text-base text-charcoal">{cat}</p>
                <p className="text-xs text-charcoal/50">{count} products</p>
              </div>
              <button className="text-xs font-medium text-burgundy hover:underline">
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
