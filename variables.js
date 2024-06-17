// var a = 10;
// console.log(a);

// // this definition

// a = "hello";
// console.log(a);

// var a = 10;
// console.log(a);

// // this declaration

// var a = "hello";
// console.log(a);/


//------------------ let keyword introduced by ES6 (2015) stops redeclaration --------------


// let  a = 10;
// console.log(a);

// // this declaration

// let a = "hello";  // not allowed
// var a = "hello"; // not allowed
// console.log(a);


//------------------ let keyword allows redeclaration --------------


// let  a = 10;
// console.log(a);

// // this definition

//  a = "hello";  //  allowed
// console.log(a);

//------------------ const keyword blocks redeclaration and redefinition both--------------


// const  a = 10;
// console.log(a);

// a = "hello";  
// console.log(a);


//                  redeclaration             redefinition

// var                 Y                           Y
// let                 N                           Y
// const               N                           N 

// backticks allow us to use the string literals

 const x = 999;
 const result = `${x} number of people are watching`; // string literal
console.log(result);

console.log(`The value of 2+3 is ${2+3}`);

// when we don't initialize a variables with a value at the time of declaration it is undefined






