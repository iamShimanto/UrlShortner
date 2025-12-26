import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { urlServices } from "../../api/url.service";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function GenerateUrlBox() {
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await urlServices.createUrl(data);
      setShortUrl(res.shortUrl);
      toast.success("Url Generated");
    } catch (error) {
      toast.error(error.response.data.message);
    }finally{
      setLoading(false)
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
    reset({ longUrl: "" });
    setShortUrl("");
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="https://example.com/long-url"
              {...register("longUrl", { required: "Url is required" })}
              error={errors.longUrl?.message}
            />
            <div className="flex gap-2 pt-2 mt-3">
              <Button type="submit" variant="primary" disabled={loading} >
                Generate
              </Button>

              <Button variant="outline" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </form>
          {shortUrl && (
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
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

                <Button variant="secondary" size="sm" onClick={onCopy}>
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
