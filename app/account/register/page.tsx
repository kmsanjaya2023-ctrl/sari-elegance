"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await register(name, email, password);
    setLoading(false);
    if (!res.ok) {
      setError(res.error ?? "Registration failed");
      return;
    }
    showToast("Account created successfully!", "success");
    router.push("/account");
  };

  return (
    <div className="container-elegant flex justify-center py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-card">
        <h1 className="text-center font-display text-2xl text-charcoal">Create Your Account</h1>
        <p className="mt-2 text-center text-sm text-charcoal/50">
          Join Sari Elegance for a personalised shopping experience
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Full Name</label>
            <input required className="input-elegant" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Email</label>
            <input type="email" required className="input-elegant" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Password</label>
            <input type="password" required className="input-elegant" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" />
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-charcoal/60">
          Already have an account?{" "}
          <Link href="/account/login" className="font-semibold text-burgundy hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
