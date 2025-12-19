import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) config.headers.access_token = token;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 500) {
      localStorage.clear();
      Cookies.remove("token");
      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);

export default api;
