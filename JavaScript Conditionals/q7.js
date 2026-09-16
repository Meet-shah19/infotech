function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log("Result:", num1 + num2);
            break;

        case "-":
            console.log("Result:", num1 - num2);
            break;

        case "*":
            console.log("Result:", num1 * num2);
            break;

        case "/":
            if (num2 === 0) {
                console.log("Cannot divide by zero");
            } else {
                console.log("Result:", num1 / num2);
            }
            break;

        default:
            console.log("Invalid operator");
    }
}

// Examples
calculator(10, 5, "+");  // Result: 15
calculator(10, 5, "-");  // Result: 5
calculator(10, 5, "*");  // Result: 50
calculator(10, 5, "/");  // Result: 2
calculator(10, 0, "/");  // Cannot divide by zero