const user = {
    greet : "namaste!",
    price: 456,

    welcomeGreeting: function () {
        console.log(`${this.greet}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeGreeting()
user.greet = "namashkar!"
user.welcomeGreeting()

console.log(this); //returns undefined

// this only works properly in objects while it returns 'undefined' in functions/variables.

function wifi() {
    let greet = "namaste!"
    console.log(this.greet);
    
}

wifi()

const wifi = function() {
    let greet = "namaste"
    console.log(this.wifi);
    
}

const wifi = () => { //arrow function implementation
    let greet = "namaste"
    console.log(this);
    
}
wifi()

/* 

- ARROW FUNCTION doesn't have their own this.
- Instead they lexically inherit this from their surrounding scope (the place where they are defined).

** Node.js
    - The surrounding scope is module, not a class/object.
    - So this in Node.js is top-level is an empty object {}.
    - Output : {}.

** Browser
    - There the surrounding scope is window, not a module/class/object.
    - So this in Browser is 'windows'.
    - Output : Window object with lots of properties.

*/

const plusTwo = (num1, num2) => { //explicit arrow function which needs presence of curly braces
    return num1 + num2
}

const plusTwoo = (num1, num2) => num1 + num2 //implicit arrow function, syntax 1 : it doesnt need any braces

const plusTwooo = (num1, num2) => (num1 + num2) //syntax 2 : it requires paranthesis

const plusTwoooo = (num1, num2) => ({greet: "namaste!"}) //here, paranthesis is also present
console.log(plusTwo(3, 5));