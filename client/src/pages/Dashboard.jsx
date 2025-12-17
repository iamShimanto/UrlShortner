import CreateUrl from "../components/dashboard/CreateUrl";
import UrlHistory from "../components/dashboard/UrlHistory";


function Stat({ title, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-4">
      <p className="text-xs text-white/60">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      {sub ? <p className="mt-1 text-xs text-white/50">{sub}</p> : null}
    </div>
  );
}

export default function Dashboard() {
  const urls = [
    {
      shortUrl: "https://your.site/abc123",
      longUrl:
        "https://example.com/some/very/long/url/with/params?utm_source=demo",
      clicks: 42,
      device: "Android • Chrome",
      last: "Dec 16, 2025",
    },
    {
      shortUrl: "https://your.site/x9kP0",
      longUrl: "https://github.com/your-repo/readme",
      clicks: 7,
      device: "Windows • Firefox",
      last: "Dec 15, 2025",
    },
    {
      shortUrl: "https://your.site/hello",
      longUrl: "https://nextjs.org/docs/app",
      clicks: 0,
      device: "-",
      last: "-",
    },
  ];

  return (
    <main className="min-h-screen text-white">
      <div className="container px-4 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold">Dashboard</h1>
            <p className="mt-1 text-sm text-white/60">
              Create and manage your short links
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Stat title="Total URLs" value="12" sub="All time" />
          <Stat title="Total Clicks" value="1,284" sub="All time" />
          <Stat title="Today Clicks" value="36" sub="Last 24 hours" />
          <Stat title="Unique Devices" value="9" sub="From visitHistory" />
        </div>

        <CreateUrl />

        <UrlHistory urls={urls} />
      </div>
    </main>
  );
}
