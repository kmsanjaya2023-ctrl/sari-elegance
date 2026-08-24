"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.ok) {
      setError(res.error ?? "Login failed");
      return;
    }
    showToast("Welcome back!", "success");
    router.push("/account");
  };

  return (
    <div className="container-elegant flex justify-center py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-card">
        <h1 className="text-center font-display text-2xl text-charcoal">Welcome Back</h1>
        <p className="mt-2 text-center text-sm text-charcoal/50">
          Sign in to view your orders and wishlist
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Email</label>
            <input type="email" required className="input-elegant" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Password</label>
            <input type="password" required className="input-elegant" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-charcoal/40">
          Tip: use an email containing &ldquo;admin&rdquo; to preview the admin dashboard.
        </p>
        <p className="mt-4 text-center text-sm text-charcoal/60">
          Don&rsquo;t have an account?{" "}
          <Link href="/account/register" className="font-semibold text-burgundy hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
