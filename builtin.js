// reading a file in Sync way

// const fs = require("fs"); // importing fs module

// console.log("Start");

// const data1 = fs.readFileSync("f1.txt");

// console.log(data1);

// console.log("End");

// ******Reading a file Async

// const fs = require("fs");
// console.log("Start");

// fs.readFile("f1.txt", (err, data) => {
//     if(err){
//         console.log.apply("Some error");
//     }
//     else{
//         console.log("Data is ", data);
//     }
// })

// console.log("End");

//**------------multiple Async reading operations */

// In this case the order of execution of the 
//Async operations is not fixed and hence we can get different results upon different runs

// const fs = require("fs");
// console.log("Start");

// fs.readFile("f1.txt", (err, data) => {
//     if(err){
//         console.log.apply("Some error 1");
//     }
//     else{
//         console.log("Data 1 is ", data);
//     }
// })

// fs.readFile("f2.txt", (err, data) => {
//     if(err){
//         console.log.apply("Some error 1");
//     }
//     else{
//         console.log("Data 2 is ", data);
//     }
// })

// fs.readFile("f3.txt", (err, data) => {
//     if(err){
//         console.log.apply("Some error 1");
//     }
//     else{
//         console.log("Data 3 is ", data);
//     }
// })

// console.log("End");

// below code maintains the order

const fs = require("fs");
console.log("Start");

fs.readFile("f1.txt", "utf-8",(err, data) => {
    if(err){
        console.log.apply("Some error 1");
    }
    else{
        console.log("Data 1 is ", data);
    }
    fs.readFile("f2.txt", "utf-8",(err, data) => {
        if(err){
            console.log.apply("Some error 1");
        }
        else{
            console.log("Data 2 is ", data);
        }
        fs.readFile("f3.txt", "utf-8",(err, data) => {
            if(err){
                console.log.apply("Some error 1");
            }
            else{
                console.log("Data 3 is ", data);
            }
        })
        
    })
})

console.log("End");

