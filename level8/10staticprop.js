class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ //static is used for preventing replication of instances 
        return 123
    }
}

const me = new user("rishab")
console.log(me.createId())

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const poco =  new Teacher("pocoM2Pro", "poco@smartphone.com")
console.log(poco.createId()); //it shows typeError due to the static variable.

