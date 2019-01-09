// Common error is to use closures with loop

// example
function constfuncs() {
    var funcs = [];
    for(var i = 0; i < 10; i++)
        funcs[i] = function() { return i; };
    return funcs;
}

var funcs = constfuncs();
funcs[5]() // return 10

// Scope chain associated with a closure is 'live'
// When constfuncs() return, the i inside loop has value of 10
// And that value is shared to funcs that is returned from constfuncs
// That's what made all funcs returned has value 10

// What happen is:

// 1. Loop executed and i starts at 0
// 2. Loop finds function that returns i, because it is referenced later (not actually invoked, just declared) it skips the function and declare it as array elements
// 3. Loop continues and assign the function to all of funcs array
// 4. Finally loop ends and then return statement of funcs are made. Funcs returned with all it's element that referenced the function in the loop
// 5. and then variable funcs in the global actually stored the return funcs statement
// 6. The array and then accessed via funcs variable and also function inside is invoked at the same time. And what happen is that it returns i.
// Problem is, value of i is currently 10. And that's the value that is returned


// Another common error is regarding this and arguments binding
var theyAre = this, arguments;

// this keyword and arguments are unique to the function itself, and inner function can't access this and arguments keyword of outside function
// unless this and arguments are stored in a variable before references
