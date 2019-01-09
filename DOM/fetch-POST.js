fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then(response => {
  // Executed when promise returned from fetch() is resolved
  if(response.ok) {
    // pass response.json to the next callback then()
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  // failure callback function
  console.log(networkError.message);
}).then(jsonResponse => {
  // view the JSON that was returned from the previous then()
  // through render
});
