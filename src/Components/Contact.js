import React, { useEffect, useState } from 'react'
import { CiMail } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';
function Contact() {
  const navigate = useNavigate();
  const form = useRef();
  const [item,setitem]=useState(false)

  const emptyBox = ()=>{
    setitem(true)
     return setTimeout(()=>{
      setitem(false)
      },3000)
  }



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_miik1eg', 'template_6on3tf6', form.current, {
        publicKey: 'mDfaB2be5_pgN6dsU',
      })
      e.target.reset()
     
  };

  return (
    <div id='contact' className='h-[100vh] md:h-[60vh] md:w-[60%] w-full mx-auto p-10'>
    <Link
        className=" absolute bg-blue-500 py-2 px-4 rounded text-white active:scale-75 duration-100 transition-all"
        onClick={() => navigate(-1)}
      >
        <button className="font-bold text-lg ">Back</button>
      </Link>
      <div className='flex flex-col md:leading-[4vw] leading-[8vw] mb-8 md:mb-0'>
         <h1 className='text-center text-[10vw] md:text-[3.4vw] tracking-tighter font-semibold'>Get In Touch</h1>
      <span className='text-lg text-center text-zinc-500'>contact me</span>
      </div>
      <div className='MainBox md:grid md:grid-cols-2 h-[100%] w-full md:p-10'>
       <div className='info md:p-10 flex flex-col items-center'>
           <h1 className='md:text-[1.5vw] text-[6vw] font-light pb-2 md:pb-4 tracking-tighter md:font-medium'>Talk to Me</h1>

           <div className='mail hover:scale-105 text-lg transition-all duration-150 ease-in-out pl-2 mb-8 flex flex-col items-center justify-center bg-gradient-to-b from-slate-600  to-[white] w-[60%] md:h-[24%] h-[16vh] rounded drop-shadow-2xl'>
            <div className='text-xl text-white'><CiMail /></div> 
            <h1 className='text-2xl font-black'>Email</h1>
            <a className='flex items-center gap-2 ' href='https://mail.google.com/mail/u/0/?fs=1&to=2002thapa@example.com&su=Subject+Here&body=Body+Text+Here&tf=cm' target='_blank'>Contact Me <MdArrowOutward/></a>
           </div>

           <div className='whatsapp hover:scale-105 text-lg transition-all duration-150 ease-in-out  pl-2 mb-8 flex flex-col items-center justify-center bg-gradient-to-b from-slate-600  to-[white] w-[60%] md:h-[24%] h-[16vh] rounded drop-shadow-2xl'>
            <div className='text-xl text-white'><FaWhatsapp /></div> 
            <h1 className='text-2xl font-black'>whatsapp</h1>
            <a target='_blank' className='cursor-default flex items-center gap-2 text-base font-light'>7505057601</a>
           </div>


       </div>
       {/* -------------------------------------------------- */}
       <form ref={form} onSubmit={sendEmail} className='drop-shadow-xl p-10 flex flex-col gap-4 items-center '>
        <h2 className='md:text-[1.5vw] md:pb-3 text-zinc-600 text-center leading-7 text-[6vw] tracking-tighter font-medium'>Write me your project</h2>
         <input type='text' name='name' placeholder='Name...' className=' p-2 w-full outline-none rounded-lg text-xl' />
         <input type='text' name="email" placeholder='Email@gmail.com' className=' p-2 w-full outline-none rounded-lg text-xl' />
         <textarea type='text' name='project' placeholder='Send you project Idea' cols='30' rows='10' className='p-4 w-full outline-none rounded-lg ' />
         <button onClick={emptyBox} type='submit' className='transition duration-150 ease-in active:scale-95 text-xl p-4 bg-black rounded-lg text-white'>{item?"sending...":"send"}</button>
       </form>
      </div>
     
    
    </div>
  )
}

export default Contact
