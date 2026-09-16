const user = {
    name: "Meet",
    age: 20,
    city: "Vadodara"
};

// Add email property
user.email = "meet@example.com";

// Delete city property
delete user.city;

console.log(user);