    'use strict'
    
    function Game (canvasCTX, canvas, callback) {
        this.canvasCTX = canvasCTX;
        this.size = {
            width: canvas.width,
            height: canvas.height
        }
        this.player = null;
        this.ball = null;
        this.score = 0;
        this.callback = callback;
        this.isEnded = false;
        this.winner = null;
        this.start();
        }

    // Game.prototype.checkIfEnded = function () {
    //     var self = this;
    
    //     if (self.score === 3) {
    //         self.isEnded = true;
    //         callback();
    //         }}

    Game.prototype.clearCanvas = function () {
        var self = this;
        self.ctx.clearRect (0, 0, self.canvas.width, self.canvas.height);
        self.ctx.fillRect ()
    }

   
    Game.prototype.draw = function () {
        var self = this;
        self.player.draw();
    }

    Game.prototype.start = function () {
        var self = this;
        self.player = new Player(self.canvasCTX); 
        self.doFrame();
    }


    Game.prototype.doFrame = function () {
        var self = this;
        // self.clearCanvas();
        self.draw();
        // self.checkIfEnded;
        // this.update();
       
        
        window.requestAnimationFrame(function() {
            if (!self.isEnded) {
            self.doFrame();
                } 
        })
    }

