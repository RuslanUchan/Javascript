// Optional parameters

function getPropertyNames(o, /* optional */ a) {
    if (a === undefined) a = [];
    // do something here
    for(var property in o) a.push(property);
    return a;
}

// function invoked
var o = 'Hello Javascript';
var s = getPropertyNames(o);
console.log(s);

// a more idiomatic way than if statement
var a = a || [];


// type checking
function sum(a) {
    if (!Array.isArray(a)) throw new Error("Item is not an array.");

}


// flexible checking
function flexisum(a) {
    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
        var element = arguments[i], n;
        if (element == null) continue; // skips

        if (!Array.isArray(element))
            n = flexisum.apply(this, element); // compute sum recursively
        else if (typeof element === 'function')
            n = Number(element()); // invoke and convert
        else n = Number(element); // try to convert

        if (isNaN(n)) // if couldn't convert
            throw Error("flexisum(): can't convert", element, "to number");
        total += n;
    }
    return total;
}
