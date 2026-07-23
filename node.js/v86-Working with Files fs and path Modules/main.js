const fs = require("fs")

// console.log(fs);

// console.log("start");

fs.writeFile("shravan.txt","Shravan dada les'gooooooo...",() => {
    //   console.log("done");
      fs.readFile("shravan.txt",(error,data) => {
        //    console.log(error,data.toString());
           
      })
})

fs.appendFile("shravan.txt","kela na bhavu append",(e,d) => {
        console.log(e,d);
     
        
})

