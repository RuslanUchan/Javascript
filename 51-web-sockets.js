// Code for web socket
var socket = new WebSocket('url');

// receive message from server
socket.onmessage = function(e) {
    $('#output').append('<li>' + e.data + '</li>');
}

socket.onopen = function() {
    $('#send-message').removeAttr('disabled');
}

// send message to the server
socket.send('hello, world!');

// Websocket is HTML5 object
