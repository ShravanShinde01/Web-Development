console.log("Hello loops");

for (let index = 0; index <= 10; index++) {
    console.log(index);
    
}

let student = {
    "name" : "Shravan",
    "age" : 21
}


for (let key in student) {
    console.log(key);
}


let name = "JAVA";

for (let element of name) {
    console.log(element);
    
}

let i = 1; 

while(i<10){
    console.log(i);
    i++;
    
}


console.log("DO while loop");


let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);