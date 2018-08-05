// Classes are used via constructor
// Constructor are used with
// <class name>.prototype to declare the prototype (essentially constructor)
// After that then, the constructor used to make object
// This is the dawn of OOP in Javascript

// Constructor
function Range(from, to) {
    this.from = from;
    this.to = to;
}

// Prototype
Range.prototype = {
    constructor: Range,
    includes: function(x) { return this.from <= x && x <= this.to; },
    foreach: function(x) {
        for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

// Another way to make Prototype
/*
* Range.prototype.includes = function(x) { return this.from <= x && x <= this.to; },
* Range,prototype.foreach = function(f) {
    for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
}
etc
}
*/

// Constructor are accessed via new keyword
// And it is 'instantiated'
var r = new Range(1, 3);
console.log(r.includes(2));
console.log(r.foreach);
console.log(r);
console.log(r instanceof Range);


// Every Javascript function except functions returned with Function.bind() has prototype property.
// The value of this property is a single nonenumerable constructor property. line 14
// That constructor property is the function object. line 8
