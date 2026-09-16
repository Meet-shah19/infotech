let n = 4567;
let count = 0;

while (n > 0) {
    n = Math.floor(n / 10);
    count++;
}

console.log("Number of digits =", count);