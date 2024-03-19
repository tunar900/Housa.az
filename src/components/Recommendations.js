import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import { fetchGetEstates } from "../store/getEstate/getAction";
import { fetchGetİnner } from "../store/İnner/innerAction";
import { useDispatch, useSelector } from "react-redux";
import SkeletonRecommendations from "./Skelton/SkeletonRecommendations";
function Recommendations() {
  const getDataRedux = useSelector((state) => state.estate.getEstatesData);
  const line = getDataRedux && getDataRedux.data;
  // console.log(line);
  // console.log(getDataRedux);
  const dispatch = useDispatch();

  const [activeButton, setActiveButton] = useState("rent");
  const [activePropertyType, setActivePropertyType] = useState("");
  const [activeHearts, setActiveHearts] = useState(
    Array(line?.length || 0).fill(false)
  );


  useEffect(() => {
    dispatch(fetchGetEstates({ paginate:90 }));
    // dispatch(fetchGetEstates({ paginate: 30 }));
    dispatch(fetchGetİnner());
  }, [dispatch]);




  const formatNumberWithSpaces = (number) => {
    if (!number) return "";

    const numericValue = Number(number).toString();
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setSlidesPerView(getInitialSlidesPerView());
  };
  const getInitialSlidesPerView = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1536) {
      return 5;
    } else if (windowWidth > 1280) {
      return 4;
    } else if (windowWidth > 1024) {
      return 3;
    } else if (windowWidth > 768) {
      return 2;
    } else {
      return 1;
    }
  };
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlidesPerView());
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  const handleHeartClick = (index) => {
    setActiveHearts((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = !prevHearts[index];
      return newHearts;
    });
  };
  const handlePropertyTypeClick = (buttonType) => {
    setActivePropertyType(buttonType);
  };

  const [imageIndices, setImageIndices] = useState(Array(line?.length || 0).fill(0));

  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const swiperRef = useRef(null);
  const handleNextSlide = () => {
    setPrevClicked(false);
    setNextClicked(true);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    setPrevClicked(true);
    setNextClicked(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextImage = (index) => {
    setImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (prevIndices[index] + 1) % (line[index]?.img?.length || 1);
      return newIndices;
    });
  };

  const handlePreviousImage = (index) => {
    setImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      const newIndex = (prevIndices[index] - 1 + (line[index]?.img?.length || 1)) % (line[index]?.img?.length || 1);
      newIndices[index] = newIndex >= 0 ? newIndex : (line[index]?.img?.length || 1) - 1;
      return newIndices;
    });
  }

  return (
    <>
      <div className="zero  my-10">
        <div className="mb-8">
          <div className="max-w-[92%] mx-auto">
            <div className="mb-4 max-w-[70%]">
              <p className="uppercase text-[44px] max-lg:text-[36px] max-[900px]:text-[32px] max-md:text-[28px]  max-sm:text-[24px]  font-semibold tracking-[0.88px] text-[#101730]">
                recommendations of our consultants
              </p>
            </div>

            <div className="flex justify-between  items-center gap-6 mb-8">
              <div className="flex gap-2  max-[960px]:flex-wrap  min-lg:justify-between items-center">
                <div className="bg-white rounded-[10px] max-[360px]:text-center inline-block   border-[1px] border-[#E5E5E5]">
                  <button
                    className={`px-4 py-2 rounded-[10px] max-[360px]:w-full text-[14px] font-medium  ${activeButton === "rent" ? "bg-black text-white" : ""
                      }`}
                    onClick={() => handleButtonClick("rent")}
                  >
                    For Rent
                  </button>
                  <button
                    className={`px-4 py-2 rounded-[10px] max-[360px]:w-full text-[14px] font-medium  ${activeButton === "sale" ? "bg-black text-white " : ""
                      }`}
                    onClick={() => handleButtonClick("sale")}
                  >
                    For Sale
                  </button>
                </div>
                <select className="border-[1px]  rounded-[8px] text-[14px] py-2  px-4">
                  <option value="" key="">
                    Azerbaijan
                  </option>
                  <option value="" key="">
                    Italy
                  </option>
                  <option value="" key="">
                    Mexico
                  </option>
                  <option value="" key="">
                    Madagascar
                  </option>
                  <option value="" key="">
                    New Zealand
                  </option>
                  <option value="" key="">
                    Ecuador
                  </option>
                  <option value="" key="">
                    Nepal
                  </option>
                </select>
                <div>
                  <button
                    className={`border-[1px] rounded-[8px] text-[14px] py-2 px-4 ${activePropertyType === "Villas"
                      ? "bg-black text-white"
                      : ""
                      }`}
                    onClick={() => handlePropertyTypeClick("Villas")}
                  >
                    Villas
                  </button>
                </div>
                <div>
                  <button
                    className={`border-[1px] rounded-[8px] text-[14px] py-2  px-4 ${activePropertyType === "Lands"
                      ? "bg-black text-white"
                      : ""
                      }`}
                    onClick={() => handlePropertyTypeClick("Lands")}
                  >
                    Lands
                  </button>
                </div>
                <div>
                  <button
                    className={`border-[1px] rounded-[8px] text-[14px] py-2  px-4 ${activePropertyType === "Offices"
                      ? "bg-black text-white"
                      : ""
                      }`}
                    onClick={() => handlePropertyTypeClick("Offices")}
                  >
                    Offices
                  </button>
                </div>
                <div>
                  <button
                    className={`border-[1px] rounded-[8px] text-[14px] py-2  px-4 ${activePropertyType === "Apartment"
                      ? "bg-black text-white"
                      : ""
                      }`}
                    onClick={() => handlePropertyTypeClick("Apartment")}
                  >
                    Apartment
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center max-lg:hidden">
                  <button onClick={handlePrevSlide}>
                    <span className={`inline-block p-4 rounded-[56%] border-[1px] border-[#e3e3e3] color-[#e5e5e5] ${prevClicked ? "bg-black text-white" : ""
                      }`} >
                      <FaAngleLeft />
                    </span>
                  </button>
                  <button onClick={handleNextSlide} >
                    <span className={`inline-block p-4 rounded-[56%] border-[1px] border-[#e3e3e3] color-[#e5e5e5] ${nextClicked ? "bg-black text-white" : ""
                      }`}>
                      <FaAngleRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              {line && line ? (
                <Swiper
                  ref={swiperRef}
                  slidesPerView={slidesPerView}
                  spaceBetween={30}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  modules={[Pagination]}
                  className="mySwiper "
                >
                  {line &&
                    line.map((data, index) => {
                      // const currentImageIndex = imageIndices[index];
                      return (
                        <SwiperSlide className="border-2 rounded-[20px] border-[#dddddd]">
                          <Link
                            to={data && `/get-estate-inner/${data.id}`}
                            key={data.id}
                            className="   rounded-[20px] card relative"
                          >
                            <div className="h-[300px]  rounded-[20px] relative">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();

                                  handleHeartClick(index);
                                }}
                                className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                              >
                                <span className="heart">
                                  {activeHearts[index] ? (
                                    <span className="text-red-600">
                                      <AiFillHeart />
                                    </span>
                                  ) : (
                                    <AiOutlineHeart />
                                  )}
                                </span>
                              </button>
                              <img
                                className="h-full w-full rounded-[20px]"
                                src={data.mainImage}
                                alt="home"
                              />
                              <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();

                                    handleNextImage(index);
                                  }}
                                  className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
                                >
                                  <AiOutlineRight />
                                </button>
                              </div>
                              <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();

                                    handlePreviousImage(index);
                                  }}
                                  className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
                                >
                                  <AiOutlineLeft />
                                </button>
                              </div>
                            </div>
                            <div className="p-3 font-semibold text-[#101730] anima absolute  w-full bottom-0 rounded-b-[20px]  bg-white">
                              <p
                                style={{ overflow: "hidden" ,textOverflow: "ellipsis", whiteSpace:"nowrap"}}
                                className="text-[14px] text-start"
                              >
                                {data.title}
                              </p>
                              <div className="my-2 flex text-[#FF8A00]">
                                <span>
                                  <AiFillStar />
                                </span>
                                <span>
                                  <AiFillStar />
                                </span>
                                <span>
                                  <AiFillStar />
                                </span>
                                <span>
                                  <AiFillStar />
                                </span>
                                <span>
                                  <AiFillStar />
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <p className="flex items-center  text-[16px]">
                                  {formatNumberWithSpaces(data.price)} ₼
                                </p>
                                <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
                                  Explore More
                                  <span>
                                    <AiOutlineRight />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              ) : (
                <div>{<SkeletonRecommendations />}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendations;
