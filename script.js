//this array will be universally declared
const choices = ['rock', 'paper', 'scissors'];
// created a variable computerSelection to store for later
const computerSelection = computerPlay();
// computer, player and final scores will start at zero. 
let computerScore = 0;
let playerScore = 0;
let finalScore = 0;

//created this function to allow the computer to randomly generated one of the choices in the array
function computerPlay(arr) {
    //this is to access a random index of the array
	const randomIndex = Math.floor(Math.random() * choices.length);
    //this is to access a random item of the array
	const item = choices[randomIndex];
    // we want to make sure that we return either rock, paper or scissors each play. 
	return item;
}

//accounts for the actual gameplay using boolean values and incrementation of score
function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return 'computer choice: ' + computerSelection + ' beats ' + 'player choice: ' + playerSelection + '. Try Again!';

    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return 'player choice: ' + playerSelection + ' beats ' + 'computer choice: ' + computerSelection + '. Great job!';

    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Draw!';	

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        return 'player choice: ' + playerSelection + ' beats ' + 'computer choice: ' + computerSelection + '. Great job!';

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
       return 'computer choice: ' + computerSelection + ' beats ' + 'player choice: ' + playerSelection + '. Try Again!';

    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Draw!';	
    
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore +=1;
        return 'computer choice: ' + computerSelection + ' beats ' + 'player choice: ' + playerSelection + '. Try Again!';
    
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return 'player choice: ' + playerSelection + ' beats ' + 'computer choice: ' + computerSelection + '. Great job!';
    
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Draw!';	
    
    } else {
        return 'Invalid Round. Try again. '
    }    
}   

// this function is to keep track of the final score
function calcScore() {
 // a winner will have a score greater than the other. Tie is possible as draws are not scored.  
  if (playerScore > computerScore) {
    let finalScore = playerScore;  
    console.log (`Player Score: ${playerScore}. Player wins! `);
  }
   else if (computerScore > playerScore) {
    let finalScore = computerScore;  
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



 console.log(calcScore);    
