/** 
DATATYPES 

-> it is of two types 1.primitive(call by value) and 2.non-primitive(call by reference)

1. generally primitive is of 7 types : string, number, boolean, null, undefined, symbol, and bigint
**/

const score = "35" // string - string
const scoreValue = 133.67 // number - number
const isLoggedIn = false // boolean - boolean
const bio = null // null - object
let post; // undefined - undefined

const accountId = Symbol('r1zzha6'); // symbol - symbol
const otherId = Symbol('rishab.verma03')

console.log(accountId === otherId);

//const bigData = 24354685037634534n // bigInt - bigint

/**  
2. it is of 3 types : array, objects, and functions 
**/

const favCharacters = ["luffy", "sanji", "senor pink"]; // array - object
let myObj = {
    name: "nami",
    age: 19,
    weapon: "clima takt"
 } // object - object

 const myFunction = function(){
    console.log("heluuuu");
 } // function - function

 console.log(typeof myFunction);
 
 /**  null ka 'typeof' se datatype hmesha 'object' aata hai. **/

//************************************* MEMORY  ***********************************//
 
/** MEMORY
 -> it is of two types : 1.Stack(primitive)  2.Heap(non-primitive) **/

 let myFavAnime = "onePiece"

 let regularAnime = myFavAnime
 regularAnime = "attackOnTitan"

 console.log(myFavAnime);
 
 console.log(regularAnime);
 

 let pehlaUser = {
   email: "xyz@gmail.com",
   upi: "angduBangdu@okicici"
 }

 let dusraa = pehlaUser

 dusraa.email = "huiiHaaa@gmail.com"

 console.log(pehlaUser);
 console.log(dusraa);
 