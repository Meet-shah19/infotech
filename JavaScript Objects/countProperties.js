function countProperties(obj) {
    let count = 0;

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            count++;
        }
    }

    return count;
}

const person = {
    name: "Meet",
    age: 20,
    city: "Anand"
};

console.log(countProperties(person));