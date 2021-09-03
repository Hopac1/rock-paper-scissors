let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("player-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreboardDiv = document.querySelector(".scoreboard");
const winnerDisplayDiv = document.querySelector(".winner-display");

const buttons = document.querySelectorAll(".selection")

buttons.forEach((button) => {
    button.addEventListener("click", play)
    //  => {
    //     const selectionName = button.dataset.selection;
    //     makeSelection(selectionName);
});


// Play game
function play(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice); // Remove once finished
    console.log(winner);  // Remove once finished
    updateScore(winner);
    displayWinner(winner, playerChoice, computerChoice);

}

// Get computer's choice
function getComputerChoice() {
    const moves = ['rock', 'paper', 'scissors']
    let compChoice = moves[Math.floor(Math.random() * moves.length)];
    return compChoice;
}


// Get the game winner
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
        "rock": "✊",
        "paper": "✋",
        "scissors": "✌"
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