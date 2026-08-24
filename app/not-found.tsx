import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-elegant flex flex-col items-center py-28 text-center">
      <p className="font-display text-6xl text-gold">404</p>
      <h1 className="mt-4 font-display text-2xl text-charcoal">Page Not Found</h1>
      <p className="mt-2 max-w-sm text-sm text-charcoal/50">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
