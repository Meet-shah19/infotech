const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function askGuess() {
    rl.question("Guess a number between 1 and 50: ", (answer) => {
        let guess = Number(answer);
        attempts++;

        if (guess > randomNumber) {
            console.log("Too high");
            askGuess();
        }
        else if (guess < randomNumber) {
            console.log("Too low");
            askGuess();
        }
        else {
            console.log("Correct!");
            console.log("Total attempts:", attempts);
            rl.close();
        }
    });
}

askGuess();