function findLargest(a, b) {
    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else {
        console.log("Both are equal");
    }
}

// Examples
findLargest(10, 20);  // 20
findLargest(50, 30);  // 50
findLargest(25, 25);  // Both are equal