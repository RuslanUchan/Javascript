// array is mutable

let a = [1, 3, 5, 7, 9]
let b = ['Someone', 'is', 'learning', 'js']

console.log(a, b)
console.log(typeof a, typeof b)
console.log(a.length, b.length)

b[0] = 'I'
b[1] = 'am'

console.log(b.join(" "))

/*
array.push(item) : put item at the end
array.pop() : remove item at the end
*/

/*
array can be used to store another array
and object
*/

// Array literal
arr = [];
// Array constructor
arr = new Array();
// Fill-in some values
arr = new Array('Hello', 'World!');

// push an element
arr.push('This', 'is', 'me');
console.log(arr);

// delete
delete arr[4];
console.log('Is index 4 there?', 4 in a);
console.log(arr);

// optimization for lookup
for (var i = 0, len = arr.length; i < len; i++){
    console.log(arr[i]);
}

// optimization skips null, undefined, and nonexistent
for (var i = 0, len = arr.length; i < len; i++){
    if (!arr[i]) continue;
    console.log(arr[i]);
}


// skip undefined, nonexistent
// if (a[i] === undefined) continue;

// skip nonexistent
// if (!(i in a)) continue;

// for each
var data = [1, 2, 3, 4, 5];
var sumOfSquares = 0;
data.forEach(function(x) {
    sumOfSquares += x*x;
});
console.log(sumOfSquares);
