// this methods performs in ES6 VERSION or higher !

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){ //a new created function for a specific ordered task.
        return `${this.password}seayyy`
    }

    modifyingData(){
        return `${this.username.toUpperCase()}`
    }
}

const me = new user("rishab.verma03", "rishabkumar3.2005@gmail.com", "salarygpt03")

console.log(me.encryptPassword());
console.log(me.modifyingData());

// BEHIND THE SCENE - This is how code works and the above set of codes are represented for easier implementation.

// function user(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// user.prototype.encryptPassword = function(){
//     return `${this.password}seayyy`
// }

// // .prototype is considered for reusability

// user.prototype.modifyingData = function(){
//     return `${this.username.toUpperCase()}`
// }

// const you = new user("r1zzha6", "klrahulcricketlover@gmail.com", "paanimizu") //new keyword is essentially required 

// console.log(you.encryptPassword());
// console.log(you.modifyingData());