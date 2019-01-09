function processMessage(message) {
    // Create the deferred object
    var deferred = $.Deferred(); // This is JQuery

    // Begin doing work
    var worker = new Worker('./49-deferred.js');

    worker.onmessage = function(e) {
        // Resolve when operation completes
        // Send the string back
        deferred.resolve(e.data.message);
    };

    worker.postMessage({message: message});

    // Return promise to caller
    return deferred.promise();
}
