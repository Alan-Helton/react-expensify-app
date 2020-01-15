// const person = {
//     name: 'Alan',
//     age: 39,
//     location: {
//         city: 'Reston',
//         temp: 70
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// Array destructuring

// const address = ['12001 Market Street', 'Reston', 'Virginia', '20171']
// const [, city, state = 'Default State'] = address
// console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75']
const [itemName, ,mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)