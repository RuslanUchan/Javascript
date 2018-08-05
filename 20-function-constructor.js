// Function constructor allows Javascript functions to be dynamically created and compiled at runtime
// Function constructor parses the function body and creates a new function object each time it is called. This proves to be inefficient when used inside loops
// Function constructor is treated as top-level object.
// Example

var a = 'global';
function constructFunction() {
    var a = 'local';
    return new Function('return a');
}
console.log(constructFunction()());

// Bonus
// To test is an object is actually a function
function isFunction(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
}


// Actual function constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw', '928bc', 2010);
console.log(myCar);
