import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/counter/counterSlice'


import './App.css'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     <div>
         <button onClick={() => dispatch(decrement())}>-</button>
         {count}
         <button onClick={() => dispatch(increment())}>+</button>
     </div>
    </>
  )
}

export default App
