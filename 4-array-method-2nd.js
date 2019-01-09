/*
* all new ES5 method can apply function to array elements on iteration
* each function have 3 arguments it can take
* they're array values, array index, and the array itself
* it looks like this
* function(v, i, a) {
    // do something here
}
*/


// #########################
// forEach()
// passes everything (or specified) to function, and do something (might not have return)
var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function(v) { sum += v; });
console.log("This is forEach", sum);

// terminating forEach()
// you can't use regular break, so you should use foreach.break

function foreach(a, f, t) {
    try { a.forEach(f, t); }
    catch(e) {
        if (e === foreach.break) return;
        else throw e;
    }
}
foreach.break = new Error("StopIteration");


// #########################
// map()
// passes each elements to function and return an array returned from the function. Always have return.

a = [1, 2, 3];
b = a.map(function(v) { return v*v; });
console.log("This is map", b);


// #########################
// filter()
// return array of subset from previously passed array
// the function passed should return True or False value (predicate function)
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(v) { return v < 3; });
oddvalues = a.filter(function(v) { return v % 2 != 0; });
console.log("This is filter", smallvalues, oddvalues);

// filter skips missing elements in sparse arrays, it's return value is always dense

// use this to close gap in sparse arrays
var dense = sparse.filter(function() { return true; });

// to also remove undefined and null elements
a = a.filter(function(x) { return x !== undefined && x != null; });


// #########################
// every() and some()
// every is universal quantifier
// some is existential quantifier
// they're predicate function that return true or false values

a = [1, 2, 3, 4, 5];
a.every(function(x) { return x < 10; }); // true
a.every(function(x) { return x % 2 === 0; }) // false
a.some(function(x) { return x % 2 === 0; }) // true
a.some(isNaN) // false


// #########################
// reduce() and reduceRight()
// also goes by the name of inject and fold

// reduce works subsequentially from the moment it return results to itself.
// a simple addition works like 1 + 2 = 3, 3 is returned and calculated again
// 3 + 3 = 6, 6 is returned and calculated again.

var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function(x, y) { return x + y; }, 0);

// essentially saying
// function(returned_value, initial_value_of_array)

// reduceRight does the same but it starts from higher to lower index

/*
Another example

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
*/


// #########################
// indexOf() and lastIndexOf()
a = [0, 1, 2, 1, 0];
a.indexOf(1); // 1
a.lastIndexOf(1); // 3

// also takes extra argument to specify in which index to start the search

// example on findAll function

function findAll(a, x) {
    var results = [], len = a.length, pos = 0;
    while(pos < len){
        pos = a.indexOf(x, pos);
        if (pos === -1) break; // done
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}

//
//
// use isArray() function to check if an object is actually an array
Array.isArray(a);

// String as Array
s = 'Javascript';
Array.prototype.join.call(s, ' ');
Array.prototype.filter.call(s,
    function(x) {
        return x.match(/[^aeiou]/);
    }).join('');
