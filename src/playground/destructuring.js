// Object desctructuring

const person = {
  name: "Reid",
  age: 41,
  location: {
    temp: 28,
    city: "Taipei",
  },
};

const { name: firstName = "Anonymous", age } = person;

console.log(`${firstName} is ${age} years old`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ["1299 S Juniper Stree", "Taipei", "DanAn", "102343"];
const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);
