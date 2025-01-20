// ---------------- if ----------------- //
// const userLoggedIn = true
const temperature = 36

if ( temperature === 36 ){ //=== is generally used for comparing datatypes values
    console.log("hot! hot! hot!"); 
} else {
    console.log("great weather");
}

console.log("forecasting");

// <, >, <=, >=, ==, !=, === //TYPES OF OPERATORS

const score = 244

if (score > 100){
    let power = "improvement needed"
    console.log(`User power: ${power}`);
    
}

console.log(`User power: ${power}`); //let & const variable follows the rule of scope very well whereas var follows global scope

const balance = 1999 //different shades of control flow (if, else, else-if)

if (balance > 434) console.log("alright"),console.log("work hard");

if (balance < 500) {
    console.log(" less than 500");
    
} else if (balance < 750) {
    console.log(" less than 750");
    
} else if (balance < 900) {
    console.log(" less than 900");
    
} else {
    console.log(" less than 2999");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==5) { //usage of and operator //and operator requires every condition must be true
    console.log("Allow them to buy any courses");    
}

if (loggedInFromGoogle || loggedInFromEmail) { //usage of or operator //or operation states that it just any condition to be true
    console.log(" User logged in ");
    
}

