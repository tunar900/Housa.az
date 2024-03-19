import { createSlice } from "@reduxjs/toolkit";
import { fetchGetİnner } from "./innerAction";

export const innerSlice = createSlice({
  name: "inner",
  initialState: {
    innerData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetİnner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetİnner.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.innerData = payload;
      })
      .addCase(fetchGetİnner.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default innerSlice.reducer; 