//promise is a returned object to which we attach callbacks, instead of passing callbacks into a function.

const promiseOne = new Promise(function(resolve, reject){ 
    //Do an Async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task 1 is complete');  
        resolve()  
    }, 1000)
})

promiseOne.then(function(){ //then is used for further working as response.
    console.log("Promise 1 Consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise 2 Consumed");
    
})

// the above 2 are two different types of sybntax implementation

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Patta", email: "Gobi@sabji.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); //here, then also acts as a chaining to earlier codes.
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "instagram", password: "Nhii"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);    
}).catch(function(error){ //catch is used for further working as reject.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //finally is used for both working of then & catch (reponse as well as reject) 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "tera jaana", password: "Wajda"})
        } else {
            reject('ERROR: Kooch went wrong')
        }
    }, 1000)
});

//  trycatch are alternatives of (.then.catch.finally),which is traditional and more useful techniques. 

async function consumePromiseFive() {
    try {
        const response = await promiseFive 
        console.log(response);  
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
    
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary') //fetch term in js replaces both async and await and also provide more insights.
.then((response) => {
    return response.json()
})
.then ((data) => {
    console.log(data);
})
.catch((error) => console.log(error))