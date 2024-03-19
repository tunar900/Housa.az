import React from 'react'

function Video() {
  return (
    <div className="mx-auto max-w-[92%] mb-8">
     <div className="text-center my-8" >
        <p className="text-[20px] max-[500px]:text-[16px] uppercase tracking-[0.4px] text-[#1590e1]" >Let's find</p>
        <h2 className="text-[44px] max-md:text-[36px] max-[500px]:text-[32px] tracking-[0.88px] font-semibold" >Our Services</h2>
        <p className="text-[#C1C1C1] font-semibold text-[20px] max-sm:text-[16px]">Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
          suspendisse eu vel quis. Integer</p>
     </div>
     <div className="flex items-center justify-center">
     <video className=" rounded-[20px] max-w-[100%]" src="../video/CinematicRealEstateVideography_SonyFX3.mp4"  height="440"    controls ></video>
     </div>
    </div>
  )
}

export default Video;