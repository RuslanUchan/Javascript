// Sample call

var result = null;

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    // see if operation completed
    if(xhr.readyState == 4 && xhr.status == 200) {
        // get result
        result = xhr.resultText;
    }
}

// Open connection
xhr.open('GET', 'url');

// Send the request
xhr.send();
