let btn = document.body.children[1];
 
btn.addEventListener("mouseover",function(e){
    document.body.children[0].firstElementChild.innerHTML = ("Lala bhai");
    document.title = ("shravan dada")
    btn.innerHTML = "<b>Change Content</b>";
    e.target.style.backgroundColor = "red";
     console.log(e.target);
     
    
        
})

 document.addEventListener("dblclick",(e)=>{
             e.target.style.backgroundColor = "red";

         
    })
        