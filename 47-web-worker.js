// Web Worker Structure
var worker = new Worker('47-scriptname.js');
worker.addEventListener('message', function(e){
    // receive message from worker
    var message = e.data;
    alert(message);
});

// send message to worker
worker.postMessage('hello, worker!');
