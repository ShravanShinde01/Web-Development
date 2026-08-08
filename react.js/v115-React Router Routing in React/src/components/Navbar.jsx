import React from 'react'
import "../components/Navbar.css"

import { Link } from 'react-router-dom'


const Navbar = () => {
     return (

    <div>
       <nav className="navbar">
        <div className="logo">MyWebsite</div>

        <ul className="nav-links">
            <Link to ="/"> <li>Home</li></Link>
            <Link to ="/Login"> <li>Login</li></Link>
            <Link to ="/User"> <li>User</li></Link>
        </ul>

        <button className="login-btn">Login</button>
    </nav>
    </div>
  )
}

export default Navbar
