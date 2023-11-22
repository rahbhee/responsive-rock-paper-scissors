
const handSigns = document.querySelectorAll('.hand-signs');

//Pop-up

const rules = document.querySelector('.rules');
const rulesBtn = document.getElementById('rules');
const closeRulesBtn = document.querySelector('.close-rules');
const scissorsSign = document.querySelector('#scissors');
const paperSign = document.getElementById('paper');
const rockSign = document.getElementById('rock')
const handSignsDiv = document.querySelector('.hand-signs-div');
const test = document.querySelector('.header');
const decision = document.querySelector('.decisions');
const computerGame = document.getElementById('computer-game');
const scws = document.getElementById('scws');
// 
const playerScissors = document.querySelector('.players-choice-scissors');
const playerPaper = document.querySelector('.players-choice-paper');
const playerRock = document.querySelector('.players-choice-rock');
//
const botShadow = document.querySelector('#bot-shadow');
const botScissors = document.querySelector('.bot-choice-scissors');
const botPaper = document.querySelector('.bot-choice-paper');
const botRock = document.querySelector('.bot-choice-rock');
const botChoice = document.querySelectorAll('.bot-choice')
//
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


let result = randomSign();
// bot game play 

botScissors.style.display = 'none'
botPaper.style.display = 'none'
botRock.style.display = 'none'
botShadow.style.display = 'none'

playerPaper.style.display = 'none'
playerRock.style.display = 'none'
playerScissors.style.display = 'none'

function botScissorsDisplay(){
    botScissors.style.display = 'block'
}
function botRockDisplay(){
    botRock.style.display = 'block'
}
function botPaperDisplay(){
    botPaper.style.display = 'block'
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
gameOutcome.style.display = 'none'

function outcome(){
    gameOutcome.style.display = 'block'
}

//hand signs play results

let scissorsResult = () => {
        triangleImg.style.display = 'none'
        scissorsSign.style.display = 'none'
        paperSign.style.display = 'none'
        rockSign.style.display = 'none'
    if(result === 1){
        outcomeHeader.innerText='DRAW'
        setTimeout(botScissorsDisplay, 3000)
        botPaper.style.display ='none'
        botRock.style.display = 'none'
        console.log('draw');
    }else if(result === 0){
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botPaperDisplay, 3000)
        botScissors.style.display ='none'
        botRock.style.display = 'none'
        console.log('win')
    }else{
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botRockDisplay, 3000)
        botPaper.style.display ='none'
        botScissors.style.display = 'none'
        console.log('lost')
    }
    playerScissors.classList.add('players-scissors')
    playerScissors.style.display = 'block'
    botShadow.classList.add('bot-shadow-transform');
    botShadow.style.display = 'block'
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 5000)
    setTimeout(countScore, 6000)
};
scissorsSign.addEventListener('click', scissorsResult)

let paperResult = () => {
    randomSign()
    triangleImg.style.display = 'none'
    scissorsSign.style.display = 'none'
    paperSign.style.display = 'none'
    rockSign.style.display = 'none'

    if(result === 0){
        outcomeHeader.innerText='DRAW'
        setTimeout(botPaperDisplay, 3000)
        botScissors.style.display ='none'
        botRock.style.display = 'none'
        console.log('draw');
    }else if(result === 1){
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botRockDisplay, 3000)
        botScissors.style.display ='none'
        botPaper.style.display = 'none'
        console.log('win');
    }else{
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botScissorsDisplay, 3000)
        botPaper.style.display ='none'
        botRock.style.display = 'none'
        console.log('lost');
    }
    playerPaper.classList.add('players-paper')
    playerPaper.style.display = 'block'
    botShadow.classList.add('bot-shadow-transform')
    botShadow.style.display = 'block'
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 5000)
    setTimeout(countScore, 6000)
};
paperSign.addEventListener('click', paperResult)

let rockResult = () => {
    randomSign()
    triangleImg.style.display = 'none'
    scissorsSign.style.display = 'none'
    paperSign.style.display = 'none'
    rockSign.style.display = 'none'
    if(result === 1){
        outcomeHeader.innerText='DRAW'
        setTimeout(botRockDisplay, 3000)
        botScissors.style.display ='none'
        botPaper.style.display = 'none'
        console.log('draw');
    }else if(result === 0){
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botScissorsDisplay, 3000)
        botPaper.style.display ='none'
        botRock.style.display = 'none'
        console.log('win');
    }else{
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botPaperDisplay, 3000)
        botScissors.style.display ='none'
        botRock.style.display = 'none'
        console.log('lost');
    }
    playerRock.classList.add('players-rock')
    playerRock.style.display = 'block'
    botShadow.classList.add('bot-shadow-transform')
    botShadow.style.display = 'block'
    decision.classList.add('decisions-visible')
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 5000)
    setTimeout(countScore, 6000)
}
rockSign.addEventListener('click', rockResult)

playAgain.addEventListener('click', reset);

function reset() {
   gameOutcome.style.display = 'none';
   playerPaper.style.display = 'none';
   playerRock.style.display = 'none';
   playerScissors.style.display = 'none';
   botPaper.style.display = 'none';
   botRock.style.display = 'none';
   botScissors.style.display = 'none';
   botShadow.style.display ='none';
   triangleImg.style.display = 'block';
   scissorsSign.style.display = 'block';
   paperSign.style.display = 'block';
   rockSign.style.display = 'block';
   console.log('hey')
}

