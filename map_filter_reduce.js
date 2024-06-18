
//map applies a function to each element of an array

// Q. sqaure teh elements of an array

// arr = [1,2,3,4];

// let res = arr.map(function(ele){return ele*ele;});

// console.log(arr) // arr itself doesn't change
// console.log(res)

//----------------map in the form of arrow functions----------------

 arr = [1,2,3,4]

 let res_new = arr.map(ele => {return 2*ele;});
 console.log(res_new)