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
        this.start;
        }

    Game.prototype.checkIfEnded = function () {
        var self = this;
    
        if (self.score === 3) {
            self.isEnded = true;
            callback();
            }}

    Game.prototype.draw = function () {
        var self = this;
        self.player.draw();
    }

    Game.prototype.clearCanvas = function () {
        var self = this;
        self.ctx.clearReact(0, 0, self.size.width, self.size.height);
    }

    Game.prototype.start = function () {
        var self = this;
    
        self.player = new this.player(self.ctx); 
        self.doFrame();
    }

    Game.prototype.doFrame = function () {
        var self = this;
        
        this.checkIfEnded;
    
        this.clearCanvas;
    
        this.update();
        this.draw();
        
        window.requestAnimationFrame(function() {
    
            if (!this.isEnded) {
            self.doFrame();
                } 
        })
    }

