// Enumerating Properties
var ruslan = {
    name : 'Ruslan',
    age : 21,
    address : 'Jakarta'
}
for(p in ruslan){
    console.log(p)
}

// Enumerable Properties via function. ES5+
console.log(ruslan.getOwnPropertyNames())
console.log(ruslan.keys())

// Skip enumerating inherited properties
for(p in o) {
    if (!o.hasOwnProperty(p)) continue;
}

for(p in o) {
    if (typeof o[p] === 'function') continue;
}


// some object utility described in js
function extend(o, p) {
    for(prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

function merge(o, p) {
    for(prop in p) {
        if (o.hasOwnProperty[prop]) continue;
        o[prop] = p[prop];
    }
    return o;
}

// if there is not a property with the same name, remove it from o
// search for matching properties
function restrict(o, p) {
    for(prop in o) {
        if (!(prop in p)) delete o[prop];
    }
    return o;
}

// delete properties with the same name
function subtract(o, p) {
    for(prop in p) {
        delete o[prop];
    }
    return o;
}

// return a new object that holds properties from o and p
function union(o, p) { return extend(extend({}, o), p); }

function intersection(o, p) { return restrict(extend({}, o), p); }

function keys(o) {
    if (typeof o !== "object") throw TypeError();
    var result = [];
    for(var prop in o) {
        if (o.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
}
