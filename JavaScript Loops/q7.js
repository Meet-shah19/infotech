const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let choice;

function menu() {
    console.log("\n--- MENU ---");
    console.log("1. Say Hello");
    console.log("2. Show Current Date");
    console.log("3. Exit");

    rl.question("Enter your choice: ", function(answer) {
        choice = Number(answer);

        if (choice === 1) {
            console.log("Hello!");
            menu();
        } 
        else if (choice === 2) {
            console.log("Current Date:", new Date());
            menu();
        } 
        else if (choice === 3) {
            console.log("Program exited.");
            rl.close();
        } 
        else {
            console.log("Invalid choice!");
            menu();
        }
    });
}

menu();