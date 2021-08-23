let playerScore = 0;
let computerScore = 0;

let playerOption = "";

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

rockBtn.onclick = () => {
    playerOption = "rock";
    game();
    document.getElementById("playerOption").src = "./img/icons8-hand-rock-48.png";
}
paperBtn.onclick = () => {
    playerOption = "paper";
    game();
    document.getElementById("playerOption").src = "./img/icons8-hand-48.png";
}
scissorsBtn.onclick = () => {
    playerOption = "scissors";
    game();
    document.getElementById("playerOption").src = "./img/icons8-hand-scissors-48.png";
}

let game = () => {
    let computerOption = "";

    const options = ["rock", "paper", "scissors"];
    let randomComputerOption = array => array[Math.floor(Math.random() * options.length)];
    computerOption = randomComputerOption(options);

    let result = "";

    if (computerOption == "rock") {
        document.getElementById("computerOption").src = "./img/icons8-hand-rock-48.png";
        if (playerOption == "rock") {
            result = "It's a tie!";
        } else if (playerOption == "paper") {
            result = "You won!";
            playerScore++;
        } else if (playerOption == "scissors") {
            result = "You lost!";
            computerScore++;
        }
    } else if (computerOption == "paper") {
        document.getElementById("computerOption").src = "./img/icons8-hand-48.png";
        if (playerOption == "rock") {
            result = "You lost!";
            computerScore++;
        } else if (playerOption == "paper") {
            result = "It's a tie!";
        } else if (playerOption == "scissors") {
            result = "You won!";
            playerScore++;
        }
    } else if (computerOption == "scissors") {
        document.getElementById("computerOption").src = "./img/icons8-hand-scissors-48.png";
        if (playerOption == "rock") {
            result = "You won!";
            playerScore++;
        } else if (playerOption == "paper") {
            result = "You lost!";
            computerScore++;
        } else if (playerOption == "scissors") {
            result = "It's a tie!";
        }
    }
    document.getElementById("whoWon").innerHTML = result;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
}
