// There's 3 way to determine object's classes
/*
* 1. the instanceof operator
* 2. the constructor property
* 3. the name of constructor function
*/

// 1. The instance of operator
// The expression
// o instance of c is true
// if o inherits from c.prototype

// instanceof test what and object inherits from, rather that what it is created from

// one shortcoming is when dealing with object that inherits from a lot of classes (client-side javascript)
// Each windows and frame have their own global function, execution context and its own set of constructor


// 2 and 3
// See page 211
