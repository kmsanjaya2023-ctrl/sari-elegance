"use client";

import { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const { showToast } = useToast();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    showToast("Message sent! We'll get back to you soon.", "success");
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <p className="font-display text-xl text-charcoal">Thank you for reaching out</p>
        <p className="mt-2 text-sm text-charcoal/60">
          Our team will respond within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl bg-white p-8 shadow-card">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Name</label>
        <input
          className="input-elegant"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Email</label>
        <input
          type="email"
          className="input-elegant"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-charcoal/60">Message</label>
        <textarea
          rows={5}
          className="input-elegant resize-none"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="How can we help?"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full">Send Message</button>
    </form>
  );
}
