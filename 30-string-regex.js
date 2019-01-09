var text = 'Javascript';
console.log(text);

var search = text.search(/script/i); // 4
console.log(search);

var replace = text.replace(/javascript/gi, 'JAVASCRIPT'); // JAVASCRIPT - not an inplace operations
console.log(replace);

var match = '1 + 2 = 3'.match(/\d+/g) // return [1, 2, 3]
console.log(match);

var split = '123,456,789'.split(',');
console.log(split);

var split2 = '1, 2, 3, 4, 5'.split(/\s*,\s*/);
console.log(split2)

// Parsing URL
var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var link = 'Visit my blog at http://www.example.com/~david';
var result = link.match(url);
if (result != null) {
    var fullurl = result[0];
    var protocol = result[1];
    var host = result[2];
    var path = result[3];
}
console.log('Full Url:', fullurl,
    '\nProtocol:', protocol,
    '\nHost:', host,
    '\nPath', path);

