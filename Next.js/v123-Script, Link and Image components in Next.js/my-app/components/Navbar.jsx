import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Link href="/home"><li>Home</li></Link>
      <Link href="/contact"><li>Contact</li></Link>
      <Link href="/about"><li>About</li></Link>
      <Link href="/help"><li>Help</li></Link>
    </div>
  )
}

export default Navbar
