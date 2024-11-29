// Immediately Invoked Function Expressions (IIFE)


(function coffie(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sudip')
