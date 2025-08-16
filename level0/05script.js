const bewkoof = "mein-lo"
const galti = 3

console.log(bewkoof + galti + " kyaa");

console.log(`oyee ${bewkoof} na thora bewkoof hun. Ab kya krun yaar..ho jaati hain gltiyan mujhse v hui zyada nii bs ${galti} baar`);


const sabji = new String('aaloo-dumm-ka-halwa')
console.log(sabji[3]); //shows characters as per index
console.log(sabji.__proto__); //includes prototypes
console.log(sabji.toLowerCase()); //change every character into lowercase
console.log(sabji.length); //shows length or sum of indexes
console.log(sabji.toUpperCase()); // change every character into uppercase
console.log(sabji.charAt(3)); // shows characters based on the index
console.log(sabji.indexOf('a')); // shows index based on characters

const nayaString = sabji.substring(-3,7)
console.log(nayaString); //splits the index but doesnt work if any negative integer is present

const diffString = sabji.slice(-9, 3) //splits the index although includes negative integer
console.log(diffString);
/*

- (start/end)
- here, start = 19 - 9 = 10 and end = 3.
- If start is negative, js counts from the end of string.
- If end is less than start, the result is just an empty string.

*/


const againString = "     hulala   "
console.log(againString);
console.log(againString.trim()); //removes blank spaces

const email = "rishabkumar3.2005@gmail.com"
console.log(email.replace('mar', 'wara')); //generally used in replacing any defined character
console.log(email.includes('humour')); //works as a boolean, used in declaring character presentation 

console.log(sabji.split('-', '2')); //used in triming as per desired character(-) and setting limit(2) and it shows it in terms of arrays

/** -- PRETTY USEFUL TO SEE EVERY STRING METHODS THROUGH MDN OR ANYWHERE ELSE -- **/