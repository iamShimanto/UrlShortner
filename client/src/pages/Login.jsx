import { Link } from "react-router";

export default function Login() {
  return (
    <main className="min-h-175 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-white">Welcome back</h2>
        <p className="mt-1 text-sm text-white/60">
          Login to manage your short links
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-xs text-white/60">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/10"
            />
          </div>

          <div>
            <label className="text-xs text-white/60">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/10"
            />
          </div>

          <button className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/60">
          Don’t have an account?{" "}
          <Link to="/registration" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
