import React from "react";
import { Link } from "react-router";
import Button from "../ui/Button";

const VisitHistoryCard = ({ u, setVal, onCopy }) => {
  return (
    <div key={u._id} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3">
      <div className="md:col-span-3">
        <p className="text-xs text-white/50 md:hidden">Short</p>
        <Link
          to={`${import.meta.env.VITE_API_BASE_URL}/${u.shortUrl}`}
          onClick={() => setVal(Math.random())}
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
          {u?.visitHistory?.length
            ? new Date(u.visitHistory.at(-1).visitTime).toLocaleTimeString()
            : "—"}
        </p>

        <p className="text-xs text-white/50">
          {u?.visitHistory?.length
            ? `${u?.visitHistory.at(-1).browser} • ${
                u?.visitHistory.at(-1).os
              } • ${u?.visitHistory.at(-1).deviceType}`
            : "No visits yet"}
        </p>

        <p className="text-xs text-white/50">{u.device}</p>
      </div>

      <div className="md:col-span-1 flex md:justify-end gap-2">
        <Button
          onClick={() => onCopy(u.shortUrl)}
          variant="secondary"
          size="sm"
        >
          Copy
        </Button>
        <Button variant="outline" size="sm">
          View
        </Button>
      </div>
    </div>
  );
};

export default VisitHistoryCard;
