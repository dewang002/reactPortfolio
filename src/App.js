import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Skill from './Components/Skill'
import Work from './Components/Work'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='h-[100vh] w-[100vw] bg-zinc-300 overflow-x-hidden'>
       <Nav />  
       <Home />
       <About />
       <Skill />
       <Work />
       <Contact />
    </div>
  )
}

export default App
