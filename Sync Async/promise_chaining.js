
//*************************** Promise chaining ***********************//

const cleanRoom = function() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Room is cleaned")
        }, 2000)
    })
}

const cleanGarbage = function() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Garbage is cleaned")
        }, 2000)
    })
}

const getIcecream = function(msg) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("You get the ice cream now !!")
        }, 1000)
    })
}

cleanRoom().then((result)=> {
    return cleanGarbage();
}).then((result)=> {
    return getIcecream(result)
}).then((result) => {
    console.log("You deserve and ice cream now !!")
}).finally(()=>{
    console.log("Say thank you!!")
})

// To handle the failure case at any stage of the chained promises, you can add just one catch statement at the end

