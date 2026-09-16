function safeAdd(a, b, decimals) {
    return Number((a + b).toFixed(decimals));
}

console.log(0.1 + 0.2);          // 0.30000000000000004
console.log(safeAdd(0.1, 0.2, 2)); // 0.3
console.log(safeAdd(1.234, 2.345, 2)); // 3.58