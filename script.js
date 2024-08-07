// create choices array ['ROCK','PAPER','SCISSORS']
const choices = ["ROCK", "PAPER", "SCISSORS"];

// create function getComputerChoice to assign computerChoice value
function getComputerChoice() {
	// randomly select number 0-2 with Math.floor(Math.random() * 3)
	// return choice array value whose index corresponds with random number
	return choices[Math.floor(Math.random() * 3)];
}

// create variable computerChoice and assign it return value of getComputerChoice
let computerChoice = getComputerChoice();

// TEST: log computerChoice
console.log("Computer choice: " + computerChoice);

// create function getHumanChoice
// prompt user to enter ROCK, PAPER, or SCISSORS
// return input value coverted to upperCase

// create variable humanChoice and assign it return value of getHumanChoice

// TEST: log humanChoice
