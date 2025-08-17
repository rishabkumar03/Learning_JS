const myArr = [1, 2, 3, 5, 6]
const myParts = ["biceps", "Forearms", "Shoulders"]

const otherArr = new Array(2, 3, 54, 5)
console.log(myArr[0]);

/** ---- ARRAY METHODS ----**/

myArr.push(65) //add data
myArr.push(45)
myArr.pop() //removes last element

myArr.unshift(7) //adds element in 0th index, messed up the computer memory
myArr.shift() //removes element from 0th index, messes also..

console.log(myArr.includes(45)); //boolean used for checking presence
console.log(myArr.indexOf(76)); //returns index of defined element


const newArr = myArr.join() //returns array as an string

console.log(myArr);
console.log(typeof newArr); //returns datatype (here string)

/** ------SLICE & SPLICE------ **/

console.log("A ", myArr);

const mynewA = myArr.slice(1, 3) //creates a new array from original array with portion of elements

console.log(mynewA);
console.log("B ", myArr);

const myNewB = myArr.splice(1, 3) //mutates original array itself by removing, replacing or adding 
console.log("C ", myArr);
console.log(myNewB);

/* 

DIFFERENCE BETWEEN SLICE AND SPLICE:

SLICE:
    - Doesn't change the original array (non-destructive).
    - SYNTAX: array.slice(start, end)

SPLICE: 
    - Changes the original array (destructive).
    - Can add, remove or replace elements.
    - SYNTAX: array.splice(start, deleteCount, item1, item2, ...)
    
*/