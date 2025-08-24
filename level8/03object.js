function multipleBy5(num){
    return num*5
}

multipleBy5.power = 3

console.log(multipleBy5(4)); //acts as 5*4
console.log(multipleBy5.power); //returns as per their term declared previously
console.log(multipleBy5.prototype);

// THIS REFERS AS "JIS", iska mtlb this jaha dikha woh wahan ke partcular term ko access/declare kr rha.

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chana = new createUser("chana", 10) //new keyword is very important and yet powerful
const badam = createUser("badam", 60)

chana.printMe() //returns value of chana with attached statement.

/*

BTS of new keyboard usage :

Object Creation : The new keyword initiates the creation of a new Javacript object.

Prototype linkage : The newly created object gets linked to the prototype property of the constructor function. This means that it has accessible properties and methods defined on the constructor's protoype.

Calling Constructor : The constructor function is called with the specified arguements and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

New Object Return : After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function, etc.), the newly created object is returned.

*/