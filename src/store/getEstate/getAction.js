
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetEstates = createAsyncThunk(
  "getEstates,fetchGetEstates",
  async (payload) => {
    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const response = await axios.get(`${baseUrl}/get-estates`, {
        headers: {
          paginate: payload.paginate,
        },
      });
      return response.data.data; // Return the entire data object if needed
    } catch (error) {
      console.error("Hata oluştu:", error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  }
);
