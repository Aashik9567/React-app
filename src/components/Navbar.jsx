import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div className="navbar">
        <div className="navbar_left">
        <h4><Link to="/"><b>APhotography</b></Link></h4>
        </div>
        <div className="navbar_middle">
        <ul>
            <li><Link to="/clock">clock</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Support</Link></li>
       </ul>
       </div>
       <div className="navbar_right">
         <h4><Link to="/"><b>Log in</b></Link></h4>
         <h4><Link to="/" className='active'><b>Sign up</b></Link></h4>
       </div>
     </div>
    </> 
  )
}

export default Navbar
