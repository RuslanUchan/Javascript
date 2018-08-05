// get element by id
var section1 = document.getElementById('section1');


// Get more than 1 id
function getElements(/* ids */) {
    var elements = {};
    for(var i = 0; i < arguments.length; i++) {
        var id = arguments[i];
        var elt = document.getElementById(id);
        if (elt == null)
            throw new Error('No element with id:', id);
        elements[id] = elt;
    }
    return elements;
}


// Get element by name
var buttons = document.getElementsByName('some-button');


// CSS Selectors
querySelectorAll() == $() // in JQuery
querySelector()
