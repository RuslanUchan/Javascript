/*
* Add a nonenumerable extend() method to Object.prototype.
* This method extends the object on which it is called by copying properties
* from the object passed as its argument. All property attributes are
* copied, not just the property value. All own properties (even non-
* enumerable ones) of the argument object are copied unless a property
* with the same name already exists in the target object.
*/
Object.defineProperty(Object.prototype, "extend",
{
    writable: true,
    enumerable: false,
    configurable: true,
    value: function(o) { // Object value
        // Get all own props
        var names = Object.getOwnPropertyNames(o);
        // Loop through it all
        for(var i = 0; i < names.length; i++){
            // Skip if already on object
            if (names[i] in this) continue;
            // Get property description from o
            var desc = Object.getOwnPropertyDescriptor(o, names[i]);
            // Create the property to passed object
            Object.defineProperty(this, names[i], desc);
        }
    }
});
