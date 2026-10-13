import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 pt-24 text-center">
      <div>
        <p className="text-gradient text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
