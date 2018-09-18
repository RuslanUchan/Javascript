const getData = async () => {
  try {
    // POST NEED AN OBJECT AS SECOND ARGUMENT
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    });
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}
