//function to randomly select any of the three options
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(chocie){
        case 1:
            console.log('rock');
        break;

        case 2:
            console.log('paper');
        break;

        case 3:
            console.log('scissors');
        break;

        default:
            console.log('fuck you!, Im in no mood to play');
        break;
    };
}

// takes two inputs compare and result the winner!!
function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){
        console.log('Draw try again!');
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You Lose! Paper beats Rock');
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You Lose! scissors beats Rock');
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You Lose! Rock beats Scissors');
    }else {
        console.log('Hooray you WIN! u fucking bastard');
    }


}

const playerSelection = prompt("Type any one of these 1.rock , 2.paper, 3.scissors: ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));