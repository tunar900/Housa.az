import React, { useState, useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
function Testimonials() {
  const swiperRef = useRef(null);

  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const handlePrevSlide = () => {
    setPrevClicked(true);
    setNextClicked(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    setPrevClicked(false);
    setNextClicked(true);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

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
    } else if (windowWidth > 824) {
      return 3;
    } else if (windowWidth > 568) {
      return 2;
    } else {
      return 1;
    }
  };
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlidesPerView());
  return (
    <div className="mt-8 mb-28 ">
      <div className="max-w-[92%]  mx-auto">
        <div className="flex justify-between items-center">
          <div className="font-semibold">
            <p className="tracking-[0.4px] text-[#1590e1]  text-[20px] max-[500px]:text-[16px] ">
              LET`S FIND
            </p>
            <p className="text-[44px] max-md:text-[36px] max-[500px]:tex-[32px] tracking-[0.88px]">Testimonials</p>
          </div>




          <div className="flex items-center max-md:hidden">
            <button onClick={handlePrevSlide}>
            <span className={`inline-block p-4  rounded-[56%] border-[1px] border-[#e3e3e3] color-[#e5e5e5] ${prevClicked ? "bg-black text-white" : ""
                      } `}>
              <FaAngleLeft />
            </span>
            </button>
           <button onClick={handleNextSlide}>
           <span className={`inline-block p-4 rounded-[56%] border-[1px] border-[#e3e3e3] color-[#e5e5e5] ${nextClicked ? "bg-black text-white" : ""
                      } `}>
              <FaAngleRight />
            </span>
           </button>
          </div>

        </div>
        <div className="my-4">
          <Swiper
            ref={swiperRef}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-start text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity={0}  />
                        <stop
                          offset="0.5"
                          stopColor="#DFE5EF" 
                          stopOpacity={0.62}
                        />
                        <stop offset="1" stopColor="white" stopOpacity={0}  />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../photo/avatar.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px]">Tunar Musalı</p>
                    <p className="text-[14px] flex items-center gap-1">
                      <span className="text-[#FF8A00] text-[17px]">
                        <AiFillStar />
                      </span>
                      4,5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-start text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity={0}  />
                        <stop
                          offset="0.5"
                          stopColor="#DFE5EF" 
                          stopOpacity={0.62}
                        />
                        <stop offset="1" stopColor="white" stopOpacity={0}  />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../photo/avatar.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px]">Tunar Musalı</p>
                    <p className="text-[14px] flex items-center gap-1">
                      <span className="text-[#FF8A00] text-[17px]">
                        <AiFillStar />
                      </span>
                      4,5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-start text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity={0}  />
                        <stop
                          offset="0.5"
                          stopColor="#DFE5EF" 
                          stopOpacity={0.62}
                        />
                        <stop offset="1" stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../photo/avatar.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px]">Tunar Musalı</p>
                    <p className="text-[14px] flex items-center gap-1">
                      <span className="text-[#FF8A00] text-[17px]">
                        <AiFillStar />
                      </span>
                      4,5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-start text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity={0} />
                        <stop
                          offset="0.5"
                          stopColor="#DFE5EF"
                          stopOpacity={0.62}
                        />
                        <stop offset="1" stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../photo/avatar.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px]">Tunar Musalı</p>
                    <p className="text-[14px] flex items-center gap-1">
                      <span className="text-[#FF8A00] text-[17px]">
                        <AiFillStar />
                      </span>
                      4,5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-start text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity={0}  />
                        <stop
                          offset="0.5"
                          stopOpacity={0.62}
                          stopColor="#DFE5EF"
                        />
                        <stop offset="1" stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../photo/avatar.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px]">Tunar Musalı</p>
                    <p className="text-[14px] flex items-center gap-1">
                      <span className="text-[#FF8A00] text-[17px]">
                        <AiFillStar />
                      </span>
                      4,5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-start text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity={0}   />
                        <stop
                          offset="0.5"
                          stopColor="#DFE5EF"
                          stopOpacity={0.62}
                        />
                        <stop offset="1" stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../photo/avatar.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px]">Tunar Musalı</p>
                    <p className="text-[14px] flex items-center gap-1">
                      <span className="text-[#FF8A00] text-[17px]">
                        <AiFillStar />
                      </span>
                      4,5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-start text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop  stopColor="white" stopOpacity={0}/>
                        <stop
                          offset="0.5"
                          stopColor="#DFE5EF"
                          stopOpacity={0.62}
                        />
                        <stop offset="1"  stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../photo/avatar.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[18px]">Tunar Musalı</p>
                    <p className="text-[14px] flex items-center gap-1">
                      <span className="text-[#FF8A00] text-[17px]">
                        <AiFillStar />
                      </span>
                      4,5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;