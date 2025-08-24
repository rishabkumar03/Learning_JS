function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username) //here, call is used for reference in layers of global execution and this performs solution of complex calls (here).

    // .call() executes a function in specific context

    this.email = email
    this.password = password
}

const me = new createUser("rishab", "rishab@lpm.com", "huhua123") //new keyboard is used for linking above function.
console.log(me);

// here, createUser{...} will be logged with 'called'
