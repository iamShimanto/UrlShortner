import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
          <span className="text-2xl">🔗</span>
        </div>

        <h1 className="text-2xl font-semibold text-white">404</h1>
        <p className="mt-2 text-sm text-white/60">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <div className="my-6 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-2">
          <Link
            to="/"
            className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Go to Home
          </Link>

          <Link
            to="/dashboard"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10"
          >
            Go to Dashboard
          </Link>
        </div>

        <p className="mt-4 text-xs text-white/40">
          If you believe this is a mistake, please check the URL.
        </p>
      </div>
    </main>
  );
}
