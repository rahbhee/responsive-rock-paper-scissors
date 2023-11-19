
const handSigns = document.querySelectorAll('.hand-signs');

//Pop-up

const rules = document.querySelector('.rules');
const rulesBtn = document.getElementById('rules');
const closeRulesBtn = document.querySelector('.close-rules');
const scissorsSign = document.querySelector('#scissors');
const paperSign = document.getElementById('paper');
const rockSign = document.getElementById('rock')
const handSignsDiv = document.querySelector('.hand-signs-div');
const items = handSignsDiv.querySelectorAll('.rhs');
const test = document.querySelector('.header');
const decision = document.querySelector('.decisions');
const computerGame = document.getElementById('computer-game');
const scws = document.getElementById('scws');

// 

const playerScissors = document.querySelector('.players-choice-scissors');
const playerPaper = document.querySelector('.players-choice-paper');
const playerRock = document.querySelector('.players-choice-rock');
const botShadow = document.querySelector('.bot-shadow')

const delayMilliseconds = 3000;
const computerScissors = document.querySelector('.computer-scissors');
const computerPaper = document.querySelector('.computer-paper');
const computerRock = document.querySelector('.computer-rock');
const gameOutcome = document.querySelector('.game-outcome');
const outcomeHeader = document.getElementById('outcomeh1');
const playAgain = document.getElementById('play-again');
const scoreNumber = document.getElementById('score-number');
let triangleImg = document.getElementById('triangle');

//rules 

rulesBtn.addEventListener('click', () => {
    rules.classList.add('open-rules')
    console.log('rules')
});

closeRulesBtn.addEventListener('click', () => {
    rules.classList.remove('open-rules')
});

const randomSign = () => {
    return Math.floor(Math.random()*3);
}
let result = randomSign();

// computer game play 

function computerGamePlay(){
computerGame.classList.add('computer-game');
computerGame.classList.remove('computer-game-initial')
}

function outcome(){
    gameOutcome.classList.add('game-outcome-visible')
}

//highlight effect

function highlightEffect(){
    let c1 = document.createElement('div');
    let c2 = document.createElement('div');
    let c3 = document.createElement('div');
    handSigns.append(c1);
    handSigns.append(c2);
    handSigns.append(c3);
    c1.classList.add('circle');
    c1.classList.add('circle--1');
    c2.classList.add('circle');
    c2.classList.add('circle--2');
    c3.classList.add('circle');
    c3.classList.add('circle--3');
}

//score count 

function countScore(){
    var counter = 0;
    scoreNumber.textContent = counter;
    if(result == 0){
        counter++;
        scoreNumber.textContent = counter;
    }else if(result == 1){
        scoreNumber.textContent = counter;
    }else{
        counter--;
    }
}

//play again

//hand signs play results


let scissorsResult = () => {
    items.forEach(function(item){
        item.classList.add('remove-hand-signs')
    })
   
    if(result === 1){

        playerScissors.classList.add('players-scissors-won')
        botShadow.classList.add('bot-shadow-transform')

        /*setTimeout(computerGamePlay, delayMilliseconds)
        computerGame.removeChild(computerPaper)
        computerGame.removeChild(computerRock)
        computerGame.style.border = '15px solid hsl(40, 84%, 53%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px hsl(39, 89%, 43%)'
        outcomeHeader.innerText='DRAW'
        console.log('draw'); */
    }else if(result === 0){

        playerScissors.classList.add('players-scissors-won')
        botShadow.classList.add('bot-shadow-transform')

        /*scissorsSign.classList.remove('remove-hand-signs')
        scissorsSign.classList.add('scissors-won')
        setTimeout(computerGamePlay, delayMilliseconds)
        computerGame.style.border = '15px solid hsl(230, 89%, 65%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px  hsl(230, 89%, 58%)'
        computerGame.removeChild(computerScissors)
        computerGame.removeChild(computerRock)
        console.log('win')*/
    }else{

        playerScissors.classList.add('players-scissors-won')
        botShadow.classList.add('bot-shadow-transform')

       /*scissorsSign.classList.remove('remove-hand-signs')
        scissorsSign.classList.add('scissors-won')
        setTimeout(computerGamePlay, delayMilliseconds)
        computerGame.style.border = ' 15px solid hsl(349, 70%, 56%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px hsl(349, 70%, 50%)'
        computerGame.removeChild(computerPaper)
        computerGame.removeChild(computerScissors)
        outcomeHeader.innerText='YOU LOST'*/
        console.log('lost')
    }
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 7000)
    setTimeout(countScore, 8000)
};
scissorsSign.addEventListener('click', scissorsResult)




