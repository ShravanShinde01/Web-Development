let random = Math.random();

let a = Number(prompt("Enter first number"));
let c = prompt("Enter operator (+,-,*,/)");
let b = Number(prompt("Enter second number"));

let obj ={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**",
}



if (random > 0.1) {
    alert(`The reasult is ${eval(`${a}${c}${b}`) }`);
}
else{
    c = obj[c];

    alert(`The reasult is ${eval(`${a}${c}${b}`) }`)
}


// if (random > 0.1) {

//     if (c == "+") {
//         console.log(a + b);
//     }
//     else if (c == "-") {
//         console.log(a - b);
//     }
//     else if (c == "*") {
//         console.log(a * b);
//     }
//     else if (c == "/") {
//         console.log(a / b);
//     }
//     else {
//         console.log("Invalid operator");
//     }

// } else {

//     if (c == "+") {
//         console.log(a - b);
//     }
//     else if (c == "-") {
//         console.log(a / b);
//     }
//     else if (c == "*") {
//         console.log(a + b);
//     }
//     else if (c == "/") {
//         console.log(a ** b);
//     }
//     else {
//         console.log("Invalid operator");
//     }

// }