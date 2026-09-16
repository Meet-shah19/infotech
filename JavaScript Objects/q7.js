const person = {
    name: "Alice",
    age: 25
};

// Convert object to array of keys
const keys = Object.keys(person);

// Convert object to array of values
const values = Object.values(person);

// Convert object to array of key-value pairs
const entries = Object.entries(person);

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);