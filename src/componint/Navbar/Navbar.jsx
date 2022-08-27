import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <nav>
        <div className="Logo">
            <Link className='link' to={"/"}>Logo</Link>
        </div>
        <div className="links">
     <Link className='link' to={"/"}>Home</Link>
     <Link className='link' to={"contact"}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
