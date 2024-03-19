import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetİnner = createAsyncThunk(
  "inner,fetchGetİnner",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${baseUrl}/get-estate-inner/${payload.Id}`);
    return response.data.data;
  }
);