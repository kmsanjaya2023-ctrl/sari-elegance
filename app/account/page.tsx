"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { orders } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function AccountPage() {
  const { user, isHydrated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !user) {
      router.replace("/account/login");
    }
  }, [isHydrated, user, router]);

  if (!isHydrated || !user) {
    return (
      <div className="container-elegant py-14">
        <div className="h-40 rounded-2xl skeleton" />
      </div>
    );
  }

  return (
    <div className="container-elegant py-10 lg:py-14">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="eyebrow">My Account</span>
          <h1 className="section-heading mt-2 capitalize">Hello, {user.name}</h1>
        </div>
        <div className="flex gap-3">
          {user.isAdmin && (
            <Link href="/admin" className="btn-secondary py-2 text-xs">
              Admin Dashboard
            </Link>
          )}
          <button onClick={() => { logout(); router.push("/"); }} className="btn-primary py-2 text-xs">
            Log Out
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <div className="h-fit rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-display text-lg text-charcoal">Account Details</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-charcoal/40">Name</dt>
              <dd className="mt-0.5 capitalize text-charcoal/80">{user.name}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-charcoal/40">Email</dt>
              <dd className="mt-0.5 text-charcoal/80">{user.email}</dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-col gap-2">
            <Link href="/wishlist" className="text-sm font-medium text-burgundy hover:underline">
              View Wishlist →
            </Link>
            <Link href="/cart" className="text-sm font-medium text-burgundy hover:underline">
              View Cart →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-display text-lg text-charcoal">Recent Orders</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 text-left text-xs uppercase tracking-wider text-charcoal/40">
                  <th className="py-2 pr-4">Order</th>
                  <th className="py-2 pr-4">Date</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-charcoal/5">
                    <td className="py-3 pr-4 font-medium text-charcoal">{o.id}</td>
                    <td className="py-3 pr-4 text-charcoal/60">{o.date}</td>
                    <td className="py-3 pr-4">
                      <StatusBadge status={o.status} />
                    </td>
                    <td className="py-3 text-right text-charcoal/80">{formatPrice(o.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Processing: "bg-gold/15 text-gold-dark",
    Shipped: "bg-blue-100 text-blue-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${colors[status] ?? ""}`}>
      {status}
    </span>
  );
}
