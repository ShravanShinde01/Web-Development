import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import "../src/App.css"

function App() {

  const [cards, setcards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();

    setcards(data);
    console.log(data);
    
  }
  

  useEffect(() => {
     fetchData(); 
  }, [])
  

  return (
    <>
        <div>
        <Navbar/>
      <div className="container h-80 w-2xs flex gap-3 pt-96-">
        {cards.map((card) => {
           return <div className="card border-2 flex gap-2 justify-center align-middle">
            <h3>{card.id}</h3>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
           </div>
        })}   

       </div>
       </div>

    </>
  )
}

export default App
