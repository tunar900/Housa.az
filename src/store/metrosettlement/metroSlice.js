import { createSlice } from "@reduxjs/toolkit";
import { fetchMetro } from "./metroAction";

export const metroSlice = createSlice({
  name: "metro",
  initialState: {
    metroData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetro.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMetro.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.metroData = payload;
      })
      .addCase(fetchMetro.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default metroSlice.reducer; 