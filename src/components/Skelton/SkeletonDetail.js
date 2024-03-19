import React from 'react';

function SkeletonDetail() {
    return (
        <div>

            <div className="max-w-[95%] mb-5  mx-auto font-semibold">
                <div className="my-5">
                    <div className="">
                        <p className="skeleton rounded-[5px] w-full h-[20px] text-[20px] max-sm:text-[16px] py-2"></p>
                    </div>
                    <div className="flex   max-sm:gap-[5px] max-sm:flex-col max-sm:items-start">
                        <div className=" flex  gap-8 w-full mt-6 max-sm:gap-12">
                            <div className="h-[20px]  ">
                            <p className="skeleton rounded-[5px] w-[120px] h-[20px]"></p>
                            </div>
                            <div className='h-[20px]'>
                            <p className="skeleton rounded-[5px] w-[170px] h-[20px]">
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" gap-4 grid grid-cols-2 max-lg:grid-cols-1">
                    <div className="col-span-1">
                        <div className="h-[550px] max-[480px]:h-[300px] max-md:h-[400px] ">
                            <img
                                className="skeleton w-full h-full cursor-pointer rounded-lg"
                                alt=""
                            />
                        </div>
                    </div>
                  
                </div>

                <div className="my-5 gap-4 grid grid-cols-2 max-md:grid-cols-1 ">
            <div className="col-span-1 ">
              <div className="flex justify-between items-start mb-5 gap-5 ">
                <div className="  max-w-[78%] ">
                  <div className="">
                    <p className="h-[20px] w-[150px]"><p className="skeleton h-[20px] w-[450px] max-lg:w-[300px]"></p></p>
                    <p className="skeleton mt-2 h-[20px] w-[450px] max-lg:w-[300px]"></p>
                    <p className="skeleton mt-2 h-[20px] w-[450px] max-lg:w-[300px]"></p>
                    <p className="skeleton mt-2 h-[20px] w-[450px] max-lg:w-[300px]"></p>
                  </div>
                  <div className=" mt-1 ">
                    <p></p>
                  </div>
                </div>
                <div>
              
                </div>
              </div>
              <div>

              </div>
            </div>
            <div className="col-span-1 ">

            </div>
          </div>

            </div>
        </div>
    );
}

export default SkeletonDetail;
