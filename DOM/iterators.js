let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// return a new array
let longCities = cities.filter(city => city.length > 7);

// return a new array
let smallerNums = nums.map(num => num - 5);

// return a boolean value
nums.every(num => num < 0);
