// function that returns object that has methods

function counter() {
    var n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

var c =  counter(), d = counter;
c.count()
d.count()
c.reset()
c.count()
d.count()


// used with getters and setters
function counter(n) {
    return {
        get count() { return n++; },
        set count(m) {
            if (m >= n) n = m;
            else throw Error("count can only be set to larger value");
        }
    };
}

var c = counter(1000);
c.count // 1000
c.count // 1001
c.count = 2000 // 2000
c.count // 2000
c.count = 2000 // Error!

// there's no local variable inside the function
// the variable are stored as parameters in the counter function
// the 1000 on line 30 is the storing parameters


