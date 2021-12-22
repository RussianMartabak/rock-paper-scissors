const tools = ['rock', 'paper', 'scissors']
//global variable
let computerScore = 0;
let playerScore = 0;
let games = 0;

let cards = document.querySelectorAll('.card-group__card');
cards.forEach(card => card.addEventListener('click', (e) => console.log(playRound(computerPlay(), card.getAttribute('id')))))
//card.addEventListener('click', playRound(computerPlay(), card)



function computerPlay() {
    let rand = Math.floor(Math.random() * 3)
    return tools[rand]

}

function playRound(computerSelection, playerSelection) {
    const status = document.querySelector('#status');
    const playerScoreDiv = document.querySelector('#user-score');
    if (computerSelection === playerSelection) {
        status.textContent = `${computerSelection} and ${playerSelection}. It's a tie!`
    }
    else if (computerSelection == 'rock') {
        switch (playerSelection) {
            case 'scissors':
                computerScore += 1;
                document.querySelector('#cpu-score').textContent = computerScore; 
                status.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
                return;
            case 'paper':
                playerScore += 1
                status.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                return;
        }
    }
    else if (computerSelection == 'paper') {
        switch (playerSelection) {
            case 'scissors':
                return `You win! ${playerSelection} beats ${computerSelection}`
            case 'rock':
                computerScore += 1;
                document.querySelector('#cpu-score').textContent = computerScore; 
                status.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                break;
        }
    }
    else if (computerSelection == 'scissors') {
        switch (playerSelection) {
            case 'rock':
                return `You win! ${playerSelection} beats ${computerSelection}`
            case 'paper':
                computerScore += 1;
                document.querySelector('#cpu-score').textContent = computerScore; 
                status.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                break;
        }
    }
}

function game() {
    let computerScore = 0
    let playerScore = 0
    for (let rounds = 0; rounds < 5; rounds++) {
        let playerInput = prompt("Rock, Paper or Scissors?")
        playerInput.toLowerCase
        let computerInput = computerPlay()
        let result = playRound(computerInput, playerInput)
        console.log(result)
        if (result.substring(0, 8) === 'You win!') {
            playerScore++
        } else if (result.substring(0, 8) === 'You lose') {
            computerScore++
        }
    }
    if (computerScore < playerScore) {
        console.log(`Congratulations! You won with the score of ${playerScore} - ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`Damnit, you lost to the computer with the score of ${computerScore} - ${playerScore}`)
    } else {
        console.log(`Tie! ${computerScore} - ${playerScore}`)
    }
}
