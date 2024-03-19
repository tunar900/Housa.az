import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

import {
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { fetchGetArea } from "../store/area/areaAction";
// import { fetchGetEstates } from "../store/getEstate/getAction";
import { fetchGetİnner } from "../store/İnner/innerAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SkeletonList from "./Skelton/SkeletonList";


function List() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const location1 = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const formatNumberWithSpaces = (number) => {
    if (!number) return "";

    const numericValue = Number(number).toString();
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const paginationRedux = useSelector((state) => state.area.areaData)
  const paginateData = paginationRedux.pagination
  const areaRedux = useSelector((state) => state.area.areaData);
  const house = areaRedux && areaRedux.data && areaRedux.data;

  const dataAll = location1.state && location1.state.newData



  const handlePageClick = (selectedPage) => {

    setCurrentPage(selectedPage.selected + 1)
  }


  // const itemsPerPage = 12;

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentData = house && house.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verileri getirme işlemi
        await dispatch(fetchGetİnner());
        await dispatch(fetchGetArea({ tunar: 100 }));

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
  }, [dispatch]);

  // Move the function definition above its usage


  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleHeart = (index) => {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };


  // const [imageIndices, setImageIndices] = useState(Array(house.length).fill(0));
  // const handleNextImage = (index) => {
  //   setImageIndices((prevIndices) => {
  //     const newIndices = [...prevIndices];
  //     newIndices[index] =
  //       (prevIndices[index] + 1) % house[index].img.length;
  //     return newIndices;
  //   });
  // };

  // const currentImageIndex = imageIndices[index];
  return (
    <div>

      {loading || !dataAll ? (<SkeletonList /> ) : dataAll.length ? (

        <div className={`grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[92%] mx-auto`}>
          {dataAll.map((data, index) => (
            <Link
              target="_blank"
              to={data && `/get-estate-inner/${data.id}`}
              key={index}
              className="col-span-1 border-[1px]  rounded-[20px] card relative">
              <div className="h-[300px] relative">
              <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleHeart(index);
                  }}
                  className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                >
                  <span className="heart">
                  {activeIndexes.includes(index) ? <AiFillHeart color="red" /> : <AiOutlineHeart color="#000" />}
                  </span>
                </button>
                <img
                  className="h-full w-full rounded-[20px]"
                  src={data.mainImage && data.mainImage}
                  alt=""
                />
                <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                  <button
                    // onClick={() => handlePreviousImage(index)}
                    onClick={(e) => {
                      e.preventDefault();

                    }}
                    className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
                  >
                    <AiOutlineLeft />
                  </button>
                </div>
                <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">

                  <button
                    // onClick={() => handleNextImage(index)}
                    onClick={(e) => {
                      e.preventDefault();

                    }}
                    className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
                  >
                    <AiOutlineRight />
                  </button>
                </div>
              </div>
              <div className="p-3 font-semibold text-[#101730] anima absolute  w-full bottom-0 rounded-b-[20px]  bg-white">
                <p style={{ overflow: "hidden" }} className="text-[14px] h-[45px]">{data.title}</p>
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
                  <p className="text-[16px]">
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
          ))}
        </div>
            ) : (
              <div className="h-[50vh] w-full">
                <p className="font-bold ml-10 text-[24px]">
                  Axtarış üzrə nəticə tapılmadı.
                </p>
              </div>
      )}
      {/* {paginateData && (
        <ReactPaginate
          previousLabel={"Previous"}
          breakLabel={"..."}
          nextLabel={"Next"}
          pageCount={paginateData.per_page}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"Page navigation flex my-8 flex-row items-center justify-center example"}
          pageClassName={`${paginateData.from} ${paginateData.to} inline-flex -space-x-px text-sm`}
          pageLinkClassName={`${paginateData.total} flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white-800 dark:border-gray-700 dark:text-white-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          previousClassName={"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
          previousLinkClassName={`${paginateData.last_page_url} flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`}
          nextClassName={"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
          nextLinkClassName={`${paginateData.next_page_url} flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`}
          breakClassName={"flex px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
          breakLinkClassName={"flex px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
          activeClassName={`inline-flex -space-x-px text-sm bg-white border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          activeLinkClassName={`${paginateData.current_page} inline-flex -space-x-px text-sm bg-white border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`}
        />
      )} */}
    </div>
  );
}



export default List;
