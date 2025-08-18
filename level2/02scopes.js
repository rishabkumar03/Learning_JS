var c = 345 //global scope

let a = 356 
if (true) { //block scope
    let a = 13
    const b = 3
    console.log("INNER: ", a);
}

console.log(a);
console.log(b); //b will be not returned because const  and console is in two different scopes
console.log(c);

function one() {
    const username = "jio"

    function two() {
        const host = "fiber"
        console.log(username);
    }
    console.log(host); //displays error because this console is present outside the scope where variable host is declared 
    
    two() //returns username as jio
}

one()

if (true) {
    const username = "jio"
    if (username === "jio") {
        const host = "fiber"
        console.log(username + host);
    }
    console.log(host); //error - outside the scope where host is declared
}

console.log(username);


/**^^^^^^^^^^^^^^^^^^^ INTERESTING ^^^^^^^^^^^^^^^^^^^^**/

console.log(plusOne(5)); //in this syntax, function declaration has done after console i.e. it will execute properly

function plusOne(num) {
    return num + 1
}


console.log(plusTwo(76)); //in this syntax, variable declaration has done after console i.e. it will show error.

const plusTwo = function (num) {
    return num + 2
}

/* 

- Hoisting means before executing the code, JS Engine moves the decalrations (not the values) of the varibles and functions to the top of their scopes.
- These declaration works properly in functions and var variable while it shows REFERENCE ERROR in let/const varible because these variables lies in TDZ (Temporal Dead Zone) until the actual line of code is reached. 

*/