//open console and initialize with game();//
function getComputerChoice(items) {
 return items[Math.floor(Math.random() * items.length)];
}

const items = ["rock","paper","scissors"]
const round = ["Round 1", "Round 2", "Round 3", "Round 4", "Round 5"]

let playerScore = 0
let computerScore = 0

function userInput(choice){
    return choice
}

const R = document.querySelector("#R");
R.addEventListener("click", function(){
    return playerSelection = "rock"
});
R.addEventListener("click", playRound);


const P = document.querySelector("#P"); 
P.addEventListener("click", function(){
    return playerSelection = "paper"
});
P.addEventListener("click",playRound);

const S = document.querySelector("#S");
S.addEventListener("click", function(){
    return playerSelection = "scissors"
}); 
S.addEventListener("click", playRound)

function playRound() {
     
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

