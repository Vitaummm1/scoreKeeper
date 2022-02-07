let score1 = 0;
let score2 = 0;
let limit = 5;
const starter = document.querySelector('#start')
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const scoreBoard = document.querySelector('h2');
const limiter = document.querySelector('#range')
scoreBoard.innerText = `0 of 0`;

limiter.addEventListener('input', function(){limit=limiter.value;});
starter.addEventListener('click', gameStart);
player1.addEventListener('click', function(){pointAdd(player1);});
player2.addEventListener('click', function(){pointAdd(player2);});

const gameStart = function(){
    console.log('start')
}

const pointAdd = function(select){
    if(score1<limit&&score2<limit){
    if(select.id === 'player1'){
    score1++;
    if(score1===limit){
        scoreBoard.innerText = `PLAYER ONE WINS!`;
    }
    else {
        scoreBoard.innerText = `${score1} of ${score2}`
    }
    }
    else{
    score2++;
    if(score2===limit){
    scoreBoard.innerText = `PLAYER TWO WINS!`;
    }
    else{
    scoreBoard.innerText = `${score1} of ${score2}`
    }
    }
}
}