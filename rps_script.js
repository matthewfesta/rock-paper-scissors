/**
 * The JS file will provide the logic behind the rock, paper scissors game
 * 
 */

//this array will be universally declared
const choices = ['rock', 'paper', 'scissors'];
// created a variable computerSelection to store for later
const computerSelection = computerPlay();
// computer, player and final scores will start at zero. 
let computerScore = 0;
let playerScore = 0;
let finalScore = 0;



function playRound() {
    // Get input from the user:
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    // Get input from the computer:
    computerSelection = Math.random(choices.length)
    // Compare the two inputs:
    


}
// this function is to keep track of the final score
function calcScore(playerScore, computerScore){) {
 // a winner will have a score greater than the other. Tie is possible as draws are not scored.  
  if (playerScore > computerScore) {
    console.log (`Player Score: ${playerScore}. Player wins! `);
  }
   else if (computerScore > playerScore) {
    console.log(`Computer Score: ${computerScore}. Computer wins!`);
  }
  else {
      console.log('Tie!')
  }
}

//this sets the iteration of 5 rounds for the game
/*function game() {
  for (let i = 0; i < 5; i++) {  
    playRound();    
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    let computerSelection = computerPlay();

    if (playerSelection != null) {
        playerSelection.toUpperCase();
    }
    if (computerSelection != null) {
        computerSelection.toUpperCase();
    }

    console.log(playRound(playerSelection, computerSelection)); 
    } 

    calcScore();
}*/




const init = () => {
  .querySelector
}
