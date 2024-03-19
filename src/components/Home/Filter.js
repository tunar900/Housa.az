import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { fetchGetFilter } from "../../store/filter/FilterAction";
import { fetchGetArea } from "../../store/area/areaAction";
import { fetchDistrict } from "../../store/district/districtAction";
import { fetchMetro } from "../../store/metrosettlement/metroAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SkeletonFilter from "../Skelton/SkeletonFilter";
function Filter() {
  const [price_to, setPrice_to] = useState("");
  const [price_from, setPrice_from] = useState("");
  const [homeSize, setHomeSize] = useState("");
  const [homeSizetwo, setHomeSizetwo] = useState("");
  const [location, setLocation] = useState("");
  const [settlement, setSettlement] = useState("");
  const [dist, setDist] = useState("");
  const [announcementtype, setAnnouncementtype] = useState("");
  const [credit, setCredit] = useState("");
  const [document, setDocument] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [building, setBuilding] = useState("");
  const [estate, setEstate] = useState("");
  const [metro, setMetro] = useState("");
  const [landarea_to, setLandarea_to] = useState("");
  const [landarea_from, setLandarea_from] = useState("");
  const [floor_to, setFloor_to] = useState("");
  const [floor_from, setFloor_from] = useState("");
  const [totalfloor, setTotalFloor] = useState("");
  // const [rooms,setRooms]=useState("")
  const [selectedCityId, setSelectedCityId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatNumberWithSpaces = (number) => {
    return number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const [showAllInputs, setshowAllInputs] = useState(false);
  const [buttonText, setButtonText] = useState("All Filters");
  const toggleFilters = () => {
    setshowAllInputs(!showAllInputs);
    setButtonText(showAllInputs ? "All Filters" : "Close Filters");
  };

  const districtRedux = useSelector((state) => state.district.districtData);
  const districtsData = districtRedux.districts;

  const metroRedux = useSelector((state) => state.metro.metroData);

  const metroData = metroRedux.metros;
  const settlementsData = metroRedux.settlements;

  const filterRedux = useSelector((state) => state.filter.filterData);
  const credittypeData = filterRedux.credittypes;

  const locationsData = filterRedux.cities;
  // console.log(locationsData);

  const maintenancetypesData = filterRedux.maintenancetypes;

  const buildingtypeData = filterRedux.buildingtypes;

  const documenttypeData = filterRedux.documenttypes;

  const announcementtypesData = filterRedux.announcementtypes;

  const estatetypesData = filterRedux.estatetypes;

  const NavigateSearch = async () => {
    try {
      const response = await dispatch(
        fetchGetArea({
          paginate: 100,
          price_to: price_to.replace(/\s/g, ""),
          price_from: price_from.replace(/\s/g, ""),
          homeSize: homeSize.replace(/\s/g, ""),
          homeSizetwo: homeSizetwo.replace(/\s/g, ""),
          location: location,
          settlement: settlement,
          dist: dist,
          announcementtype: announcementtype,
          credit: credit,
          document: document,
          maintenance: maintenance,
          building: building,
          estate: estate,
          metro: metro,
          floor_to: floor_to.replace(/\s/g, ""),
          floor_from: floor_from.replace(/\s/g, ""),
          landarea_to: landarea_to.replace(/\s/g, ""),
          landarea_from: landarea_from.replace(/\s/g, ""),
          totalfloor: totalfloor.replace(/\s/g, ""),
          // rooms:rooms.replace(/\s/g, ""),
        })
      );
      const newData = response && response.payload.data;
      navigate("/explore-more", { state: { newData } });
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };
  const FindDistrict = (e) => {
    const selectedValue = e.target ? e.target.value : e;
    if (selectedValue === "reset") {
      handleReset();
      return;
    }
    setDist(selectedValue);
    const selectedDistrictId = e;
  
      dispatch(fetchMetro({ id: selectedDistrictId }));

    setSelectedCityId(selectedValue);
  };
  const FindSettlement = (e) => {
    const selectedValue = e.target ? e.target.value : e;
    setSettlement(selectedValue);

    if (selectedValue === "reset") {
      handleReset();
      return;
    }
  };
  const FindDocument = (e) => {
    if (e === "reset") {
      setDocument("");
    } else {
      setDocument(e);
    }
  };
  const FindMaintenance = (e) => {
    if (e === "reset") {
      setMaintenance("");
    } else {
      setMaintenance(e);
    }
  };
  const FindBuilding = (e) => {
    if (e === "reset") {
      setBuilding("");
    } else {
      setBuilding(e);
    }
  };
  const FindMetro = (e) => {
    const selectedValue = e.target ? e.target.value : e;
    setMetro(selectedValue);

    if (selectedValue === "reset") {
      handleReset();
      return;
    }
  };
  const FindEstate = (e) => {
    if (e === "reset") {
      setEstate("");
    } else {
      setEstate(e);
    }
  };
  const FindCity = (e) => {
    setLocation(e);

    const selectedCityId = e;

    dispatch(fetchDistrict({ id: selectedCityId }));
  };

  const handleReset = () => {
    setLocation("");
    setDist("");
    setMetro("");
    setSettlement("");
  };

  const FindCreditType = (e) => {
    if (e === "reset") {
      setCredit("");
    } else {
      setCredit(e);
    }
  };
  const FindAnnouncementtype = (e) => {
    if (e === "reset") {
      setAnnouncementtype("");
    } else {
      setAnnouncementtype(e);
    }
  };
  const FindAreaSize = (e) => {
    setHomeSize(e.target.value);

    setHomeSize(formatNumberWithSpaces(e.target.value));
  };
  const FindLandarea_to = (e) => {
    setLandarea_to(e.target.value);
    setLandarea_to(formatNumberWithSpaces(e.target.value));
  };
  const FindLandarea_from = (e) => {
    setLandarea_from(e.target.value);
    setLandarea_from(formatNumberWithSpaces(e.target.value));
  };

  const handleFindAreaSize = (e) => {
    setHomeSizetwo(e.target.value);
    setHomeSizetwo(formatNumberWithSpaces(e.target.value));
  };
  const FindPriceTo = (e) => {
    setPrice_to(e.target.value);
    setPrice_to(formatNumberWithSpaces(e.target.value));
  };
  const FindPriceFrom = (e) => {
    setPrice_from(e.target.value);
    setPrice_from(formatNumberWithSpaces(e.target.value));
  };
  const FindFloorTo = (e) => {
    setFloor_to(e.target.value);
    setFloor_to(formatNumberWithSpaces(e.target.value));
  };
  const FindFloorFrom = (e) => {
    setFloor_from(e.target.value);
    setFloor_from(formatNumberWithSpaces(e.target.value));
  };
  const TotalFloor = (e) => {
    setTotalFloor(e.target.value);
    setTotalFloor(formatNumberWithSpaces(e.target.value));
  };
  // const Rooms =(e)=>{
  //   setRooms(e.target.value)
  //   setRooms(formatNumberWithSpaces(e.target.value));
  // }

  useEffect(() => {
    dispatch(fetchGetFilter());
    // dispatch(fetchDistrict({ id: selectedCityId }));
    // dispatch(fetchGetArea({ paginate: 10, price_to: price_to }));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    NavigateSearch();
  };

  const [activeButton, setActiveButton] = useState("rent");
  const handleButtonClick = (buttontype) => {
    setActiveButton(buttontype);
  };

  return (
    <div>
      {locationsData ? (
        <div className="bg-[#f8f6ff] flex mx-auto  max-w-[98%] my-2 max-md:max-w-[96%] max-sm:max-w-[95%]  border-2 rounded-[10px] flex-col gap-5 p-10 max-sm:p-6 max-[400px]:p-4">
          <div>
            <div className="bg-white  max-[330px]:text-center  rounded-[10px] inline-block  border-[1px] border-[#E5E5E5]">
              <button
                className={`px-4 py-3 rounded-[10px] max-[320px]:w-full text-[14px] font-medium  ${activeButton === "rent" ? "bg-black text-white" : ""
                  }`}
                onClick={() => handleButtonClick("rent")}
              >
                For Rent
              </button>
              <button
                className={`rentbtn px-4 py-3 rounded-[10px] max-[320px]:width-full text-[14px] font-medium  ${activeButton === "sale" ? "bg-black text-white " : ""
                  }`}
                onClick={() => handleButtonClick("sale")}
              >
                For Sale
              </button>
            </div>
          </div>
          <form className="grid gap-[15px]" onSubmit={handleSubmit}>
            <div>
              <div className="allinput  max-md:grid-cols-2 grid grid-cols-4 max-[500px]:grid-cols-1 gap-4 w-[100%]">
                <div className="flex flex-col col-span-1  gap-3">
                  <label htmlFor="typeof">Type of Property</label>
                  <select
                    onChange={(e) => FindAnnouncementtype(e.target.value)}
                    className="p-[12px] outline-none rounded-l-[10px] rounded-r-[10px]"
                    name="typeof"
                    id="typeof"
                    value={announcementtype}
                  >
                    <option value="" disabled hidden>
                      Elan növü
                    </option>
                    <option value="reset">Reset</option>
                    {announcementtypesData &&
                      announcementtypesData.map((data) => (
                        <option
                          value={data.id}
                          key={data.id}
                          className="mx-5 my-3"
                        >
                          {data.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col  col-span-1 gap-3">
                  <label htmlFor="price">Qiymət</label>
                  <div className="flex align-center">
                    <input
                      onChange={FindPriceTo}
                      className=" outline-none border-r   py-3 w-[100%] pl-3 rounded-l-[10px]"
                      type="text"
                      id="price_to"
                      name="price_to"
                      value={price_to}
                      placeholder="min"
                    ></input>
                    <input
                      onChange={FindPriceFrom}
                      value={price_from}
                      className="outline-none border-l pl-3 py-3 w-[100%] px-1 rounded-r-[10px]"
                      type="text"
                      id="price_from"
                      name="price_from"
                      placeholder="max"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col col-span-1  gap-3">
                  <label htmlFor="area">Area</label>
                  <div className="flex justify-end ">
                    <input
                      onChange={FindAreaSize}
                      value={homeSize}
                      className="outline-none border-r pl-3 py-3 w-[100%] px-1 rounded-l-[10px]"
                      type="text"
                      id="area"
                      name="area"
                      placeholder="min"
                    ></input>
                    <input
                      onChange={handleFindAreaSize}
                      className="outline-none border-l pl-3 y-3 w-[100%] px-1 rounded-r-[10px]"
                      value={homeSizetwo}
                      type="text"
                      id="findarea"
                      name="findarea"
                      placeholder="max"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col col-span-1  gap-3 ">
                  <label htmlFor="loc">Location</label>
                  <select
                    onChange={(e) =>
                      e.target.value === "reset"
                        ? handleReset()
                        : FindCity(e.target.value)
                    }
                    className="outline-none py-[12px] px-[10px] rounded-l-[10px] rounded-r-[10px] "
                    name="loc"
                    value={location}
                  >
                    <option value="" disabled hidden>
                      Şəhər
                    </option>
                    <option value="reset">Reset</option>
                    {locationsData &&
                      locationsData.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ display: showAllInputs ? "block" : "none" }}>
              <div className="allinput grid grid-cols-4 max-md:grid-cols-2 max-[500px]:grid-cols-1 gap-4 w-[100%]">
                <div className="flex  flex-col gap-3">
                  <label htmlFor="typeof">Credit Type</label>
                  <select
                    onChange={(e) => FindCreditType(e.target.value)}
                    className="outline-none p-[12px] rounded-l-[10px] rounded-r-[10px]"
                    name="typeof"
                    id="typeof"
                    value={credit}
                  >
                    <option value="" disabled hidden>
                      Kredit növü
                    </option>
                    <option value="reset" className="mx-5 my-3">
                      Reset
                    </option>
                    {credittypeData &&
                      credittypeData.map((data) => (
                        <option
                          value={data.id}
                          key={data.id}
                          className="mx-5 my-3"
                        >
                          {data.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="price">Mərtəbə Sayı</label>
                  <div className="flex align-center">
                    <input
                      onChange={FindFloorTo}
                      value={floor_to}
                      className="border-r outline-none pl-3 py-3 w-[100%] px-1 rounded-l-[10px]"
                      type="text"
                      id="floor_to"
                      name="floor_to"
                      placeholder="min"
                    ></input>
                    <input
                      onChange={FindFloorFrom}
                      value={floor_from}
                      className="border-l outline-none pl-3 py-3 w-[100%] px-1 rounded-r-[10px]"
                      type="text"
                      id="floor_from"
                      name="floor_from"
                      placeholder="max"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="area">Ümumi Mərtəbə</label>
                  <div>
                    <input
                      onChange={TotalFloor}
                      value={totalfloor}
                      className="outline-none  py-3 w-[100%] px-1 rounded-l-[10px] rounded-r-[10px]"
                      type="text"
                      id="floor-from"
                      name="floor_from"
                      placeholder=""
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="loc">Building Type</label>
                  <select
                    onChange={(e) => FindBuilding(e.target.value)}
                    className="outline-none py-[12px] px-[10px] rounded-l-[10px] rounded-r-[10px] "
                    name="loc"
                    id="loc"
                    value={building}
                  >
                    <option value="" disabled hidden>
                      Bina növü
                    </option>
                    <option value="reset">Reset</option>
                    {buildingtypeData &&
                      buildingtypeData.map((data) => (
                        <option value={data.id} key={data.id}>
                          {data.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ display: showAllInputs ? "block" : "none" }}>
              <div className="allinput grid grid-cols-4 max-md:grid-cols-2 max-[500px]:grid-cols-1 gap-4 w-[100%]">
                <div className="flex  flex-col gap-3">
                  <label htmlFor="typeof">Maintenance type</label>
                  <select
                    onChange={(e) => FindMaintenance(e.target.value)}
                    className="outline-none p-[12px] rounded-l-[10px] rounded-r-[10px] "
                    name="typeof"
                    id="typeof"
                    value={maintenance}
                  >
                    <option value="" disabled hidden>
                      Texniki qulluq
                    </option>
                    <option value="reset">Reset</option>
                    {maintenancetypesData &&
                      maintenancetypesData.map((data) => (
                        <option
                          value={data.id}
                          key={data.id}
                          className="mx-5 my-3"
                        >
                          {data.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="price">Torpaq Sahəsi</label>
                  <div className="flex align-center">
                    <input
                      onChange={FindLandarea_to}
                      value={landarea_to}
                      className="outline-none border-r pl-3 py-3 w-[100%] px-1 rounded-l-[10px]"
                      type="text"
                      id="landarea_to"
                      name="landarea_to"
                      placeholder="min"
                    ></input>
                    <input
                      onChange={FindLandarea_from}
                      value={landarea_from}
                      className="outline-none border-l pl-3 py-3 w-[100%] px-1 rounded-r-[10px]"
                      type="text"
                      id="landarea_from"
                      name="landarea_from"
                      placeholder="max"
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col gap-3 ">
                  <label htmlFor="loc">Document Type</label>
                  <select
                    onChange={(e) => FindDocument(e.target.value)}
                    className=" outline-none py-[12px] px-[10px] rounded-l-[10px] rounded-r-[10px] "
                    name="loc"
                    id="loc"
                    value={document}
                  >
                    <option value="" disabled hidden>
                      Sənəd növü
                    </option>
                    <option value="reset">Reset</option>
                    {documenttypeData &&
                      documenttypeData.map((data) => (
                        <option value={data.id} key={data.id}>
                          {data.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="loc">Rooms</label>
                  <div>
                    <input
                      // onChange={Rooms}
                      // value={rooms}
                      className="outline-none py-3 w-[100%] px-1 rounded-l-[10px] rounded-r-[10px]"
                      type="text"
                      id="room"
                      name="room"
                      placeholder=""
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-between gap-2 max-[570px]:flex-col max-lg:items-start max-[570px]:gap-[15px] max-[570px]:grid-cols-2   items-center">
            <div className="buttons flex max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2  max-[340px]:grid-cols-1 max-[570px]:w-full gap-2 items-center">
              <select
                disabled={
                  !location ||
                  location === "reset" ||
                  !districtsData ||
                  districtsData.length === 0
                }
                onChange={(e) =>
                  e.target.value === "reset"
                    ? handleReset()
                    : FindDistrict(e.target.value)
                }
                className=" p-[12px] w-[123px] max-lg:w-full  outline-none rounded-l-[10px] border-2 border-[#dadada] rounded-r-[10px] "
                value={dist}
              >
                <option value="" disabled hidden>
                  Rayon
                </option>
                <option value="reset">Reset</option>
                {districtsData &&
                  districtsData.map((data) => (
                    <option value={data.id} key={data.id} className="mx-5 my-3">
                      {data.name}
                    </option>
                  ))}
              </select>

              <select
                disabled={
                  !dist ||
                  dist === "reset" ||
                  !metroData ||
                  metroData.length === 0
                }
                onChange={(e) =>
                  e.target.value === "reset"
                    ? handleReset()
                    : FindMetro(e.target.value)
                }
                className="p-[12px] w-[123px] max-lg:w-full outline-none rounded-l-[10px] border-2 border-[#dadada] rounded-r-[10px]"
                value={metro}
              >
                <option value="" disabled hidden>
                  Metro
                </option>
                <option value="reset">Reset</option>
                {metroData &&
                  metroData.map((data) => (
                    <option key={data.id} value={data.id} className="mx-5 my-3">
                      {data.name}
                    </option>
                  ))}
              </select>
              <select
                disabled={
                  !dist ||
                  dist === "reset" ||
                  !settlementsData ||
                  settlementsData === 0
                }
                onChange={(e) =>
                  e.target.value === "reset"
                    ? handleReset()
                    : FindSettlement(e.target.value)
                }
                className="p-[12px] w-[123px] max-lg:w-full outline-none rounded-l-[10px] border-2 border-[#dadada] rounded-r-[10px]"
                value={settlement}
              >
                <option value="" disabled hidden>
                  Qəsəbə
                </option>
                <option value="reset">Reset</option>
                {settlementsData &&
                  settlementsData.map((data) => (
                    <option key={data.id} value={data.id} className="mx-5 my-3">
                      {data.name}
                    </option>
                  ))}
                ;
              </select>
              <select
                onChange={(e) => {
                  FindEstate(e.target.value);
                }}
                className="p-[12px] outline-none rounded-l-[10px] border-2 border-[#dadada] rounded-r-[10px]"
                value={estate}
              >
                <option value="" disabled hidden>
                  Əmlak növü
                </option>
                <option value="reset">Reset</option>
                {estatetypesData &&
                  estatetypesData.map((data) => (
                    <option
                      key={data.id}
                      value={data.id}
                      className="px-4 py-2 rounded-[10px]  bg-[#fff]"
                    >
                      {data.name}
                    </option>
                  ))}
              </select>
              {/* <div className="buttons flex gap-1 px-2 py-3 max-[440px]:px-0 col-span-1 outline-none rounded-[10px] border-2 border-[#dadada]  bg-[#fff]">
                <p className="text-[#b0b0b0]">Class</p>
                <div >
                  <button>A</button>
                </div>
                |
                <div className="">
                  <button>B</button>
                </div>
                |
                <div className="">
                  <button>B+</button>
                </div>
                |
                <div className="">
                  <button>C</button>
                </div>
              </div> */}
            </div>
            <div className="flex justify-between max-[570px]:flex-row   max-[430px]:flex-row max-[365px]:flex-wrap   max-sm:flex-col max-lg:items-center items-center gap-4 ">
              <button
                onClick={toggleFilters}
                className="py-2 px-4 max-[1100px]:w-[125px] text-[#fff] bg-[#1C1C1C] rounded-[10px]"
              >
                {buttonText}
              </button>

              <button
                type="submit"
                onClick={NavigateSearch}
                className="text-[14px] py-2 px-4 text-[#fff] bg-[#1C1C1C] rounded-[10px] cursor-pointer"
              >
                <Link>
                  Search
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>{<SkeletonFilter />}</div>
      )}
    </div>
  );
}

export default Filter;
