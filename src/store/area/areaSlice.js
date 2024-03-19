import { createSlice } from "@reduxjs/toolkit";
import { fetchGetArea } from "./areaAction";


export const areaSlice = createSlice({
  name: "area",
  initialState: {
    areaData: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetArea.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetArea.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.areaData = payload;
      })
      .addCase(fetchGetArea.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default areaSlice.reducer; 