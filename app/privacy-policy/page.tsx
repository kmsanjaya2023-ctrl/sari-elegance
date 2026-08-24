import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-elegant max-w-3xl py-14">
      <h1 className="section-heading">Privacy Policy</h1>
      <p className="mt-4 text-xs text-charcoal/40">
        Placeholder content — replace with your business&rsquo;s actual privacy policy before launch.
      </p>
      <div className="prose-elegant mt-8 space-y-6 text-sm leading-relaxed text-charcoal/70">
        <p>
          Sari Elegance (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
          privacy. This policy explains what information we collect when you
          use our website, how we use it, and the choices you have.
        </p>
        <h2 className="font-display text-lg text-charcoal">Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name,
          email, phone number, and delivery address when you place an order
          or subscribe to our newsletter.
        </p>
        <h2 className="font-display text-lg text-charcoal">How We Use Your Information</h2>
        <p>
          We use your information to process orders, provide customer
          support, and — with your consent — send marketing communications.
        </p>
        <h2 className="font-display text-lg text-charcoal">Contact Us</h2>
        <p>
          For questions about this policy, contact us at hello@sarielegance.lk (placeholder).
        </p>
      </div>
    </div>
  );
}
