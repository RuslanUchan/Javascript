// Some simple functions here
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function addivided(x, y) { return x / y; }

// A function that takes one of function above
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// You can invoke it like this
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
// it's (2+3) + (4*5)

// Now something with object literals

var operators = {
    add: function(x, y) { return x + y; },
    subtract: function(x, y) { return x - y; },
    multiply: function(x, y) { return x * y; },
    divided: function(x, y) { return x / y; },
    pow: Math.pow
};

// This function takes operator name in object and look it up
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === 'function')
        return operators[operation](operand1, operand2);
    else throw 'unknown operator';
}
