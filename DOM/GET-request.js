// creates new object
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

// handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    // Code to execute with response
    return xhr.response;
  }
};

// open request and send object
xhr.open('GET', url);
xhr.send()
