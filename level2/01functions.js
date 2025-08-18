function say() {
    console.log("Y");
    console.log("E");
    console.log("A");
    console.log("H");
    console.log("B");
    console.log("A");
    console.log("B");
    console.log("Y");
}

say() //generates output like this in function

function addTwoNums(num1, num2){
    console.log(num1 + num2);
}

function addTwoNums(num1, num2){
    let result = num1 + num2
    console.log("habduu");
    return num1 + num2  //generates output  
}

// I defined addTwoNums twice, due to which the first function is overwritten by second function.

const sum = addTwoNums(35, 35) //extract input in function from here

console.log("sum: ", sum);


function loginNotification(username = "no-one"){ //we can input pre-built statements if username is empty string
    if (!username) { // ! is used as not
        console.log("are you blind or something, please enter your username.");
        return
    }
    return `${username} just logged in`
}

console.log(loginNotification("abhijeet")) 
console.log(loginNotification()); //returns undefined 

function calculateCartPrice(val1, val2, ...num1) { //here, val1 & val2 represents first and second elements of function calculateCartPrice
    return num1
}

console.log(calculateCartPrice(570, 356, 56, 3256));

const customer = {
    customerName : "chomuu",
    prices : 466
}

function handleObject(anyObject){
    console.log(`Customername is ${anyObject.customerName} and prices is ${anyObject.prices}`); //string interpollation with proper directory and parent connection
    
}

handleObject(customer)
handleObject({
    customerName: "noOne",
    prices: "free"
})

const myNewArray = [432, 56, 6354, 5446]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([432, 56, 6354, 5446])); //this and above represents two different types of function calls

