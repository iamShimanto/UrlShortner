import { useSelector } from "react-redux";
import CreateUrl from "../components/dashboard/CreateUrl";
import UrlHistory from "../components/dashboard/UrlHistory";
import { Navigate } from "react-router";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.userData.user);
  

  if (!userInfo) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="min-h-screen text-white mt-4">
      <div className="container px-4 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold">Dashboard</h1>
            <p className="mt-1 text-sm text-white/60">
              Create and manage your short links
            </p>
          </div>
        </div>

        <CreateUrl />

        <UrlHistory />
      </div>
    </main>
  );
}
