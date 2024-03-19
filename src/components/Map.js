import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetİnner } from "../store/İnner/innerAction";

import { fetchGetEstates } from "../store/getEstate/getAction";
import { AiOutlineHeart, AiFillHeart, AiOutlineRight, AiOutlineLeft, AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Map() {
   const dispatch = useDispatch();
   const newDataRedux = useSelector((state) => state.area.areaData);
   const info = newDataRedux && newDataRedux.data;
   
   
   // data değişkenini tanımla
   const data = info || [];

   const [imageIndices, setImageIndices] = useState(Array(data.length).fill(0));
 
   const [activeHearts, setActiveHearts] = useState(Array(data.length).fill(false));

   useEffect(() => {
      dispatch(fetchGetEstates({ paginate: 100 }));
      // dispatch(fetchGetArea({ paginate: 100 }));
      dispatch(fetchGetİnner());
   }, [dispatch]);

   const handleNextImage = (index) => {
    setImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (prevIndices[index] + 1) % data[index].img.length;
      return newIndices;
    });
  };

  const handleHeartClick = (index) => {
    setActiveHearts((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = !prevHearts[index];
      return newHearts;
    });
  };

  const handlePreviousImage = (index) => {
    setImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      const newIndex = (prevIndices[index] - 1 + data[index].img.length) % data[index].img.length;
      newIndices[index] = newIndex >= 0 ? newIndex : data[index].img.length - 1;
      return newIndices;
    });
  };

   return (
      <>
         <div className="mx-auto max-w-[88%] mt-8">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
            <div className="col-span-1  ">
               <iframe
                  className="mt-2 mb-8"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1920698.6328254668!2d46.43558879999828!3d40.170609629564225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaijan!5e1!3m2!1sen!2saz!4v1707823004248!5m2!1sen!2saz" referrerPolicy="no-referrer-when-downgrade" 
                  width="100%"
                  height="500"
                  title="OnlineMap"
               ></iframe>
            </div>
            <div className="col-span-1 max-lg:grid-cols-1 grid grid-cols-2  gap-3">
               {data.map((data, index) => 
               (
                // const currentImageIndex = imageIndices[index];
                  <Link
                     target="_blank"
                     to={data && `/get-estate-inner/${data.id}`}
                     key={index}
                     className="border-[1px] rounded-[20px] card relative"
                  >
                                               <div className="h-[300px] rounded-[20px] relative">
                            <button
                              onClick={() => handleHeartClick(index)}
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
                              alt=""
                            />
                            <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                              <button
                                onClick={() => handleNextImage(index)}
                                className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
                              >
                                <AiOutlineRight />
                              </button>
                            </div>
                            <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                              <button
                                onClick={() => handlePreviousImage(index)}
                                className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
                              >
                                <AiOutlineLeft />
                              </button>
                            </div>
                          </div>
                          <div style={{overflow:"hidden"}} className="p-3 font-semibold text-[#101730] anima absolute  w-full bottom-0 rounded-b-[20px]  bg-white">
                            <p className="text-[14px] text-start">
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
                              <p className="text-[16px]">{data.price}₼</p>
                              <p className="text-[16px]">{data.HomeSize}</p>
                              <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
                                Explore More
                                <span>
                                  <AiOutlineRight />
                                </span>
                              </button>
                            </div>
                          </div>
                  </Link>
               ))}
            </div>
            </div>
         </div>
      </>
   )
}

export default Map;
