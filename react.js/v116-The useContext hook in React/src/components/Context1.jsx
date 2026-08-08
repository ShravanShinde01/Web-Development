import React from 'react'
import { useContext } from 'react'
import { counterContext } from './context'
import "../components/Context1.css"

const Context1 = () => {

    const value = useContext(counterContext)
    return (


        <div>
            <button onClick={() => value.setCount((count) => count + 1)} className='btn'>count is {value.count}</button>
        </div>
    )
}

export default Context1
