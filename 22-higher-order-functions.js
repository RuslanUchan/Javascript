// Higher order functions are functions that operates on another functions and return a new functions
// Example
function not(f) {
    // Accepts function as argument
    // return new function that negates the passed function
    return function() {
        var result = f.apply(this, arguments);
        return !result;
    };
}

var even = function(x) {
    return x % 2 === 0;
};

var odd = not(even);
var check = [1, 1, 3, 5, 5].every(odd);
console.log(check);
