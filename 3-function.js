function sayHello(name){
    console.log("Hello", name, ":)")
}

sayHello('Uchan')


let counter = 0;
function timeout() {
    setTimeout(function() {
        console.log('hi', counter++);
        timeout();
    }, 2000);
}

timeout();


// IIFE
// See that parenthesis before function()
// Also that last function call
(function() {
    console.log("This is an IIFE");
})();

function one() {
    return 'one';
}

console.log(typeof one);

// complex function and methods use
customer.surname.toUpperCase(); // invoke method on customer.surname
f().m(); // Invoke method m() to return value of f()

// method chaining
$(":header").map(function() { return this.id }).get().sort();

