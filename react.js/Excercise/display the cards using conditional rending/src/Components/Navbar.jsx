import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">CodeVerse</h2>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        <button className="nav-btn">Get Started</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
