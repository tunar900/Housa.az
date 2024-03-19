import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Signup = () => {
  const [password,setPassword]=useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name,setName]=useState("");
  const isSubmitDisabled = name === "" || password === "" || email === "";

  const handleEmailChange = (e) => {
  
   setEmail(e.target.value)
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-register grid grid-cols-2 max-w-[100%] max-md:flex max-md:flex-col-reverse mx-auto bg-white">
      <div className="textarea col-span-1  p-[110px] max-md:p-[18px]">
      <p className="text-[#23242B] text-[32px] max-md:text-[24px] uppercase leading-10 font-normal">Qeydiyyatdan keç </p>
      <div className="flex gap-2 items-center leading-6	font-normal text-[16px]">
        <p className="acc">Hesabınız var?</p>
        <NavLink to="/sign-in" className="text-[#FF7A00]">Daxil Ol</NavLink>
      </div>
      <div>
         <button className="w-[100%] px-2 py-3 rounded-[16px] bg-[#fff] mb-[10px] mt-[10px] buttonone flex justify-center gap-2 items-center">
            <span><FcGoogle /></span><span className="text-black">Google ilə daxil olun</span>
         </button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <hr className="w-[45%]" />
        <span className="text-[#99a3b3] max-sm:w-[50px]">və ya</span>
        <hr className="w-[45%]" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block">Ad,Soyad</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 text-start bg-[#fff] border-2 border-[#E5E1FF] w-[100%] py-3 pl-3 placeholder-[#707d86] rounded-xl outline-none"
            type="text"
            placeholder=""
          />
        </div>
        <div className="my-2 relative">
          <label htmlFor="email" className="block">Email</label>
          <input
            className="mt-2 text-start bg-[#fff] border-2 border-[#E5E1FF] w-full py-3 pl-3 rounded-xl   focus:outline-none "
            id="email"
            name="email"
            value={email}
            required
            type="email"
            placeholder="Email ünvanını daxil edin"
            onChange={handleEmailChange}
          />
         <span  className=" absolute translate-x-[-30px] translate-y-[20px] text-2xl cursor-pointer"> {email && (
            <CiCircleCheck /> 
          )} </span>
          {/* <p className={`my-1 ${email ? 'text-[#11c354]' : 'text-[#ff0000]'}`}>
            {email? '*Email doğru daxil edilmişdir.' : '*Email yanlışdır.'}
          </p> */}
        </div>
        <div className="my-2 ">
          <label htmlFor="password" className="block">Parol</label>
          <input
            placeholder="********"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 text-start bg-[#fff] border-2 border-[#E5E1FF] w-full py-3 pl-3 rounded-xl relative focus:outline-none"
            type={showPassword ? 'text' : 'password'}
          />
          <span
            className="absolute translate-x-[-35px] text-2xl translate-y-[20px] cursor-pointer"
            onClick={handlePasswordToggle}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </span>
        </div>
      </form>
      <div className="flex items-center gap-1">
        <input className="text-4xl" id="policy" type="checkbox" />
        <label htmlFor="policy" className="underline">Məxfilik və siyasətlə <span>razıyam</span></label>
      </div>
      <div className="btn text-center my-4">
      <button
      disabled={isSubmitDisabled}
      className={`bg-[#13171a] py-4 w-full rounded-xl text-white ${isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
       type="submit">
       Qeydiyyatdan keç
      </button>
      </div>
      </div>
      <div className="col-span-1 h-[100vh] max-md:h-[300px] max-[420px]:h-[250px] max-md:p-2  p-4">
      <NavLink to="/">
      <span className="absolute top-[10px] right-[10px] text-[30px] max-sm:text-[24px] text-[#fff] rounded-[50%] p-1  border-2  border-white bg-black" ><AiOutlineClose /></span>
          </NavLink>
      <img className="w-[100%] h-[100%]" alt="" src="../photo/Rectangle52.png" />
      </div>
    </div>
  );
};

export default Signup;




