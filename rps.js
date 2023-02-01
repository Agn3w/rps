function getComputerChoice(items) {
 return items[Math.floor(Math.random() * items.length)];
}

const items = ["rock","paper","scissors"]

function userInput() {
    return prompt("Choose Your Weapon").toLowerCase()
}

function playRound() {
     const playerSelection = userInput()
     const computerSelection = getComputerChoice(items)

     if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("you lose, paper beats rock!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("you win, rock beats scissors!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("DRAW!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, paper beats rock!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose, scissors beats paper!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("DRAW!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win, scissors beats paper!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose, rock beats scissors!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("DRAW!");
        console.log(playerSelection);
        console.log(computerSelection);
    }
    
    else {
        console.log("ERROR");
        console.log(playerSelection);
        console.log(computerSelection);
    }
}


function game() {

    for (i = 0 ; i < 5 ; i++)
    playRound()    
}
