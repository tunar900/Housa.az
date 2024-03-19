import { createSlice } from "@reduxjs/toolkit";
import { fetchDistrict } from "./districtAction";

export const districtSlice = createSlice({
  name: "district",
  initialState: {
    districtData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDistrict.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDistrict.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.districtData = payload;
      })
      .addCase(fetchDistrict.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default districtSlice.reducer; 