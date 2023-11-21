
const handSigns = document.querySelectorAll('.hand-signs');

//Pop-up

const rules = document.querySelector('.rules');
const rulesBtn = document.getElementById('rules');
const closeRulesBtn = document.querySelector('.close-rules');
const scissorsSign = document.querySelector('#scissors');
const paperSign = document.getElementById('paper');
const rockSign = document.getElementById('rock')
const handSignsDiv = document.querySelector('.hand-signs-div');
const items = document.querySelectorAll('.rhs');
const test = document.querySelector('.header');
const decision = document.querySelector('.decisions');
const computerGame = document.getElementById('computer-game');
const scws = document.getElementById('scws');
// 
const playerScissors = document.querySelector('.players-choice-scissors');
const playerPaper = document.querySelector('.players-choice-paper');
const playerRock = document.querySelector('.players-choice-rock');
//
const botShadow = document.querySelector('.bot-shadow');
const botScissors = document.querySelector('.bot-choice-scissors');
const botPaper = document.querySelector('.bot-choice-paper');
const botRock = document.querySelector('.bot-choice-rock');

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

// bot game play 

function botScissorsDisplay(){
    botScissors.classList.remove('bot-choice')
 
}

function botRockDisplay(){
    botRock.classList.remove('bot-choice')
}

function botPaperDisplay(){
    botPaper.classList.remove('bot-choice')
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

function outcome(){
    gameOutcome.classList.remove('game-outcome-remove')
}

//hand signs play results


let scissorsResult = () => {
    
        triangleImg.classList.add('remove-hand-signs')
        scissorsSign.classList.add('remove-hand-signs')
        paperSign.classList.add('remove-hand-signs')
        rockSign.classList.add('remove-hand-signs')

   
    if(result === 1){

        playerScissors.classList.add('players-scissors-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='DRAW'
        setTimeout(botScissorsDisplay, 3000)
        console.log('draw');
    }else if(result === 0){
        playerScissors.classList.add('players-scissors-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botPaperDisplay, 3000)
        console.log('win')
    }else{
        playerScissors.classList.add('players-scissors-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botRockDisplay, 3000)
        console.log('lost')
    }
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 5000)
    setTimeout(countScore, 6000)
};
scissorsSign.addEventListener('click', scissorsResult)

let paperResult = () => {
    
    triangleImg.classList.add('remove-hand-signs')
    scissorsSign.classList.add('remove-hand-signs')
    paperSign.classList.add('remove-hand-signs')
    rockSign.classList.add('remove-hand-signs')

    if(result === 1){
        playerPaper.classList.add('players-paper-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='DRAW'
        setTimeout(botPaperDisplay, 3000)
        console.log('draw');
    }else if(result === 0){
        playerPaper.classList.add('players-paper-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botRockDisplay, 3000)
        console.log('win');
    }else{
        playerPaper.classList.add('players-paper-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botScissorsDisplay, 3000)
        console.log('lost');
    }
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 5000)
    setTimeout(countScore, 6000)
};
paperSign.addEventListener('click', paperResult)

let rockResult = () => {
    
    triangleImg.classList.add('remove-hand-signs')
    scissorsSign.classList.add('remove-hand-signs')
    paperSign.classList.add('remove-hand-signs')
    rockSign.classList.add('remove-hand-signs')

    if(result === 1){
        playerRock.classList.add('players-rock-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='DRAW'
        setTimeout(botRockDisplay, 3000)
        console.log('draw');
    }else if(result === 0){
        playerRock.classList.add('players-rock-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botScissorsDisplay, 3000)
        console.log('win');
    }else{
        playerRock.classList.add('players-rock-won')
        botShadow.classList.add('bot-shadow-transform')
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botPaperDisplay, 3000)
        console.log('lost');
    }
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    scws.classList.add('scissors-computer-won-shadow');
    setTimeout(outcome, 5000)
    setTimeout(countScore, 6000)
}
rockSign.addEventListener('click', rockResult)

let reset = () => {
    
    
   gameOutcome.classList.add('remove-hand-signs')
   playerPaper.classList.add('remove-hand-signs')
   playerRock.classList.add('remove-hand-signs')
   playerScissors.classList.add('remove-hand-signs')
   botPaper.style.display = 'none'
   botRock.style.display = 'none'
   botScissors.style.display = 'none'
   botShadow.style.display ='none'
   triangleImg.classList.remove('remove-hand-signs')
   scissorsSign.classList.remove('remove-hand-signs')
   paperSign.classList.remove('remove-hand-signs')
   rockSign.classList.remove('remove-hand-signs')

   
   
   console.log('hey')
}
playAgain.addEventListener('click', reset);
