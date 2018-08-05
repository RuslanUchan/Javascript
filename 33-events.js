// Event listener example

window.onload = function() {/* ... */};
document.getElementById('button1').onclick = function() {/* ... */};
function handleResponse() {/* ... */};
request.onreadystatechange = handleResponse;


// A more sophisticated way
// Use eventListener
window.addEventListener('load', function() {/* ... */}, false);
request.addEventListener('readystatechange', function() {/* ... */}, false);

// addEventListener('event-name', function, state);
