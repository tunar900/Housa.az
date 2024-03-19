import React ,{useEffect,useState}from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

function Advice() {
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getInitialSlidesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  

  const getInitialSlidesPerView = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1536) {
      return 4;
    } else if (windowWidth > 1120) {
      return 3;
    } else if (windowWidth > 930) {
      return 3;
    } else if (windowWidth > 620) {
      return 2;
    } else {
      return 1;
    }
  };
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlidesPerView());
  return (
    <div className="bg-[#212121] mb-8  py-12 ">
      <div className="font-semibold text-center mb-8">
        <p className="text-[#F2A056] tracking-[0.4px] text-[20px] max-[500px]:text-[16px]">
          LET`S FIND
        </p>
        <p className="text-[44px] max-md:text-[36px] max-[500px]:text-[32px]  text-white tracking-[0.88px]">Danisman</p>
      </div>
      <div className="max-w-[92%] mx-auto">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper rounded-[22px]"
        >
          <SwiperSlide>
            <div className="text-white cursor-pointer  bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div className="text-start leading-7 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../photo/a.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Tunar Musalı </p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5<span className="text-[#BFBFBF]"> (Review)  </span>
                  </p>
                </div>
              </div>
              <div className="max-w-full  h-400px relative">
                <img className="w-full" src="../photo/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white cursor-pointer  bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div className="text-start leading-7 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../photo/a.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Tunar Musalı</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5<span className="text-[#BFBFBF]"> (Review)  </span>
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../photo/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white cursor-pointer  bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div className="text-start leading-7 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../photo/a.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Tunar Musalı</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5<span className="text-[#BFBFBF]"> (Review)  </span>
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../photo/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white cursor-pointer  bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div className="text-start leading-7 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../photo/a.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Tunar Musalı</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5<span className="text-[#BFBFBF]"> (Review)  </span>
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full"  src="../photo/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white cursor-pointer  bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div className="text-start leading-7 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../photo/a.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Tunar Musalı</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5<span className="text-[#BFBFBF]"> (Review)  </span>
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../photo/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Advice