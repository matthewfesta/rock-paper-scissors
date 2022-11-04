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
const playerDisplay = document.querySelector('.score-player');
const computerDisplay = document.querySelector('.score-computer');

// Function to check for different buttons
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

// Function to generate random computer choice
const computerPlay = () => {
  // Computer will randomly choose 1,2, or 3:
  let computerChoiceNumber = Math.floor(Math.random() * 3) + 1;
  switch (computerChoiceNumber) {
    case 1:
      computerChoice = 'Rock';
      break;
    case 2:
      computerChoice = 'Paper';
      break;
    case 3:
      computerChoice = 'Scissors';
      break;
    default:
      break;
  }
  return computerChoice;
}

const handleRock = (button) => {
  computerChoice = computerPlay();
  playerChoice = button;
  switch (computerChoice) {
    case 'Rock':
      break;
    case 'Paper':
      computerScore++;
      break;
    case 'Scissors':
      reRender();
      playerScore++;
  }
}

const handlePaper = (button) => {
  playerChoice = button;
  computerChoice = computerPlay();
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
  computerChoice = computerPlay()
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

const isGameOver = () => {
  if (playerScore === 5 || computerScore === 5) return true;
}

const reRender = () => {
  if (isGameOver()) {
    if (playerScore > computerScore) {
      screen.innerText = "Game Over! Player wins!"
    } else {
      screen.innerText = "Game Over! Computer wins!"
    }
    playerDisplay.innerText = `Player: ${finalPlayerScore}`;
    computerDisplay.innerText = `Computer: ${finalComputerScore}`;
    computerScore = 0;
    playerScore = 0;
  } else {
  screen.innerText = `Player: ${playerChoice} vs Computer: ${computerChoice}`;
  playerDisplay.innerText = `Player: ${playerScore}`;
  computerDisplay.innerText = `Computer: ${computerScore}`;
  }
}


// This function is to play the game



// Initialize the game by clicking
const init = () => {
  
  document
    .querySelector('.buttons')
    .addEventListener('click', function(event) {

      click(event.target.innerText);
    });
};


init();
