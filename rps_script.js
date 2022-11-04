/**
 * The JS file will provide the logic behind the rock, paper scissors game
 * 
 */

// Global variables:
let computerScore = 0;
let playerScore = 0;
let finalPlayerScore = 0;
let finalComputerScore = 0;
let playerChoice;
let computerChoice;
const screen = document.querySelector('.result-screen');
const playerDisplay = document.querySelector('.result-player');
const computerDisplay = document.querySelector('.result-computer');

// Fuction to check for different buttons
const click = (button) => {
  switch (button) {
    case 'Rock':
      handleRock(button);
      break;
    case 'Paper':
      handlePaper(button);
      break;
    case 'Scissors':
      handleScissors(button);
      break;
    default:
      break;
  }
  reRender();
}

const handleRock = (button) => {
  playerChoice = button;
  switch (computerChoice) {
    case 'Rock':
      console.log('Tie!');
      break;
    case 'Paper':
      console.log('Computer wins!');
      computerScore++;
      break;
    case 'Scissors':
      console.log('Player wins!');
      playerScore++;
  }
}

const handlePaper = (button) => {
  playerChoice = button;
  switch (computerChoice) {
    case 'Rock':
      console.log('Player wins!');
      playerScore++;
      break;
    case 'Paper':
      console.log('Tie!');
      break;
    case 'Scissors':
      console.log('Computer wins!');
      computerScore++;
  }
}

const handleScissors = (button) => {
  playerChoice = button;
  switch (computerChoice) {
    case 'Rock':
      console.log('Computer wins!');
      computerScore++;
      break;
    case 'Paper':
      console.log('Player wins!');
      playerScore++;
      break;
    case 'Scissors':
      console.log('Tie!');
  }
}

// // This function plays a single round of the game
    

// this function is to keep track of the final score


// This function is to play the game




const init = () => {
  document
    .querySelector('.buttons')
    .addEventListener('click', function(event) {

      click(event.target.innerText);
    });
};

}

init();
