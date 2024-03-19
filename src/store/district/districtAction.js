import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDistrict = createAsyncThunk(
  "district,fetchDistrict",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/get-filter-districts-metros/${payload.id}`);
    return response.data;
  }
);