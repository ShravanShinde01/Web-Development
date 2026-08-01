import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => {setCount(count+1)}}>update</button>
    </>
  )
}

export default App
