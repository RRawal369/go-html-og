
promise1 = new Promise((resolve, reject) => {

    setTimeout(() =>
        
        {
            const ishead = Math.random() > 0.5;
            if (ishead){
                resolve("It's a head");
            }
            else{
                reject("It's a tail");
            }

        }
        
        , 1000)
});

console.log(promise1, "Initial state");

promise1.then((result) => {console.log("We won : ", result, "Promise state is-", promise1)}).catch((error) => {console.log("We loose : ", error, "and promise state is -", promise1)})