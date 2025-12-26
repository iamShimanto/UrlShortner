import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import urlSlice from "./slices/urlSlice";

export const store = configureStore({
  reducer: {
    userData: authSlice,
    urlData: urlSlice,
  },
});
