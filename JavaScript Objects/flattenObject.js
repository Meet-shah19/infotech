function flattenObject(obj) {
    const result = {};

    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(result, obj[key]);
        } else {
            result[key] = obj[key];
        }
    }

    return result;
}

const result = flattenObject({
    a: 1,
    b: {
        c: 2,
        d: 3
    }
});

console.log(result);