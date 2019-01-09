// object literal syntax

let car = {
    make: 'bmw',
    model: '74511',
    year: 2010,

    getPrice: function() {
        return 5000;
    },

    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);
// or you can use
console.log(car['year']);

// simplest object in javascript
let anotherCar = {};
anotherCar.whatever = 'something'; // properties

// some crazy ones
// graph of objects

let c = {
    property: [
        { childProperty: 'yeah' },
        { anotherPropery: 'yuah' }
    ]
};


// object constructor

var d = new Date()
var a = new Array()
var f = new Function()


// Object.create
var o1 = Object.create("some-properties")

// This on equal to
// var o2 = {}
// and also
// o2 = new Object()
var o2 = Object.create(Object.prototype);


