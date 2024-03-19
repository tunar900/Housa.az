import { createSlice } from "@reduxjs/toolkit";
import { fetchGetEstates } from "./getAction";

export const getEstatesSlice = createSlice({
  name: "getEstates",
  initialState: {
    getEstatesData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetEstates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetEstates.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.getEstatesData = payload;
      })
      .addCase(fetchGetEstates.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default getEstatesSlice.reducer; 
