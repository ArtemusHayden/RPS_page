COMP_SCORE = 0
USER_SCORE = 0

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

const clickRock = document.getElementById('rock');
clickRock.addEventListener('click', () => {
    playRound("rock");
  });

const clickPaper = document.getElementById('paper');
clickPaper.addEventListener('click', () => {
    playRound("paper");
  });

const clickScissors = document.getElementById('scissors');
clickScissors.addEventListener('click', () => {
    playRound("scissors");
});

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    computeWinner(computerChoice,userChoice);
    checkGameCondition();
    updateScore();
}

function checkGameCondition() {
    if (USER_SCORE >= 5 || COMP_SCORE >= 5) {
        if (USER_SCORE > COMP_SCORE){
            results.textContent = (`The game is over, the User won! User score was ${USER_SCORE} and Computer score was ${COMP_SCORE}.`)
        }  else if (COMP_SCORE > USER_SCORE){
            results.textContent = (`The game is over, the Computer won! User score was ${USER_SCORE} and Computer score was ${COMP_SCORE}.`)
        } else {
            results.textContent = (`The game is over, it was a tie. User score was ${USER_SCORE} and Computer score was ${COMP_SCORE}.`)
        }
    COMP_SCORE = 0
    USER_SCORE = 0
    }
}

function computeWinner(computerChoice,userChoice) {
    console.log(`user: ${userChoice}`)
    console.log(`comp: ${computerChoice}`)
    if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "rock" && computerChoice === "scissors")){
        results.textContent = ("The user won this round!");
        USER_SCORE++
    } else if (userChoice === computerChoice) {
        results.textContent = ("The user and computer tied!")
    } else {
        results.textContent = ("The computer won this round!");
        COMP_SCORE++
    }
}

function updateScore(){
    playerScore.textContent = (`The player score is ${USER_SCORE}.`);
    compScore.textContent = (`The computer score is ${COMP_SCORE}.`);
}

const resultContainer = document.querySelector('.result-container');

const playerScore = document.createElement('p');
playerScore.classList.add('playerScore');
playerScore.textContent = (`The player score is ${USER_SCORE}.`);
resultContainer.appendChild(playerScore);

const compScore = document.createElement('p');
compScore.classList.add('compScore');
compScore.textContent = (`The computer score is ${COMP_SCORE}.`);
resultContainer.appendChild(compScore);

const results = document.createElement('p');
results.classList.add('results');
results.textContent = ("Goodluck!");
resultContainer.appendChild(results);

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener("mouseover", () =>{
        button.classList.add("overButton")
    });
    button.addEventListener("mouseout", () =>{
        button.classList.remove("overButton")
    })
});
