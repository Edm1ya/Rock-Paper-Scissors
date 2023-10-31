function getComputerChoice()
{
    // devolver aleatoriamente piedra, papel o tijera
    let selectionRandom = Math.floor(Math.random()*(3));
    let options = ["Rock", "Paper", "Scissors"];

    return options[selectionRandom]
}

function playRound(computerSelection, playerSelection){
    computerS = computerSelection.toUpperCase()
    playerS = playerSelection.toUpperCase()

    let result;

    if (computerS === "ROCK" && playerS === "PAPER")
    {
        console.log("Ganaste , Paper beast Rock");
        result = "win";
    }else if (computerS === "PAPER" && playerS === "SCISSORS")
    {
        console.log("Ganaste , Scissors beast Paper");
        result = "win";
    }else if (computerS === "SCISSORS" && playerS === "ROCK")
    {
        console.log("Ganaste , Rock beast Scissors");
        result = "win";
    }else if (computerS === "PAPER" && playerS === "ROCK")
    {
        console.log("Perdiste , Paper beast Rock");
        result = "lose";
    }else if (computerS === "SCISSORS" && playerS === "PAPER")
    {
        console.log("Perdiste , Scissors  beast Paper");
        result = "lose";
    }else if (computerS === "ROCK" && playerS === "SCISSORS")
    {
        console.log("Perdiste , Rock beast Scissors");
        result = "lose";
    }else if (computerS === playerS)
    {
        console.log("Es un empate, ambos sacaron " + computerS);
        result = "tie";;
    }else{
        console.log("No colocaste el valor correcto :(")
    }
    return result;
}

function game(){

    let win= 0, lose = 0, tie = 0;
    let result;
    for(let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Introduzca su opcion de Rock, Paper o Scissors")
        result = playRound(computerSelection,playerSelection)

        if(result === "win")
        {
            win+= 1;
        }else if(result == "lose")
        {
            lose += 1;
        }else if(result == "tie")
        {
            tie += 1;
        }
    }

    if ( win > lose && win > tie)
    {
        console.log('Haz Ganado el juego, Wins '+ win +' Lose: '+ lose + ' Tie: '+ tie)
    }
    else if (lose > win)
    {
        console.log('Haz Perdido el juego, Wins '+ win +' Lose: '+ lose + ' Tie: '+ tie)
    }
    else if (win === lose)
    {
        console.log('Ha quedado empate el juego, Wins '+ win+' Lose: '+ lose+ ' Tie: '+ tie)
    }
}

game()

