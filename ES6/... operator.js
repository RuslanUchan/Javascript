/*
* Three dots (...) operators can be used as spread operator and rest operator
*/

// Rest Parameters
/*
With rest parameters, we can gather any number of arguments into an array and
do what we want with them.
*/

function myFunc(a, b, ...args) {
    console.log(a); // 22
    console.log(b); // 98
    console.log(args); // [43, 3, 26]
}

myFunc(22, 98, 43, 3, 26);

// This one would provide error
// It makes no sense to spread operator in the middle of the arguments
/* Like so
function myFunc(arg1, ...rest, arg2) {
    // arg2 ?
}
*/

// Rest parameters unpacking
function myFunc(...[x, y, z]) {
    return x * y * z;
}

myFunc(1); // NaN
myFunc(1, 2, 3); // 6
myFunc(1, 2, 3, 4); // 6 (fourth parameter is not destructured)

/* ======================================================= */
// Spread Operators

function myFunc(x, y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params);
}

var inputs = ['a', 'b', 'c', 'd', 'e', 'f'];
myFunc(...inputs);

// Combining arrays
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty];

console.log(pizzas);

// Shallow cloning (excluding prototype) or merging objects w/o Objects.assign
var obj1 = { foo: 'bar', x: 42};
var obj2 = { foo: 'bat', y: 13};

var clonedObj = { ...obj1 }; // Object { foo: 'bar', x: 42 }

var mergedObj = { ...obj1, ...obj2 }; // Objject { foo: 'bat', x: 42, y: 13}

console.log(clonedObj);
console.log(mergedObj);
