/** ------------- OBJECT SINGLETON ----------- **/

// const user = new Object()
const user = {}

user.id = "r1zzha6"
user.name = "RAz"
user.isLoggedIn = true
console.log(user); //returns every keys with values

const regularUser = {
    email: "rishabkumar3.2005@gmail.com",
    fullname: {
        userName: {
            firstName: "rishab",
            lastName: "kumar"
        }
    }
}

console.log(regularUser.fullname.userName.firstName); //generally this linkage is used in returning exact desired value

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const objn = {5: "e", 6: "f"}

const obj3 = {...obj1, ...obj2, ...objn} //spread property is applied here
// const obj3 = Object.assign({}, obj1, obj2, objn )
console.log(obj3);


const names = [
    {
        name1: "sherawaliye",
    },
    {
        name2: "jyotawaliye",
    },
    {
        name3: "mehrawaliye",
    }
]

test = names[1].name1
console.log(test);

console.log(user);

console.log(Object.keys(user)); //displays only keys
console.log(Object.values(user)); //displays only values
console.log(Object.entries(user)); //displays both keys and values


console.log(user.hasOwnProperty('isLoggedIn')); //used in checking the condition

const chips = {
    chipsName: "halkeFulke",
    price: "₹10",
    chipsBrand: "haldiram's"
}

chips.chipsBrand

const {chipsBrand: brand} = chips //we can use any short name in place of any contents

console.log(chipsBrand); //this code will fall silently beacause in the above line:64, we did destructuring in renaming chipsBrand to brand and now the chipsBrand doesn't exist (only brand exist).

console.log(brand);
