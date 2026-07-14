let rand = Math.random();

let first, middle , last;



// generate first number
if(rand<0.33){
   first = "Crazy";
}
else if(rand<0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}


// genetating second no

rand = Math.random();

if(rand<0.33){
   middle = "engine";
}
else if(rand<0.66){
    middle = "food";
}
else{
    middle = "garment";
}



// generating  
rand = Math.random();

if(rand<0.33){
   last = "bros";
}
else if(rand<0.66){
    last = "limited";
}
else{
    last = "hub";
}

console.log(`${first} ${middle} ${last}`);
