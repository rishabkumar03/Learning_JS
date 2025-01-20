const strawHats = ["luffy", "nami", "sanji"]
const sweetGeneral = ["katakuri", "cracker", "smoothie"]

strawHats.push(sweetGeneral) //joins two arrays but with unwanted square bracket
console.log(strawHats);
console.log(strawHats[3][2]); //helps in finding characters from index

const toughOnes = strawHats.concat(sweetGeneral) //joins two arrays perfectly
console.log(toughOnes);

const strongPirates = [...strawHats, ...sweetGeneral] //spread property-> joins two arrays same as concat

console.log(strongPirates);

const nums = [24, 4, 54, 5, 53, [34, 3, 4], 44 ,[2, 22, 44, [31, 8]]]

const numArr = nums.flat(Infinity) //returns every element without any brackets
console.log(numArr);

console.log(Array.isArray("zhazhazha")); //boolean which checks the condition
console.log(Array.from("zhazhazha")); //changes from string to array
console.log(Array.from({laugh: "zhazhazha"})); //display empty array because key or value return condition isn't defined

let first = 123
let second = 45
let third = 32

console.log(Array.of(first, second, third)); 
