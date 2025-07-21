let humanScore = 0;
let computerScore = 0;

console.log("Welcome to RPS");

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        default:
            return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter your choice:");
}


function playRound(human, computer) {
    human = human.toLowerCase()
    computer = computer.toLowerCase()

    if (human === computer) {
        console.log("Tie")
    } else if ((human === "rock" && computer == "scissors") ||
        (human === "scissors" && computer == "paper") ||
        (human === "paper" && computer == "rock")) 
    { 
        console.log("Winner");
        humanScore++;
    } else {
        console.log("You Lost");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game.")
    }
}

playGame();
