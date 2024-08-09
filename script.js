const choices = ["ROCK", "PAPER", "SCISSORS"];
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

checkHumanChoice();
playGame();

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
	return prompt("Enter ROCK, PAPER, or SCISSORS").toUpperCase();
}

function checkHumanChoice() {
	let isValid = false;
	while (!isValid) {
		if (choices.includes(humanChoice)) {
			isValid = true;
			return;
		} else {
			alert(
				"Invalid response. You must choose one of the following three options: ROCK, PAPER, or SCISSORS"
			);
			humanChoice = getHumanChoice();
		}
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		alert("It's a TIE!");
		return;
	} else if (humanChoice === "ROCK") {
		switch (computerChoice) {
			case "SCISSORS":
				alert("ROCK beats SCISSORS - YOU WIN!");
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

function playGame() {
	for (let i = 1; i <= 5; i++) {
		playRound(humanChoice, computerChoice);
		console.log("human: " + humanScore);
		console.log("computer: " + computerScore);
	}
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
