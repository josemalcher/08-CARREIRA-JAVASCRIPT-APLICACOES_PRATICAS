let letterSelected = 0;
let playerActive = 1;

let playOne = {
    points: 0,
}

let platyTwo = {
    points: 0,
}

let play1D = document.getElementById("player1");
let play2D = document.getElementById("player2");

let scores1 = document.getElementById("pscores1");
let scores2 = document.getElementById("pscores2");

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