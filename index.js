COMP_SCORE = 0
USER_SCORE = 0

function fiveGames() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        computeWinner(computerChoice,userChoice);
      }

      if (USER_SCORE > COMP_SCORE) {
        alert(`The game is over, the User won! User score was ${USER_SCORE} and Computer score was ${COMP_SCORE}.`)
      } else if (COMP_SCORE > USER_SCORE){
        alert(`The game is over, the Computer won! User score was ${USER_SCORE} and Computer score was ${COMP_SCORE}.`)
      } else {
        alert(`The game is over, it was a tie. User score was ${USER_SCORE} and Computer score was ${COMP_SCORE}.`)
      }
}

function computeWinner(computerChoice,userChoice) {
    console.log(userChoice);
    console.log(computerChoice);
    if ((userChoice === "paper" && computerChoice === "rock")
        || (userChoice === "scissors" && computerChoice === "paper") 
        || (userChoice === "rock" && computerChoice === "scissors")){
        alert("You won!")
        USER_SCORE++

    } else if (userChoice === computerChoice) {
        alert("It was a tie.")
    } else {
        alert("You lost!")
        COMP_SCORE++
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getUserChoice() {
    let flag = "True";
    while (flag === "True"){
        let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            return userChoice;
        }
    }
}

fiveGames();
