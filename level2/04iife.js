// Immediately Invoked Function Expressions (IIFE)

(function chocolate() { //we generally use IIFE for avoiding global pollutions.
    // named IIFE 
    console.log(`MISSION -> SAVE LUFFY`);
})();

( (power) => {
    // unnamed IIFE
    console.log(`GEAR4 SNAKEMAN ${power}`);
}) (`CAPABILITY`)