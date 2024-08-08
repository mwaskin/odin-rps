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
function getHumanChoice() {
	// prompt user to enter ROCK, PAPER, or SCISSORS
	// return input value coverted to upperCase
	return prompt("Enter ROCK, PAPER, or SCISSORS").toUpperCase();
}

// create variable humanChoice and assign it return value of getHumanChoice
let humanChoice = getHumanChoice();

// TEST: log humanChoice
console.log("Human choice: " + humanChoice);

// declare boolean value isValid, init as false, to show if humanChoice is a valid option
let isValid = false;
// create function checkHumanChoice
function checkHumanChoice() {
	// while isValid is false
	while (!isValid) {
		// if choices array includes humanChoice--> isValid is true--> end
		if (choices.includes(humanChoice)) {
			isValid = true;
			// TEST
			console.log("Response validated");
			return;
			// else prompt user for new input and assign to humanChoice
		} else {
			alert(
				"Invalid response. You must choose one of the following three options: ROCK, PAPER, or SCISSORS"
			);
			humanChoice = getHumanChoice();
		}
	}
}

checkHumanChoice();

// create variables to hold player and computer scores

// create function playRound
// takes human and computer choices and compares them
// declare winner
// increment score
