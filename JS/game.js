"use strict";

function Game(ctx, canvas, callback) {
  this.ctx = ctx;
  this.size = {
    width: canvas.width,
    height: canvas.height
  };
	this.player1 = null;
	this.player2 = null;
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

Game.prototype.clearCanvas = function() {
  var self = this;
  self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
  self.ctx.fillRect();
};

Game.prototype.draw = function() {
  var self = this;
  self.player1.draw();
  self.player2.draw();
  // self.ball.draw();
};

Game.prototype.start = function() {
	var self = this;
	this.player1 = new Player(this.ctx, 150, 180, 20, 50, "left");
  this.player2 = new Player(this.ctx, 520, 180, 30, 50, "right");
  // self.player = new Player(self.canvasCTX);
  self.doFrame();
};

Game.prototype.doFrame = function() {
  var self = this;
	self.ctx.clearRect(0, 0, canvas.width, canvas.height);
  self.draw();
  // self.checkIfEnded;
  // this.update();

  window.requestAnimationFrame(function() {
    if (!self.isEnded) {
      self.doFrame();
    }
  });
};
