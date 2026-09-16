function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(gcd(12, 18));
console.log(lcm(12, 18));