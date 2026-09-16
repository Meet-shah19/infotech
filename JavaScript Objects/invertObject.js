function invertObject(obj) {
    const inverted = {};

    for (let key in obj) {
        inverted[obj[key]] = key;
    }

    return inverted;
}

const result = invertObject({ a: 1, b: 2 });

console.log(result);