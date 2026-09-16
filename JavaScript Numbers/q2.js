function isValidNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
}

console.log(isValidNumber(42));        // true
console.log(isValidNumber(42.5));      // true
console.log(isValidNumber(NaN));       // false
console.log(isValidNumber(Infinity));  // false
console.log(isValidNumber(-Infinity)); // false
console.log(isValidNumber("42"));      // false