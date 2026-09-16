function atm(pin, amount, balance) {

    // Step 1: Check PIN
    if (pin === 1234) {

        // Step 2: Check if amount is a multiple of 100
        if (amount % 100 === 0) {

            // Step 3: Check balance
            if (amount <= balance) {
                balance = balance - amount;

                console.log("Withdrawal Successful");
                console.log("Withdrawn Amount: ₹" + amount);
                console.log("Remaining Balance: ₹" + balance);
            } else {
                console.log("Insufficient Balance");
            }

        } else {
            console.log("Amount must be a multiple of 100");
        }

    } else {
        console.log("Incorrect PIN");
    }
}

// Examples
atm(1234, 500, 5000);
// Withdrawal Successful
// Withdrawn Amount: ₹500
// Remaining Balance: ₹4500

atm(1234, 550, 5000);
// Amount must be a multiple of 100

atm(1234, 6000, 5000);
// Insufficient Balance

atm(1111, 500, 5000);
// Incorrect PIN