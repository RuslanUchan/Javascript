// Pattern to do defer operation for long running operation pattern

// Create deferred object
// var deferred = $.Deferred();

// Start async operation

// Return a promise
// return deferred.promise()

// Call resolve for success
// Call reject for failure

// deferred.resolve();
// deferred.reject();

self.onmessage = function(e) {
    // Received a message
    var startTime = new Date().toTimeString();

    // Simulate a long running operation
    sleep(2000);

    // Build the return message
    var output = e.data.message + ' processed at ' + startTime;

    // Send message back to the caller
    self.postMessage({ message: output });
}

function sleep(ms) {
    var startingTime = new Date().getTime();
    var stopTime = startingTime + ms;

    while (stopTime >= new Date().getTime()) { }
}
