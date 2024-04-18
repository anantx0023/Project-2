let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
      //Rock, Papper, Scissor
      const options = ["rock","paper","scissor"];
      const randIDX = Math.floor(Math.random()*3);
      return options[randIDX];
}

const showWinner = (userWin) => {
      if(userWin){
        console.log("you win");
        msg.innerText = "You Win";
      }
      else{
        console.log("you lose");
        msg.innerText = "You lose";
      }
}

const playGame = (userChoice) => {
      let userWin = true;
      console.log("user's choice = ",userChoice);
      //Generate computer choice
      const compChoice = genComputerChoice();
      console.log("computer's choice  = ",compChoice);

      if(userChoice === compChoice){
        console.log("game is draw");
        msg.innerText = "it's a Draw";
      }
      else{
        
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
      }
      showWinner(userWin);
}

choices.forEach((choice) => {
      
      choice.addEventListener("click",()=>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
      })
})