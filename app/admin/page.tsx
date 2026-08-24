import { products, orders, customers } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function AdminDashboardPage() {
  const totalSales = orders
    .filter((o) => o.status !== "Cancelled")
    .reduce((sum, o) => sum + o.total, 0);

  const stats = [
    { label: "Total Sales", value: formatPrice(totalSales) },
    { label: "Total Orders", value: orders.length },
    { label: "Total Products", value: products.length },
    { label: "Total Customers", value: customers.length },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl text-charcoal">Dashboard</h1>
      <p className="mt-1 text-sm text-charcoal/50">
        Overview of your store&rsquo;s performance
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-white p-5 shadow-card">
            <p className="text-xs font-medium uppercase tracking-wider text-charcoal/40">
              {s.label}
            </p>
            <p className="mt-2 font-display text-2xl text-burgundy">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-card">
        <h2 className="font-display text-lg text-charcoal">Recent Orders</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-charcoal/10 text-left text-xs uppercase tracking-wider text-charcoal/40">
                <th className="py-2 pr-4">Order ID</th>
                <th className="py-2 pr-4">Customer</th>
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-charcoal/5">
                  <td className="py-3 pr-4 font-medium text-charcoal">{o.id}</td>
                  <td className="py-3 pr-4 text-charcoal/70">{o.customerName}</td>
                  <td className="py-3 pr-4 text-charcoal/60">{o.date}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-medium text-gold-dark">
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3 text-right text-charcoal/80">{formatPrice(o.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
