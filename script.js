const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const btnPlay = document.querySelector(".btn-play");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");
const gameState = document.querySelector('#state-game'); 
const messageEndGame = document.createElement('p');
const round = document.querySelector('#player-round')

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    const cumputerSelection = getComputerChoice()
    playRound(cumputerSelection, rock.textContent)
});

paper.addEventListener('click', () => {
    const cumputerSelection = getComputerChoice()
    playRound(cumputerSelection, paper.textContent)
});

scissors.addEventListener('click', () => {
    const cumputerSelection = getComputerChoice()
    playRound(cumputerSelection, scissors.textContent)
});

btnPlay.addEventListener('click',()=> {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    cleanScore();
})

// devolver aleatoriamente piedra, papel o tijera
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * (3))];
};

function deactivateButtons(){
    rock.disabled =true;
    paper.disabled =true;
    scissors.disabled =true;
};

function cleanScore(){
    playerPoints.textContent = "0";
    computerPoints.textContent = "0";
    round.textContent = "";
    messageEndGame.textContent = "";
    playerScore = 0;
    computerScore = 0;
}

function playRound(computerSelection, playerSelection) {
    computerS = computerSelection.toUpperCase();
    playerS = playerSelection.toUpperCase();
    let result;

    const p = document.createElement('p');
    p.classList.add('result-roud');

    if (computerS === "ROCK" && playerS === "PAPER") {
        p.textContent = "Ganaste , Paper beast Rock"
        playerScore += 1;
        result = "win";
    } else if (computerS === "PAPER" && playerS === "SCISSORS") {
        p.textContent = "Ganaste ,Scissors beast Paper"
        playerScore += 1;
        result = "win";
    } else if (computerS === "SCISSORS" && playerS === "ROCK") {
        p.textContent = "Ganaste , Rock beast Scissors"
        playerScore += 1;
        result = "win";
    } else if (computerS === "PAPER" && playerS === "ROCK") {
        p.textContent = "Perdiste , Paper beast Rock"
        computerScore += 1;
        result = "lose";
    } else if (computerS === "SCISSORS" && playerS === "PAPER") {
        p.textContent = "Perdiste , Scissors  beast Paper"
        computerScore += 1;
        result = "lose";
    } else if (computerS === "ROCK" && playerS === "SCISSORS") {
        p.textContent = "Perdiste , Rock beast Scissors"
        computerScore += 1;
        result = "lose";
    } else if (computerS === playerS) {
        p.textContent = "Es un empate, ambos sacaron " + computerS;
        result = "tie";;
    };
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
    round.appendChild(p);
    gameOver();
    return result;
};

function gameOver() {
    if (playerScore == 5)
    {
        messageEndGame.textContent = "Has Ganado"
        gameState.appendChild(messageEndGame);
        deactivateButtons();
        return
    }else if (computerScore == 5)
    {
        messageEndGame.textContent = "Has Perdido F"
        gameState.appendChild(messageEndGame);
        deactivateButtons();
    }
};