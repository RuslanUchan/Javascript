const personalInformation = {
    firstName: 'Ruslan',
    lastName: 'Uchan',
    city: 'Jakarta',
    country: 'Indonesia',
    occupation: 'Student'
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);

let names = ['Ruslan', 'Hello', 'Uchan'];
let [firstName, greetings, lastName] = names;
console.log(greetings, firstName, lastName);