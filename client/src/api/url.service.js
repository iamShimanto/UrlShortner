import api from ".";

export const urlServices = {
  createUrl: async (longUrl) => {
    const res = await api.post("/api/url/create", longUrl);
    return res.data;
  },
  getAllUrl: async () => {
    const res = await api.get("/api/url/get-all-url");
    return res.data;
  },
  redirectUrl: async (id) => {
    const res = await api.get(`/${id}`);
    return res.data;
  },
};
