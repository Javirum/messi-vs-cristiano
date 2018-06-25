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
    var coverImg;
    // var game;
    // var gameTest;
    var header;

function buildSplash () {
    container = document.getElementById('game-container')

    button = document.createElement('button');
    button.setAttribute('id', 'btn-start');
    button.innerText = 'Kick Off!'
    container.appendChild(button);

    // image = document.createElement('img');
    // image.setAttribute('id', 'messiCristiano');
    // container.appendChild(image);

    button.addEventListener('click', handleStartClick);
    };

function handleStartClick() {
    coverImg = document.getElementById('messiCristiano');
    header = document.getElementById('title');
    button.removeEventListener('click', handleStartClick);
    button.remove();
    coverImg.remove();
    header.remove();
    // image.remove();
    buildGame();
    }

function buildGame(){
    canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvas');
    container.appendChild(canvas);

    // canvas.style.backgroundImage = url('https://i.pinimg.com/564x/33/2c/23/332c23975491c635869b12c5d5953385.jpg')

    playGame();
    }

function playGame() {
    var canvasCTX = canvas.getContext('2d');
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