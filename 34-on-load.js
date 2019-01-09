// Register the function f to run when the document finishes loading.
// If the document has already loaded, run it asynchronously ASAP.
function onLoad(f) {
    if (onLoad.loaded) // If document is already loaded
        window.setTimeout(f, 0); // Queue f to be run as soon as possible
    else if (window.addEventListener) // Standard event registration method
        window.addEventListener("load", f, false);
}

// Start by setting a flag that indicates that the document is not loaded yet.
onLoad.loaded = false;
// And register a function to set the flag when the document does load.
onLoad(function() { onLoad.loaded = true; });
