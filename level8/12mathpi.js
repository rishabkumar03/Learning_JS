const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //this property descriptor decripts features about writable, ennumerable, configurable and iterable.  and  PI refers to 3.145 and so on. 

console.log(descriptor);

console.log(Math.PI);
Math.PI = 5 //Math.PI != 5 beacuse PI is pre-defined constant in ES6 javascript.
console.log(Math.PI);

const water = {
    name: 'hot water',
    price: 50,
    isAvailable: true,

    boilWater: function() { //this appropriate syntax results in iteration of code
        console.log("who will pay the electric bill?");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(water, "name"));

Object.defineProperty(water, 'name', { //define property results in modification of writable, ennumerable, configurable and iterable.
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(water, 'name'));

for (let [key, value] of Object.entries(water)) { //forof loop is used for looping of object and object.entries is used for looping specified object.
    if (typeof value !== 'function') { //typeOf is used for recognizing a certain datatype.
        
        console.log(`${key}: ${value}`);
    }
    
}