let result_div = document.querySelector(".vs-message");
let who_won_div = document.querySelector(".who-won");
let winRecord = 0;
let loseRecord = 0;
let playerChoice = ''
let scorediv = document.querySelector(".playerscore");
let cpudiv = document.querySelector(".computerscore");
const jackenpoyButtons = document.querySelectorAll('.card');

function getComputerChoice() {
    let myChoice = ['Rock', 'Paper', 'Scissors'];
    return myChoice[Math.floor(Math.random() * 3)];

}

function getRandomInspirationalMessage() {
    let myChoice = ['You can do it!', 'I believe in you!', 'Trust your instinct!'];
    return myChoice[Math.floor(Math.random() * 3)];

}

function playRound(playerSelection, computerSelection) {
    let resultMsg = '';
    let result = '';
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        result = 'tie';
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        result = 'win';
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        result = 'lose';
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        result = 'win';
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        result = 'lose';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        result = 'win';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        result = 'lose';
    }

    if (result == 'tie') {
        resultMsg = `It's a tie between ${playerChoice} and ${computerChoice}!`;
    }
    else if (result == 'win') {
        resultMsg = `You win by choosing ${playerChoice} against <b>${computerChoice}!`;
    }
    else if (result == 'lose') {
        resultMsg = `You lose by choosing ${playerChoice} against ${computerChoice}!`;
    }

    //console.log(resultMsg);
    result_div.textContent = resultMsg;
    return result;
}

function checkGame(){
    console.log("text");
    console.log(winRecord);
    console.log(loseRecord);
    if (winRecord == 5 || loseRecord == 5){
        console.log("dito")
        if (winRecord > loseRecord)
            who_won_div.textContent = `You win with a score of ${winRecord} against ${loseRecord}`;
        else if (loseRecord > winRecord)
            who_won_div.textContent = `You lose with a score of ${winRecord} against ${loseRecord}`;

        //reset for next game
        winRecord = 0;
        loseRecord = 0;
        result_div.textContent = "Press another button to play again";
        scorediv.textContent = 'Player Score:' + winRecord;
        cpudiv.textContent = 'Computer Score:' + loseRecord;
    }
}

function game() {

    jackenpoyButtons.forEach((button) => {

        button.addEventListener('click', () => {
            playerChoice = button.id;
            console.log(button.id);

            let result = playRound(playerChoice, getComputerChoice())
            console.log(playerChoice);
    
            if (result == 'win') {
                winRecord++;
                scorediv.textContent = 'Player Score:' + winRecord;
            }
            else if (result == 'lose'){
                loseRecord++;
                cpudiv.textContent = 'Computer Score:' + loseRecord;
            }

            who_won_div.textContent = getRandomInspirationalMessage();

            checkGame();

        });

    });
}

game();