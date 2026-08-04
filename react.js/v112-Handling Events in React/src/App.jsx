import { useState } from "react"

function App() {
//  const [name, setname] = useState("shravan")

 const [form, setform] = useState({email:"",phone:""})

 const handleChange = (e) => {
  setform({...form,[e.target.name]:[e.target.value]})
 }
 

  const any = () => {
      alert("I was clicked")
  }
  

  return (
    <>
      <div className="button">
        <button onClick={any}>click me</button>
      </div>

      <input type="text" name='email' value={name.email} onChange={handleChange} />
      <input type="text" name='phone' value={name.phone} onChange={handleChange} />
    </>
  )
}

export default App
