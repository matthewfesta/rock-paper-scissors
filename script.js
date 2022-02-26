//this array will be universally declared
const choices = ["rock", "paper", "scissors"];
// created a variable computerSelection to store for later
const computerSelection = computerPlay();
// both computer and player scores will start at zero. 
let computerScore = 0;
let playerScore = 0;

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
        return computerSelection + ' beats ' + playerSelection + '. Try Again!';

    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScoreScore += 1;
        return playerSelection + ' beats ' + computerSelection + '. Great job!';

    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Draw!';	

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        return playerSelection + ' beats ' + computerSelection + '. Great job!';

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
       return computerSelection + ' beats ' + playerSelection + '. Try Again!';

    } else if (playerSelection == 'paper' + computerSelection == 'paper') {
        return 'Draw!';	
    
    } else if (playerSelection == 'scissors' + computerSelection == 'rock') {
        computerScore +=1;
        return computerSelection + ' beats ' + playerSelection + '. Try Again!';
    
    } else if (playerSelection == 'scissors' + computerSelection == 'paper') {
        playerScore += 1;
        return playerSelection + ' beats ' + computerSelection + '. Great job!';
    
    } else if (playerSelection == 'scissors' + computerSelection == 'scissors') {
        return 'Draw!';	
    
    } else {
        return 'Invalid Round. Try again. '
    }    
}   
