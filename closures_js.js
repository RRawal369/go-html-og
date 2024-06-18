

// function grandma(){
//     recepie = "sectret recepie";
//     function doll(){
//         console.log("I know the secret recepie : ", recepie);
//     }
//     return doll;
// }

// const fun_var = grandma();
// fun_var();


//-------------------practice question -----------

function parent(){
    function child(){

        console.log(a);
        var a = 20;
        function child2(){

            console.log("This is inside child2", a);

        }
        return child2();
    }
    return child();

}

parent();