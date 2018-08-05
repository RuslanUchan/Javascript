// A utility function to convert an array-like object (or suffix of it)
// to a true array. Used below to convert arguments objects to real arrays.
function array(a, n) { return Array.prototype.slice.call(a, n || 0); }

// The argument to this function are passed on the left
function partialLeft(f /*, ... */) {
    var args = arguments; // Save outer arguments
    return function() {
        var a = array(args, 1); // Start with the outer args from 1 on.
        a = a.concat(array(arguments)) // Add all inner arguments
        return f.apply(this, a); // Invoke f on that argument list
    }
}

// The arguments to this function are passed on the right
function partialRight(f /*, ...*/) {
    var args = arguments;
    return function() {
        var a = array(arguments);
        a = a.concat(array(args, 1));
        return f.apply(this, a);
    }
}
