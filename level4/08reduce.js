//REDUCE -> This method is used to reduce an array to a single value by passing a callback function on each element of the array

const myNums = [1, 2, 3]

const myToyal = myNums.reduce(function (acc, curval) {//acc means accumulator and currval means current value
    console.log(`acc: ${acc} and currval: ${curval}`);
    
    return acc + curval//it performs as 3+1=4; 4+2=6; 6+3=9
}, 3)// 3 is used as accumulator which means the operation will start from 3

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 5)//5 is accumulator

console.log(myTotal);

const totalCost = [
    {
        item: "mouse",
        price: 234
    },
    {
        item: "keyboard",
        price: 425
    },
    {
        item: "wifi adapter",
        price: 351
    },
]

const amount = totalCost.reduce( (acc,item) => acc+item.price,0)//setting value as 0 is mandatory to avoid any miscalculation.
console.log(amount);
