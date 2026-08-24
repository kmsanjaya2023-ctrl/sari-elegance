import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Sari Elegance team for orders, custom requests, or support.",
};

export default function ContactPage() {
  return (
    <div className="container-elegant py-14">
      <div className="mb-12 text-center">
        <span className="eyebrow">We&rsquo;d Love to Hear From You</span>
        <h1 className="section-heading mt-3">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ContactForm />

        <div className="space-y-6">
          <InfoCard title="Visit Our Store" lines={["123 Galle Road, Colombo 03", "Sri Lanka (placeholder address)"]} />
          <InfoCard title="Call Us" lines={["+94 77 123 4567 (placeholder)", "Mon – Sat, 9am – 6pm"]} />
          <InfoCard title="Email Us" lines={["hello@sarielegance.lk (placeholder)", "We respond within 1–2 business days"]} />
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <h3 className="font-display text-lg text-burgundy">{title}</h3>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-sm text-charcoal/60">{l}</p>
      ))}
    </div>
  );
}
