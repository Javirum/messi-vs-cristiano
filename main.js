'use strict'

var middle = document.getElementById("middle-bun");
var icon = document.getElementById("complete-icon");
var menu = document.querySelector(".menu-list");


var deleteMiddle = function() {
    middle.classList.toggle("hidden-bun");
    updateTransition();
    menuTransition();
}

icon.addEventListener('click', deleteMiddle);
    
function updateTransition() {
    var top = document.querySelector("div.top-burguer");
    var bottom = document.querySelector("div.bottom-burguer");
    top.classList.toggle("rotate-top") 
    bottom.classList.toggle("rotate-bottom");
  }

function displayMenu() {
    menu.classList.toggle("menu-hidden");
}  

icon.addEventListener('click', displayMenu);

function menuTransition() {
    menu.classList.toggle("slide-menu");
}

icon.addEventListener('click', menuTransition);




// Canvas //

function main () {
    var container;
    var button;
    var canvas;

function buildSplash () {
    container = document.getElementById('game-container');

    button = document.createElement('button');
    button.setAttribute('id', 'btn-start');
    button.innerText = 'Start Game!'
    container.appendChild(button);

    button.addEventListener('click', handleStartClick);
    };

function handleStartClick() {
    button.removeEventListener('click', handleStartClick);
    button.remove();
    buildGame();
    }

function buildGame(){
    canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvas');
    container.appendChild(canvas);
    playGame();
    }

function playGame() {
    var canvasCTX = canvas.getContext('2d')
    var game = new Game(canvasCTX, canvas, endGame);

    var gameTest = setTimeout(function() {
    endGame();
    }, 3000);
}

function endGame() {
    canvas.remove()
    game = null;
    buildGameOver();
}

function buildGameOver(){
    button = document.createElement('button');
    button.setAttribute('id', 'btn-over');
    button.innerText = 'RESTART!'
    container.appendChild(button);

    window.addEventListener('click', handleStartClick);
}
    
buildSplash()
}

window.addEventListener('load', main);