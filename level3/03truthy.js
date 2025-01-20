const email = []

if (email) {
    console.log("got user email");
} else {
    console.log("please input email");
    
}

/* ---------------- IMPORTANT NOTES --------------------

FALSY VALUES -> false, 0, -0, BigInt, 0n, "", null, undefined, NaN
(the values other than falsy values are always considered as truthy values)

TRUTHY VALUES -> "0", 'false', " ", [], {}, function(){}

*/

// if (email.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullishing Coalescing operator (??): null undefined
// this operator is generally used for avoiding null/undefined values.

let value;
value = 5 ?? 576 //returns first value
value = null ?? 463 //ignores null or undefined and return next corresponding values
value = undefined ?? 46
value = null ?? 46 ?? 46

console.log(value);

// Terniary Operator
// this operator is used for checking conditions.

// condition ? true : false

const littiPrice = 40
littiPrice >= 50 ? console.log("expected price is high") : console.log("expected price is pretty nice");

