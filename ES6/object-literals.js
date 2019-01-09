/*
function addressMaker(city, state) {
    const newAddress = {city, state};

    console.log(newAddress);
}

addressMaker('Jakarta Selatan', 'DKI Jakarta'); // Assign values to attributes
*/

function addressMaker(address) {
    const {city, state} = address;

    const newAddress = {
        city,
        state,
        country: 'Indonesia'
    };

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: 'Jakarta Selatan', state: 'DKI Jakarta'});