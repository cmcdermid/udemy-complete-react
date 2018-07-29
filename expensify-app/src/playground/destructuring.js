// Object Destructuring
//
// const person = {
//     name: 'Chris',
//     age: 26,
//     location: {
//         city: 'Sydney',
//         temp: 21
//     }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}.`);
// // console.log(`${person.name} is ${person.age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees celsius in ${city}`);
// }
//
// const book = {
//     title: 'Ego is the Enemey',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = "Self-Published" } = book.publisher;
//
// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${itemName} costs ${mediumPrice}`);