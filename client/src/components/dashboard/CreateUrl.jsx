import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { urlServices } from "../../api/url.service";
import toast from "react-hot-toast";
import { Link } from "react-router";

const CreateUrl = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await urlServices.createUrl(longUrl);
      console.log(res);
      setShortUrl(res.shortUrl);
      toast.success("Url Generated");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        import.meta.env.VITE_API_BASE_URL + "/" + shortUrl
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.log(err);
      toast.error("Copy Failed!");
    }
  };

  const handleClear = () => {
    setLongUrl("");
    setShortUrl("");
  };

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
          <Button onClick={handleSubmit} variant="primary" size="md">
            Create
          </Button>
          <Button onClick={handleClear} variant="outline" size="md">
            Clear
          </Button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-3"
      >
        <div className="lg:col-span-3">
          <p className="text-xs text-white/60 mb-2">Long URL</p>
          <Input
            placeholder="https://example.com/..."
            onChange={(e) => setLongUrl(e.target.value)}
            value={longUrl}
          />
        </div>

        {shortUrl && (
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 w-80">
            <p className="text-base font-medium text-white/60">
              Your short URL
            </p>
            <div className="mt-2 flex justify-between items-center gap-2">
              <Link
                to={`${import.meta.env.VITE_API_BASE_URL}/${shortUrl}`}
                target="_blank"
                className="text-base text-white break-all cursor-pointer"
              >
                {`${import.meta.env.VITE_API_BASE_URL}/${shortUrl}`}
              </Link>

              <Button onClick={onCopy} variant="secondary" size="sm">
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default CreateUrl;
