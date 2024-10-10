import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Socials() {
  return (
    <div className='pl-2 md:pl-8 top-[-20vw]  md:relative md:top-0  h-full flex flex-col item-center justify-center gap-8 text-lg md:text-2xl'>
     <a href='https://x.com/ThapaDewang' target='_blank'> <BsTwitterX /></a> 
     <a href='https://github.com/dewang002' target='_blank'> <FaGithub /></a>  
    </div>
  )
}

export default Socials
