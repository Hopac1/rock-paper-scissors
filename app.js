
// function computerPlay() {
//     let moves = ['rock', 'paper', 'scissors']
//     let compChoice = moves[Math.floor(Math.random() * moves.length)];
//     return compChoice;
// }


// function userPlay() {
//     let playerSelection = prompt("Enter your choice of 'rock', 'paper', or 'scissors'.");
//     playerSelection = playerSelection.toLowerCase();
//     return playerSelection;
// }


// function playRound(playerSelection, computerSelection) {
//     console.log(`Player chose: ${playerSelection}`);
//     console.log(`Computer chose: ${computerSelection}`);

//     if (playerSelection === computerSelection) {
//         return "It's a tie!"
//     } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
//         return "You win! Rock beats Scissors.";
//     } else if (playerSelection == 'rock' && computerSelection == 'paper') {
//         return "You lose! Paper beats Rock.";
//     } else if (playerSelection == 'paper' && computerSelection == 'rock') {
//         return "You win! Paper beats Rock.";
//     } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
//         return "You lose! Scissors beats Paper.";
//     } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
//         return "You lose! Rock beats Scissors!";
//     } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
//         return "You win! Scissors beats Paper!";
//     }
// }


// function getWinner(playerSelection, compSelection) {
//     if (playerSelection === compSelection) {
//         return "draw";

//     } else if (playerSelection === "rock") {
//         if (compSelection === "paper") {
//             return "computer";
//         } else if (compSelection === "scissors") {
//             return "player";
//         }
//     } else if (playerSelection === "paper") {
//         if (compSelection === "rock") {
//             return "player";
//         } else if (compSelection === "scissors") {
//             return "computer";
//         }
//     } else if (playerSelection === "scissors") {
//         if (compSelection === "rock") {
//             return "computer";
//         } else if (compSelection === "paper") {
//             return "player";
//         }
//     }
// }
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
    player: 0,
    computer: 0
}


// function game() {
//     let userScore = 0;
//     let compScore = 0;
//     let result;
//     const choices = document.querySelectorAll(".button-choices");
//     for (let i = 0; i < 999; i++) {  // Decides how many rounds to play up to
        
//         // MAYBE SEPARATE THIS INTO SMALLER FUNCTIONS AND/OR 

//         result = document.getElementById("rockBtn").addEventListener("click", function() {
//             getWinner('rock', computerPlay());
//         });

//         result = document.getElementById("paperBtn").addEventListener("click", function() {
//             getWinner('paper', computerPlay())
//         });

//         result = document.getElementById("scissorsBtn").addEventListener("click", function() {
//             getWinner('scissors', computerPlay())
//         });


//         // let result = playRound(userPlay(), computerPlay());  // old ui-less way of getting user input 

//         if (result.includes("You win!")) {
//             console.log("You win!");
//             userScore += 1;
//         } else if (result.includes("You lose!")) {
//             console.log("You lost.")
//             compScore += 1;
//         }
//         console.log(`Your score: ${userScore}. Computer score: ${compScore}`)
//     }
//     if (userScore > compScore) {
//         console.log(`Your score: ${userScore}. Computer's score ${compScore}. You win!`)
//     } else if (userScore < compScore) {
//         console.log(`Your score: ${userScore}. Computer's score ${compScore}. You lose.`)
//     } else {
//         console.log(`Your score: ${userScore}. Computer's score ${compScore}. You tied with the computer!`)
//     }

// }