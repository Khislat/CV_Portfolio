import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <h1 className="font-display font-bold text-4xl text-foreground mb-2">404</h1>
      <p className="text-zinc-800 mb-8">Page not found.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-primary text-background font-semibold hover:bg-primaryDim transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
