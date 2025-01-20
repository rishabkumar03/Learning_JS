// FOR EACH :- it allows to iterate over an array & perform an operation on each element of the array

const frameworks = ["react", "node", "next"]

frameworks.forEach( function (val){ //here, function callback is used.
    console.log(val);
    
})

frameworks.forEach( (val) => {
    console.log(val);
    
})

function printMe(item){ //printMe characteristics is generally used as per its name, it means returning ownself
    console.log(item);
}

frameworks.forEach(printMe)

frameworks.forEach( (item, index, arr)=> { //here, it performs operations like index and accessing array as well as its values
    console.log(item, index, arr);

})

const codeBuddy = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Hyper Text Markup Language",
        languageFileName: "html"
    },
    {
        languageName: "Cascading StyleSheet",
        languageFileName: "css"
    }
]

codeBuddy.forEach( (item) => {
    console.log(item.languageName); //here, it is performing an specific operation of returning value of languageName (element) 
    
})