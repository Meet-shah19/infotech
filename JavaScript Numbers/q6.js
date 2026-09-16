function isInteger(n) {
    return typeof n === "number" && isFinite(n) && n % 1 === 0;
}

console.log(isInteger(10));     // true
console.log(isInteger(10.5));   // false
console.log(isInteger(-5));     // true
console.log(isInteger(0));      // true
console.log(isInteger("10"));   // false