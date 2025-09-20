let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
welcome = alert("Welcome to Rock, Paper, Scissors! Best of 5 rounds wins! open the terminal to see your score :)");
function getComputerChoice(pcChoice) {
    return Math.floor(Math.random() * pcChoice);

}

function getHumanChoice(humanChoice) {

    humanChoice = window.prompt("Please choice your play (rock, paper or Scissors?");
    return humanChoice.toLowerCase();


}


function gamePlay(humanAnswer, computerAnswer) {


    for (let i = 0; i < 5; i++) {
        humanAnswer = getHumanChoice(humanAnswer);
        let HumanAnswer = humanAnswer;
        computerAnswer = getComputerChoice(3);


        // rock = 0
        // paper = 1
        // Scissors = 2

        if (HumanAnswer === "rock" && computerAnswer === 0 || 
            HumanAnswer === "paper" && computerAnswer === 1 || 
            HumanAnswer === "Scissors" && computerAnswer === 2) {
            
            console.log("tie!")
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)
            roundNumber++;

            console.log("round:" + roundNumber)
            // If both player and computer choose the same option, it's a tie
            // rock
        } else if (HumanAnswer === "rock" && computerAnswer === 2) {
            console.log("Rock beats scissors! (you win!) +1")
            humanScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)

        } else if (HumanAnswer === "rock" && computerAnswer === 1) {
            console.log("Paper beats Rock! (you lost) :(")
            computerScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)

            //paper
        } else if (HumanAnswer === "paper" && computerAnswer === 0) {
            console.log("Paper beats Rock! (you win!) +1")
            humanScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)


        } else if (HumanAnswer === "paper" && computerAnswer === 2) {
            console.log("scissors beats paper! (you lost) :(")
            computerScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)

        }
        //scissors
        else if (HumanAnswer === "scissors" && computerAnswer === 1) {
            console.log("scissors beats Paper! (you win!) +1")
            humanScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)


        } else if (HumanAnswer === "scissors" && computerAnswer === 0) {
            console.log("Rock beats scissors! (you lost) :(")
            computerScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)

        }
    }
}
gamePlay()
  if (humanScore > computerScore) {
    console.log("Final result: You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Final result: Computer wins the game!");
  } else {
    console.log("Final result: It's a tie!");
  }
console.log("Final Score: " + humanScore + " - " + computerScore);
