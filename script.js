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

function playRound(human, computer) {
    human = human.toLowerCase()
    computer = computer.toLowerCase()

    if (human === computer) {
        console.log("Tie")
        currentResult.textContent = "Tie"
    } else if ((human === "rock" && computer == "scissors") ||
        (human === "scissors" && computer == "paper") ||
        (human === "paper" && computer == "rock")) 
    { 
        console.log("Winner");
        currentResult.textContent = "Winner"

        humanScore++;
    } else {
        console.log("You Lost");
        currentResult.textContent = "Lost"

        computerScore++;
    }

    runningScore.textContent = `Human: ${humanScore} vs Computer: ${computerScore}`;
}

const results = document.querySelector(".results");
const currentResult = document.querySelector(".currentResult");
const runningScore = document.querySelector(".runningScore");

const buttonsDiv = document.querySelector(".optionButtons");
buttonsDiv.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (isButton) {
        let humanChoice = e.target.textContent;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        if (humanScore >= 5) {
            console.log("You won the game!");
            currentResult.textContent = "You won the game!"
            endGame()
        } else if (computerScore >= 5) {
            console.log("You lost the game.");
            currentResult.textContent = "You lost the game."
            endGame()
        }
    }
});

function endGame() {
    const buttons = document.querySelectorAll('.optionButtons button');
    buttons.forEach(button => {
        button.disabled = true; // Disable each button
    });
}