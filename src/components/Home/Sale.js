import React, { useState } from "react";

function Sale() {
  const [activeButton, setActiveButton] = useState("rent");
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <div className="mb-8">
      <div
        className="mx-auto border-[2px] border-[#EAEAEA] rounded-[20px] h-[20vh] p-5"
        style={{
          background:
            "linear-gradient(249deg, rgba(255, 255, 255, 0.80) 12.52%, rgba(246, 243, 255, 0.80) 58.19%)",
          maxWidth: "80%",
        }}
      >
        <div className="bg-white rounded-[10px] inline-block mb-8">
          <button
            className={`px-4 py-2 rounded-[10px] text-[14px] font-medium  ${
              activeButton === "rent" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleButtonClick("rent")}
          >
            Rent
          </button>
          <button
            className={`px-4 py-2 rounded-[10px] text-[14px] font-medium ${
              activeButton === "sale" ? "bg-black text-white " : ""
            }`}
            onClick={() => handleButtonClick("sale")}
          >
            Sale
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 ">
          <select className="col-span-1 px-2 py-2 rounded-[10px]">
            <option value="" key="">
              Salam
            </option>
            <option value="" key="">
              Hello
            </option>
            <option value="" key="">
              Ciao
            </option>
            <option value="" key="">
             Halo
            </option>
          </select>

          <input className="border-[1px]" type="text" />
          <input className="border-[1px]" type="text" />
          <select className="border-[1px]">
            <option value="" key="">
              Location
            </option>
            <option value="" key="">
              Location
            </option>
            <option value="" key="">
              Location
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sale;