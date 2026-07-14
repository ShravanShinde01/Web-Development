 let a = document.body.childNodes[1].childNodes[1];
 a.onclick = function(){
    alert("hello")
 } 

//  let b = document.getElementsByClassName("box3")[0];

//  console.log(b);
 


let c = document.querySelectorAll(".box");

c[0].style.backgroundColor = "red";

console.log(c);


c.forEach((box)=> {
    box.style.backgroundColor = "black";
});