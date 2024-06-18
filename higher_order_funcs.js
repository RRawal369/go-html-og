

// The HOF are teh functions taking functions as parameters just to reduce the repetition of same logic (DRY- don't repeat yourself)

//HOF paradigm follows the pure function rule

// function area(rad_arr){
//     let result_arr = [];
//     for(let i= 0; i<rad_arr.length; i++){
//         result_arr.push(3.14*rad_arr[i]*rad_arr[i]);
//     }
//     return result_arr;

// }

// arr = [1,2,3];
// console.log(area(arr));

//------------------------------------

// function circum(rad_arr){
//     let result_arr = [];
//     for(let i= 0; i<rad_arr.length; i++){
//         result_arr.push(2*3.14*rad_arr[i]);
//     }
//     return result_arr;

// }

// arr = [1,2,3];
// console.log(circum(arr));


// -------------------------use case --------------------

function dia(rad){

    return 2*rad;
}

function circum(rad){

    return 2*rad*3.14;
}


function area(rad){

    return rad*rad*3.14;
}

function area_arr(rad_arr, logic){

    let res_arr = [];
    for(let i = 0; i < rad_arr.length; i++){
        res_arr.push(logic(rad_arr[i]));
    }
    return res_arr;

}
rad_arr = [1,2,3];
console.log(area_arr(rad_arr, dia));
console.log(area_arr(rad_arr, circum));
console.log(area_arr(rad_arr, area));