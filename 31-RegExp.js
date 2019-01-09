// When using RegExp constructor
// every string literal must be escaped
// like this \\d, \\s, \\w

// match \\d 5 times and do it globally
// accessed via constructor
var zipcode = new RegExp('\\d{5}', 'g')

// RegExp properties
/*
* 1 - source: specifies pattern to match
* 2 - global: boolean g
* 3 - ignoreCase: boolean i
* 4 - multiline: boolean m
* 5 - lastIndex: stores position in the string at which the next search begin
*/

// RegExp accessed via object literal
var pattern = /Java/g;

// exec
// similar with match, but has lastIndex set incrementally per search
var text = "JavaScript is more fun than Java!";
var result;
while((result = pattern.exec(text)) != null) {
    alert("Matched '" + result[0] + "'" +
        " at position " + result.index +
        "; next search begins at " + pattern.lastIndex);
}

// test
// if match exists, return true
// test behaves like exec. It's like exec that returns true if value found is not null
var pattern = /java/i;
pattern.test("JavaScript"); // Returns true

// both exec and test usually used via loop by using their lastIndex property
