function rockPaperScissors(player1, player2) {
    // Check for draw
    if (player1 === player2) {
        console.log("Draw");
    }
    // Player 1 wins
    else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        console.log("Player 1 Wins");
    }
    // Player 2 wins
    else if (
        (player2 === "rock" && player1 === "scissors") ||
        (player2 === "paper" && player1 === "rock") ||
        (player2 === "scissors" && player1 === "paper")
    ) {
        console.log("Player 2 Wins");
    }
    else {
        console.log("Invalid Move");
    }
}

// Examples
rockPaperScissors("rock", "scissors");
// Player 1 Wins

rockPaperScissors("paper", "rock");
// Player 1 Wins

rockPaperScissors("rock", "rock");
// Draw

rockPaperScissors("scissors", "rock");
// Player 2 Wins