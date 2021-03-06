// Variables
let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("player-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreboardSpan = document.querySelectorAll("span");
const winnerDisplayDiv = document.querySelector(".winner-display");

const buttons = document.querySelectorAll(".selection");
const restartButton = document.querySelector(".restart-button");


// Event Listeners
buttons.forEach((button) => {
    button.addEventListener("click", play)
});

restartButton.addEventListener("click", restartGame);

// Play game
function play(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    updateScore(winner);
    displayWinner(winner, playerChoice, computerChoice);

    if (userScore === 5) {
        winnerDisplayDiv.textContent = "You won 5 rounds before the Computer, you win!";
    } else if (compScore === 5) {
        winnerDisplayDiv.textContent = "The Computer won 5 rounds before you, the Computer wins."
    }

}

function getComputerChoice() {
    const moves = ['rock', 'paper', 'scissors']
    let compChoice = moves[Math.floor(Math.random() * moves.length)];
    return compChoice;
}

function getWinner(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        return "draw";

    } else if (playerSelection === "rock") {
        if (compSelection === "paper") {
            return "computer";
        } else if (compSelection === "scissors") {
            return "player";
        }
    } else if (playerSelection === "paper") {
        if (compSelection === "rock") {
            return "player";
        } else if (compSelection === "scissors") {
            return "computer";
        }
    } else if (playerSelection === "scissors") {
        if (compSelection === "rock") {
            return "computer";
        } else if (compSelection === "paper") {
            return "player";
        }
    }
}

function restartGame() {
    userScore = 0;
    compScore = 0;
    userScoreSpan.textContent = 0;
    compScoreSpan.textContent = 0;
    return;
}

function updateScore(winner) {
    if (winner === "player") {
        userScore += 1;
        return userScoreSpan.textContent = userScore;
    } else if (winner === "computer") {
        compScore += 1;
        return compScoreSpan.textContent = compScore;
    }
}

function displayWinner(winner, playerChoice, compChoice) {
    const choices = {
        "rock": "???",
        "paper": "???",
        "scissors": "???"
    }

    if (winner === "player") {
        winnerDisplayDiv.textContent = `Player ${choices[playerChoice]} beats Computer ${choices[compChoice]}, you won!`
    } else if (winner === "computer") {
        winnerDisplayDiv.textContent = `Computer ${choices[compChoice]} beats Player ${choices[playerChoice]}, Computer won!`
    } else {
        winnerDisplayDiv.textContent = `Player ${choices[playerChoice]} ties with Computer ${choices[compChoice]}, it's a draw!`
    }
    return
}