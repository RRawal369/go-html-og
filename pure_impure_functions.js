
// Pure --> pure output for same input
//impure --> might get different output for same input

// function puresum(a, b){
//     console.log(a+b);
// }

// puresum(2,3);
// puresum(2,3);
// puresum(2,3);


//------------------------------------

var c = 0;

function impuresum(a,b){
    console.log(a+b + (c++));
}

impuresum(2,3);
impuresum(2,3);
impuresum(2,3);