function formatNumber(n) {
    if (n >= 1000000000) {
        return (n / 1000000000) + "B";
    } else if (n >= 1000000) {
        return (n / 1000000) + "M";
    } else if (n >= 1000) {
        return (n / 1000) + "K";
    } else {
        return n.toString();
    }
}

console.log(formatNumber(1500));        // 1.5K
console.log(formatNumber(2000000));     // 2M
console.log(formatNumber(3500000000));  // 3.5B