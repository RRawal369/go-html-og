const fs = require("fs");

// console.log("start");

// // In the below case the order of the async tasks execution is not fixed

// fs.readFile("f1.txt", (err, data) => {

//     if(err){
//         console.log("There is an error");
//         return;
//     }
//     console.log("Your data 1: ", data)

// });

// fs.readFile("f2.txt", (err, data) => {

//     if(err){
//         console.log("There is an error");
//         return;
//     }
//     console.log("Your data 2: ", data)

// });

// fs.readFile("f3.txt", (err, data) => {

//     if(err){
//         console.log("There is an error");
//         return;
//     }
//     console.log("Your data 3: ", data)

// });

// console.log("end");

// In the below case the execution is fixed

console.log("start");

// In the below case the order of the async tasks execution is not fixed

fs.readFile("f1.txt", (err, data) => {

    if(err){
        console.log("There is an error");
        return;
    }
    console.log("Your data 1: ", data)
    fs.readFile("f2.txt", (err, data) => {

        if(err){
            console.log("There is an error");
            return;
        }
        console.log("Your data 2: ", data)
        fs.readFile("f3.txt", (err, data) => {

            if(err){
                console.log("There is an error");
                return;
            }
            console.log("Your data 3: ", data)
        
        })
        
    
    })

});


console.log("end");






