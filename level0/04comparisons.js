console.log("3" > 4);
/* When comparing a string to a number, JavaScript tries to convert the string into a number first (type coercion). */

// console.log("04" > 4);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* 

- The >= operator converts both sides to numbers before comparing. 
- null → converted to 0 (number).

*/

/* COMPARISONS OF DATATYPES

-> an equality check == and ><>=<= work differently.
-> comparisons convert null to a number, treating it as 0

->  == this opeartor doesnt follows datatypes
->  === this operator strictly follows datatypes*/