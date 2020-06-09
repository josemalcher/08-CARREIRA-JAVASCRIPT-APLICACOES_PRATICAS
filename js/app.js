let letterSelected = 0;
let playerActive = 1;

let playOne = {
    points: 0,
}

let playTwo = {
    points: 0,
}

let play1D = document.getElementById("player1");
let play2D = document.getElementById("player2");

let scores1D = document.getElementById("scores1");
let scores2D = document.getElementById("scores2");

let letterSelectdD = document.getElementById('letter-selected');

function changePlayer() {
    playerActive = (playerActive == 1) ? 2 : 1;
    if (playerActive == 1) {
        play1D.classList.add('active');
        play2D.classList.remove('active');
    } else {
        play2D.classList.add('active');
        play1D.classList.remove('active');
    }
}

function selectLetter(event) {
    letterSelected = Math.floor((Math.random() * 13) + 1);
    console.log(letterSelected);
    showLetter();
    updateScore();



    /* Tira o efeito do link */
    event = event || window.event;
    if (event.preventDefault) {
        event.preventDefault()
    }
    if (event.returnValue) {
        event.returnValue();
    }
    return false
}

function showLetter() {
    if (letterSelected == 0) {
        letterSelectdD.style.display = 'none';
    } else {
        let src = "imgs/carts/" + letterSelected + ".png";
        letterSelectdD.setAttribute('src', src);
        letterSelectdD.style.display = 'block'
    }
}

function updateScore() {
    if (playerActive == 1) {
        playOne.points += letterSelected;
    } else {
        playTwo.points += letterSelected;
    }

    if (playOne.points >= 21 || playTwo.points >= 21) {
        finishGame();
    }

    scores1D.innerText = playOne.points;
    scores2D.innerText = playTwo.points;
}
function finishGame() {
    if(playOne.points <= 21 && playOne.points > playTwo.points){
        swal("Play 1 Campeão", '', 'success');
    }else if (playTwo.points <= 21 && playTwo.points > playOne.points) {
        swal("Play 2 Campeão", '', 'success');
    }else if( playOne.points > 21){
        swal("Play 2 Campeão", '', 'success');
    }else if(playTwo.points > 21 ){
        swal("Play 1 Campeão", '', 'success');
    }else{
        swal("EMPATE!");
    }
    setTimeout(resetGame, 2000)
}

function resetGame() {
    letterSelected = 0;
    playerActive = 1;

    playOne = {
        points: 0,
    }

    playTwo = {
        points: 0,
    }
    updateScore()
    showLetter()
}