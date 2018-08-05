/*
var o = {
    // data property
    data_prop: value,

    // Accessor property
    get accessor_prop() { function body here  },
    set accessor_prop(value) { function body here  }
}
*/

// Another example

var p = {
    // regular read-write data property
    x: 1.0,
    y: 1.0,

    // r is a read-write accessor property
    get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    // this is a read-only accessor
    get theta() { return Math.atan2(this.y, this.x); }
}

// Another example with private property
var serialnum = {
    // private
    $n : 0,

    // return value and increment
    get next() { return this.$n++; },

    // set new value if it is larger than current
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw "serial number can only be set to a larger value";
    }
}

var random {
    get octet() { return Math.floor(Math.random()*256); }
};

// Property Descriptor
// Try
Object.getOwnPropertyDescriptor({x:1}, 'x');

// Try again
Object.getOwnPropertyDescriptor(random, 'octet');

// Set property use
Object.defineProperty(o, 'x', {
    value : 1,
    writable: true,
    enumerable: false,
    configurable: true
});

// Check if nonenumerable
Object.keys(o)

// NOTE.
// defineProperty() overwrite any property that exists on the object

// to extends property instead, use
// the code below extends its properties from {}
Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
        get: function() { return 0; },
        enumerable: true,
        configurable: true
    }
});
