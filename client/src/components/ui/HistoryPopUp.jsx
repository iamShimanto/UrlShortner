import React, { useMemo } from "react";

const HistoryPopUp = ({ u = [], onClose }) => {
  const rows = useMemo(() => [...u].reverse(), [u]);

  return (
    <div className="fixed inset-0 z-50">
      <button
        onClick={() => onClose(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close"
      />

      <div
        className="
          fixed bottom-0 right-0
          w-full
          h-[90svh] sm:h-[85svh]
          lg:bottom-6 lg:right-6 lg:w-3xl lg:h-140
          rounded-t-3xl lg:rounded-3xl
          bg-zinc-950/80 backdrop-blur-xl
          border border-white/10
          shadow-2xl
          flex flex-col
          overflow-hidden
        "
      >
        <div className="shrink-0 sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-white">
              Visit History
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Recent sessions and device details
            </p>
          </div>

          <button
            onClick={() => onClose(false)}
            className="
              h-10 w-10 rounded-xl
              border border-white/10
              bg-white/5
              text-white
              flex items-center justify-center text-lg
              hover:bg-white/10
              active:scale-95
              transition
            "
            title="Close"
          >
            ✕
          </button>
        </div>

        <div className="shrink-0 hidden sm:grid grid-cols-4 gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white/60">
          <p>Visit time</p>
          <p>Browser</p>
          <p>Device</p>
          <p>OS</p>
        </div>
        <div className="shrink-0 hidden sm:block h-px bg-white/10" />

        <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6">
          {rows.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                🕒
              </div>
              <p className="font-medium text-white">No history found</p>
              <p className="text-sm text-white/60">
                When users visit, their sessions will appear here.
              </p>
            </div>
          ) : (
            rows.map((item, idx) => (
              <div
                key={item?._id ?? idx}
                className={[
                  "grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3",
                  "py-4 border-b border-white/10 last:border-none",
                  "text-sm text-white/90",
                  "transition hover:bg-white/5 rounded-xl sm:rounded-none",
                  "px-3 sm:px-0",
                ].join(" ")}
              >
                <div className="sm:hidden text-[11px] uppercase tracking-wide text-white/50">
                  Visit time
                </div>
                <p className="truncate" title={item?.visitTime}>
                  {item?.visitTime || "—"}
                </p>

                <div className="sm:hidden text-[11px] uppercase tracking-wide text-white/50">
                  Browser
                </div>
                <p className="truncate" title={item?.browser}>
                  {item?.browser || "—"}
                </p>

                <div className="sm:hidden text-[11px] uppercase tracking-wide text-white/50">
                  Device
                </div>
                <p className="truncate" title={item?.deviceType}>
                  {item?.deviceType || "—"}
                </p>

                <div className="sm:hidden text-[11px] uppercase tracking-wide text-white/50">
                  OS
                </div>
                <p className="truncate" title={item?.os}>
                  {item?.os || "—"}
                </p>
              </div>
            ))
          )}
        </div>

        <div className="shrink-0 sticky bottom-0 flex items-center justify-between px-4 sm:px-6 py-3 border-t border-white/10 bg-zinc-950/70 backdrop-blur text-sm">
          <span className="text-white/60">
            {rows.length} record{rows.length !== 1 && "s"}
          </span>

          <button
            onClick={() => onClose(false)}
            className="
              rounded-xl px-4 py-2
              bg-white text-zinc-950 font-medium
              hover:bg-white/90
              active:scale-95
              transition
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryPopUp;