let paperResult = () => {
    items.forEach(function(item){
        item.classList.add('remove-hand-signs')
    })
   
    if(result === 1){
        playerPaper.classList.add('players-paper-won')
        botShadow.classList.add('bot-shadow-transform')
       /* paperSign.classList.add('paper-won');
        setTimeout(computerGamePlay, delayMilliseconds);
        computerGame.removeChild(computerScissors);
        computerGame.removeChild(computerRock);
        computerGame.style.border = '15px solid hsl(230, 89%, 65%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px  hsl(230, 89%, 58%)'
        outcomeHeader.innerText='DRAW'*/
        console.log('draw');
    }else if(result === 0){
        playerPaper.classList.add('players-paper-won')
        botShadow.classList.add('bot-shadow-transform')
        /*paperSign.classList.remove('remove-hand-signs');
        paperSign.classList.add('paper-won');
        setTimeout(computerGamePlay, delayMilliseconds);
        computerGame.style.border = '15px solid hsl(349, 70%, 56%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px hsl(349, 70%, 50%)'
        computerGame.removeChild(computerPaper);
        computerGame.removeChild(computerScissors);*/
        console.log('win');
    }else{
        playerPaper.classList.add('players-paper-won')
        botShadow.classList.add('bot-shadow-transform')
       /* paperSign.classList.remove('remove-hand-signs')
        paperSign.classList.add('paper-won')
        setTimeout(computerGamePlay, delayMilliseconds)
        computerGame.style.border = '15px solid hsl(40, 84%, 53%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px hsl(39, 89%, 43%)'
        computerGame.removeChild(computerPaper);
        computerGame.removeChild(computerRock);
        outcomeHeader.innerText='YOU LOST'*/
        console.log('lost');
    }
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 7000)
    setTimeout(countScore, 8000)
};
paperSign.addEventListener('click', paperResult)

let rockResult = () => {
    items.forEach(function(item){
        item.classList.add('remove-hand-signs')
    })
   
    if(result === 1){
        playerRock.classList.add('players-rock-won')
        botShadow.classList.add('bot-shadow-transform')
        /*rockSign.classList.add('rock-won');
        setTimeout(computerGamePlay, delayMilliseconds);
        computerGame.removeChild(computerScissors);
        computerGame.removeChild(computerPaper);
        computerGame.style.border = '15px solid hsl(349, 70%, 56%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px hsl(349, 70%, 50%)'
        outcomeHeader.innerText='DRAW'*/
        console.log('draw');
    }else if(result === 0){
        playerRock.classList.add('players-rock-won')
        botShadow.classList.add('bot-shadow-transform')
       /* rockSign.classList.add('rock-won');
        setTimeout(computerGamePlay, delayMilliseconds);
        computerGame.style.border = '15px solid hsl(40, 84%, 53%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px hsl(39, 89%, 43%)'
        computerGame.removeChild(computerPaper);
        computerGame.removeChild(computerRock);*/
        console.log('win');
    }else{
        playerRock.classList.add('players-rock-won')
        botShadow.classList.add('bot-shadow-transform')
        /*rockSign.classList.add('rock-won')
        setTimeout(computerGamePlay, delayMilliseconds)
        computerGame.style.border = '15px solid hsl(230, 89%, 65%)';
        computerGame.style.boxShadow = 'inset 0px 5px 0px 0px #cbc8c8, 0px 5px 0px 0px  hsl(230, 89%, 58%)'
        computerGame.removeChild(computerScissors);
        computerGame.removeChild(computerRock);
        outcomeHeader.innerText='YOU LOST'*/
        console.log('lost');
    }
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 7000)
    setTimeout(countScore, 8000)
}
rockSign.addEventListener('click', rockResult)


const reset = () => {
    scissorsSign.style.display = 'none';
    rockSign.style.display = 'none';
    paperSign.style.display = 'none';
    
    /*scissorsSign.classList.remove('remove-hand-signs');
    paperSign.classList.remove('remove-hand-signs');
    rockSign.classList.remove('remove-hand-signs');
    scissorsSign.classList.remove('scissors-won');
    paperSign.classList.remove('paper-won');
    rockSign.classList.remove('rock-won');
    computerGame.classList.remove('computer-game');
    computerGame.classList.add('computer-game-initial');
    decision.classList.remove('decisions-visible');
    rulesBtn.classList.remove('rules-decisions');
    scws.classList.remove('scissors-computer-won-shadow');
    gameOutcome.classList.add('computer-sign-remove');*/
}
playAgain.addEventListener('click', reset);
