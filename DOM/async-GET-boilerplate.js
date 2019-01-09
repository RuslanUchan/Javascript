// async await
const getData = async () => {
  try {
    // send request via fetch
    // await make sure the program runs through without waiting for fetching (promises status)
    // store the data from fetch to variable response
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok) {
      // handles request if successful
      // because response is an async method, we must use await
      // waiting for the response (promises status) to come
      const jsonResponse = await response.json()
      // execute code with jsonResponse
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}
