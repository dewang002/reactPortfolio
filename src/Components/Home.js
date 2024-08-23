import React from 'react'
import Intro from './Intro'
import Socials from './Socials'
import profile from "../../public/picofme.png";
function Home() {
  return (
    <div id='home' className='cursor-default h-[91vh] w-[80%] mb-8 mx-auto grid md:grid-cols-12 grid-row-12 justify-center items-center'>
      <div className='col-span-2'>
        <Socials />
      </div>
      <div className='col-span-5 '>
        <Intro />
      </div>
      <div className='col-span-5 grid-item-n md:order-none order-first'>
        <div className='mt-[10vw] ml-[16vw] md:h-[16vw] md:w-[16vw] h-[52vw] w-[52vw] bg-red-200 rounded-full'>
        <img className="h-full w-full rounded-full" src={profile} />
        </div>
      </div>
      <div className='translate-y-[-100%] md:translate-y-[3vw] md:translate-x-[0vw] h-[15vw] w-[8vw] md:h-[2.5vw] md:w-[1.5vw] border-[2px] border-zinc-900 rounded-full flex items-start justify-center '>|</div>
    </div>
  )
}

export default Home
