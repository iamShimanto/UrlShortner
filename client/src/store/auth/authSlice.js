import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("userData")) || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
  },
});

export const { loggedUser } = authSlice.actions;

export default authSlice.reducer;
