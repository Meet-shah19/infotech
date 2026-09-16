// Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

// Calling the functions
console.log("Celsius to Fahrenheit:", celsiusToFahrenheit(25));
console.log("Fahrenheit to Celsius:", fahrenheitToCelsius(77));