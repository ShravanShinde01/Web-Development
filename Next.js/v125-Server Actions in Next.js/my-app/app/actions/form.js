 "use server"
 import fs from "fs/promises"
 
 export const submitAction = async(e) => {
    "use server"

    console.log(e.get("name"),e.get("add"));
    

    fs.writeFile("shravan.txt", "I am happy now")

  }
