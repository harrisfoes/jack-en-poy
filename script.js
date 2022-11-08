console.log("Hello world!");

function getComputerChoice(){
    let myChoice = ['Rock', 'Paper', 'Scissors'];
    return myChoice[Math.floor(Math.random() * 3)];

}

console.log(getComputerChoice())

function playRockPeperScissors(playerSelection, computerSelection){
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

    return resultMsg;
}

console.log(playRockPeperScissors('rock','paper'))
console.log(playRockPeperScissors('rock','Scissors'))
console.log(playRockPeperScissors('rock','Rock'))

console.log(playRockPeperScissors('paper','paper'))
console.log(playRockPeperScissors('paper','Scissors'))
console.log(playRockPeperScissors('paper','Rock'))

console.log(playRockPeperScissors('ScissorS','paper'))
console.log(playRockPeperScissors('ScissorS','Scissors'))
console.log(playRockPeperScissors('ScissorS','Rock'))
