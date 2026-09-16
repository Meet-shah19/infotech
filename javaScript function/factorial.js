function factorial(n) {
    // Base case: 0! = 1
    if (n === 0) {
        return 1;
    }

    // Base case: negative numbers
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    // Recursive case
    return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-3)); // Factorial is not defined for negative numbers