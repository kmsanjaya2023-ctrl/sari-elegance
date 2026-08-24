import { products } from "@/lib/data";

export default function AdminInventoryPage() {
  const lowStock = products.filter((p) => p.stock <= 5);

  return (
    <div>
      <h1 className="font-display text-2xl text-charcoal">Inventory</h1>
      <p className="mt-1 text-sm text-charcoal/50">Stock levels across all products</p>

      {lowStock.length > 0 && (
        <div className="mt-6 rounded-2xl border border-burgundy/20 bg-burgundy/5 p-4 text-sm text-burgundy">
          {lowStock.length} product{lowStock.length > 1 ? "s" : ""} running low on stock
        </div>
      )}

      <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-card">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-charcoal/10 text-left text-xs uppercase tracking-wider text-charcoal/40">
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">SKU</th>
              <th className="px-5 py-3">Stock</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-charcoal/5">
                <td className="px-5 py-3 text-charcoal">{p.name}</td>
                <td className="px-5 py-3 text-charcoal/50">SKU-{p.id.padStart(4, "0")}</td>
                <td className="px-5 py-3 text-charcoal/80">{p.stock}</td>
                <td className="px-5 py-3">
                  {p.stock === 0 ? (
                    <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">Out of Stock</span>
                  ) : p.stock <= 5 ? (
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-medium text-gold-dark">Low Stock</span>
                  ) : (
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">In Stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
