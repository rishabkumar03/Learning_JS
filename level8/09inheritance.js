class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{ //extends is used for linkage of data from a certain function to another.
    constructor(username, email, password){
        super(username) //super keyword is used to call the constructor of its parent class to access parents properties and methods.
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was launched by ${this.username}`);
    }
}

const me = new Teacher("Dr. Irfan Alam", "irfan.alam@gmail.com", "maqsadNiiBhulungaBhaijaan")

me.logMe()

const her = new user("sapno ki rani")

her.logMe()

console.log(me instanceof user); //instanceof property is used in recognizing prototype property in prototype chain. it always returns value in boolean figure.