let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

// Changing prototype actually change descendants properties too
originalCar.doors = 4;
console.log(newCar.doors);


// Property checks
console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));
