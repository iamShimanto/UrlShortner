import { useDispatch, useSelector } from "react-redux";
import CreateUrl from "../components/dashboard/CreateUrl";
import UrlHistory from "../components/dashboard/UrlHistory";
import { Navigate, useNavigate } from "react-router";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import { authSerice } from "../api/auth.service";
import { loggedUser } from "../store/slices/authSlice";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogOut = async () => {
    try {
      const res = await authSerice.logOut();
      dispatch(loggedUser(""));
      toast.success(res?.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed");
    }
  };

  if (!userInfo) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="min-h-screen text-white mt-4">
      <div className="container px-4 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold">Dashboard</h1>
            <p className="mt-1 text-sm text-white/60">
              Create and manage your short links
            </p>
          </div>
          <div className="ml-auto text-end">
            <p className="text-xl text-white font-semibold my-1">
              {userInfo?.fullName}
            </p>
            <Button variant="danger" onClick={handleLogOut}>
              Logout
            </Button>
          </div>
        </div>

        <CreateUrl />

        <UrlHistory />
      </div>
    </main>
  );
}
