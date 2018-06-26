'use strict'

function Ball (ctx) {
    this.ctx = ctx;
    this.positionX = canvas.width / 2;
    this.positionY = canvas.height / 2;
    this.radius = 10;
    this.arcStartAngle = 0,
    this.speedX = 5;
    this.speedY = 5;
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
    self.positionY -= self.speedY;
    self.positionX += self.speedX;
}

// Ball.prototype.detectBallColission = function () {
//     var self = this;
//   if (self.y <= 10 ){
//     self.speedy *= -1;
//   }
//   else if (self.y + 10 >= canvas.height) {
//     self.speedy = -self.speedy
//   }
//   else if (self.x <= 10) {
//     self.speedx *= -1;
//   }  
//   else if (self.x + 10 >= canvas.width) {
//     self.speedx = -self.speedx;
//   }
// }
