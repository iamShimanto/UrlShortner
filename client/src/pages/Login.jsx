import { Link, Navigate, useNavigate } from "react-router";
import Input from "../components/ui/Input";
import { authSerice } from "../api/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../store/slices/authSlice";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Login() {
  const router = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await authSerice.login(data);
      toast.success(res.message);
      dispatch(loggedUser(res.userdata.user));
      setTimeout(() => {
        router("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const userInfo = useSelector((state) => state.userData.user);

  if (userInfo) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="min-h-175 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-white">Welcome back</h2>
        <p className="mt-1 text-sm text-white/60">
          Login to manage your short links
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-xs text-white/60">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: "Email Address is required" })}
              error={errors?.email?.message}
            />
          </div>

          <div>
            <label className="text-xs text-white/60">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              error={errors?.password?.message}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            Login
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-white/60">
          Don’t have an account?{" "}
          <Link to="/registration" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
