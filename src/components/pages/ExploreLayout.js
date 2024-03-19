import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import Filter from "../Home/Filter";

function ExploreLayout() {
  const [activeButton, setActiveButton] = useState("list");
  const handleButtonClick = (e) => {
    setActiveButton(e);
  };
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <div
      className="py-4"
      style={{
        background: "linear-gradient(249deg, #FFF 12.52%, #F6F3FF 58.19%)",
      }}
    >
      <div className="down flex justify-center border-2 rounded-[10px] border-[#e5e7eb] max-w-[98%] my-[20px] mx-auto p-4">
        {isFilterOpen ? (
          <IoMdArrowUp
            className="text-black cursor-pointer"
            onClick={handleFilterToggle}
          />
        ) : (
          <IoMdArrowDown
            className="text-black cursor-pointer"
            onClick={handleFilterToggle}
          />
        )}
      </div>
      {isFilterOpen && <Filter />}
      <nav className="flex justify-center ">
        <div className="text-center border-[1px] py-2 bg-white mt-[15px]  rounded-[10px] border-[#E5E5E5]">
          <NavLink
            className={`px-4 py-2 rounded-[10px] text-[14px] font-medium ${
              activeButton === "list" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleButtonClick("list")}
          >
            List
          </NavLink>
          <NavLink
            className={`px-4 py-2 rounded-[10px] text-[14px] font-medium ${
              activeButton === "map" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleButtonClick("map")}
            to="map"
          >
            Map
          </NavLink>
        </div>
      </nav>
      <main className="my-8">
        <Outlet />
      </main>
    </div>
  );
}

export default ExploreLayout;
