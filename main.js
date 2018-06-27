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
    var instructions;
    var gameHistory;
    var contact;
    var canvas;
    var canvasSize = {
        width: 686,
        height: 343
    }
    var coverImg;
    var header;
    var game = null;
    var cristiano = document.getElementById('cristiano');
    var backButton;
    var instructionsHeader;
    var listInstructions;
    var gameHistory;
    var contact;
    var player1Inst;
    var player1Commands;
    var player2Commands;
    var player2Inst;

    function buildSplash () {
        container = document.getElementById('game-container')
        button = document.createElement('button');
        button.setAttribute('id', 'btn-start');
        button.innerText = 'Kick Off!'
        container.appendChild(button);
        button.addEventListener('click', handleStartClick);
        instructions = document.getElementById('instructions')
        instructions.addEventListener('click', handleInstructionsClick);
        // gameHistory = document.getElementById('id','game-history');
        // gameHistory.addEventListener('click', handleHistoryClick);
        // contact = document.getElementById('id', 'contact');
        // contact.addEventListener('click', handleContactClick)
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

    function handleInstructionsClick() {
        coverImg = document.getElementById('messiCristiano');
        header = document.getElementById('title');
        button.removeEventListener('click', handleStartClick);
        instructions.removeEventListener('click', handleInstructionsClick);
        button.remove();
        coverImg.remove();
        header.remove();
        instructionsPage();
    }

    function instructionsPage() {
        // InstImg = document.backgroundImage = "url (/images)";
        backButton = document.createElement('button');
        backButton.setAttribute('id', 'back-button');
        backButton.innerText = 'Back'
        container.appendChild(backButton);
        backButton.addEventListener('click', buildSplash);
        instructionsHeader = document.createElement('h1');
        instructionsHeader.innerText = 'Instructions';
        container.appendChild(instructionsHeader);
       
        player1Inst = document.createElement('ul');
        player1Inst.setAttribute('id', 'instructions-list');
        player1Inst.innerText = 'Plaver 1:';
        instructionsHeader.appendChild(player1Inst);
        player1Commands = document.createElement('li');
        player1Commands.setAttribute('class', 'player1-instructions-list');
        player1Commands.innerText = 'Move up: W';
        player1Inst.appendChild(player1Commands);
        player1Commands = document.createElement('li');
        player1Commands.setAttribute('class', 'player1-instructions-list');
        player1Commands.innerText = 'Move down: S';
        player1Inst.appendChild(player1Commands);
        player1Commands = document.createElement('li');
        player1Commands.setAttribute('class', 'player1-instructions-list');
        player1Commands.innerText = 'Move left: A';
        player1Inst.appendChild(player1Commands);
        player1Commands = document.createElement('li');
        player1Commands.setAttribute('class', 'player1-instructions-list');
        player1Commands.innerText = 'Move right: D';
        player1Inst.appendChild(player1Commands);
       
        player2Inst = document.createElement('ul');
        player2Inst.setAttribute('id', 'instructions-list-2');
        player2Inst.innerText = 'Plaver 2:';
        player1Commands.appendChild(player2Inst);
        player2Commands = document.createElement('li');
        player2Commands.setAttribute('class', 'player2-instructions-list');
        player2Commands.innerText = 'Move up: I';
        player2Inst.appendChild(player2Commands);
        player2Commands = document.createElement('li');
        player2Commands.setAttribute('class', 'player1-instructions-list');
        player2Commands.innerText = 'Move down: K';
        player2Inst.appendChild(player2Commands);
        player2Commands = document.createElement('li');
        player2Commands.setAttribute('class', 'player1-instructions-list');
        player2Commands.innerText = 'Move left: L';
        player2Inst.appendChild(player2Commands);
        player2Commands = document.createElement('li');
        player2Commands.setAttribute('class', 'player1-instructions-list');
        player2Commands.innerText = 'Move right: J';
        player2Inst.appendChild(player2Commands);

    }

    function handleHistoryClick() {
        coverImg = document.getElementById('messiCristiano');
        header = document.getElementById('title');
        button.removeEventListener('click', handleStartClick);
        instructions.removeEventListener('click', handleInstructionsClick);
        button.remove();
        coverImg.remove();
        header.remove();
        gameHistoryPage();
    }

    function handleContactClick() {
        coverImg = document.getElementById('messiCristiano');
        header = document.getElementById('title');
        button.removeEventListener('click', handleStartClick);
        instructions.removeEventListener('click', handleInstructionsClick);
        button.remove();
        coverImg.remove();
        header.remove();
        contactPage();
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

    //   function keyDictionary() {
    //     document.onkeyup = function(e){
    //         if(e.keyCode === 87){
    //             wDown = false;
    //         }
    //         if(e.keyCode === 65){
    //             aDown = false;
    //         }
    //         if(e.keyCode === 68){
    //             dDown = false;
    //         }
    //         if(e.keyCode === 83){
    //             sDown = false;
    //         }
    //         if(e.keyCode === 38){
    //             upDown = false;
    //         }
    //         if(e.keyCode === 37){
    //             leftDown = false;
    //         }
    //         if(e.keyCode === 40){
    //             downDown = false;
    //         }
    //         if(e.keyCode === 39){
    //             rightDown = false;
    //         }
    //     }
        
    //     document.onkeydown = function(e){
    //         if(e.keyCode === 87){
    //             wDown = true;
    //         }
    //         if(e.keyCode === 65){
    //             aDown = true;
    //         }
    //         if(e.keyCode === 68){
    //             dDown = true;
    //         }
    //         if(e.keyCode === 83){
    //             sDown = true;
    //         }
    //         if(e.keyCode === 38){
    //             upDown = true;
    //         }
    //         if(e.keyCode === 37){
    //             leftDown = true;
    //         }
    //         if(e.keyCode === 40){
    //             downDown = true;
    //         }
    //         if(e.keyCode === 39){
    //             rightDown = true;
    //         }
    //     }
    //   }
    
      function playGame() {
    
        var canvasCtx = canvas.getContext('2d');
    
        game = new Game(canvasCtx, canvas, endGame);
        // var gameTime = setTimeout(function() {
        //     endGame();
        // }, 1000);
    
        window.addEventListener('keydown', handleKeyUp)
    
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