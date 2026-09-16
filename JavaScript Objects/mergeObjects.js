function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const obj1 = {
    name: "meet",
    age: 20
};

const obj2 = {
    age: 30,
    city: "Anand"
};

const result = mergeObjects(obj1, obj2);

console.log(result);