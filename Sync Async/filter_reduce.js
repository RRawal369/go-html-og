// filter those records having score < 80 for an array of objects


// arr = [{
//     name: "Rohit",
//     score: 90
// }, 
// {
//     name: "Seema",
//     score: 40
// }, 
// {
//     name: "Rahul",
//     score: 85
// }]

// res = arr.filter((ele) => ele.score > 80);

// console.log(res)

// As map and filter both produce the arrays as result we can chain them

//Filter the scores greater than 80 and add one more attribute to object element, pass = True


///** Notice that if the return statement is the only statement in the function, we can ommit the return keyword */

// res = arr.filter((ele) => ele.score > 80).map((ele) => {
//     return {name: ele.name, score: ele.score, pass: true}
// });

// console.log(res)


// ----------------------------------

arr = [1,2,3,4,5];

res = arr.reduce((accu, ele) => accu + ele, 0);

console.log(res);


