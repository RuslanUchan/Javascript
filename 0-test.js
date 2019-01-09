var s = 'hello world!';
var word = s.substring(s.indexOf(" ")+1, s.length);
console.log(word)

var a = [];
var b = a;
b[0] =1;
console.log(a[0])
console.log(a == b)


// Short Circuiting
var a = 0, b = 0;
var invoked = function(){
    console.log("Invoked!")
}
if (a == b) invoked();
(a == b) && invoked();

// Logical OR can be used as default values
// Example
function copy(o, p){
    p = p || {} // If no object passed for p, use a new object
    // function body
    return p
}

var arr1 = [4, 3, 2, 1];
var arr2 = [];

console.log(copy(arr1, arr2))


// Logical NOT
// ! evaluates falsy and truthy and do negations on it
// !false is true

// !! converts value to Boolean()
// !!false is false

console.log(!a, !!a)


// Ternary
// Absolute value of x
var x = -17
var abs_x = x > 0 ? x : -x
console.log(abs_x)

// "" evaluates to false
// use "there" instead
var username = ""
var greeting = "Hello " + (username ? username : "there!")
console.log(greeting)


// Comma operator
for(var i = 0, j = 10; i < j; i++, j--){
    console.log(i+j);
}
