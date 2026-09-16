function isPerfect(n) {
    if (n <= 1) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum === n;
}

console.log(isPerfect(6));   // true
console.log(isPerfect(28));  // true
console.log(isPerfect(12));  // false