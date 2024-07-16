
let promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
          
    const heads = Math.random() > 0.5

    if(heads){
        resolve("Promise 1 successful")
    }else{
        reject("Promise 1 failed")
    }

    }, 1000);
   
})

console.log(promise1, " This is the initial state");

promise1.then((res) => 
    {
        console.log(promise1, " This is the success state")
        console.log(res);

    }).catch((err) => 
        {   
            console.log(promise1, " This is the failure state")
            console.log(err);

        })

// Even if we provide synchronous task inside the promise it will execute, but there si no point, as there won't be any pending state



