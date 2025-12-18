import { Link } from "react-router";

export default function Navbar({ user }) {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="container flex h-20 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={"/logo.png"} alt="logo" width={200} />
          </Link>

          <nav className="flex items-center gap-2">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="rounded-lg px-8 py-2.5 text-xl font-bold text-white/90 bg-white/15 hover:bg-white/10"
                >
                  Login
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-white/10"
              >
                <div className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/15 bg-white/10">
                  <img
                    src={"/default.jpg"}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <span className="hidden sm:block text-sm text-white/90">
                  {user?.name || "Profile"}
                </span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
