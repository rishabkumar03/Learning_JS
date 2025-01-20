// FOR OF - this type of loop is generally used in iteration especially in arrays

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    console.log(num); //returns items of arr
    
}

const kalesh = "dada-dadi"
for (const regular of kalesh) {
    console.log(`Har din ki ladai me partners ${regular}`); //returns every letters in each sentences like in first it returns 'd'
    
}

//MAPS :- it is used to iterate unique keys and values, it doesn't returns same element twice

const map = new Map()
map.set('JH', "Jharkhand")
map.set('WB', "West Bengal")
map.set('BR', "Bihar")
map.set('JH', "Jharkhand")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const mine = {
    character1 : 'Pawn',
    character2 : 'Queen'
}

// for (const [key, value] of mine) {
//     console.log(key, ':-', value);
    
// }
