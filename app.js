let score1 = 0;
let score2 = 0;

const starter = document.querySelector('#start')
const reset = document.querySelector('#reset')
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const scoreBoard = document.querySelector('h2');
const limiter = document.querySelector('#range')
scoreBoard.innerText = `0 of 0`;

starter.addEventListener('click', function(){gameStart();});
reset.addEventListener('click', function(){gameReset();});
player1.addEventListener('click', function(){pointAdd(player1);});
player2.addEventListener('click', function(){pointAdd(player2);});
player1.addEventListener('click', function(){gameCheck(limiter.value);});
player2.addEventListener('click', function(){gameCheck(limiter.value);});

const gameStart = function(){
    player1.disabled = false;
    player2.disabled = false;
    limiter.disabled = true;
    starter.disabled = true;
}

const gameReset = function(){
    player1.disabled = true;
    player2.disabled = true;
    limiter.disabled = false;
    score1 = 0;
    score2 = 0;
    scoreBoard.innerText = `${score1} of ${score2}`;
    starter.disabled = false;
}

const gameEnd = function(){
    player1.disabled = true;
    player2.disabled = true;
}

const pointAdd = function(select){
    if(select.id === 'player1'){
    score1++;  
    }
    else{
    score2++;
    }
}
    
const gameCheck = function(check){
    if(score1<check&&score2<check){
        scoreBoard.innerText = `${score1} of ${score2}`
    }
    else{
            if(score1>score2){
                scoreBoard.innerText = `PLAYER ONE WINS` 
            }
            else{
                scoreBoard.innerText = `PLAYER TWO WINS`
            }
            gameEnd();
        }
    }