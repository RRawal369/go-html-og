// empty array
// const arr = []

// const arr1 = [1,2,3]
// console.log(arr1)

// const arr2 = [1,'hello', 2.2, [1,2], true, null, undefined]
// console.log(arr2)

// console.log(arr1[2]);
// console.log(arr2[3][1]);

// // values of even the const arrays can be changed, 
// //this is because whenever we declare refrence variables using the const then we can't define or declare the 
// // variables but we can maipulate their values

// // arr2 = [12,13] // not allowed

// arr2[2] = 13 // allowed
// console.log(arr2);

//--------------------------------- array operations ---------------

const cars = ['zen', 'maruti', 'nexon'];
// console.log(cars)

// //console.log(cars.push('audi'));
// cars.push('audi')
// console.log(cars)

// const popped_val = cars.pop()
// console.log(cars)
// console.log(popped_val)

//------------------- insert at the start -------------------

console.log(cars)
cars.unshift('suzuki')
console.log(cars)

//------------------- deleting the element form the start-------------------

const shifted_ele = cars.shift()
console.log(cars)
console.log(shifted_ele)









