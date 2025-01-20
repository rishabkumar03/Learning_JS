// FOR LOOP 

for (let i = 0; i <= 4; i++) { 
    const element = i;
    if (element == 4) {
        console.log("it represents four");    
    }
    console.log(element);
    
}

// console.log(element);

for (let i = 2; i <= 10 ; i++) {
    console.log(`Outer loop value: ${i}`); 
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
}

let mySong = ["kaat le le raja ji", "puche yeh tu ki tujhme mein kya dekhta hun", "apne lover ko dhokha do aurhmein v darling mauka do"]
for (let index = 0; index < mySong.length; index++) {
    const element = mySong[index];
    console.log(element);
    
}

// BREAK AND CONTINUE

for (let index = 1; index <= 20; index++) {
    if (index == 3) {
        console.log("Here is my lucky number three");
        break //as per the name, it breaks the statement
    }
    console.log(`Value of i is ${index}`);    
}

for (let index = 1; index <= 20; index++) {
    if (index == 3) {
        console.log("Here is my lucky number three");
        continue //as per the name, it generally continues the statement
    }
    console.log(`Value of i is ${index}`);
}