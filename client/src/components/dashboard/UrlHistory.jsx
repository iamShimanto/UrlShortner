import { useEffect, useState } from "react";
import { urlServices } from "../../api/url.service";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import VisitHistoryCard from "./VisitHistoryCard";

const UrlHistory = () => {
  const [urldata, setUrldata] = useState([]);
  const urlInfo = useSelector((state) => state.urlData.url);
  const [val, setVal] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await urlServices.getAllUrl();
      setUrldata(res);
    })();
  }, [urlInfo, val]);

  const onCopy = async (shortUrl) => {
    try {
      await navigator.clipboard.writeText(
        import.meta.env.VITE_API_BASE_URL + "/" + shortUrl
      );
      toast.success("Copied!");
    } catch (err) {
      console.log(err);
      toast.error("Copy Failed!");
    }
  };

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
        {urldata.map((u) => (
          <VisitHistoryCard key={u._id}  u={u} onCopy={onCopy} setVal={setVal} />
        ))}
      </div>
    </section>
  );
};

export default UrlHistory;
