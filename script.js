// Rock, Paper, Scissors

// Rock, Paper, Scissors is a two player game
// Rock beats scissors, scissors beats paper, and paper beats rock
// There is a countdown where players count before playing their choice

// Planning:

// The program will run in console, no user interface needed
// The user will need to enter a choice between rock, paper, scissors
// The computer will randomly select a choice
// The game will have 5 rounds, track scores and declare a winner at the end

// Pseudocode:

// Get player choice
// Generate computer choice
// If player choice = computer choice, print "tie"
// If player choice = "rock", and computer choice = "scissors", print "win"
// If player choice = "paper" and computer choice = "rock", print "win"
// if player choice = "scissors" and computer choice = "paper", print "win"
// Else print "lose"
// Repeat game 5 times
// Print winner of the game

/* Old Code - console rps
// Get computer choice
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice == 0) {
    console.log("Computer: Rock");
    return "Rock";
  } else if (compChoice == 1) {
    console.log("Computer: Paper");
    return "Paper";
  } else {
    console.log("Computer: Scissors");
    return "Scissors";
  }
}

// Get human choice
function getHumanChoice() {
  let userChoice = prompt("Enter your choice (rock, paper, or scissors): ");

  // If user inputs nothing
  if (!userChoice) {
    console.log("Invalid choice. Please try again.");
    return getHumanChoice(); // Asks user for input again
  }

  // If user inputs something
  userChoice =
    userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase(); // Ensures input is a normal capitalised word (exmaple: SciSSoRs becomes Scissors)

  if (
    userChoice === "Rock" ||
    userChoice === "Paper" ||
    userChoice === "Scissors"
  ) {
    console.log(`You: ${userChoice}`);
    return userChoice;
  } else {
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice(); // Asks user for input again
  }
}

// Plays the game
function playGame() {
  // Player score variables
  let humanScore = 0;
  let computerScore = 0;
  // Plays a round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("Tie!");
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++; // +1 to users score
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
      console.log("You win! Paper beats Rock");
      humanScore++; // +1 to users score
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++; // +1 to users score
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++; // +1 to computers score
    }
  }

  // Plays 5 rounds
  for (let increment = 1; increment <= 5; increment++) {
    console.log(`\nRound ${increment}`); // Heading for each round
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Scores | You: ${humanScore} | Computer: ${computerScore}`); // Displays scores after each round
  }

  // Prints the output of the game
  if (humanScore > computerScore) {
    console.log("Game Over: You won!");
  } else if (computerScore > humanScore) {
    console.log("Game Over: You lost!");
  } else {
    console.log("Game Over: It's a tie!");
  }
}

// Starts the program
playGame();
*/

// Updated Program - rps with ui

// Planning:

// The program will run in the browser using buttons and divs (not the console)
// The player will click one of three buttons: rock, paper, or scissors
// The computer will randomly select a choice
// A result message will be displayed on the page
// The game will continue until either the player or the computer reaches 5 points
// The games scores will be displayed
// Once a score of 5 is reached, the winner will be displayed on screen

// Pseudocode

// Wait for player to click a button (rock, paper, or scissors)
// Get the player's choice from the clicked button
// Generate computer choice
// If player choice = computer choice, print "tie"
// If player choice = "rock", and computer choice = "scissors", print "win", add 1 to player score
// If player choice = "paper" and computer choice = "rock", print "win", add 1 to player score
// if player choice = "scissors" and computer choice = "paper", print "win", add 1 to player score
// Else print "lose", add 1 to computer score
// Display the current score after each round
// If player score = 5 or computer socre = 5, display the final winner
// Stop game

// Player scores
let playerScore = 0;
let computerScore = 0;

// Grab information containers from the page
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

// Generate a random choice for computer
function getComputerChoice() {
  // Randomly pick a number from 0, 1, and 2
  let randomChoice = Math.floor(Math.random() * 3);
  // Assign each number a choice
  if (randomChoice === 0) {
    return "Rock";
  } else if (randomChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Play the game
function playRound(playerChoice) {
  // Assign variable with the random choice
  let computerChoice = getComputerChoice();

  // If the game is over, stop
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  // Compare choices
  if (playerChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    resultDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
  }

  // Update and show score
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check for the winner
  if (playerScore === 5) {
    winnerDiv.textContent = "You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "The computer won the game!";
    disableButtons();
  }
}

// Disable buttons when someone wins
function disableButtons() {
  document.querySelector("#rockBtn").disabled = true;
  document.querySelector("#paperBtn").disabled = true;
  document.querySelector("#scissorsBtn").disabled = true;
}

// Event listeners for player buttons
document.querySelector("#rockBtn").addEventListener("click", function () {
  playRound("Rock");
});
document.querySelector("#paperBtn").addEventListener("click", function () {
  playRound("Paper");
});
document.querySelector("#scissorsBtn").addEventListener("click", function () {
  playRound("Scissors");
});
