import React from 'react'

function SkeletonSlider() {
  return (
    <div className="bg-[#fff]">
      <div className="mx-auto my-2   max-w-[97%]">
        <div className="max-2xl:my-[30px] my-[50px] skeleton-swiper">
          <div className="px-[40px] max-lg:px-[20px] skeleton   max-lg:max-w-[97%]  max-[550px]:h-[500px]  max-[400px]:h-[450px] max-lg:h-[600px] h-[300px] flex justify-between items-center  max-lg:justify-around max-lg:flex-col">
            <div className=" flex flex-col text-start  justify-start items-start max-lg:items-center  col-span-1">
              <p className="text-[18px] skeleton  max-[370px]:text-[16px] font-semibold" ></p>
              <h1 className="text-[40px] max-lg:max-w-[100%] max-md:text-[32px] max-sm:text-[24px] max-[430px]:text-[22px]  max-[370px]:text-[20px] font-semibold"></h1>
              <p className="text-[15px] skeleton  max-lg:text-center  font-normal max-[500px]:text-[12px]"></p>
            </div>
            <div className="new_image  max-lg:block hidden    justify-center items-center  ">
              <img className="w-[100%] skeleton   text-center h-[100%]  max-h-[355px] max-xl:max-h-[345px]"
                alt="ForSlider"
              />
            </div>
            <div className="col-span-1 max-lg:hidden  ">
              <img
                className="w-[100%] h-[100%] skeleton    "
                alt="ForSlider"

              />
            </div>
          </div>
        </div>
        <div className="max-2xl:my-[30px] skeleton-swiper my-[50px]">
          <div className="px-[40px] max-lg:px-[20px] skeleton  max-lg:max-w-[97%]  max-[550px]:h-[500px]  max-[400px]:h-[450px] max-lg:h-[600px] h-[300px] flex justify-between items-center  max-lg:justify-around max-lg:flex-col">
            <div className=" flex flex-col text-start  justify-start items-start max-lg:items-center  col-span-1">
              <p className="text-[18px] skeleton  max-[370px]:text-[16px] font-semibold" ></p>
              <h1 className="text-[40px] skeleton  max-lg:max-w-[100%] max-md:text-[32px] max-sm:text-[24px] max-[430px]:text-[22px]  max-[370px]:text-[20px] font-semibold"></h1>
              <p className="text-[15px] skeleton  max-lg:text-center  font-normal max-[500px]:text-[12px]"></p>
            </div>
            <div className="new_image  max-lg:block hidden    justify-center items-center  ">
              <img className="w-[100%] skeleton  text-center h-[100%]  max-h-[355px] max-xl:max-h-[345px]"
                alt="ForSlider"
              />
            </div>
            <div className="col-span-1 max-lg:hidden  ">
              <img
                className="w-[100%] skeleton  h-[100%]    "
                alt="ForSlider"

              />
            </div>
          </div>
        </div>
        <div className="max-2xl:my-[30px] skeleton-swiper my-[50px]">
          <div className="px-[40px] max-lg:px-[20px] skeleton  max-lg:max-w-[97%]  max-[550px]:h-[500px]  max-[400px]:h-[450px] max-lg:h-[600px] h-[300px] flex justify-between items-center  max-lg:justify-around max-lg:flex-col">
            <div className=" flex flex-col text-start  justify-start items-start max-lg:items-center  col-span-1">
              <p className="text-[18px] skeleton  max-[370px]:text-[16px] font-semibold" ></p>
              <h1 className="text-[40px] skeleton  max-lg:max-w-[100%] max-md:text-[32px] max-sm:text-[24px] max-[430px]:text-[22px]  max-[370px]:text-[20px] font-semibold"></h1>
              <p className="text-[15px] skeleton  max-lg:text-center  font-normal max-[500px]:text-[12px]"></p>
            </div>
            <div className="new_image  max-lg:block hidden    justify-center items-center  ">
              <img className="w-[100%] skeleton  text-center h-[100%]  max-h-[355px] max-xl:max-h-[345px]"
                alt="ForSlider"
              />
            </div>
            <div className="col-span-1 max-lg:hidden  ">
              <img
                className="w-[100%] skeleton  h-[100%]    "
                alt="ForSlider"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonSlider;