// Return true if o implements the methods specified by the remaining args.
function quacks(o /*, ... */) {
    for(var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];
        switch(typeof arg) { // if args is..
            case 'string':
                if(typeof o[arg] !=== 'function') return false;
                continue;
            case 'function':
                // if it's function, use its prototype object
                arg = arg.prototype;
            case 'object':
                for(var m in arg) {
                    if (typeof arg[m] !== 'function') continue;
                    if (typeof o[m] !== 'function') return false;
                }
        }
    }

    // if it pass the type check
    // then o implements everything
    return true;
}

// What happens
/*
* 1. We check every arguments passed except object o their types
* 2. if it's string then we check if it's function
* 3. if it's function then we
*
*
*
*
*/


