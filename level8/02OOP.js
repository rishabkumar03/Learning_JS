const user = {
    username: "rishab",
    loginCount: 3,
    signedIn: true,

    userInfo: function(){
        // console.log("getting info from user's database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.userInfo());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greet = function(){
        console.log(`namsste ${username}`);
        
    }

    // return this
}

const user1 = new User("gobuu", 90, true)
const user2 = new User("gob", 9, true)

// console.log(user1);
console.log(user2.constructor);
