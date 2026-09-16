function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return Math.round(a / b);
}

function display(cents) {
    return "$" + (cents / 100).toFixed(2);
}

// Money stored in cents
let a = 1050; // $10.50
let b = 525;  // $5.25

console.log(display(add(a, b)));       // $15.75
console.log(display(subtract(a, b)));  // $5.25
console.log(display(multiply(a, 2)));   // $21.00
console.log(display(divide(a, 2)));     // $5.25