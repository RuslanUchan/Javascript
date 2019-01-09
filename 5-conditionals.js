// One liner

if (x == 'something') break;

// Else if

var num = 5;
if (num == 3){
    console.log("It's 3!")
} else if (num < 3) {
    console.log("It's less than 3!")
} else {
    console.log("It's more than 3!")
}

// Switch
switch('string') {
    case 'string':
        console.log("Yeah")
        break;
    case 'another string':
        console.log("Yeah!")
        break;
    case 'more string':
        console.log("Yeah~!")
        break;
    default:
        console.log('Yeah?')
}

// We can use .toLower for string matching too

// Ternary operator

let a = 1, b = '1';
let result = (a == b) ? 'equal' : 'inequal';
console.log(result)


let now = new Date();
let greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.");
console.log(greeting)
