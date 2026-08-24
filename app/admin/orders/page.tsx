"use client";

import { useState } from "react";
import { orders as initialOrders } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Order } from "@/types";
import { useToast } from "@/context/ToastContext";

const STATUSES: Order["status"][] = ["Processing", "Shipped", "Delivered", "Cancelled"];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const { showToast } = useToast();

  const updateStatus = (id: string, status: Order["status"]) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
    showToast(`Order ${id} marked as ${status}`, "success");
  };

  return (
    <div>
      <h1 className="font-display text-2xl text-charcoal">Orders</h1>
      <p className="mt-1 text-sm text-charcoal/50">Track and update order status</p>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-card">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b border-charcoal/10 text-left text-xs uppercase tracking-wider text-charcoal/40">
              <th className="px-5 py-3">Order ID</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Total</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-charcoal/5">
                <td className="px-5 py-3 font-medium text-charcoal">{o.id}</td>
                <td className="px-5 py-3 text-charcoal/70">{o.customerName}</td>
                <td className="px-5 py-3 text-charcoal/60">{o.date}</td>
                <td className="px-5 py-3 text-charcoal/80">{formatPrice(o.total)}</td>
                <td className="px-5 py-3">
                  <select
                    value={o.status}
                    onChange={(e) => updateStatus(o.id, e.target.value as Order["status"])}
                    className="rounded-lg border border-charcoal/15 bg-white px-2 py-1.5 text-xs"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
