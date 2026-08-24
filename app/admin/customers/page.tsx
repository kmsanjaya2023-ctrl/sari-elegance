import { customers } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function AdminCustomersPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-charcoal">Customers</h1>
      <p className="mt-1 text-sm text-charcoal/50">All registered customers</p>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-card">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-charcoal/10 text-left text-xs uppercase tracking-wider text-charcoal/40">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Orders</th>
              <th className="px-5 py-3">Total Spent</th>
              <th className="px-5 py-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b border-charcoal/5">
                <td className="px-5 py-3 font-medium text-charcoal">{c.name}</td>
                <td className="px-5 py-3 text-charcoal/70">{c.email}</td>
                <td className="px-5 py-3 text-charcoal/70">{c.orders}</td>
                <td className="px-5 py-3 text-charcoal/80">{formatPrice(c.totalSpent)}</td>
                <td className="px-5 py-3 text-charcoal/60">{c.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
