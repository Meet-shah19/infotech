function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Examples
checkNumber(10);   // Positive
checkNumber(-5);   // Negative
checkNumber(0);    // Zero