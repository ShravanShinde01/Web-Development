"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
    const [count, setcount] = useState(0)
  return (
     <div>
        i am an counter lala
        <button className="border-4 border-amber-300 rounded-4xl p-5 ml-5" onClick={()=>setcount(count+1)}>click me {count}</button>
     </div>
  );
}
