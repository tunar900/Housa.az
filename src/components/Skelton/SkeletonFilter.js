import React from 'react';

function SkeletonFilter() {
    return (
        <div>
            <div className=" mx-auto my-2  max-w-[97%]">
                <div className=" px-[40px] max-lg:px-[20px] skeleton  rounded-[10px]  max-lg:max-w-[97%]  max-[550px]:h-[500px]  max-[400px]:h-[450px] max-lg:h-[600px] h-[300px] flex justify-between items-center  max-lg:justify-around max-lg:flex-col">
                </div>
            </div>
        </div>
    );
}

export default SkeletonFilter;
