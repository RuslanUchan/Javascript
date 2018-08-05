// Constructor
function Set() {
    this.values = {}; // Hold the set
    this.n = 0; // Count values in the set
    // All arguments are added to values
    this.add.apply(this, arguments);
}

Set.prototype = {
    constructor: Set,
    add: function() {
        for(var i = 0; i < arguments.length; i++) {
            var val = arguments[i];
            var str = Set._v2s(val);
            if (!this.values.hasOwnProperty(str)) {
                this.values[str] = val;
                this.n++;
            }
        }
        return this;
    },
    remove: function() {
        for(var i = 0; i < arguments.length; i++) {
            var str = Set._v2s(arguments[i]);
            if (this.values.hasOwnProperty(str)) {
                delete.this.values[str];
                this.n--;
            }
        }
        return this;
    },
    contains: function(value) {
        return this.values.hasOwnProperty(Set._v2s(value));
    },
    size: function() { return this.n; },
    foreach: function(f, context) {
        for(var s in this.values)
            if(this.values.hasOwnProperty(s))
                f.call(context, this.values[s]);
    },
    _v2s: function(val) {
        switch(val) {
            case undefined: return 'u';
            case null: return 'n';
            case true: return 't';
            case false: return 'f';
            default: switch(typeof val) {
                case 'number': return '#' + val;
                case 'string': return '"' + val;
                default: return '@' + objectId(val);
            }
        }
        function objectId(o) {
            var prop = "|**objectId**|";
            if (!o.hasOwnProperty(prop))
                o[prop] = Set._v2s.next++;
            return o[prop];
        }
    }
}

Set._v2s.next = 100;
