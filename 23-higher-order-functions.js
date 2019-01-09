// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, and then passes
// the return value of g to f, and then returns the return value of f.
function compose(f, g) {
    return function() {
        // use call on f because passing a single value
        // apply on g because passing array of values
        return f.call(this, g.apply(this, arguments));
    };
}

var square = function(x) { return x * x; };
var sum = function(x, y) { return x + y; };
var squareofsum = compose(square, sum);
var check = squareofsum(2, 3);

console.log(check);

// What happens.
/*
* 1. Declare a compose higher order function, we also declare square and sum lower order function
* 2. Assign the lower order function into higher order function. The sequence matter because the call() and apply() are set in consideration of that
* 3. The higher order function accepts lower order function
* 4. Assign value into the higher order function, that is 2 and 3
* 5. Value is then accepted and passed into the lower order function, the g function (sum) and then processed via <this>
* 6. The return value of g (sum) is passed to f (square) and then processed via <this>
* 7. The return value of f is returned to the higher order function and returned again to the global scope.
*/
