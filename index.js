
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
const playerHighlight = document.querySelector('.player-Highlight-Div');
const botHighlight = document.querySelector('.bot-Highlight-Div');

//rules 

rulesBtn.addEventListener('click', () => {
    rules.classList.add('open-rules')
    console.log('rules')
});

closeRulesBtn.addEventListener('click', () => {
    rules.classList.remove('open-rules')
});


// bot game play 

botScissors.style.display = 'none'
botPaper.style.display = 'none'
botRock.style.display = 'none'
botShadow.style.display = 'none'

playerPaper.style.display = 'none'
playerRock.style.display = 'none'
playerScissors.style.display = 'none'

decision.style.display = 'none'

//highlight effect

playerHighlight.style.display = 'none'
botHighlight.style.display ='none'

function playerHighlightDisplay(){
    playerHighlight.style.display = 'block'
}

function botHighlightDisplay(){
    botHighlight.style.display = 'block'
}
//play again

gameOutcome.style.display = 'none'

function outcome(){
    gameOutcome.style.display = 'block'
}

function drawScore(){
    scoreNumber.textContent;
}
function winScore(){
    scoreNumber.textContent++;
}
function lostScore(){
    if(scoreNumber.textContent > 0 ){
        scoreNumber.textContent--;
    }
}

function botScissorsDisplay(){
    botScissors.style.display = 'block'
}
function botRockDisplay(){
    botRock.style.display = 'block'
}
function botPaperDisplay(){
    botPaper.style.display = 'block'
}

//hand signs play results

let scissorsResult = () => {
    
    let randomSign = Math.floor(Math.random()*3)
        triangleImg.style.display = 'none'
        scissorsSign.style.display = 'none'
        paperSign.style.display = 'none'
        rockSign.style.display = 'none'
        decision.style.display = 'flex'
    if(randomSign == 0){
        outcomeHeader.innerText='DRAW'
        setTimeout(botScissorsDisplay, 1000)
        botPaper.style.display ='none'
        botRock.style.display = 'none'
        setTimeout(drawScore, 3000)
    }else if(randomSign == 1){
       outcomeHeader.innerText='YOU WIN'
        setTimeout(botPaperDisplay, 1000)
        setTimeout(playerHighlightDisplay, 1500)
        botScissors.style.display ='none'
        botRock.style.display = 'none'
        setTimeout(winScore, 3000)
    }else{
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botRockDisplay, 1000)
        setTimeout(botHighlightDisplay, 1500)
        botPaper.style.display ='none'
        botScissors.style.display = 'none'
        setTimeout(lostScore, 3000)
    }
    playerScissors.classList.add('players-scissors')
    playerScissors.style.display = 'block'
    botShadow.classList.add('bot-shadow-transform');
    botShadow.style.display = 'block'
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    rulesBtn.style.display = 'none'
    setTimeout(outcome, 3000)
    setTimeout(countScore, 6000)
    countScore()
};
scissorsSign.addEventListener('click', scissorsResult)

let paperResult = () => {
    let randomSign = Math.floor(Math.random()*3)
    triangleImg.style.display = 'none'
    scissorsSign.style.display = 'none'
    paperSign.style.display = 'none'
    rockSign.style.display = 'none'
    decision.style.display = 'flex'
    if(randomSign === 0){
        outcomeHeader.innerText='DRAW'
        setTimeout(botPaperDisplay, 1000)
        botScissors.style.display ='none'
        botRock.style.display = 'none'
        setTimeout(drawScore, 3000)
    }else if(randomSign === 1){
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botRockDisplay, 1000)
        setTimeout(playerHighlightDisplay, 1200)
        botScissors.style.display ='none'
        botPaper.style.display = 'none'
        setTimeout(winScore, 3000)
    }else{
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botScissorsDisplay, 1000)
        setTimeout(botHighlightDisplay, 1200)
        botPaper.style.display ='none'
        botRock.style.display = 'none'
        setTimeout(lostScore, 3000)
    }
    playerPaper.classList.add('players-paper')
    playerPaper.style.display = 'block'
    botShadow.classList.add('bot-shadow-transform')
    botShadow.style.display = 'block'
    decision.classList.add('decisions-visible');
    rulesBtn.classList.add('rules-decisions');
    rulesBtn.style.display = 'none'
    setTimeout(outcome, 3000)
    setTimeout(countScore, 6000)
};
paperSign.addEventListener('click', paperResult)

let rockResult = () => {
    let randomSign = Math.floor(Math.random()*3)
    triangleImg.style.display = 'none'
    scissorsSign.style.display = 'none'
    paperSign.style.display = 'none'
    rockSign.style.display = 'none'
    decision.style.display = 'flex'
    if(randomSign === 0){
        outcomeHeader.innerText='DRAW'
        setTimeout(botRockDisplay, 1000)
        botScissors.style.display ='none'
        botPaper.style.display = 'none'
        setTimeout(drawScore, 3000)
        console.log('draw');
    }else if(randomSign === 1){
        outcomeHeader.innerText='YOU WIN'
        setTimeout(botScissorsDisplay, 1000)
        setTimeout(botHighlightDisplay, 1200)
        botPaper.style.display ='none'
        botRock.style.display = 'none'
        setTimeout(winScore, 3000)
        console.log('win');
    }else{
        outcomeHeader.innerText='YOU LOST'
        setTimeout(botPaperDisplay, 1000)
        setTimeout(botHighlightDisplay, 1200)
        botScissors.style.display ='none'
        botRock.style.display = 'none'
        setTimeout(lostScore, 3000)
        console.log('lost');
    }
    playerRock.classList.add('players-rock')
    playerRock.style.display = 'block'
    botShadow.classList.add('bot-shadow-transform')
    botShadow.style.display = 'block'
    decision.classList.add('decisions-visible')
    rulesBtn.classList.add('rules-decisions')
    rulesBtn.style.display = 'none'
    setTimeout(outcome, 3000)
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
   decision.style.display = 'none'
   triangleImg.style.display = 'block';
   scissorsSign.style.display = 'block';
   paperSign.style.display = 'block';
   rockSign.style.display = 'block';
   rulesBtn.style.display = 'block'
   playerHighlight.style.display ='none'
   botHighlight.style.display = 'none'
   console.log('hey')
}

