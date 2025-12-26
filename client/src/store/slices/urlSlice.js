import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: null,
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    url: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { url } = urlSlice.actions;

export default urlSlice.reducer;
