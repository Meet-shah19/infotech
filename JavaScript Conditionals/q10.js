function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log("Largest:", a);
    } else if (b >= a && b >= c) {
        console.log("Largest:", b);
    } else {
        console.log("Largest:", c);
    }
}

// Examples
findLargest(10, 20, 15);  // Largest: 20
findLargest(50, 30, 40);  // Largest: 50
findLargest(5, 8, 12);    // Largest: 12