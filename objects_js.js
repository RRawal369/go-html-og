
const obj = {

    name : 'Adam',
    age : 25,
    isadmin : false,
    fav_movies : ["DDLJ", "RHTDM", "Swades"],
    fav_book : {
        name : "Harry potter",
        author: "J. K Rowling" 
    },
    print_name : function printname() {console.log("Rohit")}

}

console.log(obj)

//two ways of accessing the values in objects

console.log(obj.name)
console.log(obj["age"])
obj.print_name()
