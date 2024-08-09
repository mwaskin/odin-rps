// create choices array ['ROCK','PAPER','SCISSORS']
const choices = ["ROCK", "PAPER", "SCISSORS"];

// create function getComputerChoice to assign computerChoice value
function getComputerChoice() {
	// randomly select number 0-2 with Math.floor(Math.random() * 3)
	// return choice array value whose index corresponds with random number
	return choices[Math.floor(Math.random() * 3)];
}

// create function getHumanChoice
function getHumanChoice() {
	// prompt user to enter ROCK, PAPER, or SCISSORS
	// return input value coverted to upperCase
	return prompt("Enter ROCK, PAPER, or SCISSORS").toUpperCase();
}

// create function checkHumanChoice
function checkHumanChoice(humanChoice) {
	// declare boolean value isValid, init as false, to show if humanChoice is a valid option
	let isValid = false;
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

// create variables to hold player and computer scores
let humanScore = 0;
let computerScore = 0;

function compareChoices(humanChoice, computerChoice) {
	// takes human and computer choices and compares them
	if (humanChoice === computerChoice) {
		alert("It's a TIE!");
		return;
	} else if (humanChoice === "ROCK") {
		switch (computerChoice) {
			case "SCISSORS":
				// declare winner
				alert("ROCK beats SCISSORS - YOU WIN!");
				// increment score
				humanScore++;
				break;
			case "PAPER":
				alert("PAPER beats ROCK - YOU LOSE!");
				computerScore++;
				break;
		}
	} else if (humanChoice === "PAPER") {
		switch (computerChoice) {
			case "ROCK":
				alert("PAPER beats ROCK - YOU WIN!");
				humanScore++;
				break;
			case "SCISSORS":
				alert("SCISSORS beats PAPER - YOU LOSE!");
				computerScore++;
				break;
		}
	} else {
		switch (computerChoice) {
			case "PAPER":
				alert("SCISSORS beats PAPER - YOU WIN!");
				humanScore++;
				break;
			case "ROCK":
				alert("ROCK beats SCISSORS - YOU LOSE!");
				computerScore++;
				break;
		}
	}
}

// create function playRound
function playRound() {
	// create variable computerChoice and assign it return value of getComputerChoice
	let computerChoice = getComputerChoice();
	// TEST: log computerChoice
	console.log("Computer choice: " + computerChoice);
	// create variable humanChoice and assign it return value of getHumanChoice
	let humanChoice = getHumanChoice();
	// TEST: log humanChoice
	console.log("Human choice: " + humanChoice);
	checkHumanChoice(humanChoice);
	compareChoices(humanChoice, computerChoice);
}

// create function playGame
function playGame() {
	// for loop to play 5 rounds
	for (let i = 1; i <= 5; i++) {
		playRound();
		console.log("human: " + humanScore);
		console.log("computer: " + computerScore);
	}
	// compare scores and declare winner
	if (humanScore === computerScore) {
		alert(
			`GAME OVER! Your Score: ${humanScore}; Computer Score: ${computerScore}. IT'S A TIE!`
		);
	} else if (humanScore > computerScore) {
		alert(
			`GAME OVER! Your Score: ${humanScore}; Computer Score: ${computerScore}. YOU WIN!`
		);
	} else {
		alert(
			`GAME OVER! Your Score: ${humanScore}; Computer Score: ${computerScore}. OH NO, YOU LOST!`
		);
	}
}

playGame();
