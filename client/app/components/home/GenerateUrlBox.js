"use client";

import Button from "../ui/Button";

export default function GenerateUrlBox() {
  return (
    <section className="mx-auto w-full max-w-2xl px-4">
      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white">
          Shorten Your URL
        </h1>
        <p className="mt-1 text-base sm:text-lg text-white/70 text-center">
          Paste your long link and generate a short one.
        </p>

        <div className="mt-5 space-y-3">
          <input
            placeholder="https://example.com/long-url"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/10"
          />
          <div className="flex gap-2 pt-2">
            <Button variant="primary">Generate</Button>

            <Button variant="outline">Clear</Button>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-base font-medium text-white/60">
              Your short URL
            </p>

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
      </div>
    </section>
  );
}
