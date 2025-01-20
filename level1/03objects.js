// Singleton
// Object.create

/** ----------- OBJECT LITERALS --------- **/ 

const mySym = Symbol("k1")

const JsUser = {
    name: "Rishab",
    "nick-name": "RAz",
    [mySym]: "k1", //symbol declared within square brackets as key 
    age: 19,
    location: "Ranchi",
    email: "rishabkumar3.2005@gmail.com",
    isLoggedIn: true,
    lastLogInDays: ["Sunday"]
}

console.log(JsUser.email); //using dot(.) property is more better than using sq. brackets[]
console.log(JsUser["email"])
console.log(JsUser["nick-name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "abcd@gmail.com"
Object.freeze(JsUser) //locks the key values
JsUser.email = "huhaha@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hey! Buddy");
}
JsUser.greetingAgain = function(){
    console.log(`Hey! Buddy, ${this.name}`); //using string interpollation 
}

console.log(JsUser.greeting());

console.log(JsUser.greetingAgain());
