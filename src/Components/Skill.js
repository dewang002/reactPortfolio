import React from 'react'
import Frontendskill from './Frontendskill'

function Skill() {
  return (
    <div id='skill' className='h-[70vh] md:h-[64vh] w-full flex flex-col items-center cursor-default '>
        <div className='leading-[3vw] text-center pb-4'>
          <h1 className='text-[10vw] md:text-[3.5vw] pb-3 font-semibold tracking-tighter'>Skill</h1>
          <p className='text-lg tracking-tighter text-zinc-500  '>My Technical Skill Level</p>  
        </div>
        <Frontendskill />
    </div>
  )
}

export default Skill
