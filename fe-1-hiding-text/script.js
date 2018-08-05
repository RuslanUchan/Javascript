// Set opened up sites
// window.location = 'http://www.oreilly.com/'

// setTimeout(function() { alert("Hello, World!"); }, 2000);

window.onload = function() {
    var elements = document.getElementsByClassName('reveal');
    for(let i = 0; i < elements.length; i++) {
        var elt = elements[i];
        var title = elt.getElementsByClassName('handle')[0];
        title.onclick = function() {
            if (elt.className == 'reveal') elt.className = 'revealed';
                else if (elt.className == 'revealed') elt.className = 'reveal';
        }
    }
};
