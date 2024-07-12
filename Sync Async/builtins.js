
const fs = require("fs");

console.log("Start");

// const data1 = fs.readFileSync("f1.txt", "utf-8");

const data1 = fs.readFileSync("f1.txt");

console.log(data1);

console.log(`Here is data1 : ${data1}`);

console.log("End");

