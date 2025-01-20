const score = 535
console.log(score); //shows as string


const availBalance = new Number(100)
console.log(availBalance); //shows as number

console.log(availBalance.toString().length); //toString -> converts into string & length -> refers to total number of index
console.log(availBalance.toFixed(5)); //toFixed -> shows desired number of digits through decimal

const savings = 34.436667
console.log(savings.toPrecision(1)); //returns a string rounded in desired digits. if desired isnt accurate, it mess the number like here 3e+436

const deposit = 13576
console.log(deposit.toLocaleString('en-IN')); //returns in indian system means ones-tens-hundreds-......

// ---------------------------------------- MATHS ----------------------------------- //

console.log(Math);
console.log(Math.abs(-10)); //converts negative integer into positive integer
console.log(Math.round(233.45)); //returns in rounded value
console.log(Math.ceil(345.4)); //ceil refers to ceiling, hence it rounds the value as greater
console.log(Math.floor(43.9)); //floor returns the lowest rounded value
console.log(Math.min(4, 546, 4.2, 657, 3.9)); //returns minimum value from the collection
console.log(Math.max(4, 546, 4.2, 657, 3.9)); //returns maximum value from the collection


console.log(Math.random()); //as per name, returns any random number between 0 to 1 in decimal form
console.log((Math.random()*101 )+ 1); //here 100 is used for upgrading random number to 3 digits and 1 is used for avoiding return value of 0

console.log(Math.floor(Math.random()*101) + 1); //following the same return type like above as well as it avoids the decimal digits andd return in round figure

const min = 23 //maximum value
const max = 67 //minimum value

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //it is the general formula for getting random value as per limit
