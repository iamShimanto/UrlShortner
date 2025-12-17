import React from "react";
import Button from "../ui/Button";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm " +
  "text-white placeholder:text-white/40 outline-none " +
  "focus:border-white/20 focus:ring-2 focus:ring-white/10";

const CreateUrl = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold">Create Short URL</h2>
          <p className="mt-1 text-sm text-white/60">
            Paste a long URL and optionally add a custom slug.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="primary" size="md">
            Create
          </Button>
          <Button variant="outline" size="md">
            Clear
          </Button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="lg:col-span-3">
          <p className="text-xs text-white/60 mb-2">Long URL</p>
          <input className={inputClass} placeholder="https://example.com/..." />
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 w-75">
          <p className="text-base font-medium text-white/60">Your short URL</p>

          <div className="mt-2 flex justify-between items-center gap-2">
            <span className="text-base text-white break-all">
              https://your.site/abc123
            </span>

            <Button variant="secondary" size="sm">
              Copy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateUrl;
