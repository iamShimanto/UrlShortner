import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import urlSlice from "./url/urlSlice";

export const store = configureStore({
  reducer: {
    userData: authSlice,
    urlData: urlSlice,
  },
});
