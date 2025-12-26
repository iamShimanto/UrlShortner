import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { urlServices } from "../../api/url.service";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { url } from "../../store/slices/urlSlice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const CreateUrl = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await urlServices.createUrl(data);
      setShortUrl(res.shortUrl);
      dispatch(url(res.shortUrl));
      toast.success("Url Generated");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
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
    <section className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold">Create Short URL</h2>
          <p className="mt-1 text-sm text-white/60">
            Paste a long URL
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="primary"
            size="md"
            disabled={loading}
          >
            Create
          </Button>
          <Button onClick={handleClear} variant="outline" size="md">
            Clear
          </Button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-3"
      >
        <div className="lg:col-span-3">
          <p className="text-xs text-white/60 mb-2">Long URL</p>
          <Input
            placeholder="https://example.com/..."
            {...register("longUrl", { required: "Url is required" })}
            error={errors.longUrl?.message}
          />
        </div>

        {shortUrl && (
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 sm:w-80">
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
