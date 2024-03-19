import { configureStore } from "@reduxjs/toolkit";
import getEstatesReducer  from "./getEstate/getSlice";
import filterReducer from "./filter/FilterSlice";
import innerReducer from "./İnner/innerSlice";
import areaReducer from "./area/areaSlice";
import districtReducer from "./district/districtSlice";
import metroReducer from "./metrosettlement/metroSlice";

export default configureStore({
  reducer: {
    estate: getEstatesReducer,
    filter: filterReducer,
    inner: innerReducer,
    area: areaReducer,
    district: districtReducer,
    metro:metroReducer,
  },
});
