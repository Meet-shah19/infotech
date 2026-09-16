function power(base, exp) {
    let result = 1;

    while (exp > 0) {
        // If exponent is odd
        if (exp % 2 === 1) {
            result = result * base;
        }

        // Square the base
        base = base * base;

        // Divide exponent by 2
        exp = Math.floor(exp / 2);
    }

    return result;
}

console.log(power(2, 10));
console.log(power(3, 4));