import { createSlice } from "@reduxjs/toolkit";
import { fetchGetFilter } from "./FilterAction";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetFilter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetFilter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filterData = payload;
      })
      .addCase(fetchGetFilter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default filterSlice.reducer; 