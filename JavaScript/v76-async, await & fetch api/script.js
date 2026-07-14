// function getData(){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             resolve(455);
//        },10000);
//     })
// }


// console.log("loding modules");

// console.log("Do somehting els");

// console.log("Load data");
// let data = getData();
// data.then((v) => {
//   console.log(v);
  
//   console.log("Process data");

//   })


// async function test () {
//     return 1;
// }
 
// console.log(test())


// function test2() {
//     return Promise.resolve(10);
// }
// console.log(test2());


function testinng(){
    return new Promise((resolve) => {
         setTimeout(() => {
            resolve(400);
         },5000)
    })
}



// async function main() {
//     console.log("a");
//     console.log("b");

//      let data = await testinng()
//      console.log(data);
     
//      console.log("c");
// }

// main();

// async function main() {

//     console.log("A");

//   let data =testinng();
// data.then((v) => {
//   console.log(data);
  
// }
// )
//     // console.log(data);

//     console.log("B");

// }

// main();


async function loadUser() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    let user = await response.json();

    console.log(user);

}

loadUser();



