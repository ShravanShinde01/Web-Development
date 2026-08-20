"use client"

export default function Home() {
    const handleClick = async() => {

      let data = {
        name:"Shravan",
        Age:"23",
        Salary:"0"
      }

         let a = await fetch("/api/add", {method:"POST",
                                          headers:{"Content-Type":"application/json,"},
                                          body:JSON.stringify(data),
        })
         let res = await a.json();
         console.log(res);
         
    }
    

  return (
      <div>
        <h1>Next js API routes Demo</h1>

        <button onClick={handleClick}>Click me</button>
      </div>
  );
}
