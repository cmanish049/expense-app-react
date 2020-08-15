// const person = {
//     name: 'Manish',
//     age: 28,
//     location: {
//         city: 'Dhangadhi',
//         temp: 88
//     }
// }

// const {name: firstName = 'Susli', age, location} = person;

// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city} = person.location;

// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}`);
// }

const address = ['1299 S Juniper Street', 'Dhangadhi', 'Seti', '1234'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);