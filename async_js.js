
//if a function doesn't have a name it is called anonymous function

//--------------------Sync programming-----------------

// console.log("Start");

// function sync_func(){
//     console.log("Hello")
// }
// sync_func()

// console.log("End")

//--------------------Async programming-----------------

// Good example to understand the event loop

// JS is not Async by itself, but it can perform concurrent task with the help of web APIs

console.log("Start");

setTimeout(function(){console.log("Hello1");}, 1000)

setTimeout(function(){console.log("Hello2");}, 1000)
let sum = 0;

for(let i = 0; i <=200; i++){
    sum = sum + i;
        
}

console.log("This is the sum", sum)
console.log("End1")
console.log("End2")
console.log("End3")
console.log("End4")
console.log("End5")
console.log("End6")
console.log("End7")
console.log("End8")
console.log("End9")