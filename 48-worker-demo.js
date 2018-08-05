self.onmessage = function(e) {
    var message = e.data;
    self.postMessage(message + ' PROCESSED!!');
}
