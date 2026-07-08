import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-max text-center">
        <p className="font-mono text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
