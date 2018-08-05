// Functional operations with arrays

var sum = function(x, y) { return x + y; };
var square = function(x) { return x * x; };

var data = [1, 1, 3, 5, 5];
var mean = data.reduce(sum)/data.length;
var deviations = data.map(function(x) { return x-mean; });
var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));

console.log(mean, stddev);

// What happens.
/*
* 1. Declare sum() and square() functions, an data[] array of values, and all operations to come is stored into variables.
* 2. on line 7: assign value to mean (Number) via reduce().
* array data[] is accessed via reduce() method call, as the typical reduce() call without 2nd argument of index initializer, it starts from the initial index of array. And then applies sum() into the called elements.
* 3. After the first called elements is processed in sum(), reduce() continue to juggle the returned statements with sum() until the end. The result is then divided by array.length
* 4. on line 8: map() used to apply function that return elements_value - mean (previously calculated) into all elements of data[]. map() return arrays, stored into deviations.
* 5. on line 9: square() is mapped into elements of deviations[] and then the returned value from map() is accessed by reduce() to then summed up via sum() and juggle by reduce () until the end.
*
* line 9 pattern: map() square() to deviations[] elements, then sum() via reduce() and repeat.
*
*
*/
