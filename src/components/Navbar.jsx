import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
     <div className="navbar h-[67px] flex justify-between backdrop-blur-[5px]">
        <div className="navbar_left">
        <h4 className='mt-4'><Link to="/"><b className='hover:text-purple-500'>Webpage</b></Link></h4>
        </div>
        <div className="navbar_middle md:flex hidden">
        <ul>
            <Link to="/clock"><li className='hover:text-purple-500'>DigitalClock</li></Link>
            <Link to="/stopwatch"><li className='hover:text-purple-500'>StopWatch</li></Link>
            <Link to="/dict"><li className='hover:text-purple-500'>Dictionary</li></Link>
            <Link to="/card"><li className='hover:text-purple-500'>Card</li></Link>
       </ul>
       </div>
       <div className="md:flex hidden items-center">
         <Link to="/" className='active mr-2 px-[10px] pb-2 bg-cyan-800 rounded-lg hover:text-purple-500'><b>Log in/Sign up</b></Link>
       </div>
       <div className='mr-3 my-auto flex md:hidden '><button className='hover:cursor-pointer hover:bg-sky-200' onClick={()=>{
        setOpen(!open)
       }}><MenuRoundedIcon sx={{fontSize:'35px'}}/></button></div>

     </div>
     <div className={`flex flex-col gap-3 backdrop-blur-[5px] border-2 h-full md:hidden z-10 absolute p-6 float-right list-none ${open ?"translate-x-0":"-translate-x-full"} ease-in-out duration-1000`}>
            <Link to="/clock"><li>DigitalClock</li></Link>
            <Link to="/stopwatch"><li>StopWatch</li></Link>
            <Link to="/dict"><li>Dictionary</li></Link>
            <Link to="/card"><li>Card</li></Link>
       </div>
    </> 
  )
}

export default Navbar
