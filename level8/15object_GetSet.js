const User = {
    email: 'rishabkumar3.2005@gmail.com',
    _password: "raesab123",

    get email(){
        return this._email.toUpperCase() // It will fall silently because whenever a getter/setter is called, this is bound to the object where it is calling in it, not where it was defined.
    },

    set email(value){
        this._email = value
    }
}

const fake = Object.create(User)
console.log(fake.email);

// there whole code is object based and it is used comparatibly less than class based because this case doesnt provide much functionality/requirements as per needed.