let n = 25;
let sum = 0;

console.log("Factors of " + n + ":");

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        console.log(i);
        sum = sum + i;
    }
}

console.log("Sum of factors =", sum);

if (sum === n) {
    console.log(n + " is a Perfect Number");
} else {
    console.log(n + " is not a Perfect Number");
}