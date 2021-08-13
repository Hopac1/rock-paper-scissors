function computerPlay() {
    let moves = ['rock', 'paper', 'scissors']
    let compChoice = moves[Math.floor(Math.random() * moves.length)];
    return compChoice;
}


function userPlay() {
    let playerSelection = prompt("Enter your choice of 'rock', 'paper', or 'scissors'.");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    

    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats Paper!";
    }
}

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(userPlay(), computerPlay());

        if (result.includes("You win!")) {
            userScore += 1;
        } else if (result.includes("You lose!")) {
            compScore += 1;
        }
        console.log(`Your score: ${userScore}. Computer score: ${compScore}`)
    }
    if (userScore > compScore) {
        console.log(`Your score: ${userScore}. Computer's score ${compScore}. You win!`)
    } else if (userScore < compScore) {
        console.log(`Your score: ${userScore}. Computer's score ${compScore}. You lose.`)
    } else {
        console.log(`Your score: ${userScore}. Computer's score ${compScore}. You tied with the computer!`)
    }

}