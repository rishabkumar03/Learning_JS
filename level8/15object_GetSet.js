const User = {
    email: 'rishabkumar3.2005@gmail.com',
    _password: "raz___03",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const fake = Object.create(User)
console.log(fake.email);

// there whole code is object based and it is used comparatibly less than class based because this case doesnt provide much functionality/requirements as per needed.