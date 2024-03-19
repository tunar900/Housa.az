import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";






function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isSubmitDisabled = email === "" || password === "";

  const handleEmailChange = (e) => {
   
    setEmail(e.target.value);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="signin max-w-[100%]  mx-auto">
     <div className="grid grid-cols-2 max-md:flex max-md:flex-col-reverse ">
      <div className="col-span-1 p-[110px] max-md:p-[25px]  ">
        <div className="mt-[7rem] max-md:mt-0">
        <p className="text-[#23242B] text-[32px] uppercase max-sm:text-[26px] leading-10 font-normal">Daxil Ol</p>
      <div className="flex max-[320px]:flex-col max-[360px]:gap-[5px] gap-2 leading-6 	font-normal text-[16px]">
        <p className="acc  ">Hesabınız yoxdur?</p>
        <NavLink to="/sign-up" className="text-[#FF7A00] ">Qeydiyyatdan keç</NavLink>
      </div>
      <div>
         <button className="w-[100%] px-2 py-3 rounded-[16px] bg-[#fff] mb-[10px] mt-[10px] buttonone flex justify-center gap-2 items-center">
            <span><FcGoogle /></span><span className="text-black">Google ilə daxil olun</span>
         </button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <hr className="w-[45%]" /><span className="text-[#99a3b3] max-lg:w-[50px]">və ya</span><hr className="w-[45%]" />
      </div>
      <form onSubmit={handleSubmit}>

        <div className="my-4 max-[420px]:my-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            className="mt-2 text-start bg-[#fff] border-2 border-[#E5E1FF] w-full py-3 pl-3 rounded-xl  outline-none "
            type="email"
            value={email}
            placeholder="Email ünvanı daxil edin"
            onChange={handleEmailChange}
            id="email"
            name="email"
            required
          />
          
        
        </div>
        <div className="my-4  max-[420px]:my-4 relative">
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
          <span className=" absolute text-2xl translate-x-[-35px] translate-y-[20px] cursor-pointer"
          onClick={handlePasswordToggle}
          >
            {showPassword  ?  <IoIosEyeOff /> : <IoIosEye/>}
          </span>
        </div>
      </form>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
        <input className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800   "  id="remmember" type="checkbox" />
        <label htmlFor="remmember" className="">Məni xatırla</label>
        </div>
       <div>
    <NavLink to="/forgotpassword" className="hover:underline hover:text-gray-500 " > 
          Şifrəni unutmusunuz? </NavLink>
       </div>
      </div>
      <div className="btn text-center my-5">
      <button
            disabled={isSubmitDisabled}
            className={`border-[1px] w-full py-4 rounded-[12px] max-md:rounded-[8px] bg-[#404242] text-white hover:bg-[#C10909]  duration-200 ${
              isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
          >
            Daxil ol
          </button>
      </div>
        </div>


    
      </div>
      <div className="col-span-1 relative h-[100vh] max-md:h-[330px] max-sm:h-[300px]  max-[420px]:h-[250px] object-scale-down max-[420px]:p-2 p-4">
      <NavLink to="/">
        
      <span className="absolute top-[10px] right-[10px] text-[24px] max-sm:text-[20px] rounded-[15%] p-1 text-[#000] border-2  border-gray-500 bg-slate-400 "  ><AiOutlineClose /></span>
          </NavLink>
      <img className="w-[100%] h-[100%]" alt="" src="../photo/Rectangle52.png" />
      </div>
      </div>
     </div>
  )
}

export default Signin