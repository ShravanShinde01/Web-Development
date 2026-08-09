import React from 'react'
import { memo } from 'react';

const Navbar = ({adjactive,getAdjactive}) => {
    console.log('i got rendered');
    
  return (
    <div>
      i am {adjactive} Navbar
      <button type="button" getAdjactive = {"hello"}>click me</button>
    </div>
  )
}

export default Navbar
