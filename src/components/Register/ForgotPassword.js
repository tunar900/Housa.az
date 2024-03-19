import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";


function ForgotPassword() {
  const[gmail,setGmail]=useState("");
  const isSubmitDisabled = gmail === "";
   
    const handleSubmit= async (e)=>{
        e.preventdefault()
    };
  return (
    <div className="grid grid-cols-2 max-md:flex max-md:flex-col-reverse">
        <div className="col-span-1 p-[130px] max-md:p-[80px] max-sm:p-[35px]"> 
          <div className="mb-8">
          <p  className="text-[44px]  leading-10 max-md:text-[32px]  max-[500px]:text-[26px]">ŞİFRƏNİ DƏYİŞMƏK</p>
          <div>
          <p className="text-[#6D7A84] text-[18px] leading-7 max-sm:text-[16px] max-sm:leading-[1.3rem]	my-3" >Parolunuzu necə sıfırlayacağınıza dair təlimatları sizə e-poçtla göndərəcəyik.</p>
          </div> 
          </div>
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="example" className="leading-6 text-[18px]">Email</label>
            <input 
            id="example"
            name="example"
            type="email"
            value={gmail}
            className="leading-4 text-start bg-[#f3f4f5] w-[100%] py-3 pl-3 mb-4 border border-[#E5E1FF] rounded-xl  outline-none "
            onChange={(e) => setGmail(e.target.value)}
            />
            
          </form>
          <button
          disabled={isSubmitDisabled}
          className={`border-[1px] w-full py-2 rounded-[12px] leading-6 max-md:rounded-[8px] bg-[#23242B] text-white hover:bg-black duration-200  ${
            isSubmitDisabled ? "opocity-50 cursor-not-allowed" : ""
          }`}
          >
            
          Parol sıfırlama linki göndər
          </button>
        </div>
    <div className="col-span-1 h-[100vh] max-md:h-[350px] max-md:p-2  p-4">
    <NavLink to="/sign-in">
      <span className="absolute top-[10px] right-[10px] text-[36px] max-sm:text-[28px] rounded-[50%] p-1  border-2 text-white border-white bg-black"><AiOutlineClose /></span>
          </NavLink>
      <img className="w-[100%] h-[100%]" alt="" src="../photo/Rectangle52.png" />
      </div>
    </div>
  )
}

export default ForgotPassword;