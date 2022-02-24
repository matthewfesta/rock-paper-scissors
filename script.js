//this array will be universally declared
const choices = ["rock", "paper", "scissors"];

//created this function to allow the computer to randomly generated one of the choices in the array
function computerPlay(arr) {
    //this is to access a random index of the array
	const randomIndex = Math.floor(Math.random() * choices.length);
    //this is to access a random item of the array
	const item = choices[randomIndex];
    // we want to make sure that we return either rock, paper or scissors each play. 
	return item;
}

// created a variable computerResult to store for later
const computerResult = computerPlay(choices);
