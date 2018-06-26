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

Game.prototype.checkIfEnded = function () {
    var self = this;

    if (self.score === 3) {
        self.isEnded = true;
        callback();
        }}

Game.prototype.clearCanvas = function() {
  var self = this;
  self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
  self.ctx.fillRect();
};

Game.prototype.draw = function() {
  var self = this;
  self.player1.draw();
  self.player2.draw();
  self.ball.draw();
};

Game.prototype.start = function() {
	var self = this;
	this.player1 = new Player(this.ctx, 150, 180, 20, 50, "left");
	this.player2 = new Player(this.ctx, 520, 180, 30, 50, "right");
	this.ball = new Ball(this.ctx, canvas.width, canvas.height);
  // self.player = new Player(self.canvasCTX);
  self.doFrame();
};

Game.prototype.doFrame = function() {
  var self = this;
	self.ctx.clearRect(0, 0, canvas.width, canvas.height);
	self.checkPlayersBounds();
	// Check Ball Bounds -> Ball vs canvas
	self.checkBallBounds();
	// self.detectBallColission();
	// Check Players Ball Collision -> Player vs ball
  self.draw();
  self.checkIfEnded();
  this.update();

  window.requestAnimationFrame(function() {
    if (!self.isEnded) {
      self.doFrame();
    }
  });
};

// Game.prototype.checkCollisions = function () {
	
// 		var p1_ball_distance = getDistance(player1.positionX, player1.positionY, ball.positionX, ball.positionY) - player1.radius - ball.radius;
// 		if (p1_ball_distance < 0) {
// 			collide (ball, player1);
// 		}
// 		var p2_ball_distance = getDistance(player2.positionX, player2.positionY, ball.positionX, ball.positionY) - player2.radius - ball.radius;
// 		if (p2_ball_distance < 0) {
// 			collide (ball, player2);
// 		}
// 	}
	
	// function collide (cir1, cir2) {
	// 	var dx = (cir1.positionX - cir2.positionX) / (cir1.radius);
	// 	var dy = (cir1.positionY - cir2.positionY) / (cir1.radius);
	// 	cir2.speed = -dx;
	// 	cir2.speed = -dy;
	// 	cir1.speed = dx;
	// 	cir1.speed = dy;
	// }

	// function getDistance(x1,y1,x2,y2){
	// 	return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
	// }
	
	Game.prototype.checkPlayersBounds = function() {
		if(this.player1.positionX + this.player1.radius > canvas.width){
			this.player1.positionX = canvas.width - this.player1.radius;
			this.player1.positionX -= 1;
		}

		if(this.player1.positionX - this.player1.radius < 0){
			this.player1.positionX = 0 + this.player1.radius;
			this.player1.positionX += 1;
		}

		if(this.player1.positionY + this.player1.radius > canvas.height){
			this.player1.positionY = canvas.height - this.player1.radius;
			this.player1.positionY -= 1;
		}

		if(this.player1.positionY - this.player1.radius < 0){
			this.player1.positionY = 0 + this.player1.radius;
			this.player1.positionY += 1;
		}

		if(this.player2.positionX + this.player2.radius > canvas.width){
			this.player2.positionX = canvas.width - this.player2.radius;
			this.player2.positionX -= 1;
		}
		if(this.player2.positionX - this.player2.radius < 0){
			this.player2.positionX = 0 + this.player2.radius;
			this.player2.positionX += 1;
		}
		if(this.player2.positionY + this.player2.radius > canvas.height){
			this.player2.positionY = canvas.height - this.player2.radius;
			this.player2.positionY -= 1;
		}
		if(this.player2.positionY - this.player2.radius < 0){
			this.player2.positionY = 0 + this.player2.radius;
			this.player2.positionY += 1;
		}
	}

	Game.prototype.checkBallBounds= function() {

	if(this.ball.positionX + this.ball.radius > canvas.width) {
		this.ball.positionX = canvas.width - this.ball.radius;
		this.ball.speedX -= 5; 
	}

	if(this.ball.positionX + this.ball.radius < 0) {
		this.ball.positionX = 0 - this.ball.radius;
		this.ball.speedX += 5;
	}

	if(this.ball.positionY + this.ball.radius > canvas.height){
		this.ball.positionY = canvas.height - this.ball.radius;
		this.ball.speedY -= 5;
	}

	if (this.ball.positionY - this.ball.radius < 0) {
		this.ball.positionY = 0 + this.player1.radius;
		this.ball.speedY += 5;
	}
	 }

	Game.prototype.update = function () {
		var self = this;
    self.ball.move();
}
	

	
	



