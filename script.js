function computerChoice(){
const choices = ['rock', 'paper', 'scissors'];
const choice = Math.floor(Math.random()*2);
return choices[choice];
}

const draw = 'draw';
const won = 'win';
const lost = 'lose';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener("click", function(){
    playRound(this.id);
}));

let playerWins = 0;
let rounds = 0;
const resultList = document.querySelector('.resultBar');

function playRound(playerSelection){
    const computerSelection = computerChoice();
    const results = compareChoices(playerSelection, computerSelection);

    var li = document.createElement('li');
    li.textContent = ` players choice: ${playerSelection}, computers choice ${computerSelection}:: result: ${results} , round: ${rounds + 1}`;
    resultList.appendChild(li);

    if(results === won){
    playerWins++;
    }

    rounds++;

    if(rounds >= 5){
        displayWinner();
        endGame();
    };

}

function compareChoices(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return draw;
    }else if ((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')){
        return won;

    }else{
        return lost;
    }
}

function endGame(){


    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.removeEventListener('click', playRound); 
      button.style.pointerEvents = 'none';
        
      });
    };
 



function displayWinner(){
    let displayMessage = 'you Lost, you bloody faggot';
    if(playerWins === 3){
        return displayMessage = "you did it, at least u could finally win a rps game"
    }

    var li = document.createElement('li');
    li.textContent = displayMessage;
    resultList.appendChild(li);

  
    
  

}