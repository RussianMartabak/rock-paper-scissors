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
    games += 1;
    if (isGameOver()) {
        alert('Game Over Bitch!');
        return
    }
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
                playerScoreDiv.textContent = playerScore += 1;
                status.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                return;
        }
    }
    else if (computerSelection == 'paper') {
        switch (playerSelection) {
            case 'scissors':
                playerScoreDiv.textContent = playerScore += 1;
                status.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                break;
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
                playerScoreDiv.textContent = playerScore += 1;
                status.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            case 'paper':
                computerScore += 1;
                document.querySelector('#cpu-score').textContent = computerScore; 
                status.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                break;
        }
    }
}
function isGameOver(){
    return (games >= 5 ? true : false) 
}

function evalWinner() {
    
    if (computerScore < playerScore) {
        console.log(`Congratulations! You won with the score of ${playerScore} - ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`Damnit, you lost to the computer with the score of ${computerScore} - ${playerScore}`)
    } else {
        console.log(`Tie! ${computerScore} - ${playerScore}`)
    }
}
