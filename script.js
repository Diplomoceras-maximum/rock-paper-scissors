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

// Player score variables
let humanScore = 0;
let computerScore = 0;

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
  userChoice =
    userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  console.log(`You: ${userChoice}`);
  return userChoice;
}

// Plays the game
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Tie!");
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
