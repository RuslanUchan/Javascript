// Bad practice
// Redundant variables used in the same 'scoping'

var words = ["function", "scope"];

for(var i = 0; i < words.length; i++) {
    var word = words[i];

    for(var i = 0; i < word.length; i++) {
        var char = word[i]
        console.log('char', i, char);
    };
};

// The outer loop terminates because the inner loop
// has i variable equal to 7
