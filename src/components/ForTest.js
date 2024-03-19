// import React,{useState} from 'react';
// import ReactPaginate from 'react-paginate';
// import usePagination from '@mui/material/usePagination';
// import { styled } from '@mui/material/styles';

// function Fortest() {
//   const usersPerPage = 10;
//     const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const pageCount = Math.ceil(items.length / usersPerPage);
// const [pageNumber, setPageNumber] = useState(1);


// const pagesVisited = pageNumber * usersPerPage;
// const changePage = ({ selected }) => {
//   setPageNumber(selected);
// };

//   return (
//     <div>
//         <ReactPaginate className="flex"
//     previousLabel={"Previous"}
//     nextLabel={"Next"}
//     pageCount={pageCount}
//     onPageChange={changePage}
//     containerClassName={"paginationBttns"}
//     previousLinkClassName={"previousBttn"}
//     nextLinkClassName={"nextBttn"}
//     disabledClassName={"paginationDisabled"}
//     activeClassName={"paginationActive"}
//   />
//     </div>
//   );
// }

// export default Fortest;


// <Swiper
// slidesPerView={slidesPerView}
// spaceBetween={30}
// // pagination={{
// //   clickable: true,
// // }}
// modules={[Pagination]}
// className="mySwiper"
// >
// {elvin &&
//   elvin.map((data, index) => {
//     const currentImageIndex = imageIndices[index];
//     return (
//       <SwiperSlide>
//            <Link
//      to={data && `/get-estate-inner/${data.id}`}
//      key={index}
//      className="border-[1px] rounded-[20px] card relative"
//   >
//                                <div className="h-[300px] rounded-[20px] relative">
//             <button
//               onClick={() => handleHeartClick(index)}
//               className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
//             >
//               <span className="heart">
//                  {activeHearts[index] ? (
//                   <span className="text-red-600">
//                     <AiFillHeart />
//                   </span>
//                 ) : (
//                   <AiOutlineHeart />
//                 )}
//               </span>
//             </button>
//             <img
//               className="h-full w-full rounded-[20px]"
//               src={data.mainImage}
//               alt=""
//             />
//             <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
//               <button
//                 onClick={() => handleNextImage(index)}
//                 className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
//               >
//                 <AiOutlineRight />
//               </button>
//             </div>
//             <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
//               <button
//                 onClick={() => handlePreviousImage(index)}
//                 className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
//               >
//                 <AiOutlineLeft />
//               </button>
//             </div>
//           </div>
//           <div style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}} className="p-3 font-semibold text-[#101730] anima absolute  w-full bottom-0 rounded-b-[20px]  bg-white">
//             <p className="text-[14px] text-start">
//               {data.title}
//             </p>
//             <div className="my-2 flex text-[#FF8A00]">
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-[16px]">{data.price}₼</p>
//               <p className="text-[16px]">{data.HomeSize}</p>
//               <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
//                 Explore More
//                 <span>
//                   <AiOutlineRight />
//                 </span>
//               </button>
//             </div>
//           </div>
//   </Link>
//         <Link
//           to={data && `/get-estate-inner/${data.id}`}
//           key={index}
//           className="border-[1px] rounded-[20px] card relative"
//         >
//           <div className="h-[300px] rounded-[20px] relative">
//             <button
//               onClick={() => handleHeartClick(index)}
//               className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
//             >
//               <span className="heart">
//                 {activeHearts[index] ? (
//                   <span className="text-red-600">
//                     <AiFillHeart />
//                   </span>
//                 ) : (
//                   <AiOutlineHeart />
//                 )}
//               </span>
//             </button>
//             <img
//               className="h-full w-full rounded-[20px]"
//               src={data.mainImage}
//               alt=""
//             />
//             <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
//               <button
//                 onClick={() => handleNextImage(index)}
//                 className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
//               >
//                 <AiOutlineRight />
//               </button>
//             </div>
//             <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
//               <button
//                 onClick={() => handlePreviousImage(index)}
//                 className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
//               >
//                 <AiOutlineLeft />
//               </button>
//             </div>
//           </div>
//           <div  className="p-3 font-semibold text-[#101730]  anima absolute flex flex-col h-[-10px] w-[312px] bottom-6 rounded-b-[20px]  bg-white">
//             <p className="text-[14px] text-start">
//               {data.title.slice(0,44)}
//             </p>
//             <div className="my-2 flex text-[#FF8A00]">
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//               <span>
//                 <AiFillStar />
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-[16px]">{data.price}₼</p>
//               <p className="text-[16px]">{data.HomeSize}</p>
//               <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
//                 Explore More
//                 <span>
//                   <AiOutlineRight />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </Link>
//       </SwiperSlide>
//     );
//   })}
// </Swiper>


    
  // const [fetchComplete, setFetchComplete] = useState(false);
  // useEffect(() => {
  //   if (!fetchComplete) {
  //     dispatch(
  //       fetchGetArea({
  //         paginate: 100,
  //         price_to: price_to.replace(/\s/g, ""),
  //         price_from: price_from.replace(/\s/g, ""),
  //         homeSize: homeSize.replace(/\s/g, ""),
  //         homeSizetwo: homeSizetwo.replace(/\s/g, ""),
  //         location: location,
  //         address: address,
  //         dist: dist,
  //         announcementtype: announcementtype,
  //         credit: credit,
  //         document: document,
  //         maintenance: maintenance,
  //         building: building,
  //         estate: estate,
  //         metro: metro,
  //         floor_to: floor_to.replace(/\s/g, ""),
  //         floor_from: floor_from.replace(/\s/g, ""),
  //         landarea_to: landarea_to.replace(/\s/g, ""),
  //         landarea_from: landarea_from.replace(/\s/g, ""),
  //         totalfloor: totalfloor.replace(/\s/g, ""),
  //       })
  //     )
  //       .then(() => setFetchComplete(true))
  //       .catch((error) => console.error("Fetch error:", error));
  //   }
  // }, [
  //   dispatch,
  //   fetchComplete,
  //   price_to,
  //   price_from,
  //   homeSize,
  //   homeSizetwo,
  //   location,
  //   address,
  //   dist,
  //   announcementtype,
  //   credit,
  //   document,
  //   maintenance,
  //   building,
  //   estate,
  //   metro,
  //   floor_to,
  //   floor_from,
  //   landarea_to,
  //   landarea_from,
  //   totalfloor,
  // ]);



// style={{ marginTop: "20px" }}


// const [isDistrictDropdownDisabled, setIsDistrictDropdownDisabled] = useState(true);

// // ... (diğer kodlar)

// const FindCity = (e) => {
//   setLocation(e);
//   setSelectedCityId(e);

//   // Şehir seçildiğinde Rayon dropdown'ını etkinleştir
//   setIsDistrictDropdownDisabled(false);

//   // Rayonları getir
//   dispatch(fetchDistrict({ id: e }));
// };
