//definePrperty is a method which defines a new property directly on an object.

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const encounter = new User("SP.encounter@gmail.com", "encounter")

console.log(encounter.email);

//there whole code is function based which was generally used before. and it is harder to understand syntactically