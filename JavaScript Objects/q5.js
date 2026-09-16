const car = {
    year: 2024,
    brand: "Toyota",

    describe: function() {
        return "This car is a " + this.year + " " + this.brand;
    }
};

console.log(car.describe());