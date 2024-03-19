import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetFilter = createAsyncThunk(
  "filter,fetchFilter",
  async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/get-filter-options`);
    return response.data;
  }
);
