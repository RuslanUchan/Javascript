// behaves like python format strings
// use ` ` (backtick) instead of quotes ' ' " "
// use ${} to evaluate expression


function getReasonCount() { return 2; }

let test = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few good reason' } to try this`;

console.log(test);
