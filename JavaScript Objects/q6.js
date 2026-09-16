const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

for (let key in product) {
    console.log(key + ": " + product[key]);
}