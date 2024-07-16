
const fs = require("fs");

const readFile1 = fs.promises.readFile("f1.txt", "utf-8")
const readFile2 = fs.promises.readFile("f2.txt", "utf-8")
const readFile3 = fs.promises.readFile("f3.txt", "utf-8")

readFile1.then((data) => {
    console.log(data);
    return readFile2;
}).then((data)=> {
    console.log(data);
    return readFile3;
}).then((data) => {
    console.log(data);
    console.log("Hurray !! all done")
}).catch((err)=> console.log("Oops" , err))

// An importamt note related to the execution order, microtask queue (for promises) takes 
//precedence over task queue (for async functions)

