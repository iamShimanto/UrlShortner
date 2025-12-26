import { Link, Navigate, useNavigate } from "react-router";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { authSerice } from "../api/auth.service";
import { useSelector } from "react-redux";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";

export default function Registration() {
  const router = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector((state) => state.userData.user);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await authSerice.register(data);

      toast.success(res.message);
      setTimeout(() => {
        router("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (userInfo) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="min-h-175 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-white">Create an account</h2>
        <p className="mt-1 text-sm text-white/60">
          Start shortening URLs in seconds
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="text-xs text-white/60">Name</label>
            <Input
              type="text"
              placeholder="Your name"
              {...register("fullName", {
                required: "Full Name is required",
              })}
              error={errors?.fullName?.message}
            />
          </div>
          <div>
            <label className="text-xs text-white/60">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email Address is required",
              })}
              error={errors?.email?.message}
            />
          </div>
          <div>
            <label className="text-xs text-white/60">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
              })}
              error={errors?.password?.message}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            Sign up
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
