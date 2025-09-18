let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getComputerChoice(pcChoice) {
    return Math.floor(Math.random() * pcChoice);

}

function getHumanChoice(humanChoice) {

    humanChoice = window.prompt("Please choice your play (rock, paper or Scissors?");
    return humanChoice.toLowerCase();


}

console.log(getComputerChoice(1))

function gamePlay(humanAnswer, computerAnswer) {


    for (let i = 0; i < 5; i++) {
        humanAnswer = getHumanChoice(humanAnswer);
        let HumanAnswer = humanAnswer;
        computerAnswer = getComputerChoice(3);


        // rock = 0
        // paper = 1
        // Scissors = 2

        if (HumanAnswer === "rock" && computerAnswer === 0 || HumanAnswer === "paper" && computerAnswer === 1 || HumanAnswer === "Scissors" && computerAnswer === 2) {
            console.log("tie!")
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)
            roundNumber++;

            console.log("round:" + roundNumber)
            // rock
        } else if (HumanAnswer === "rock" && computerAnswer === 2) {
            console.log("Rock beats Siscors! (you win!) +1")
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
            console.log("Siscors beats paper! (you lost) :(")
            computerScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)

        }
        //Siscors
        else if (HumanAnswer === "Siscors" && computerAnswer === 1) {
            console.log("Siscors beats Paper! (you win!) +1")
            humanScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)


        } else if (HumanAnswer === "Siscors" && computerAnswer === 0) {
            console.log("Rock beats Siscors! (you lost) :(")
            computerScore++;
            roundNumber++;

            console.log("round:" + roundNumber)
            console.log("Score:" + humanScore)
            console.log("computer Score:" + computerScore)

        }
    }
}
gamePlay()