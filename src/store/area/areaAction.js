import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetArea = createAsyncThunk(
  "area,fetchGetArea",
  async (payload) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(
  `${baseUrl}/get-estates?price_to=${payload.price_to}&price_from=${payload.price_from}&homesize_to=${payload.homeSize}&homesize_from=${payload.homeSizetwo}&landarea_to=${payload.landarea_to}&landarea_from=${payload.landarea_from}&settlement=${payload.settlement}&city=${payload.location}&district=${payload.dist}&announcementtype=${payload.announcementtype}&buildingtype=${payload.building}&maintenancetype=${payload.maintenance}&documenttype=${payload.document}&total_floor=${payload.totalfloor}&floor_to=${payload.floor_to}&floor_from=${payload.floor_from}&metroId=${payload.metro}&credittype=${payload.credit}&estatetype=${payload.estate}`,
      {
        headers: {
          paginate: payload.paginate,
        },
      }
    );
    return response.data.data;
  }
);
// &rooms=${payload.rooms}
