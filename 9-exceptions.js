// throw statements better accompanied with
// Error() class

function beZero(x) {
    if (x == 0) throw new Error("x is already zero");
    someVar = x - x
    return someVar
}

console.log(beZero(0))


// More examples
// verbose and explicit
var len = undefined;
if (book) {
    if (book.subtitle) len = book.subtitle.length
}

// or
// idiomatic way
var len = book && book.subtitle && book.subtitle.length;


// Try - catch || Try - finally

try {
// Normally, this code runs from the top of the block to the bottom
// without problems. But it can sometimes throw an exception,
// either directly, with a throw statement, or indirectly, by calling
// a method that throws an exception.
}
catch (e) {
// The statements in this block are executed if, and only if, the try
// block throws an exception. These statements can use the local variable
// e to refer to the Error object or other value that was thrown.
// This block may handle the exception somehow, may ignore the
// exception by doing nothing, or may rethrow the exception with throw.
}
finally {
// This block contains statements that are always executed, regardless of
// what happens in the try block. They are executed whether the try
// block terminates:
// 1) normally, after reaching the bottom of the block
// 2) because of a break, continue, or return statement
// 3) with an exception that is handled by a catch clause above
// 4) with an uncaught exception that is still propagating
}

// Concrete examples

try {
    // statements
    // you can insert throw
} catch(e) {
    // you can insert throw again
    console.log(e); // this refers to 'printing error'
    // do handles of problems
    // or
    // do nothing. silenced error
}

// onerror
window.onerror = function(msg, url, line) {
    alert(`Message: ${msg}. URL: ${url}. line: ${line}`);
}
