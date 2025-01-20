let myName = 'rishab  '
let myInsta = 'rishab.verma03  '

console.log(myName.truelength); //trueLength isn't declared yet

let myMovies = ['laLaLand', 'oldboy']

let movieGenre = {
    laLaLand : "love",
    oldboy : "thriller",

    getOldboyGenre : function(){
        console.log(`OldBoy genre is ${this.oldboy}`);
    }
}

Object.prototype.rishab = function(){ //variable declaration as well as linkage to object
    console.log(`rishab is present in all subjects`);
}

Array.prototype.hiRishab = function(){ //variable declaration as well as linkage to array
    console.log(`Rishab bole hello hello`);
}

movieGenre.rishab() //returns from object.prototype
myMovies.rishab() //returns from same object.prototype
myMovies.hiRishab() //returns from array.prototype
// movieGenre.hiRishab()

// INHERITANCE
// It is used for linkage of certain/selected key & values from one another.  

const User = {
    name: "rishabKumar",
    email: "rishabkumar3.2005@gmail.com"
}

const Me = {
    isLoyal: true
}

const LoveSupport = {
    isAvailable: false
}

const FinancialSupport = {
    acsessMoney: "Little Bit",
    everyTime: "false",
    __proto__: LoveSupport
}

Me.__proto__ = User // __proto__ is an accessor property on object prototype consists of getter & setter function.

// Modern Syntax

Object.setPrototypeOf(LoveSupport, Me) //setting prototype

let anotherUsername = "pattagobhi  "

String.prototype.truelength = function(){ //this function holds the creation of required prototype.
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);    
}

anotherUsername.truelength() //returns length of acceseed string.
// "rishab".trueLength()
// "Machlii".trueLength()