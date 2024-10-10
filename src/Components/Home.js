import React,{useRef,useEffect} from 'react'

import gsap from 'gsap';
import Intro from './Intro'
import Socials from './Socials'
import profile from "../../public/picofme.png";
import { useRef } from 'react';
import Nav from './Nav';
function Home() {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, {
      y: "-10%", // Adjust the value to control the distance of the up-down motion
      duration: 0.5,
      yoyo: true,
      repeat: -1, // -1 makes the animation infinite
      ease: "power1.inOut", // Smooth easing
    });
  }, []);

  return (
    <>
      <Nav />
    <div id='home' className='cursor-default h-[91vh] w-[80%] mb-8 mx-auto grid md:grid-cols-12 grid-row-12 justify-center items-center'>
      
      <div className='col-span-2'>
        <Socials />
      </div>
      <div className='col-span-5 '>
        <Intro />
      </div>
      <div className='col-span-5 grid-item-n md:order-none order-first'>
        <div className='md:mt-[10vw] mt-[20vw] ml-[16vw] md:h-[16vw] md:w-[16vw] h-[52vw] w-[52vw] bg-red-200 rounded-full'>
        <img className="h-full w-full rounded-full" src={profile} />
        </div>
      </div>
      <div  className='translate-y-[-100%] md:translate-y-[3vw] md:translate-x-[0vw] h-[15vw] w-[8vw] md:h-[2.5vw] md:w-[1.5vw] border-[2px] border-zinc-900 rounded-full flex items-start justify-center '> <div ref={elementRef} className=" font-  bold" >|</div></div>
    </div>
    </>
  )
}

export default Home
