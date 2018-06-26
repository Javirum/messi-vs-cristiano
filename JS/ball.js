'use strict'

function Ball (ctx) {
    this.ctx = ctx;
    this.positionX = canvas.width / 2;
    this.positionY = canvas.height / 2;
    this.radius = 10;
    this.arcStartAngle = 0,
    this.speed = 30;
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
    self.position.y -= self.speed;
    self.position.x += self.speed;
}
