import React, { useState } from "react";

import Home from "../Components/Home"
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
function Nav() {
    const [mobilenav,setmobilenav]=useState(false)

    const handleclick=()=>{
        setmobilenav(!mobilenav)
    }
    const handleclosebtn=()=>{
        setmobilenav(!mobilenav)
    }

  return (
    <div className=" fixed z-[999] md:h-20 w-full md:w-[80%] md:ml-[10%] rounded-b-lg h-14 drop-shadow-xl bg-zinc-700 md:bg-gradient-to-br from-[#000000] via-[grey] to-black  mx-auto  pr-6 md:pr-9 pl-6 cursor-default ">
      <nav className="h-full w-full flex justify-between items-center ">
         <h1 className=" h-10 w-10 bg-gradient-to-br from-[#D0E677] via-white to-[#b8d252] rounded-full flex items-center justify-center text-xl font-black text-black">D</h1>

        <div className="hidden md:block w-[40%] md:w-[50%]">
          <ul className="grid grid-cols-4 items-center gap-8">
            
            <li className="font-semibold text-lg text-white hover:underline tracking-wide"><a href="#home" >Home</a></li>
            <li className="font-semibold text-lg text-white hover:underline tracking-wide"><a href="#about">About</a> </li>
            <li className="font-semibold text-lg text-white hover:underline tracking-wide"><a href="#skill">Skill</a> </li>
            <li className="font-semibold text-lg text-white hover:underline tracking-wide"><a href="#contact">Contact</a> </li>
          </ul>
        </div>
        {/* -------------------mobileversion------------------------ */}
{mobilenav?<div className="toggle-nav   rounded-b-lg h-[50vh] w-full top-0 left-0 absolute backdrop-blur-3xl transition-ease duration-300  bg-[#1a2130] md:hidden">
          <div className="text-white text-2xl right-8 top-5 absolute" onClick={()=>handleclosebtn()}>
           <IoMdClose />
         </div>
          <ul className="h-full w-full flex flex-col items-center justify-center gap-4 ">
            <li className="font-semibold text-3xl  text-zinc-300 active:scale-95 hover:text-white" onClick={()=>handleclosebtn()}><a href="#home">HOME</a></li>
            <li className="font-semibold text-3xl  text-zinc-300 active:scale-95 hover:text-white" onClick={()=>handleclosebtn()}><a href="#about">ABOUT</a></li>
            <li className="font-semibold text-3xl  text-zinc-300 active:scale-95 hover:text-white" onClick={()=>handleclosebtn()}><a href="#skill">SKILL</a></li>
            <li className="font-semibold text-3xl  text-zinc-300 active:scale-95 hover:text-white" onClick={()=>handleclosebtn()}><a href="#contact">CONTACT</a></li>
           </ul>
        </div> :<div className="toggle-btn md:hidden text-white text-2xl " onClick={()=>handleclick()}>
          <CiMenuKebab />
        </div> }
        
      </nav>
    </div>
  );
}

export default Nav;
