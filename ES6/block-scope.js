let read, write;

// free-standing block
// a block without statement
{
    // data is private - not accessible from outside scope
    let data = {};

    write = function(key, val) {
        data[key] = val;
    }

    read = function(key) {
        return data[key];
    }
} // closing the free-standing block

// doing the procedure
write('message', 'Welcome to ES6!');
console.log(read('message'));

// accessing data will cause error
// console.log(data);

// ## NOTE
// one exception, let variables still accessible
// when they're inside for loop blocks
