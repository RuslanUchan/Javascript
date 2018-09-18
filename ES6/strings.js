// Search for specific starts in string
/*
if(price.startsWith('$')) {
    // ...
}
if(phone.startsWith(user.areaCode)){
    //...
}
*/

let str = 'foo-bar';

str.startsWith('foo'); // true
str.startsWith('bar'); // false

str.endsWith('foo'); // false
str.endsWith('bar'); // true

// all true
str.includes('foo');
str.includes('bar');
str.includes('o-b');

// IT IS CASE SENSITIVE

let location = 'Atlanta, Ga';
location.endsWith('gA'); // false
location.endsWith('ga'); // false
location.toLowerCase().endsWith('ga'); // true


let locationA = 'Atlanta, Ga';
let locationB = 'Galveston, Tx';

locationA.includes('Ga'); // true
locationB.includes('Ga'); // true

locationA.includes('Ga', locationA.indexOf(' ')); // true
locationB.includes('Ga', locationB.indexOf(' ')); // false

// repeat occurences
'X'.repeat(4);

// insert on start
'abc'.padStart(6);
'abc'.padStart(6, 'x');
'abc'.padStart(6, 'xyz');

// insert on end
'abc'.padEnd(6);
'abc'.padEnd(6, 'x');
'abc'.padEnd(6, 'xyz');
