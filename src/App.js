import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='h-[100vh] w-[100vw] bg-zinc-300 overflow-x-hidden'>
       <Outlet />
    </div>
  )
}

export default App
