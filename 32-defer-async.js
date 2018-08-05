// on html script link

<script defer scr="deferred.js"></script>
<script async scr="async.js"></script>

// Defer
/*
Defer causes browser to delay execution until after
document has been served
*/

// Async
/*
Async causes the browser to run the script ASAP, but
not blocking the document parsing while doing so
ex: double duty
*/

/*
Defer scripts run in the order they appear in DOM

Async scripts run as they load
*/

// Asynchronously load and execute a script
function loadasync(url) {
    var head = document.getElementByTagName('head')[0];
    var s = document.createElement('script');
    s.src = url;
    head.appendChild(s);
}
.. This way, Javascript are loaded dynamically
