"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const ADMIN_LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/customers", label: "Customers" },
  { href: "/admin/inventory", label: "Inventory" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isHydrated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isHydrated) return;
    if (!user) {
      router.replace("/account/login");
    } else if (!user.isAdmin) {
      router.replace("/account");
    }
  }, [isHydrated, user, router]);

  if (!isHydrated || !user || !user.isAdmin) {
    return (
      <div className="container-elegant py-14">
        <div className="h-64 rounded-2xl skeleton" />
      </div>
    );
  }

  return (
    <div className="bg-ivory">
      <div className="container-elegant grid grid-cols-1 gap-8 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-2xl bg-white p-4 shadow-card lg:sticky lg:top-28">
          <p className="px-2 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal/40">
            Admin Panel
          </p>
          <nav className="mt-1 flex flex-col gap-1">
            {ADMIN_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active ? "bg-burgundy text-cream" : "text-charcoal/70 hover:bg-burgundy/5 hover:text-burgundy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
