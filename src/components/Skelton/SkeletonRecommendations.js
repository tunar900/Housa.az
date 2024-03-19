import React from 'react';

function SkeletonRecommendations() {
  return (
    <div>
        <div className="grid  grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[95%] mx-auto">
            <div>
                    <div
                        className="col-span-1   rounded-[20px] card relative">
                        <div className="  rounded-[20px]">
                            <img
                                className="skeleton h-[230px] border   w-full rounded-[20px]"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="p-3 font-semibold text-[#9BA5B5]    w-full    ">
                        <div className="">
                            <p className="skeleton text-[14px] rounded-[5px]  w-full h-[20px]"></p>
                        </div>
                        <div className="flex  justify-between">
                            <p className="skeleton h-[20px] w-[80px] rounded-[5px]  mt-10 text-[16px]">
                            </p>
                        </div>
                    </div>

                </div>
                <div className="max-md:hidden ">
                    <div
                        className="col-span-1  rounded-[20px] card relative">
                        <div className="  rounded-[20px]">
                            <img
                                className="skeleton h-[230px] border   w-full rounded-[20px]"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="p-3 font-semibold text-[#9BA5B5]    w-full    ">
                        <div className="">
                            <p className="skeleton text-[14px] rounded-[5px]  w-full h-[20px]"></p>
                        </div>
                        <div className="flex  justify-between">
                            <p className="skeleton h-[20px] w-[80px] rounded-[5px]  mt-10 text-[16px]">
                            </p>
                        </div>
                    </div>

                </div>
                <div className="max-lg:hidden">
                    <div
                        className="col-span-1   rounded-[20px] card relative">
                        <div className="  rounded-[20px]">
                            <img
                                className="skeleton h-[230px] border   w-full rounded-[20px]"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="p-3 font-semibold text-[#9BA5B5]    w-full    ">
                        <div className="">
                            <p className="skeleton text-[14px] rounded-[5px]  w-full h-[20px]"></p>
                        </div>
                        <div className="flex  justify-between">
                            <p className="skeleton h-[20px] w-[80px] rounded-[5px]  mt-10 text-[16px]">
                            </p>
                        </div>
                    </div>

                </div>
                <div className="max-xl:hidden">
                    <div
                        className="col-span-1   rounded-[20px] card relative">
                        <div className="  rounded-[20px]">
                            <img
                                className="skeleton h-[230px] border   w-full rounded-[20px]"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="p-3 font-semibold text-[#9BA5B5]    w-full    ">
                        <div className="">
                            <p className="skeleton text-[14px] rounded-[5px]  w-full h-[20px]"></p>
                        </div>
                        <div className="flex  justify-between">
                            <p className="skeleton h-[20px] w-[80px] rounded-[5px]  mt-10 text-[16px]">
                            </p>
                        </div>
                    </div>

                </div>
           
           
           
                <div className="max-2xl:hidden">
                    <div
                        className="col-span-1   rounded-[20px] card relative">
                        <div className="  rounded-[20px]">
                            <img
                                className="skeleton h-[230px] border   w-full rounded-[20px]"
                                alt=""
                            />
                        </div>

                    </div>
                    <div className="p-3 font-semibold text-[#9BA5B5]    w-full    ">
                        <div className="">
                            <p className="skeleton text-[14px] rounded-[5px]  w-full h-[20px]"></p>
                        </div>
                        <div className="flex  justify-between">
                            <p className="skeleton h-[20px] w-[80px] rounded-[5px]  mt-10 text-[16px]">
                            </p>
                        </div>
                    </div>

                </div>






            </div>

    </div>
  );
}

export default SkeletonRecommendations;
