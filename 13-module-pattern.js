// Module pattern design patterns

var counter = (function() {

   // private stuff
   let count = 0

   function print(message) {
        console.log(message, count)
   }

   // return an object
   return {
        get: function() { return count; },

        set: function(value) { count = value; },

        increment: function() {
            count += 1;
            print('After increment: ');
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
   }
})();

// set count in object local scope via set function
counter.set(7);

// get count in object local scope via return statement
console.log(counter.get());

// invoke object methods
counter.reset();
