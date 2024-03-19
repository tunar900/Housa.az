import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetİnner } from "../../store/İnner/innerAction";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import SkeletonDetail from "../Skelton/SkeletonDetail";
import Phone from "../Detail/Phone";

// import { fetchGetEstates } from "../store/getEstate/getAction";

function EstateDetails() {
  const [loading, setLoading] = useState(true);

  const [isActive, SetIsActive] = useState(false);
  const toggleHeart = () => SetIsActive(!isActive);

  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.id);
  };

  const formatNumberWithSpaces = (number) => {
    if (!number) return "";

    const numericValue = Number(number).toString();
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const { Id } = useParams();
  const dispatch = useDispatch();
  const gainDataRedux = useSelector((state) => state.inner.innerData);

  // useEffect(() => {
  //   dispatch(fetchGetİnner({ Id: Id }));
  // }, [dispatch,Id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Start fetching inner data
        await dispatch(fetchGetİnner({ Id: Id }));

        // Verilerin yüklenme işlemi tamamlandıktan sonra loading durumunu false yap
        setLoading(false);
      } catch (error) {
        // Hata durumunda da loading durumunu false yap
        console.error("Veri yüklenirken bir hata oluştu:", error);
        setLoading(false);
      }
    };

    // fetchData fonksiyonunu çağır
    fetchData();
  }, [dispatch, Id]);

  useEffect(() => {
    // setData(imgData)
    // dispatch(fetchGetEstates({ paginate: 9 }));
  }, [dispatch]);

  return (
    <>
      {loading || !gainDataRedux ? (
        <div>{<SkeletonDetail />}</div>
      ) : (
        <div className="max-w-[95%]  mx-auto font-semibold">
          <div className="my-5">
            <div>
              <p className="text-[20px] max-sm:text-[16px] py-2">
                {gainDataRedux && gainDataRedux.title}
              </p>
            </div>
            <div className="flex justify-between max-sm:gap-[5px] items-center max-sm:flex-col max-sm:items-start">
              <div className="flex gap-8 max-sm:gap-12">
                <p className=" max-sm:text-[14px] cursor-pointer underline">
                  {gainDataRedux && gainDataRedux.address}
                </p>
                <p className="max-sm:text-[14px] cursor-pointer  underline  gap-1 flex">
                  Added:<span>{gainDataRedux && gainDataRedux.created_at}</span>
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={toggleHeart}
                  className="flex  items-center gap-2 p-1"
                >
                  <span className="text-[#FF5151] text-[18px]">
                    {isActive ? <AiFillHeart /> : <AiOutlineHeart />}
                  </span>{" "}
                  Kaydet
                </button>
                <button className="flex items-center gap-2 p-1">
                  <span>
                    <LuShare />
                  </span>{" "}
                  Paylaş
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-2 max-lg:grid-cols-1">
            <div className="col-span-1">
              <div
                className="h-[550px] border-2 border-[#fff] rounded-[10px] max-[480px]:h-[300px] max-md:h-[400px] hover:scale-105 duration-200"
                onClick={handleImageClick}
              >
                <img
                  className="w-full h-full cursor-pointer rounded-lg"
                  alt=""
                  src={gainDataRedux && gainDataRedux.mainImage}
                />
              </div>

              {isModalOpen && (
                <div
                  className="fixed top-0 left-0 w-full h-full z-50 flex justify-center opocity-50 inset-0 items-center bg-black bg-opacity-80"
                  onClick={handleCloseModal} // Modal dışına tıklandığında kapat
                >
                  <div className="relative" onClick={handleModalClick}>
                    <button
                      className="absolute top-0 right-0 m-2 p-2 bg-[#000000] z-50 rounded-3xl  text-white text-[20px] cursor-pointer"
                      onClick={handleCloseModal}
                    >
                      <AiOutlineClose />
                    </button>
                    <img
                      className="w-full h-full rounded-xl  cursor-pointer"
                      alt="Estate"
                      src={gainDataRedux && gainDataRedux.mainImage}
                      onClick={handleModalClick} // Modal içeriğine tıklandığında kapatma
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1 gap-4 grid  grid-cols-2">
              <div className=" hover:scale-105 max-[480px]:h-[150px] border-2 border-[#fff] rounded-[10px] max-md:h-[200px] h-[265px] duration-200">
                <img
                  className="w-full h-full rounded-lg "
                  src="../photo/e1.png"
                  alt="Estate"
                />
              </div>
              <div className=" hover:scale-105 max-[480px]:h-[150px] border-2 border-[#fff] rounded-[10px] max-md:h-[200px] h-[265px] duration-200">
                <img
                  className="w-full h-full rounded-lg"
                  src="../photo/e2.png"
                  alt="Estate"
                />
              </div>
              <div className=" hover:scale-105 max-[480px]:h-[150px] border-2 border-[#fff] rounded-[10px] max-md:h-[200px] h-[265px] duration-200">
                <img
                  className="w-full h-full rounded-lg "
                  src="../photo/e3.png"
                  alt="Estate"
                />
              </div>
              <div className=" hover:scale-105 max-[480px]:h-[150px] border-2 border-[#fff] rounded-[10px] max-md:h-[200px] h-[265px] duration-200">
                <img
                  className="w-full h-full rounded-lg"
                  src="../photo/e4.png"
                  alt="Estate"
                />
              </div>
            </div>
          </div>

          <div className="my-5 gap-4 grid grid-cols-2 max-md:grid-cols-1 ">
            <div className="col-span-1 ">
              <div className="flex justify-between items-start mb-5 gap-5 ">
                <div className=" max-w-[78%] max-[390px]:max-w-[70%] ">
                  <div className=" font-bold text-[#101010]  text-[20px] max-[500px]:text-[16px]">
                    <p>Tüm ev : Ev Sahibi:<span className="  font-semibold">{gainDataRedux.desc}</span></p>
                  </div>
                  <div className="text-[#0d0d0da3] text-[12px] mt-1 ">
                    <p>5 Misafir ,2 Yatak Odası.4 Yatak.2 Banyo</p>
                  </div>
                </div>
                <div className=" h-[60px]  max-w-[20%] rounded-[56%]">
                  <img
                    src="../photo/o.png"
                    className="w-full  h-full"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div>
                  <hr></hr>
                </div>
                <div>
                  <p className="my-5 text-[20px]">Property Details</p>

                  <div className="flex flex-col justify-between focus:outline-none peer  gap-4">
                    <form>
                      <div className="form-group flex items-center ">
                        <input type="checkbox" id="type" />
                        <label htmlFor="type">Type:Apartment</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="bathroom" />
                        <label htmlFor="bathroom">Bathroom:1</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="size" />
                        <label htmlFor="size">Size:120 sq/m</label>
                      </div>
                    </form>

                    <br />
                    <form>
                      <div className="form-group">
                        <input type="checkbox" id="bed" />
                        <label htmlFor="bed">Bedroom:2</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="floor" />
                        <label htmlFor="floor">Floor:5/16</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="year" />
                        <label htmlFor="year">Year built:2021</label>
                      </div>
                    </form>
                  </div>
                </div>
                <hr></hr>
                <div>
                  <p className="my-5">
                    {" "}
                    Amet consectetur. Sit amet blandit tortor cursus quis
                    bibendum. Sed quis a id dignissim. Netus suspendisse nunc
                    porta in interdum convallis porttitor in non.{" "}
                  </p>
                  <hr></hr>
                </div>
                <div>
                  <h1 className="my-5 text-[20px]">
                    Evde hansı xususiyyetler var?
                  </h1>

                  <div className="new py-3 ">
                    <form className="grid grid-cols-2">
                      <div className="form-group">
                        <input type="checkbox" id="dəniz" />
                        <label htmlFor="dəniz">Dəniz mənzərəsi</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="mərkəzi" />
                        <label htmlFor="mərkəzi">Mərkəzi wifi xidməti</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="qaz" />
                        <label htmlFor="qaz">Doğal qaz</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="pulsuz" />
                        <label htmlFor="pulsuz">Pulsuz park yeri</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="hovuz" />
                        <label htmlFor="hovuz">Qapalı Hovuz</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="private" />
                        <label htmlFor="private">Şəxsi jakuzi</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="jaluz" />
                        <label htmlFor="jaluz">Jaluz</label>
                      </div>
                    </form>
                  </div>
                  <div className="w-[350px] my-5">
                    <button className="px-2 py-3 flex  rounded-[8px] text-[black]  border-2 border-[C4C4C4]">
                      36 xususiyyətin hamısını göster
                    </button>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="16.340  bg-[#fff] p-4 shadow-custom rounded-[15px]">
                <p className="text-[28px] max-sm:text-[24px] tracking-[0.56px]">
                  ₼{" "}
                  {formatNumberWithSpaces(gainDataRedux && gainDataRedux.price)}
                </p>

                <div className="my-3 ">
                  <p className="font-normal text-[20px] tracking-[0.32px]">
                    Property Tour Arrangem
                  </p>
                  <div className="flex justify-between my-2 gap-2 items-center">
                    <input
                      className="bg-[#F9F8FA] focus:outline-none rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="bg-[#F9F8FA] focus:outline-none rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="my-2">
                    <input
                      className="bg-[#F9F8FA] focus:outline-none rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2"
                      type="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div>
                    <Phone />
                  </div>
                </div>
                <div className="mt-2 ">
                  <div>
                    <label className=" text-[20px]">Date of Visit</label>
                    <input
                      className="bg-[#F9F8FA] my-2 focus:outline-none rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2"
                      type="date"
                    />
                    <input />
                  </div>

                  <div>
                    <label className=" text-[20px]">Date of Visit</label>
                    <input
                      className="bg-[#F9F8FA] my-2 focus:outline-none rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2"
                      type="time"
                    />
                    <input />
                  </div>

                  <div>
                    <p className=" text-[17px] my-3">Select Some Choices</p>
                    
                    <div className="grid grid-cols-7">
                      <input
                        checked={selectedOption === "phoneRadio"}
                        onChange={handleOptionChange}
                        type="radio"
                        id="phoneRadio"
                        name="contactMethod"
                      />
                      <label htmlFor="phoneRadio">Phone</label>
                    </div>

                    <div className="grid grid-cols-7 my-3">
                      <input
                        type="radio"
                        id="emailRadio"
                        name="contactMethod"
                        checked={selectedOption === "emailRadio"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="grid grid-cols-7">
                      <input
                        id="eitherRadio"
                        name="contactMethod"
                        checked={selectedOption === "eitherRadio"}
                        onChange={handleOptionChange}
                        type="radio"
                      />
                      <label htmlFor="eitherRadio">Either</label>
                    </div>
                    
                  
                  </div>

                  <div>
                    <p className=" text-[17px] my-3">
                      If phone, when is the best time of day a call-back?
                    </p>
                    <div className="grid grid-cols-7">
                      <input
                        checked={selectedOption === "eight"}
                        onChange={handleOptionChange}
                        type="radio"
                        id="eight"
                        name="time"
                      />
                      <label className="w-[70px]" htmlFor="eight">
                        8-11 am
                      </label>
                    </div>

                    <div className="grid grid-cols-7 my-3">
                      <input
                        type="radio"
                        id="twelve"
                        name="time"
                        checked={selectedOption === "twelve"}
                        onChange={handleOptionChange}
                      />
                      <label className="w-[70px]" htmlFor="twelve">
                        12-4 pm
                      </label>
                    </div>
                    <div className="grid grid-cols-7">
                      <input
                        id="six"
                        name="time"
                        checked={selectedOption === "six"}
                        onChange={handleOptionChange}
                        type="radio"
                      />
                      <label className="w-[70px]" htmlFor="six">
                        6-10 pm
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className="submit px-2 mt-5 text-[#fff] py-3 w-[100%] bg-blue-500 rounded-[8px]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="grid grid-cols-4 text-[12px] max-sm:grid-cols-2  gap-3 my-3">
                <div className="border-2 border-solid	rounded-[18px]  overflow-hidden border-[#C4C4C4]">
                  <div className="h-[100px] col-span-1 	">
                    <img
                      className="object-cover w-full h-full "
                      src="../photo/w1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <button className="flex w-[100%] justify-center items-center gap-2 px-2 py-3   ">
                      Location{" "}
                      <span>
                        <FaAngleRight />
                      </span>{" "}
                    </button>
                  </div>
                </div>
                <div className="border-2 border-solid	rounded-[18px]  overflow-hidden border-[#C4C4C4]">
                  <div className="h-[100px] col-span-1">
                    <img
                      className="object-cover w-full h-full "
                      src="../photo/w2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <button className="flex w-[100%] justify-center items-center gap-2 px-2 py-3  ">
                      Schools{" "}
                      <span>
                        <FaAngleRight />
                      </span>{" "}
                    </button>
                  </div>
                </div>
                <div className="border-2 border-solid	rounded-[18px]  overflow-hidden border-[#C4C4C4]">
                  <div className="h-[100px] col-span-1">
                    <img
                      className="object-cover  w-full h-full "
                      src="../photo/w3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <button className="flex w-[100%] justify-center items-center gap-2 px-2 py-3  ">
                      Restourants
                      <span>
                        <FaAngleRight />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-2 border-solid	rounded-[18px]  overflow-hidden border-[#C4C4C4]">
                  <div className="h-[100px] col-span-1 ">
                    <img
                      className="object-cover w-full  h-full "
                      src="../photo/w4.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <button className="flex w-[100%] justify-center items-center gap-2 px-2 py-3  ">
                      Hospitals
                      <span>
                        <FaAngleRight />
                      </span>{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#fff] p-4 my-5 shadow-custom rounded-[15px]">
                <p className="py-2 text-[20px]">Additional detail</p>
                <form>
                  <div className="form-group">
                    <input type="checkbox" id="ready" />
                    <label htmlFor="ready">Completion:Ready</label>
                  </div>
                  <div className="form-group">
                    <input type="checkbox" id="rent" />
                    <label htmlFor="rent">Average rent:AZN 6,000/year</label>
                  </div>
                  <div className="form-group">
                    <input type="checkbox" id="price" />
                    <label htmlFor="price">Average price/sq.meter:1,450</label>
                  </div>
                  <div className="form-group">
                    <input type="checkbox" id="sqm" />
                    <label htmlFor="sqm">Size:120 sq/m</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EstateDetails;
