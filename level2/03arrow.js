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

const plusTwo = (num1, num2) => { //explicit arrow function which needs presence of curly braces
    return num1 + num2
}

const plusTwoo = (num1, num2) => num1 + num2 //implicit arrow function, syntax 1 : it doesnt need any braces

const plusTwooo = (num1, num2) => (num1 + num2) //syntax 2 : it requires paranthesis

const plusTwoooo = (num1, num2) => ({greet: "namaste!"}) //here, paranthesis is also present
console.log(plusTwo(3, 5));