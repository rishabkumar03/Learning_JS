// the get method is used to access any source and,
// the set method is used to set the defined properties as per needed/required. 

class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase() //here, _email is used to provide a new keyword which access defined 'email'
    }

    set email(value){ //value refers to the data which acts after get property
        this._email = value
    }

    get password(){
        return `${this._password}rishab`
    }

    set password(value){
        this._password = value
    }
}

const rishab = new user("rishabkumar3.2005@gmail.com", "raz___03")
console.log(rishab.email);

// the whole code is class based and oftenly used in programming nowadays because of more functionality and has syntactically sugar. 