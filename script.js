console.log("Hello world!");

function getComputerChoice(){
    let myChoice = ['Rock', 'Paper', 'Scissors'];
    return myChoice[Math.floor(Math.random() * 3)];

}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    let resultMsg = '';
    let result = '';
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if(playerChoice === computerChoice){
        result = 'tie';
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        result ='win';
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper'){
        result = 'lose';
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        result ='win';
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors'){
        result = 'lose';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        result ='win';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock'){
        result = 'lose';
    }

    if(result == 'tie'){
        resultMsg = `It's a tie between ${playerChoice} and ${computerChoice}!`;
    }
    else if (result == 'win'){
        resultMsg =  `You win by choosing ${playerChoice} against ${computerChoice}!`;
    }
    else if (result == 'lose'){
        resultMsg =  `You lose by choosing ${playerChoice} against ${computerChoice}!`;
    }

    console.log(resultMsg);
    return result;
}

function game(){
    let winRecord = 0;
    let loseRecord = 0;

    for( let i = 0; i < 5; i++){
        //let choice = prompt('Please choose between Rock, Paper and Scissors')
        let choice = 'rock'
        //let result = playRound(choice, getComputerChoice())        

        if(result == 'win')
            winRecord++;
        else if (result == 'lose')
            loseRecord++;
    }

    if (winRecord > loseRecord)
        console.log(`You win with a score of ${winRecord} against ${loseRecord}`);
    else if (loseRecord > winRecord)
        console.log(`You lose with a score of ${winRecord} against ${loseRecord}`);
    else if (loseRecord == winRecord)
        console.log(`It's a tie with a score of ${winRecord} against ${loseRecord}`)
}

game();