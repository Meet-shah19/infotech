let correctPassword = "js@123";
let password = "";
let attempts = 0;

do {
    attempts++;

    // For practice, change this value to test different passwords
    password = attempts === 2 ? "js@123" : "wrong";

    console.log("Attempt " + attempts + ": " + password);

    if (password === correctPassword) {
        console.log("Login Successful!");
        break;
    }

} while (attempts < 3);

console.log("Attempts used:", attempts);