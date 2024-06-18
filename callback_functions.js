

function printname(func){

    console.log("Rohit");
    func();
}

function printlastname(){
    console.log("Rawal");
}

printname(printlastname)