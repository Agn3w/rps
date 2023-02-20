//open console and initialize with game();//
function getComputerChoice(items) {
    return items[Math.floor(Math.random() * items.length)];
   }
   
   const items = ["rock","paper","scissors"]
   
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

    let playerScore = 0
    let computerScore = 0
   function playRound() {
        const score = document.getElementById("score")
        const computerSelection = getComputerChoice(items)

        if (playerScore === 5){
            score.textContent = "YOU WIN";
       
        }else if (computerScore === 5){
            score.textContent = "COMPUTER WINS";
   
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + playerScore + " Computer Score: " + ++computerScore;
            
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
        score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + ++playerScore + " Computer Score: " + computerScore;
       
        }else if (playerSelection == "rock" && computerSelection == "rock") {
                score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + playerScore + " Computer Score: " + computerScore;
        
        }else if (playerSelection == "paper" && computerSelection == "rock") {
                score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + ++playerScore + " Computer Score: " + computerScore;
        
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
                score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + playerScore + " Computer Score: " + ++computerScore;
        
        }else if (playerSelection == "paper" && computerSelection == "paper") {
            score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + playerScore + " Computer Score: " + computerScore;
        
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + ++playerScore + " Computer Score: " + computerScore;    
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + playerScore + " Computer Score: " + ++computerScore;
        
        }else if (playerSelection == "scissors" && computerSelection == "scissors") {
            score.textContent = "You: " + playerSelection + " Computer: " + computerSelection + " Player Score: " + playerScore + " Computer Score: " + computerScore;
        }
       
       }