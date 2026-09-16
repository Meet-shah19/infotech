function createBankAccount(initialBalance) {
    // Private-like balance using closure
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: ₹${amount}`);
            } else {
                console.log("Invalid deposit amount.");
            }
        },

        withdraw(amount) {
            if (amount <= 0) {
                console.log("Invalid withdrawal amount.");
            } else if (amount > balance) {
                console.log("Insufficient balance. Overdraft not allowed.");
            } else {
                balance -= amount;
                console.log(`Withdrawn: ₹${amount}`);
            }
        },

        getBalance() {
            return balance;
        }
    };
}

// Create account
const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(300);

console.log("Current Balance: ₹" + account.getBalance());