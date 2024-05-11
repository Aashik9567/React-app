import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className="navbar">
        <div className="navbar_left">
        <h4><a href="/"><b>APhotography</b></a></h4>
        </div>
        <div className="navbar_middle">
        <ul>
            <li><a href="/">Blog</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Support</a></li>
       </ul>
       </div>
       <div className="navbar_right">
         <h4><a href="/"><b>Log in</b></a></h4>
         <h4><a href="/" className='active'><b>Sign up</b></a></h4>
       </div>
     </div>
    </> 
  )
}

export default Navbar
