'use strict'

function Ball (ctx) {
    this.ctx = ctx;
    this.positionX = canvas.width / 2;
    this.positionY = canvas.height / 2;
    this.radius = 10;
    this.arcStartAngle = 0,
    this.speedX = 0;
    this.speedY = 0;
    this.decel = 0.1;
}

Ball.prototype.draw = function () {
    var self = this;
    // self.ctx.clearRect(0, 0, canvas.width, canvas.height);
    self.ctx.fillStyle = 'black';
    // self.ctx.fillRect (self.position.x, self.position.y, self.size.width, self.size.height);
    self.ctx.beginPath();
    self.ctx.arc(self.positionX, self.positionY, self.radius, self.arcStartAngle, 2 * Math.PI);
    self.ctx.fill();
    self.ctx.closePath();
  };

Ball.prototype.move = function() {
    var self = this;
    self.positionY += self.speedY;
    self.positionX += self.speedX;
}

// Ball bounce

// Ball.prototype.moveball = function () {
    
//     var self = this;
// 	if (self.ball.speedX !== 0) {
// 		if (self.ball.speedX > 0) {
// 			self.ball.speedX - self.ball.decel;
// 			if (self.ball.speedX < 0) self.ball.speedX = 0;
// 		} else {
// 			self.ball.speedX += self.ball.decel;
// 			if (self.ball.speedX > 0) self.ball.speedX = 0;
// 		}
// 	}
    
//     if (self.ball.speedY !== 0) {
        
//         if(self.ball.speedY > 0) {
// 			self.ball.speedY -= self.ball.decel;
// 			if (self.ball.speedY < 0) self.ball.speedY = 0;
// 		} else {
// 			self.ball.speedY += self.ball.decel;
// 			if(self.ball.speedY > 0) self.ball.speedY = 0;
// 		}
// 	}
// 	self.ball.positionX += self.ball.speedX;
// 	self.ball.positionY += self.ball.speedY;
// }


