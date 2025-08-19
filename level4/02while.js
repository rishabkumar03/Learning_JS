let index = 0
while (index <= 10) { //while loops are similar as for loops on the basis of [entry controlled loops]
    console.log(`Value of index is ${index}`);
    index = index + 2  //precedence by 2  
}

let motivationalMovies = ['super30', '3Idiots', '12thFail']

let view = 0
while (view < motivationalMovies.length) {
    console.log(`Value is ${motivationalMovies[view]}`);
    view = view + 1
}

let pushUps = 51
do { //do while loops are [exit controlled loops] i.e. it always run once even if the condition is false.
    console.log(`pushup is ${pushUps}`);
    pushUps ++
} while (pushUps <= 50); //here, it only logs out "pushup is 51"