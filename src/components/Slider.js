import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const Slider = () => {
  return (
    <div className="bg-[#fff]">
      <div className="mx-auto my-2  max-w-[98%] max-md:max-w-[96%] max-sm:max-w-[95%]  ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay:2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper  "
        >
          <SwiperSlide>
            <div className="max-md:my-[30px] max-lg:my-[35px] max-xl:my-[40px] max-[1500px]:my-[47px]  my-[54px]">
              <div className="px-[40px] max-lg:px-[20px]  manage   max-[550px]:h-[500px]  max-[400px]:h-[450px] max-lg:h-[600px] h-[300px] flex justify-between items-center  max-lg:justify-around max-lg:flex-col">
                <div className=" flex flex-col text-start  justify-start items-start max-lg:items-center  col-span-1">
                  <p className="text-[20px] max-[370px]:text-[18px] font-semibold	">Welcome to Housa</p>
                  <h1 className="text-[42px] max-lg:max-w-[100%] max-lg:text-[38px] max-md:text-[34px] max-sm:text-[26px] max-[430px]:text-[24px]  max-[370px]:text-[22px] font-semibold">
                    Manage Your Property
                  </h1>
                  <p className="text-[17px]  max-lg:text-center  font-normal max-[500px]:text-[13px]	">
                    You will have enerything nearby supermarket, buses,
                    stations, cinemas, theatres, the Carmen neighbourhood, ect.{" "}
                  </p>
                </div>
                <div className="new_image  max-lg:block hidden    justify-center items-center  ">
                  <img
                    className="w-[100%]  text-center h-[100%]  max-h-[355px] max-xl:max-h-[345px]   "
                    alt="ForSlider"
                    src="../photo/swiper.png"
                  />
                </div>
                <div className="col-span-1 max-lg:hidden  ">
                  <img
                    className="w-[98%] h-[100%]    "
                    alt="ForSlider"
                    src="../photo/swiper.png"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" max-md:my-[30px] my-[50px]">
              <div className="px-[40px] max-lg:px-[20px]  manage   max-[550px]:h-[500px]  max-[400px]:h-[450px] max-lg:h-[600px] h-[300px] flex justify-between items-center  max-lg:justify-around max-lg:flex-col">
                <div className="flex flex-col text-start max-lg:max-w-[95%] justify-start items-start max-lg:items-center  col-span-1">
                  <p className="text-[20px] max-[370px]:text-[18px] font-semibold">Welcome to Housa</p>
                  <h1 className="text-[42px] max-lg:max-w-[100%] max-lg:text-[38px] max-md:text-[34px] max-sm:text-[26px] max-[430px]:text-[24px]  max-[370px]:text-[22px] font-semibold">
                    Manage Your Property
                  </h1>
                  <p className="text-[17px]  max-lg:text-center  font-normal max-[500px]:text-[13px]">
                    You will have enerything nearby supermarket, buses,
                    stations, cinemas, theatres, the Carmen neighbourhood, ect.{" "}
                  </p>
                </div>
                <div className="new_image  max-lg:block hidden max-lg:max-w-[95%]    justify-center items-center  ">
                  <img
                    className="w-[100%] text-center h-[100%]  max-h-[355px] max-xl:max-h-[345px]   "
                    alt=""
                    src="../photo/swiper6.png"
                  />
                </div>
                <div className="col-span-1 max-lg:hidden ">
                  <img
                    className="w-[100%] h-[100%] "
                    alt=""
                    src="../photo/swiper6.png"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-md:my-[30px]  my-[50px]">
              <div className="px-[40px] max-lg:px-[20px]  manage   max-[550px]:h-[500px]  max-[400px]:h-[450px] max-lg:h-[600px] h-[300px] flex justify-between items-center  max-lg:justify-around max-lg:flex-col">
                <div className="flex flex-col text-start max-lg:max-w-[95%] justify-start items-start max-lg:items-center  col-span-1">
                  <p className="text-[20px] max-[370px]:text-[18px] font-semibold">Welcome to Housa</p>
                  <h1 className="text-[42px] max-lg:max-w-[100%] max-lg:text-[38px] max-md:text-[34px] max-sm:text-[26px] max-[430px]:text-[24px]  max-[370px]:text-[22px] font-semibold">
                    Manage Your Property
                  </h1>
                  <p className=" text-[17px]  max-lg:text-center  font-normal max-[500px]:text-[13px]	">
                    You will have enerything nearby supermarket, buses,
                    stations, cinemas, theatres, the Carmen neighbourhood, ect.{" "}
                  </p>
                </div>
                <div className="new_image  max-lg:block hidden  max-lg:max-w-[95%]   justify-center items-center  ">
                  <img
                    className="w-[100%] text-center h-[100%]  max-h-[355px] max-xl:max-h-[345px]   "
                    alt=""
                    src="../photo/swiper2.png"
                  />
                </div>
                <div className=" col-span-1 max-lg:hidden ">
                  <img
                    className="w-[100%] h-[100%] "
                    alt=""
                    src="../photo/swiper2.png"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
