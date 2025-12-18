import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { urlServices } from "../../api/url.service";
import { Link } from "react-router";

const UrlHistory = ({ urls }) => {
  const [urldata, setUrldata] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await urlServices.getAllUrl();
      setUrldata(res);
    })();
  }, []);

  console.log(urldata);

  return (
    <section className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-4 sm:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold">My URLs</h2>
          <p className="mt-1 text-sm text-white/60">
            Quick view of your recent links.
          </p>
        </div>
      </div>

      <div className="mt-5 hidden md:grid grid-cols-12 gap-3 text-xs text-white/50">
        <div className="col-span-3">Short</div>
        <div className="col-span-5">Long</div>
        <div className="col-span-1">Clicks</div>
        <div className="col-span-2">Last Visit</div>
        <div className="col-span-1 text-right">Actions</div>
      </div>

      <div className="mt-2 divide-y divide-white/10">
        {urldata.map((u, i) => (
          <div key={i} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-3">
              <p className="text-xs text-white/50 md:hidden">Short</p>
              <Link
                to={`${import.meta.env.VITE_API_BASE_URL}/${u.shortUrl}`}
                target="_blank"
                className="text-sm text-white break-all"
              >{`${import.meta.env.VITE_API_BASE_URL}/${u.shortUrl}`}</Link>
            </div>

            <div className="md:col-span-5">
              <p className="text-xs text-white/50 md:hidden">Long</p>
              <p className="text-sm text-white/80 break-all line-clamp-2">
                {u.longUrl.substring(0, 100)}
              </p>
            </div>

            <div className="md:col-span-1">
              <p className="text-xs text-white/50 md:hidden">Clicks</p>
              <p className="text-sm text-white">{u.visitHistory.length}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-xs text-white/50 md:hidden">Last Visit</p>
              <p className="text-sm text-white/80">
                {u.visitHistory.lastIndexOf("visitTime")}
              </p>
              <p className="text-xs text-white/50">{u.device}</p>
            </div>

            <div className="md:col-span-1 flex md:justify-end gap-2">
              <Button variant="secondary" size="sm">
                Copy
              </Button>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UrlHistory;
