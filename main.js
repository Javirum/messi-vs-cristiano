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

function createHtml(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.children[0];
  } 


// // Canvas //

function main () {
    var container;
    var button;
    var canvas;
    var canvasSize = {
        width: 686,
        height: 343
    }
    var coverImg;
    var header;
    var game = null;
    var cristiano = document.getElementById('cristiano');

    function buildSplash () {
        container = document.getElementById('game-container')
        button = document.createElement('button');
        button.setAttribute('id', 'btn-start');
        button.innerText = 'Kick Off!'
        container.appendChild(button);
        button.addEventListener('click', handleStartClick);
    }

    // Destroys Splash Screen 

    function handleStartClick() {
        coverImg = document.getElementById('messiCristiano');
        header = document.getElementById('title');
        button.removeEventListener('click', handleStartClick);
        button.remove();
        coverImg.remove();
        header.remove();
        buildGame();
    }

    // Game Screen

    function buildGame(){
        canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.setAttribute('width', canvasSize.width)
        canvas.setAttribute('height', canvasSize.height)
        container.appendChild(canvas);
        playGame();
    }

    // function playGame() {
    //     var canvasCTX = canvas.getContext('2d');
    //     game = new Game (canvasCTX, canvas, endGame);
    //     gameTime = setTimeout(function() {
    //         endGame();
    //     }, 1000);
    // }

    function handleKeyUp (event) {
        // var self = this;
      
        if (event.key === 'w') {
          game.player1.moveUp();
        }
        else if (event.key === 's') {
          game.player1.moveDown();
        }
        else if (event.key === 'a') {
            game.player1.moveLeft();
        }
        else if (event.key === 'd') {
            game.player1.moveRight();
        }

        if (event.key === 'i') {
            game.player2.moveUp();
          }
        else if (event.key === 'k') {
            game.player2.moveDown();
          }
        else if (event.key === 'j') {
              game.player2.moveLeft();
          }
        else if (event.key === 'l') {
              game.player2.moveRight();
          }
      }
    
      function playGame() {
    
        var canvasCtx = canvas.getContext('2d');
    
        game = new Game(canvasCtx, canvas, endGame);
        // var gameTime = setTimeout(function() {
        //     endGame();
        // }, 1000);
    
        window.addEventListener('keyup', handleKeyUp)
    
      }

    // Destroys Game

    function endGame() {
        canvas.remove();
        // game = null;
        buildGameOver();
    }

    // Builds restart screen

    function buildGameOver(){
        button = document.createElement('button');
        button.setAttribute('id', 'btn-over');
        button.innerText = 'RESTART!'
        container.appendChild(button);
        button.addEventListener('click', destroyGameOver);
    }

    function destroyGameOver() {
        button.remove();
        // gameOver.remove();
        buildGame()
    }
        
    buildSplash()
}

window.addEventListener('load', main);