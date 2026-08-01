import React from 'react'
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <div>
       <nav class="navbar">
        <div class="logo">⚡ NovaUI</div>

        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
        </ul>

        <button class="btn">Get Started</button>
    </nav>
    </div>
  )
}

export default Navbar;
