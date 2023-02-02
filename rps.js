//open console and initialize with game();//

function getComputerChoice(items) {
 return items[Math.floor(Math.random() * items.length)];
}

const items = ["rock","paper","scissors"]

function userInput() {
    return prompt("Choose Your Weapon").toLowerCase()
}

let playerScore = 0
let computerScore = 0

function playRound() {
     const playerSelection = userInput()
     const computerSelection = getComputerChoice(items)

     if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        return computerScore++
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        return playerScore ++
    }
    
    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        return computerScore++
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        return playerScore++
    }
    
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        return computerScore++
    }
    
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
    }
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        return playerScore++   
    }
    
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
        return computerScore++
    }
    
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("You: " + playerSelection);
        console.log("Computer: " + computerSelection);
    }
    
}


function game() {
    for (i = 0 ; i < 5 ; i++)
    playRound()  
    if (playerScore > computerScore) {
        console.log("You win!")
    }
    else if (computerScore > playerScore) {
        console.log("You Lose!")
    }
    else {
        console.log("DRAW!")
    }
    console.log("Your Score: " + playerScore)  
    console.log("Computer's Score: " +computerScore)
}




