// Constant have something to do with variable bindings
// And not value the 'binded variable' has

const ADD_ITEM = 'ADD_ITEM';
const DEL_ITEM = 'DEL_ITEM';
const CLEAR_ALL_ITEMS = 'CLEAR_ALL_ITEMS';
const items = [];

function actionHandler(action) {
    switch (action.type) {
        case ADD_ITEM:
            items.push(action.item);
            break;
        case DEL_ITEM:
            items.splice(items.indexOf(action.item), 1);
            break;
        case CLEAR_ALL_ITEMS:
            items.splice(0, items.length);
            break;
    };
}

// One example about returned value
// And not binded variable

function getValue() {
    const val = 5;
    // value are returned, not the variable itself
    return val;
}

// value passed into variable
let myVal = getValue();
myVal += 1;

// It throws error if written like this
// const myVal = getValue();
// myVal += 1;

// TypeError: Assignment to constant variable.

// We're trying to overwrite the variable, and not modifying it's value
