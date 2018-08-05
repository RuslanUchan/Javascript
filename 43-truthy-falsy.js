// Falsy values
if (false) {} else { console.log('false is falsy'); }
if (null) {} else { console.log('null is falsy'); }
if (undefined) {} else {console.log('undefined is falsy'); }
if (0) {} else { console.log('0 is falsy'); }
if (NaN) {} else { console.log('NaN is falsy'); }
if ('') {} else { console.log('falsy too'); }
if ("") {} else { console.log('also falsy'); }

// Truthy values
if (true) { console.log('true is truthy'); }
if ({}) { console.log('empty object is truthy'); }
if ([]) { console.log('empty array is truthy'); }
if ('bob') { console.log('non-empty string is truthy'); }
if (new RegExp()) { console.log('a new instance is truthy'); }
if (10) { console.log('integer (+/-) are truthy'); }
if (10.12) { console.log('float too (+/-) are truthy'); }
if (Infinity) { console.log('Infinity (+/-) are truthy'); }
