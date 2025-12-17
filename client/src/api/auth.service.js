import api from ".";

export const authSerice = {
  login: async (payload) => {
    const res = await api.post("/auth/login", payload);
    return res.data;
  },
  register: async (payload) => {
    const res = await api.post("/api/auth/register", payload);
    return res.data;
  },
  profile: async () => {
    const res = await api.get("/api/auth/profile");
    return res.data;
  },
};
