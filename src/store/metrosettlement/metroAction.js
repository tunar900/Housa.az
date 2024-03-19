import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMetro = createAsyncThunk(
  "metro,fetchMetro",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/get-filter-metros-settlements/${payload.id}`);
    return response.data;
  }
);