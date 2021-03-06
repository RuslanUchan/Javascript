window.location === document.location // always true

// urls are href attributes
// there's Location object in js that has document href values


// Here's a URL parsing algs
/*
* This function parses ampersand-separated name=value argument pairs from
* the query string of the URL. It stores the name=value pairs in
* properties of an object and returns that object. Use it like this:
*
* var args = urlArgs(); // Parse args from URL
* var q = args.q || ""; // Use argument, if defined, or a default value
* var n = args.n ? parseInt(args.n) : 10;
*/
function urlArgs() {
    var args = {}; // Start with an empty object
    var query = location.search.substring(1); // Get query string, minus '?'
    var pairs = query.split("&"); // Split at ampersands
    for(var i = 0; i < pairs.length; i++) { // For each fragment
        var pos = pairs[i].indexOf('='); // Look for "name=value"
        if (pos == -1) continue; // If not found, skip it
        var name = pairs[i].substring(0,pos); // Extract the name
        var value = pairs[i].substring(pos+1); // Extract the value
        value = decodeURIComponent(value); // Decode the value
        args[name] = value; // Store as a property
    }
    return args; // Return the parsed arguments
}

// Loading new documents
/*
* use assign to make documents load and display with specific urls passed
* use replace, behaves like assign. It replace the current documents
* use reload, to reload document

* a more traditional way
- location = 'links'
- location = 'page.html'
- location = '#top'
- location.search = '?page=' + (pagenum+1) // load next page
/*
