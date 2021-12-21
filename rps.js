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
    if (computerSelection === playerSelection) {
        return `${computerSelection} and ${playerSelection}. It's a tie!`
    }
    else if (computerSelection == 'rock') {
        switch (playerSelection) {
            case 'scissors':
                return `You lose! ${computerSelection} beats ${playerSelection}`
                break;
            case 'paper':
                return `You win! ${playerSelection} beats ${computerSelection}`
                break;
        }
    }
    else if (computerSelection == 'paper') {
        switch (playerSelection) {
            case 'scissors':
                return `You win! ${playerSelection} beats ${computerSelection}`
            case 'rock':
                return `You lose! ${computerSelection} beats ${playerSelection}`
        }
    }
    else if (computerSelection == 'scissors') {
        switch (playerSelection) {
            case 'rock':
                return `You win! ${playerSelection} beats ${computerSelection}`
            case 'paper':
                return `You lose! ${computerSelection} beats ${playerSelection}`
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
