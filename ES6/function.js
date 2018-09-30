// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

console.info(multiply(5, 5));
console.info(curriedMultiply(5)(5));
console.info(multiplyBy5(10));

// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

let x = compose(sum, sum)(5);

console.info(x);

let y = compose(multiplyBy5, multiplyBy5)(5);

console.info(y);

/*
* # SIDE EFFECTS
* any action happens inside the function that affets
* the state of the global scope
*
* # FUNCTIONAL PURITY
* avoid side effects in a program and
* give return values
*
* # DETERMINISTIC
* when a functions, run even as many times
* it will still return the same things again and again
* that's called deterministic (the same return value
* returned again and again
*)
*/
