import React from 'react'
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

function footer() {
  return (
    <div className=" grid grid-cols-2 max-[530px]:flex max-[530px]:flex-col-reverse max-w-[92%] mx-auto text-[#C1C1C1] py-10 my-12 gap-12" >
        <div className="col-span-1 bg-[#F7F7F7] py-6 px-4 rounded-[10px]">
       <div className="flex gap-2 mb-2  items-center">
       <span>
        <img alt="Housa" src="../photo/logo2.png" />
       </span>
       <span>
        <img alt="Housa" src="../photo/housa.png" />
       </span>
       </div>
       <div className="mb-4">
        <p>
        Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
              suspendisse eu vel quis. Integer Lorem ipsum dolor sit amet
              consectetur. Vitae et ac lacus eu suspendisse eu vel quis. Integer
        </p>
       </div>
       <div className="flex gap-6 text-[24px]">
       <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
              <BsInstagram />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
              <BsFacebook />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/X?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              <RiTwitterXFill />
            </a>
       </div>
        </div>
        <div className="col-span-1 grid grid-cols-3 max-[530px]:grid-cols-2 max-[430px]:grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-4">
          <div>
            <p className="text-[#101730] text-[20px] max-[530px]:text-[18px] font-bold tracking-[0.4px]">Pages</p>
            <div className="mt-2 font-semibold leading-7">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>
          <div>
            <p className="text-[#101730] text-[20px] max-[530px]:text-[18px] font-bold tracking-[0.4px]">Information</p>
            <div className="mt-2 font-semibold leading-7">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>
          <div>
            <p className="text-[#101730] text-[20px] max-[530px]:text-[16px] font-bold tracking-[0.4px]">My Account</p>
            <div className="mt-2 font-semibold leading-7">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default footer;