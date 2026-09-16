function getFullName(person) {
    return person.firstName + " " + person.lastName;
}

const person = {
    firstName: "Meet",
    lastName: "Shah"
};

console.log(getFullName(person));