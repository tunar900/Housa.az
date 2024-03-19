import React from "react";

function Mission() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-2 max-lg:grid-cols-1  max-w-[92%] mx-auto gap-8">
        <div className="col-span-1 flex flex-col justify-between ">
          <div>
            <div className="flex flex-col font-semibold">
              <p className="text-[20px] max-[500px]:text-[16px]  tracking-[0.4px] text-[#1590e1]">
                LET`S FIND
              </p>
              <p className="text-[44px] max-md:text-[36px] max-[500px]:text-[32px] tracking-[0.88px]">Our Mission</p>
            </div>
            <div className="my-12">
              <p className="text-[#C1C1C1] max-[500px]:line-clamp-6  font-semibold text-[20px] max-sm:text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                suspendisse eu vel quis. Integer Lorem ipsum dolor sit amet
                consectetur. Vitae et ac lacus eu suspendisse eu vel quis.
                Integer Lorem ipsum dolor sit amet consectetur. Vitae et ac
                lacus eu suspendisse eu vel quis. Integer Lorem ipsum dolor sit
                amet consectetur. Vitae et ac lacus eu suspendisse eu vel quis.
                Integer Lorem ipsum dolor sit amet consectetur. Vitae et ac
                lacus eu suspendisse eu vel quis. Integer Lorem ipsum dolor sit
                amet consectetur. Vitae et ac lacus eu suspendisse eu vel quis.
                Integer Lorem
              </p>
            </div>
          </div>
          <div>
            <button className="bg-black text-white px-16 py-2 rounded-[8px]">
              Tour
            </button>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 max-lg:flex max-lg:items-center max-lg:justify-center   gap-8 relative">
          <div className="col-span-1 flex flex-col max-lg:flex-row max-lg:gap-[50px] max-md:flex-col max-[450px]:max-w-[90%]  items-center gap-4">
          <div className="w-[278px] ">
            <img className="w-full h-full" src="../photo/v.png" alt="" />
          </div>
          <div className=" w-[278px]">
            <img className="max-md:hidden w-full h-full" src="../photo/m.png" alt="" />
          </div>
          </div>
          <div className=" col-span-1 flex flex-col gap-4 absolute top-4 right-2 ">
            <div className="max-lg:hidden w-[280px]">
              <img className="w-full rounded-[20px]" src="../photo/m1.png" alt="" />
            </div>
            <div className="max-lg:hidden w-[280px]">
              <img className="w-full " src="../photo/m2.png" alt="" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Mission;