let humanScore = 0;
let computerScore = 0;

function getComputerChoice(pcChoice){   
    return Math.floor(Math.random() * pcChoice);

}

function getHumanChoice (humanChoice) {
    
 humanChoice = window.prompt("Please choice your play (rock, paper or Scissors?");
    return humanChoice.toLowerCase(); 


}

console.log (getComputerChoice(3))

function gamePlay(humanAnswer,computerAnswer){
    


    humanAnswer = getHumanChoice(humanAnswer);
    computerAnswer = getComputerChoice(3);


    if (computerAnswer === 1 ){
        console.log("hiii")
    }


}gamePlay()





        
    // if (HumanAnswer === "rock" ){
    //    console.log ("rock!")
    //    } else if (HumanAnswer ==="paper"){
    //            console.log ("paper!")
    //    }else if (HumanAnswer === "Scissors"){
    //            console.log ("Scissors!")
    //    }
    
   



