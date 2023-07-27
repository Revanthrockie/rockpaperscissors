//function to randomly select any of the three options
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;

        case 2:
            return 'scissors';
            break;

        default:
            getComputerChoice();
            break;
    };
}

const draw = undefined;
const lost = undefined;
const won = undefined;

// takes two inputs compare and result the winner!!
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log('Draw try again!');
        return draw;

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        return lost;

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! scissors beats Rock');
        return lost;

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        return lost;

    } else {
        console.log('Hooray you WIN! u fucking bastard');
        return won;
    }


}

let playerSelection = prompt("Type any one of these 1.rock , 2.paper, 3.scissors: ");

let computerSelection = getComputerChoice();




// function to check winner after 5 rounds.. if 3 rounds are won the user is the winner.. else you know what (the user is the loser);
function game(func, n) {
    let playerWins = 0;
    for (let i = 0; i < n; i++) {
        playerSelection = prompt("Type any one of these 1.rock , 2.paper, 3.scissors: ");
        console.log(`player: ${playerSelection}`);
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if(result === won){
            playerWins++
        }

    }
    if(playerWins >= 3){
        console.log("Congratulatios! mofo u did it");
    }else{
        console.log('U can\'t even win a goddamn rock-paper-game.U are a failure' );
    }
}

game(playRound, 5);