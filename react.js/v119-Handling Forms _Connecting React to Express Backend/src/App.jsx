import { useState } from 'react'
import { useForm} from "react-hook-form"


import './App.css'

function App() {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

 const delay = (d) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
        resolve();
        }, d*1000)
    })
 }
 

  const onSubmit= async(data) => {
    let r = await fetch("http://localhost:3000/",{method:"POST", body:JSON.stringify(data) })
    let res = await r.text();
    console.log(data, res) 
  }

  return (
    <>
    {isSubmitting && <div>Loading.....</div>}
       <div className="contaienr">

          <form onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='username' {...register("username",{required: true, minLength:2, maxLength:8})} type="text"/>
          {errors.username && <div>There is some error in userName</div>}
          <br />
          <input password ='password' {...register("password")} type="password" />
          <br />
          <input disabled={isSubmitting} type="submit" />

          </form>
       </div>
    </>
  )
}

export default App;
