// ES6 Arrow Functions
let hi = () => { console.log('howdy'); }
hi();

// Can't declare more hi because name already used
let hello = (name) => { console.log(`howdy ${name}`); };
hello('bob');

let add = (a, b) => { return a + b; };
console.log(add(7, 3));

// Arrow function inside map
let names = [ 'a', 'b', 'c', 'd' ];
names.map((name) => { console.log(`howdy ${name}`)});

